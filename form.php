<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $service = $_POST["service"];
    $message = $_POST["message"];

    // Simple form validation
    if (empty($name) || empty($email) || empty($service) || empty($message)) {
        // Display an error message if any field is empty
        $response = [
            'status' => 'error',
            'message' => 'Please fill in all fields.',
        ];
    } else {
        $to = "your@email.com"; // Replace with your email address
        $subject = "New Inquiry from $name";
        $message = "Name: $name\nEmail: $email\nService: $service\nMessage:\n$message";

        if (mail($to, $subject, $message)) {
            // Form submitted successfully
            $response = [
                'status' => 'success',
                'message' => 'Your inquiry has been submitted successfully!',
            ];
        } else {
            // Error sending the email
            $response = [
                'status' => 'error',
                'message' => 'Oops! Something went wrong. Please try again later.',
            ];
        }
    }

    // Convert the response to JSON
    echo json_encode($response);
} else {
    // Handle invalid form submission
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid form submission.',
    ]);
}
?>
