<?php
namespace Home\Controller;
use Think\Controller;
use Home\Model\ApplicantUserModel;
class IndexController extends Controller {
    public function Index(){

		//$this->assign('user','zhangsan');
		$this->display();
    }
	/*
	*
	*发送邮件
	*
	*/
	public function SendMail(){
		$id = I('param.id','');
		$url = '你好, <b>朋友</b>! <br/>这是一封来自<a href="http://'.$_SERVER['HTTP_HOST'].'/thinkphp/index.php/a/'.$id.'" target="_blank">xxx网</a>的激活邮件！<br/>';
		SendMail("$data[username]","邮件标题","$url");
	}
	/*
	*
	*激活
	*
	*/
	public function Activation(){
		$id = I('param.Id','');
		$data['activation']=1;
		$User = M('ApplicantUser');
		if($User->where("id=$id")->save($data)){
			echo "成功";
		}else{
			echo "失败";
		}
	}
	/*
	*
	*登陆
	*
	*/
	public function Login(){
		$User = M('ApplicantUser');
		$condition['username']=I('param.username1','');
		$condition['password']=md5(I('param.password',''));
		$condition['activation']=1;
		$condition['_logic']='and';
		if($result = $User->where($condition)->select()){
			session('username',$condition['username']);
			session('password',$condition['password']);
		}else{
			echo '用户不存在或密码不正确';
		}
	
	}
	
}