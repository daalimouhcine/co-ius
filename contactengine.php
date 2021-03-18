<?php
$Email = Trim(stripslashes($_POST['email'])); // Collecting the users email
$EmailTo = "daalim277@gmail.com"; // Your email address to receive the message.
$Subject = "no"; // Subject of the email
$Name = Trim(stripslashes($_POST['first-name'])); // Collecting the users Name

// If statement checking whether the users email is valid
if (strpos($Email, '@') === false && strpos($Email, '.') === false) {
header("Location: https://daalimouhcine.github.io/co-ius/"); // Web address of your contact page
exit();
}

$Message = Trim(stripslashes($_POST['messages'])); // Collecting users message

// Validation
$validationOK=true;
if (!$validationOK) {
print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
exit;
}

// Prepare email body text.
// Can be concatenated but this is easier to read.
$Body = "";
$Body .= "Hello";
$Body .= "/n";
$Body .= "Thank you for contacting us. We have received your message and we aim to get back to you as soon as possible.";
$Body .= "Your enquiry: ";
$Body .= "\n";
$Body .= "Name: ";
$Body .= $first-name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $messages;
$Body .= "\n";

// Function to send the email.
// Attached to a variable so it can it can be checked in an if statement later.
$success = mail($EmailTo, $Subject, $Body, "From: <$Email>");

// If statement to check if the email was sent.
// Redirect to the url you will enter on line 47 instead of the #.
if ($success){
print "<meta http-equiv=\"refresh\" content=\"0;URL=https://daalimouhcine.github.io/co-ius/\">";
}
else{
print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}

?>