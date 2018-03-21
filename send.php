<?php
$to = $_POST['danieltn91@gmail.com'] ;    
$message = $_POST['message'] ;
$from = $_POST['email'];
$company = $_POST['organization'];
$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$headers =  "From: ".$_POST['from']."\r\n" .
"Company: ".$_POST['company']."\r\n" .
"First Name: ".$_POST['firstName']."\r\n" .
"Last Name: ".$_POST['lastName'];
mail( $to, "Mail", $message, $headers );
header( "Location: http://localhost/php/simple-mail.php" );
?>