<?php

// Allow cross-origin requests for testing (optional, usually not needed if on same domain)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

function parse_env_file($path)
{
  if (!file_exists($path)) {
    return [];
  }
  $variables = [];
  $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  foreach ($lines as $line) {
    if (strpos(trim($line), '#') === 0)
      continue;
    if (strpos($line, '=') !== false) {
      list($name, $value) = explode('=', $line, 2);
      $name = trim($name);
      $value = trim($value);
      if (!empty($name)) {
        $variables[$name] = $value;
      }
    }
  }
  return $variables;
}

// Load configurations securely
$env = [];
$searchPaths = [
  __DIR__ . '/.env.local',           // Same directory
  __DIR__ . '/../.env.local',        // Parent directory (standard Next.js)
  $_SERVER['DOCUMENT_ROOT'] . '/.env.local' // Web root
];

foreach ($searchPaths as $path) {
  if (file_exists($path)) {
    $env = parse_env_file($path);
    break; // Stop at first found file
  }
}

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

$emailParts = explode('@', $email);
$allowedCharsPattern = '/^[a-zA-Z0-9._-]+$/';

if (count($emailParts) !== 2) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => "Email must contain exactly one '@' symbol."]);
  exit;
}

list($localPart, $domainPart) = $emailParts;

// Check for duplicate domain extensions
$domainSegments = explode('.', $domainPart);
$hasDuplicateExtension = false;
for ($i = 0; $i < count($domainSegments) - 1; $i++) {
  if ($domainSegments[$i] === $domainSegments[$i + 1]) {
    $hasDuplicateExtension = true;
    break;
  }
}

if (!preg_match($allowedCharsPattern, $localPart) || !preg_match($allowedCharsPattern, $domainPart) || strpos($domainPart, '.') === false || $hasDuplicateExtension) {
  http_response_code(400);
  $err_msg = $hasDuplicateExtension ? 'Duplicate domain extensions detected (e.g. .com.com).' : 'Invalid email format. Only letters, numbers, dots (.), underscores (_), and hyphens (-) are allowed.';
  echo json_encode(['success' => false, 'message' => $err_msg]);
  exit;
}

// Phone validation (digits only, min 10)
if (!preg_match('/^[0-9]{10,}$/', $phone)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Invalid phone number. Please enter at least 10 digits with no special characters.']);
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

    // Check extension
    $ext = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    $allowedExtensions = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'];
    if (!in_array($ext, $allowedExtensions)) {
      $uploadErrors[] = "File {$fileName} has an invalid extension. Only PDF, Word, and Images (JPG, PNG) are accepted.";
      continue;
    }

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

// 2.5 Save to MySQL Database
try {
  $dbHost = $env['DB_HOST'] ?? 'localhost';
  $dbUser = $env['DB_USER'] ?? 'uflex_quoteuser';
  $dbPass = isset($env['DB_PASSWORD_B64']) ? base64_decode($env['DB_PASSWORD_B64']) : base64_decode('V2pvaTskbUlNWzBM');
  $dbName = $env['DB_NAME'] ?? 'uflex-quote';

  // Added a 5-second connection timeout for PDO
  $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8mb4", $dbUser, $dbPass, [
    PDO::ATTR_TIMEOUT => 5,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
  ]);

  $productJson = !empty($product) ? json_encode($product) : null;
  $attachmentsJson = !empty($uploadedFiles) ? json_encode($uploadedFiles) : null;

  $stmt = $pdo->prepare("INSERT INTO quotes (name, phone, companyName, enquiryFor, product, email, message, attachments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
  $stmt->execute([
    $name,
    $phone,
    $companyName,
    $enquiryFor,
    $productJson,
    $email,
    $message_body,
    $attachmentsJson
  ]);
} catch (PDOException $e) {
  // Log error but continue with email sending
  error_log("Database Error in PHP: " . $e->getMessage());
}

// 3. Send Email Notification using PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// Target email (Strictly loaded from .env.local)
$smtpHost   = $env['SMTP_HOST']; 
$smtpUser   = $env['SMTP_USER']; 
$smtpPass   = $env['SMTP_PASSWORD']; 
$smtpPort   = (int) $env['SMTP_PORT']; 
$smtpAuth   = filter_var($env['SMTP_AUTH'], FILTER_VALIDATE_BOOLEAN);
$smtpSecure = $env['SMTP_SECURE'] === 'SMTPS' ? PHPMailer::ENCRYPTION_SMTPS : 
             ($env['SMTP_SECURE'] === 'STARTTLS' ? PHPMailer::ENCRYPTION_STARTTLS : '');

$toAdmins = explode(',', $env['SMTP_TO']);
$toAdmins = array_map('trim', $toAdmins);

$fromEmail = $env['SMTP_FROM'];

$productList = empty($product) ? 'None selected' : implode(', ', $product);
$attachmentsList = empty($uploadedFiles) ? 'No attachments' : implode("\n", $uploadedFiles);

$submittedAt = date('Y-m-d H:i:s P');

// Format Products and Attachments for HTML
$productListHtml = '';
if (!empty($product)) {
  foreach ($product as $item) {
    $productListHtml .= '<li style="margin:2px 0;">' . htmlspecialchars($item) . '</li>';
  }
}

$attachmentsListHtml = '';
if (!empty($uploadedFiles)) {
  foreach ($uploadedFiles as $index => $url) {
    $num = $index + 1;
    $attachmentsListHtml .= '<li style="margin:4px 0;"><a href="' . htmlspecialchars($url) . '" style="color:#117ABA;" target="_blank">Attachment ' . $num . '</a></li>';
  }
}

$messageLinesHtml = nl2br(htmlspecialchars($message_body));

// Admin Email Body (HTML)
$adminBody = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #117ABA; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
    .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #117ABA; display: inline-block; width: 150px; }
    .value { color: #333; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
        <h1>New Quote Request</h1>
    </div>
    <div class="content">
      <div class="field"><span class="label">Name:</span><span class="value">{$name}</span></div>
      <div class="field"><span class="label">Phone:</span><span class="value">{$phone}</span></div>
      <div class="field"><span class="label">Company Name:</span><span class="value">{$companyName}</span></div>
      <div class="field"><span class="label">Enquiry For:</span><span class="value">{$enquiryFor}</span></div>
HTML;

if (!empty($productListHtml)) {
  $adminBody .= <<<HTML
      <div class="field">
        <span class="label">Product(s):</span>
        <ul style="margin:4px 0 0 0;padding-left:18px;color:#333;">{$productListHtml}</ul>
      </div>
HTML;
}

$adminBody .= <<<HTML
      <div class="field"><span class="label">Email:</span><span class="value">{$email}</span></div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="value" style="margin-top: 10px; padding: 15px; background: white; border-radius: 5px;">
          {$messageLinesHtml}
        </div>
      </div>
      <div class="field"><span class="label">Submitted At:</span><span class="value">{$submittedAt}</span></div>
HTML;

if (!empty($attachmentsListHtml)) {
  $adminBody .= <<<HTML
      <div class="field">
        <span class="label">Attachments:</span>
        <ul style="margin:4px 0 0 0;padding-left:18px;color:#333;">
          {$attachmentsListHtml}
        </ul>
      </div>
HTML;
}

$adminBody .= <<<HTML
    </div>
    <div class="footer">
      <p>This is an automated email from UFlex Quote Form</p>
    </div>
  </div>
</body>
</html>
HTML;

$mail = new PHPMailer(true);
$mailSent = false;
$mailError = '';

try {
  // Server settings (Driven entirely by .env.local)
  $mail->isSMTP();
  $mail->Host       = $smtpHost;
  $mail->Port       = $smtpPort;
  $mail->SMTPAuth   = $smtpAuth;
  $mail->Username   = $smtpUser;
  $mail->Password   = $smtpPass;
  $mail->SMTPSecure = $smtpSecure;
  $mail->Timeout    = 20;

  // cPanel Fix: Bypass SSL certificate validation if mail.domain.com doesn't match the cert
  $mail->SMTPOptions = array(
      'ssl' => array(
          'verify_peer' => false,
          'verify_peer_name' => false,
          'allow_self_signed' => true
      )
  );

  // Recipients
  $mail->setFrom($fromEmail, 'UFlex Website');
  foreach ($toAdmins as $adminEmail) {
    if (!empty($adminEmail)) {
        $mail->addAddress(trim($adminEmail));
    }
  }
  $mail->addReplyTo($email, $name);

  // Content
  $mail->isHTML(true);
  $mail->Subject = "New Quote Enquiry from {$name} ({$companyName})";
  $mail->Body = $adminBody;
  $mail->AltBody = "New Quote from {$name}:\n\n{$message_body}";

  $mail->send();
  $mailSent = true;

  // Attempt HTML confirmation to user
  $userBody = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #117ABA 0%, #0F6AA0 100%); color: white; padding: 40px 20px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px; }
    .content { padding: 40px; background-color: #ffffff; }
    .greeting { font-size: 18px; font-weight: 600; color: #117ABA; margin-bottom: 20px; }
    .message { color: #555; margin-bottom: 30px; font-size: 15px; }
    .details-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-bottom: 30px; }
    .details-title { font-weight: 700; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
    .detail-row { display: flex; margin-bottom: 10px; font-size: 14px; }
    .detail-label { font-weight: 600; color: #117ABA; width: 120px; flex-shrink: 0; }
    .detail-value { color: #334155; }
    .footer { background-color: #f1f5f9; padding: 25px; text-align: center; color: #64748b; font-size: 13px; border-top: 1px solid #e2e8f0; }
    .cta-button { display: inline-block; padding: 12px 25px; background-color: #117ABA; color: white !important; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 10px; transition: background 0.3s; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Enquiry Received!</h1>
    </div>
    <div class="content">
      <div class="greeting">Hi {$name},</div>
      <div class="message">
        Thank you for reaching out to <strong>UFlex Limited</strong>. We have successfully received your quote request for <strong>{$enquiryFor}</strong>. 
        <br><br>
        Our team is currently reviewing your requirements and will get back to you with a detailed proposal within 24-48 business hours.
      </div>
      
      <div class="details-box">
        <div class="details-title">Summary of your Enquiry</div>
        <div class="detail-row">
          <span class="detail-label">Division:</span>
          <span class="detail-value">{$enquiryFor}</span>
        </div>
HTML;

  if (!empty($productList)) {
    $userBody .= <<<HTML
        <div class="detail-row">
          <span class="detail-label">Product(s):</span>
          <span class="detail-value">{$productList}</span>
        </div>
HTML;
  }

  $userBody .= <<<HTML
        <div class="detail-row">
          <span class="detail-label">Company:</span>
          <span class="detail-value">{$companyName}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Submitted:</span>
          <span class="detail-value">{$submittedAt}</span>
        </div>
      </div>

      <div class="message">
        In the meantime, feel free to visit our website to explore more about our products and solutions.
      </div>
      
      <div style="text-align: center;">
        <a href="https://www.uflexltd.com" class="cta-button text-white">Visit Our Website</a>
      </div>
    </div>
    <div class="footer">
      <strong>UFlex Limited</strong><br>
      A-107-110, Sector-IV, Noida-201301 (U.P.) India<br>
      <p style="margin-top: 10px; font-style: italic;">This is an automated confirmation. Please do not reply directly to this email.</p>
    </div>
  </div>
</body>
</html>
HTML;

  $mail->clearAddresses();
  $mail->clearReplyTos();
  $mail->addAddress($email, $name);
  $mail->Subject = "Confirmation: Your Quote Request for {$enquiryFor}";
  $mail->Body = $userBody;
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
