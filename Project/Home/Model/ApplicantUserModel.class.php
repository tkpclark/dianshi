<?php
namespace Home\Model;
use Think\Model;
class ApplicantUserModel extends Model{
	
	protected $_validate=array(
			array('username','email','邮箱格式不合法'),
			array('username','','用户名已经存在！',0,'unique',1),
			array('password','/[a-zA-Z0-9_]{6,20}/','密码不合法',0,'regex'),
			array('email','email','邮箱格式不合法'),
			
	);

}