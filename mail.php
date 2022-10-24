<?php
$to = '<mr.foxyred@ya.ru>';


$from = 'newleed@di-soft.uz';
$subject = 'Заявка с сайта di-soft.uz';

$name = preg_replace("/[^a-zA-ZА-Яа-я0-9\s]/ui", '', strip_tags($_POST['name']));
$phone = preg_replace("/[^a-zA-Z@.-_0-9\s]/ui", '', strip_tags($_POST['phone']));
$message = strip_tags($_POST['message']);
 

$message = '
<b>Имя:</b> '.$name.'<br/>
<b>Контакт:</b> '.$phone.'
<br/><br/>
<b>Сообщение:</b><br/>'.$message.'
';

$headers  = "From: " . strip_tags($from) . "\r\n";
$headers .= "Reply-To: " . strip_tags($from) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

if(!empty($name) and !empty($phone))
{
    if(mail($to, $subject, $message, $headers))
    {
        echo 'success';
        return True;
    }
} 

echo 'error';
return False;

?>