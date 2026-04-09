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

echo "<h2>Starting SMTP Test...</h2>";

$mail = new PHPMailer(true);

try {
    // Enable verbose debug output
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; 
    $mail->Debugoutput = 'html'; // Display the conversation nicely in the browser

    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'mail.uflexltd.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'enquiry@uflexltd.com';
    $mail->Password   = 'Grp@$24En!2%9';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->Timeout    = 20;

    // Bypass SSL certificate validation (for cPanel hosts)
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // Recipients
    $mail->setFrom('enquiry@uflexltd.com', 'Test Sender');
    $mail->addAddress('shashibjha271299@gmail.com'); 

    // Content
    $mail->isHTML(false);
    $mail->Subject = 'SMTP Diagnostic Test';
    $mail->Body    = 'If you read this, authentication is working.';

    echo "<h3>Attempting to connect to mail.uflexltd.com on Port 587...</h3>";
    echo "<pre style='background: #f4f4f4; padding: 10px; border: 1px solid #ccc;'>";
    
    $mail->send();
    
    echo "</pre>";
    echo "<h2 style='color:green;'>SUCCESS: Email has been sent!</h2>";

} catch (Exception $e) {
    echo "</pre>";
    echo "<h2 style='color:red;'>FAILED: Message could not be sent.</h2>";
    echo "<p><strong>PHPMailer Error:</strong> {$mail->ErrorInfo}</p>";
}
?>
