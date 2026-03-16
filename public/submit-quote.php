<?php

// Allow cross-origin requests for testing (optional, usually not needed if on same domain)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

// Basic validation
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// 1. Process Text Fields
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$companyName = $_POST['companyName'] ?? '';
$enquiryFor = $_POST['enquiryFor'] ?? '';
$product = isset($_POST['product']) ? explode(',', $_POST['product']) : [];
$email = $_POST['email'] ?? '';
$message_body = $_POST['message'] ?? '';
$captcha = $_POST['captcha'] ?? '';

// Simple validation
if (empty($name) || empty($phone) || empty($email) || empty($message_body) || empty($enquiryFor)) {
    http_response_code(400);    
    echo json_encode(['success' => false, 'message' => 'All required fields must be filled.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);    
    echo json_encode(['success' => false, 'message' => 'Invalid email format.']);
    exit;
}

// 2. Process File Uploads (if any)
$uploadDir = __DIR__ . '/uploads/quotes/';
$uploadedFiles = [];
$uploadErrors = [];

// Create directory if it doesn't exist
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

if (!empty($_FILES['files']['name'][0])) {
    $fileCount = count($_FILES['files']['name']);
    
    // Limits
    if ($fileCount > 5) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Maximum 5 files allowed.']);
        exit;
    }
    
    for ($i = 0; $i < $fileCount; $i++) {
        $fileName = $_FILES['files']['name'][$i];
        $fileSize = $_FILES['files']['size'][$i];
        $fileTmp = $_FILES['files']['tmp_name'][$i];
        $fileError = $_FILES['files']['error'][$i];
        
        // Check size (10MB max)
        if ($fileSize > 10 * 1024 * 1024) {
            $uploadErrors[] = "File {$fileName} exceeds 10MB limit.";
            continue;
        }
        
        // Generate unique name
        $ext = pathinfo($fileName, PATHINFO_EXTENSION);
        $base = preg_replace('/[^a-zA-Z0-9]/', '_', pathinfo($fileName, PATHINFO_FILENAME));
        $uniqueName = substr($base, 0, 20) . '_' . time() . '_' . bin2hex(random_bytes(3)) . '.' . $ext;
        $destPath = $uploadDir . $uniqueName;
        
        if (move_uploaded_file($fileTmp, $destPath)) {
            // Save relative URL for email reference
            $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
            $domain = $_SERVER['HTTP_HOST'];
            $fileUrl = "{$protocol}://{$domain}/uploads/quotes/{$uniqueName}";
            $uploadedFiles[] = $fileUrl;
        } else {
            $uploadErrors[] = "Failed to upload {$fileName}. Error code: {$fileError}";
        }
    }
}

// If all files failed (and files were provided)
if (!empty($_FILES['files']['name'][0]) && empty($uploadedFiles) && !empty($uploadErrors)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'File upload failed.', 'errors' => $uploadErrors]);
    exit;
}

// 3. Send Email Notification
// Target email (change this to the client's actual receiving email)
$to = 'sales@uflexltd.com'; // REPLACE THIS LATER WITH ENV OR CLIENT EMAIL
$subject = "New Quote Enquiry from {$name} ({$companyName})";

$productList = empty($product) ? 'None selected' : implode(', ', $product);
$attachmentsList = empty($uploadedFiles) ? 'No attachments' : implode("\n", $uploadedFiles);

// Plain text email body
$emailBody = "New Quote Request Details:\n\n";
$emailBody .= "Name: {$name}\n";
$emailBody .= "Phone: {$phone}\n";
$emailBody .= "Email: {$email}\n";
$emailBody .= "Company: {$companyName}\n";
$emailBody .= "Enquiry For: {$enquiryFor}\n";
$emailBody .= "Products: {$productList}\n\n";
$emailBody .= "Message:\n{$message_body}\n\n";
$emailBody .= "Attachments:\n{$attachmentsList}\n\n";
$emailBody .= "Submitted via cPanel PHP form handler.";

$headers = "From: noreply@{$_SERVER['HTTP_HOST']}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$mailSent = mail($to, $subject, $emailBody, $headers);

// Attempt confirmation to user as well
if ($mailSent) {
    $userSubject = "Thank you for your enquiry - UFLEX";
    $userBody = "Dear {$name},\n\nThank you for reaching out to us. We have received your enquiry regarding {$enquiryFor} and will get back to you shortly.\n\nBest Regards,\nUFLEX Team";
    mail($email, $userSubject, $userBody, $headers);
}

// 4. Return response
if ($mailSent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Quote submitted successfully',
        'warnings' => $uploadErrors // Include any partial upload errors
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email notification via PHP mail(). Please check server configuration.']);
}
