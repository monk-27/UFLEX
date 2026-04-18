<?php
/**
 * SMTP diagnostic tool.
 * Gated behind SMTP_DIAG_TOKEN env variable.
 * Only runs when ?token=<SMTP_DIAG_TOKEN> matches.
 */

function parse_env_file($path)
{
  if (!file_exists($path)) {
    return [];
  }
  $variables = [];
  $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  foreach ($lines as $line) {
    if (strpos(trim($line), '#') === 0) continue;
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

$env = [];
$searchPaths = [
  __DIR__ . '/.env.local',
  __DIR__ . '/../.env.local',
  $_SERVER['DOCUMENT_ROOT'] . '/.env.local',
];
foreach ($searchPaths as $path) {
  if (file_exists($path)) {
    $env = parse_env_file($path);
    break;
  }
}

// Access gate: require a secret token from .env.local
$providedToken = $_GET['token'] ?? '';
$expectedToken = $env['SMTP_DIAG_TOKEN'] ?? '';

if (empty($expectedToken) || !hash_equals($expectedToken, $providedToken)) {
  http_response_code(404);
  echo "Not Found";
  exit;
}

// Required env vars
foreach (['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_FROM'] as $key) {
  if (empty($env[$key])) {
    http_response_code(500);
    echo "Missing required env variable: $key";
    exit;
  }
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "<h2>SMTP Diagnostic</h2>";

$smtpSecure = '';
if (isset($env['SMTP_SECURE'])) {
  $smtpSecure = $env['SMTP_SECURE'] === 'SMTPS'
    ? PHPMailer::ENCRYPTION_SMTPS
    : ($env['SMTP_SECURE'] === 'STARTTLS' ? PHPMailer::ENCRYPTION_STARTTLS : '');
}

$recipient = $env['SMTP_DIAG_RECIPIENT'] ?? $env['SMTP_FROM'];

$mail = new PHPMailer(true);
try {
  $mail->SMTPDebug = SMTP::DEBUG_SERVER;
  $mail->Debugoutput = 'html';
  $mail->isSMTP();
  $mail->Host       = $env['SMTP_HOST'];
  $mail->SMTPAuth   = true;
  $mail->Username   = $env['SMTP_USER'];
  $mail->Password   = $env['SMTP_PASSWORD'];
  $mail->SMTPSecure = $smtpSecure;
  $mail->Port       = (int) $env['SMTP_PORT'];
  $mail->Timeout    = 10;

  $mail->SMTPOptions = [
    'ssl' => ['verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true],
  ];

  $mail->setFrom($env['SMTP_FROM'], 'UFlex Diagnostic');
  $mail->addAddress($recipient);
  $mail->Subject = 'SMTP Diagnostic Test';
  $mail->Body    = 'SMTP configuration works.';

  echo "<pre style='background:#eee;padding:10px;font-size:11px;'>";
  $mail->send();
  echo "</pre>";
  echo "<h4 style='color:green;'>RESULT: Success — mail sent to {$recipient}</h4>";
} catch (Exception $e) {
  echo "</pre>";
  echo "<h4 style='color:red;'>RESULT: Failed ({$mail->ErrorInfo})</h4>";
}
