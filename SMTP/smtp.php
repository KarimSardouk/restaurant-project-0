<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = $_POST["to"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Email settings
    $smtpHost = "your_smtp_host"; // e.g., smtp.example.com
    $smtpPort = 587; // Use the appropriate port for your SMTP server
    $smtpUsername = "your_username";
    $smtpPassword = "your_password";
    
    // Set up the email headers
    $headers = "From: your_email@example.com\r\n";
    $headers .= "Reply-To: your_email@example.com\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
}
?>
