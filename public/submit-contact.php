<?php

// Allow cross-origin requests
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
  __DIR__ . '/.env.local',
  __DIR__ . '/../.env.local',
  $_SERVER['DOCUMENT_ROOT'] . '/.env.local'
];

foreach ($searchPaths as $path) {
  if (file_exists($path)) {
    $env = parse_env_file($path);
    break;
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
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$enquiryType = $_POST['enquiryType'] ?? '';
$product = $_POST['product'] ?? '';
$location = $_POST['location'] ?? '';
$message_body = $_POST['message'] ?? '';
$captcha = $_POST['captcha'] ?? '';

// Simple validation
if (empty($name) || empty($phone) || empty($email) || empty($message_body) || empty($enquiryType)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'All required fields must be filled.']);
  exit;
}

// Phone validation (Digits only, min 10)
if (!preg_match('/^[0-9]{10,}$/', $phone)) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Invalid phone number. Please enter at least 10 digits with no special characters.']);
  exit;
}

// Email validation (Strict)
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

// Message word count limit (500 words)
$wordCount = str_word_count($message_body);
if ($wordCount > 500) {
  http_response_code(400);
  echo json_encode(['success' => false, 'message' => 'Message exceeds the 500 word limit.']);
  exit;
}

// 2. Save to MySQL Database
try {
  $dbHost = $env['DB_HOST'] ?? 'localhost';
  $dbUser = $env['DB_USER'] ?? 'uflex_quoteuser';
  $dbPass = isset($env['DB_PASSWORD_B64']) ? base64_decode($env['DB_PASSWORD_B64']) : base64_decode('V2pvaTskbUlNWzBM');
  $dbName = $env['DB_NAME'] ?? 'uflex-quote';

  $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8mb4", $dbUser, $dbPass, [
    PDO::ATTR_TIMEOUT => 5,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
  ]);

  $stmt = $pdo->prepare("INSERT INTO contact_submissions (name, email, phone, enquiryType, product, location, message) VALUES (?, ?, ?, ?, ?, ?, ?)");
  $stmt->execute([
    $name,
    $email,
    $phone,
    $enquiryType,
    $product,
    $location,
    $message_body
  ]);
} catch (PDOException $e) {
  error_log("Database Error in Contact Form: " . $e->getMessage());
}

// 3. Send Email Notification using PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

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

$submittedAt = date('Y-m-d H:i:s P');
$messageLinesHtml = nl2br(htmlspecialchars($message_body));

// Admin Email Body
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
        <h1>New Contact Enquiry</h1>
    </div>
    <div class="content">
      <div class="field"><span class="label">Name:</span><span class="value">{$name}</span></div>
      <div class="field"><span class="label">Email:</span><span class="value">{$email}</span></div>
      <div class="field"><span class="label">Phone:</span><span class="value">{$phone}</span></div>
      <div class="field"><span class="label">Enquiry Type:</span><span class="value">{$enquiryType}</span></div>
      <div class="field"><span class="label">Product:</span><span class="value">{$product}</span></div>
      <div class="field"><span class="label">Location:</span><span class="value">{$location}</span></div>
      <div class="field">
        <span class="label">Message:</span>
        <div class="value" style="margin-top: 10px; padding: 15px; background: white; border-radius: 5px;">
          {$messageLinesHtml}
        </div>
      </div>
      <div class="field"><span class="label">Submitted At:</span><span class="value">{$submittedAt}</span></div>
    </div>
    <div class="footer">
      <p>This is an automated email from UFlex Contact Form</p>
    </div>
  </div>
</body>
</html>
HTML;

$mail = new PHPMailer(true);
$mailSent = false;
$mailError = '';

try {
  $mail->isSMTP();
  $mail->Host       = $smtpHost;
  $mail->Port       = $smtpPort;
  $mail->SMTPAuth   = $smtpAuth;
  $mail->Username   = $smtpUser;
  $mail->Password   = $smtpPass;
  $mail->SMTPSecure = $smtpSecure;
  $mail->Timeout    = 20;

  $mail->SMTPOptions = array(
      'ssl' => array('verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true)
  );

  $mail->setFrom($fromEmail, 'UFlex Website');
  foreach ($toAdmins as $adminEmail) {
    if (!empty($adminEmail)) $mail->addAddress(trim($adminEmail));
  }
  $mail->addReplyTo($email, $name);

  $mail->isHTML(true);
  $mail->Subject = "New Contact Enquiry from {$name} ({$enquiryType})";
  $mail->Body = $adminBody;
  $mail->send();
  $mailSent = true;

  // User Confirmation Email
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
        Thank you for reaching out to <strong>UFlex Limited</strong>. We have successfully received your enquiry regarding <strong>{$enquiryType}</strong>. 
        <br><br>
        Our team will review your message and get back to you shortly.
      </div>
      
      <div class="details-box">
        <div class="details-title">Summary of your Enquiry</div>
        <div class="detail-row"><span class="detail-label">Type:</span><span class="detail-value">{$enquiryType}</span></div>
        <div class="detail-row"><span class="detail-label">Product:</span><span class="detail-value">{$product}</span></div>
        <div class="detail-row"><span class="detail-label">Submitted:</span><span class="detail-value">{$submittedAt}</span></div>
      </div>

      <div class="message">Feel free to visit our website to explore more about our solutions.</div>
      <div style="text-align: center;"><a href="https://www.uflexltd.com" class="cta-button">Visit Our Website</a></div>
    </div>
    <div class="footer">
      <strong>UFlex Limited</strong><br>
      A-107-110, Sector-IV, Noida-201301 (U.P.) India<br>
    </div>
  </div>
</body>
</html>
HTML;

  $mail->clearAddresses();
  $mail->clearReplyTos();
  $mail->addAddress($email, $name);
  $mail->Subject = "Acknowledgement: Your Enquiry with UFlex Limited";
  $mail->Body = $userBody;
  $mail->send();

} catch (Exception $e) {
  $mailSent = false;
  $mailError = $mail->ErrorInfo;
}

if ($mailSent) {
  echo json_encode(['success' => true, 'message' => 'Enquiry submitted successfully']);
} else {
  http_response_code(500);
  echo json_encode(['success' => false, 'message' => 'Failed to send email notification.', 'error' => $mailError]);
}
