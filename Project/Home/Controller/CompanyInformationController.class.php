<?php
namespace Home\Controller;
use Think\Controller;
use Home\Model\CompanyInformationModel;
class CompanyInformationController extends Controller {
    public function Index(){

		echo '企业登陆成功';
    }
	/*
	*
	*注册
	*
	*/
	public function Registration(){
		$User = D('CompanyInformation');
		$data['username'] = I('param.username','');
		$data['password'] = I('param.password','','md5');
		$data['verification_email'] = I('param.username','');
		if (!$User->create($data)){
			exit($User->getError());
		}else{
			if($id = $User->add()){
				echo '注册成功,请到邮件激活';
				//$_SERVER[HTTP_HOST]/index.php/a/31
				$url = '你好, <b>朋友</b>! <br/>这是一封来自<a href="http://'.$_SERVER['HTTP_HOST'].'/dianshi/index.php/c/'.$id.'/2" target="_blank">xxx网</a>的激活邮件！<br/>';
				SendMail("$data[username]","邮件标题","$url");
			}else{
				$this->error('失败');
			}
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