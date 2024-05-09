<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $message = $_POST['message'];
    
   
    $subject = "New Contact Form Submission";
    $body = "First Name: $first_name\n";
    $body .= "Last Name: $last_name\n";
    $body .= "Email: $email\n";
    $body .= "Telephone: $telephone\n";
    $body .= "Message:\n$message";
   
    $to = "safanmohamed345@gmail.com"; 
    

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Error: Unable to send email. Please try again later.";
    }
} else {
    // Redirect back to the contact form if accessed directly
    header("Location: contact.html");
    exit;
}
?>
