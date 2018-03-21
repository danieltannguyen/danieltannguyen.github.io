<?php
	if(!isset($_POST['submit'])){
		echo "error: you need to submit a form!";
	}

	$to = "danieltn91@gmail.com";    
	$message = $_POST['message'] ;
	$visitor_email = $_POST['email'];
	$company = $_POST['organization'];
	$firstName = $_POST['firstname'];
	$lastName = $_POST['lastname'];
	$email_subject = "New form submision";

	$email_body = "You recieved a message from a user $firstName $lastName. \n" .
					"Email address: $visitor_email\n" .
					"Here is the message: "\n . $message;
	
	$headers = "From: $to \r\n";

	$thankyou_page = "thankyou.html";
	//validate 
	if(empty($firstName)|| empty($lastName) || empty($visitor_email)){
		echo "Must have name and email!";
		exit;
	}
	//send email
	mail($to, $email_subject, $email_body);
	header( "Location: $thankyou_page" );

?>