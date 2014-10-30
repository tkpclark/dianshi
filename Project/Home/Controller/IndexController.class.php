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
		$url = '你好, <b>朋友</b>! <br/>这是一封来自<a href="http://'.$_SERVER['HTTP_HOST'].'/dianshi/index.php/a/'.$id.'" target="_blank">xxx网</a>的激活邮件！<br/>';
		SendMail("$data[username]","邮件标题","$url");
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
				echo "成功";
			}else{
				echo "失败";
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