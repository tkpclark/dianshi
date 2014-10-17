<?php
namespace Home\Controller;
use Think\Controller;
use Home\Model\ApplicantUserModel;
class ApplicantUserController extends Controller {
    public function Index(){

		//echo '个人中心登陆成功';
		$this->display('newapplyinfo');
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
				$url = '你好, <b>朋友</b>! <br/>这是一封来自<a href="http://'.$_SERVER['HTTP_HOST'].'/dianshi/index.php/a/'.$id.'/1" target="_blank">xxx网</a>的激活邮件！<br/>';
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
	public function Information(){
		$upload = new \Think\Upload();  
		$upload->maxSize   =     3145728 ;// 设置附件上传大小   
		$upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型    
		$upload->savePath  =      './'; // 设置附件上传目录    // 上传单个文件 
		$upload->subName   =      'Photo';   
		$info   =$upload->uploadOne($_FILES['fileToUpload']);
		if(!$info) {  
			 $this->error($upload->getError());     // 上传错误提示错误信息    
		}else{       
			$photo = $info['savename'];   // 上传成功 获取上传文件信息 
			$User = D('ApplicantUser');
			$data['name'] = I('param.name','');//姓名
			$data['sex'] = I('param.sex','');//性别
			$data['email'] = I('param.email','');//邮箱
			$data['phone'] = I('param.phone','');//手机
			$data['address'] = I('param.address','');//地址
			$data['photo'] = $photo;//头像
			$data['work_ unit'] = I('param.work_ unit','');//目前工作单位
			$data['department'] = I('param.department','');//部门
			$data['position'] = I('param.position','');//职位
			$data['work_time'] = I('param.work_time','');//工作时间
			$data['rank'] = I('param.rank','');//职位级别
			$datas=$User->create($data);
			if (!$datas=$User->create($data)){
				exit($User->getError());
			}else{ 
				print_r($User->create($datas));exit;
				if($User->where("id=$_SESSION[id]")->save($datas)){
					echo '添加成功';
				}else{
					echo '添加失败';
				}
			}
		}
		//if(isset($_SESSION['username']) && $_SESSION['username']!=null){
		//}else{
		//	echo '请登录';
		//}
	}
	
}