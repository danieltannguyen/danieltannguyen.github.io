<?php
	if(!isset($_REQUEST['submit'])){
		echo "error: you need to submit a form!";
	}

	$to = "danieltn91@gmail.com";    
	$message = $_REQUEST['message'] ;
	$visitor_email = $_REQUEST['email'];
	$company = $_REQUEST['organization'];
	$firstName = $_REQUEST['firstname'];
	$lastName = $_REQUEST['lastname'];
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