<?php
	if(!isset($_GET['submit'])){
		echo "error: you need to submit a form!";
	}

	$to = "danieltn91@gmail.com";    
	$message = $_GET['message'] ;
	$visitor_email = $_GET['email'];
	$company = $_GET['organization'];
	$firstName = $_GET['firstname'];
	$lastName = $_GET['lastname'];
	$email_subject = "New form submision";

	$email_body = "You recieved a message from a user $firstName $lastName. \n",
					"Email address: $visitor_email\n",
					"Here is the message:\n $message",
	
	$headers = "From: $to \r\n";

	//validate 
	if(empty($firstName)|| empty($lastName) || empty($visitor_email)){
		echo "Must have name and email!";
		exit;
	}
	//send email
	mail($to, $email_subject, $email_body,$headers);

?>