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

// 3. Send Email Notification using PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// Target email (change this to the client's actual receiving email)
$smtpHost  = 'smtp.gmail.com'; 
$smtpUser  = 'exquisiteshashi@gmail.com'; 
$smtpPass  = 'nitj wvvl zezz oyvt'; 
$smtpPort  = 587; 
$smtpSecure = PHPMailer::ENCRYPTION_STARTTLS;

$toAdmin   = 'shashibjha271299@gmail.com'; 
$fromEmail = 'exquisiteshashi@gmail.com'; 

$productList = empty($product) ? 'None selected' : implode(', ', $product);
$attachmentsList = empty($uploadedFiles) ? 'No attachments' : implode("\n", $uploadedFiles);

// Admin Email Body
$adminBody = "New Quote Request Details:\n\n";
$adminBody .= "Name: {$name}\n";
$adminBody .= "Phone: {$phone}\n";
$adminBody .= "Email: {$email}\n";
$adminBody .= "Company: {$companyName}\n";
$adminBody .= "Enquiry For: {$enquiryFor}\n";
$adminBody .= "Products: {$productList}\n\n";
$adminBody .= "Message:\n{$message_body}\n\n";
$adminBody .= "Attachments:\n{$attachmentsList}\n\n";
$adminBody .= "Submitted via cPanel PHP form handler.";

$mail = new PHPMailer(true);
$mailSent = false;
$mailError = '';

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port       = $smtpPort;

    // Recipients
    $mail->setFrom($fromEmail, 'UFlex Website');
    $mail->addAddress($toAdmin);
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(false);
    $mail->Subject = "New Quote Enquiry from {$name} ({$companyName})";
    $mail->Body    = $adminBody;

    $mail->send();
    $mailSent = true;
    
    // Attempt confirmation to user
    $mail->clearAddresses();
    $mail->clearReplyTos();
    $mail->addAddress($email, $name);
    $mail->Subject = "Thank you for your enquiry - UFLEX";
    $mail->Body    = "Dear {$name},\n\nThank you for reaching out to us. We have received your enquiry regarding {$enquiryFor} and will get back to you shortly.\n\nBest Regards,\nUFLEX Team";
    $mail->send();

} catch (Exception $e) {
    $mailSent = false;
    $mailError = $mail->ErrorInfo;
}

// 4. Return response
if ($mailSent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Quote submitted successfully',
        'warnings' => $uploadErrors
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send email notification via PHPMailer. Please check SMTP configuration.',
        'error' => $mailError
    ]);
}
