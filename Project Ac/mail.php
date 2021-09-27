<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$phone= $_POST['phone'];
$date= $_POST['date'];
$date= $_POST['time'];
$service= $_POST['service'];
$address= $_POST['address'];

$to = "deepakpc79@mail.com";

$subject = "Mail From codeconia";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message
    "\r\n  Phone = " . $phone .  "\r\n  Date = " . $date .  "\r\n  Time = " . $time
    "\r\n  Service = " . $service .  "\r\n  Address = " . $address;
$headers = "From: noreply@codeconia.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>