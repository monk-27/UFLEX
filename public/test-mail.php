<?php
// Display errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

echo "<h2>Starting Advanced SMTP Diagnostic...</h2>";

$configs = [
    ['host' => 'mail.uflexltd.com', 'port' => 587, 'secure' => PHPMailer::ENCRYPTION_STARTTLS, 'label' => 'Standard Port 587 (TLS)'],
    ['host' => 'mail.uflexltd.com', 'port' => 465, 'secure' => PHPMailer::ENCRYPTION_SMTPS, 'label' => 'Secure Port 465 (SSL)'],
    ['host' => 'localhost', 'port' => 587, 'secure' => PHPMailer::ENCRYPTION_STARTTLS, 'label' => 'Localhost Port 587'],
    ['host' => 'localhost', 'port' => 25, 'secure' => '', 'label' => 'Localhost Port 25 (No Auth/SSL)']
];

foreach ($configs as $cfg) {
    echo "<h3>Testing Connection: {$cfg['label']} ({$cfg['host']}:{$cfg['port']})</h3>";
    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = SMTP::DEBUG_SERVER; 
        $mail->Debugoutput = 'html'; 
        $mail->isSMTP();
        $mail->Host       = $cfg['host'];
        $mail->SMTPAuth   = ($cfg['port'] != 25); // Try without auth on port 25
        $mail->Username   = 'enquiry@uflexltd.com';
        $mail->Password   = 'Grp@$24En!2%9';
        $mail->SMTPSecure = $cfg['secure'];
        $mail->Port       = $cfg['port'];
        $mail->Timeout    = 10;

        $mail->SMTPOptions = array(
            'ssl' => array('verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true)
        );

        $mail->setFrom('enquiry@uflexltd.com', 'Diagnostic');
        $mail->addAddress('shashibjha271299@gmail.com'); 
        $mail->Subject = 'Diagnostic Test';
        $mail->Body    = 'Success on ' . $cfg['label'];

        echo "<pre style='background: #eee; padding: 10px; font-size: 11px;'>";
        $mail->send();
        echo "</pre>";
        echo "<h4 style='color:green;'>RESULT: Success!</h4><hr>";
        break; // Stop if we find one that works!
    } catch (Exception $e) {
        echo "</pre>";
        echo "<h4 style='color:red;'>RESULT: Failed ({$mail->ErrorInfo})</h4><hr>";
    }
}
?>
