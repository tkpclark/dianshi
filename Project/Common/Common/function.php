<?php

//发送邮件
function SendMail($address,$title,$message){
	vendor('phpmailer.class#phpmailer');
    $mail=new PHPMailer();
    $mail->IsSMTP();
	$mail->IsHTML(true);
    $mail->CharSet='UTF-8';
    // 添加收件人地址，可以多次使用来添加多个收件人
    $mail->AddAddress($address);
    // 设置邮件正文
    $mail->Body=$message;
    // 设置邮件头的From字段。
    $mail->From=C('MAIL_ADDRESS');
    // 设置发件人名字
    $mail->FromName=C('FROM_NAME');
    // 设置邮件标题
    $mail->Subject=$title;
    // 设置SMTP服务器。
    $mail->Host=C('MAIL_SMTP');
    // 设置为"需要验证"
    $mail->SMTPAuth=true;
    // 设置用户名和密码。
    $mail->Username=C('MAIL_LOGINNAME');
    $mail->Password=C('MAIL_PASSWORD');
    // 发送邮件。
    return($mail->Send());

}



?>