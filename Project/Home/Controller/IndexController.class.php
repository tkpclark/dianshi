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
	public function SendMails(){
		header("Content-type:text/html;charset=utf-8");
		$username = I('param.username','');
		$id = I('param.id','');
		$type = I('param.type','');
		if($type==1){
			$url = '你好, <b>朋友</b>! <br/>这是一封来自<a href="http://'.$_SERVER['HTTP_HOST'].'/dianshi/index.php/a/'.$id.'/1" target="_blank">xxx网</a>的激活邮件！<br/>';
		}elseif($type==2){
			$url = '你好, <b>朋友</b>! <br/>这是一封来自<a href="http://'.$_SERVER['HTTP_HOST'].'/dianshi/index.php/c/'.$id.'/2" target="_blank">xxx网</a>的激活邮件！<br/>';
		}
		if(SendMail("$username","邮件标题","$url")){
			echo '注册成功,请到邮箱激活';	
		}else{
			echo '邮件发送失败，请<a href="http://'.$_SERVER['HTTP_HOST'].'/dianshi/index.php/Home/Index/SendMails/username/'.$data['username'].'/id/'.$id.'/type/'.$type.'" target="_blank">点击</a>重新获取邮件';
		
		}
	}
	/*
	*
	*激活
	*
	*/
	public function Activation(){
		$id = I('param.Id','');
		$type = I('param.type','');
		$data['activation']=1;
		if($type==1){
			$User = M('ApplicantUser');
		}elseif($type==2){
			$User = M('CompanyInformation');
		}

		if($type==1 || $type==2){
			if($User->where("id=$id")->save($data)){
				$this->success('激活成功,请登陆', '/dianshi/index.php/Home/Index/Index');

			}else{
				echo "激活失败或账号已激活";
			}
		}else{
			echo '参数不正确';
		}
		
	}
	/*
	*
	*登陆
	*
	*/
	public function Login(){
		$type = I('param.type','');
		$condition['username']=I('param.username','');
		$condition['password']=md5(I('param.password',''));
		$condition['activation']=1;
		$condition['_logic']='and';

		if($type==1){
			$User = M('ApplicantUser');
		}elseif($type==2){
			$User = M('CompanyInformation');
		}
		if($result = $User->where($condition)->select()){
			session('username',$condition['username']);
			session('password',$condition['password']);
			session('id',$result[0]['id']);
			if($type==1){
				$this->redirect('ApplicantUser/Index'); 
			}elseif($type==2){
				$this->redirect('CompanyInformation/Index'); 
			}else{
				echo '参数不正确';
			}
		}else{
			echo '用户不存在或密码不正确';
		}
	
	}
	/*
	*
	*注销
	*
	*/
	public function Logout(){
		session(null);
		$this->display('index');

	
	}
	
}