<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

echo "<p>Thank you for your feedback, $name! <br>";
echo "Email: $email <br>";
echo "Message: $message</p>";
?>
