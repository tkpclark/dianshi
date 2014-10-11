<?php
namespace Home\Controller;
use Think\Controller;
use Home\Model\ApplicantUserModel;
class IndexController extends Controller {
    public function Index(){
         $model = M('mtrs_cp');
		// print_r($model->select());
		$this->assign('user','zhangsan');
		$this->display();
    }
	/*
	*
	*注册
	*
	*/
	public function Registration(){
		$User = D('ApplicantUser');
		$data['username'] = I('param.username','');
		$data['password'] = I('param.password','','md5');
		$data['verification_email'] = I('param.username','');
		if (!$User->create($data)){
			exit($User->getError());
		}else{
			if($id = $User->add()){
				echo '注册成功,请到邮件激活';
				//$_SERVER[HTTP_HOST]/index.php/a/31
				$url = '你好, <b>朋友</b>! <br/>这是一封来自<a href="http://'.$_SERVER['HTTP_HOST'].'/thinkphp/index.php/a/'.$id.'" target="_blank">xxx网</a>的激活邮件！<br/>';
				SendMail("$data[username]","邮件标题","$url");
			}else{
				$this->error('失败');
			}
		}
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
	/*
	*
	*添加基本信息
	*
	*/
	public function Applicant_Information(){
		if(isset($_SESSION['username']) && $_SESSION['username']!=null){
			$User = D('ApplicantUser');
			$data['username'] = I('param.username','');
			$data['password'] = I('param.password','','md5');
			$data['verification_email'] = I('param.username','');

		}else{
			echo '请登录';
		}
		ECHO 1;
	}
	
}