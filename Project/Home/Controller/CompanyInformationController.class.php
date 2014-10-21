<?php
namespace Home\Controller;
use Think\Controller;
use Home\Model\CompanyInformationModel;
class CompanyInformationController extends Controller {
    public function Index(){
		if(isset($_SESSION['username']) && $_SESSION['username']!=null){
			$User = M('companyInformation');
			$map['id']=array('eq',$_SESSION['id']);
			$result = $User->where($map)->select();
			$res=$result[0];
			//职位

			$this->assign('result',$res);
			$this->display('companyinfo');
		}else{
			echo '请登录';
		}
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
	public function Information(){
		$upload = new \Think\Upload();  
		$upload->maxSize   =     3145728 ;// 设置附件上传大小   
		$upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型    
		$upload->savePath  =      './'; // 设置附件上传目录    // 上传单个文件 
		$upload->subName   =      'Photo';   
		$info   =$upload->uploadOne($_FILES['fileToUpload']);
		$photo = I('param.photo','');
		if(!$info && empty($photo)) {  
			 $this->error($upload->getError());     // 上传错误提示错误信息    
		}else{       
			$photo = $info['savename'];   // 上传成功 获取上传文件信息 
			$User = D('companyInformation');
			$data['name'] = I('param.CompanyName','');//公司名
			$data['address'] = I('param.Offic','');//办公地址
			$data['website'] = I('param.URL','');//网址
			$data['field'] = I('param.Feild','');//领域
			$data['scale_people'] = I('param.PersonNum','');//公司规模人数
			$data['scale_bankroll'] = I('param.Asset','');//公司规模资金
			$data['introduction'] = I('param.CompanyIntro','');//公司介绍
			$data['advantage'] = I('param.CompanyAdvan','');//公司优势
			$data['evaluation'] = I('param.CompanyEval','');//公司评价
			if(!empty($photo)){
				$data['photo'] = $photo;//头像
			}
			if (!$datas=$User->create($data)){
				exit($User->getError());
			}else{ 
				if($User->where("id=$_SESSION[id]")->save($datas)){
					echo 'OK';
				}else{
					echo '添加失败';
				}
			}
		}exit;

		
	}
	/*
	*
	*职位列表
	*
	*/
	public function JobList(){
		$User = M('CompanyPosition');
		$map['company_id']=array('eq',$_SESSION['id']);
		$result = $User->where($map)->select();

		$this->assign('result',$result);
		$this->display('job_list');
	}
	/*
	*
	*展示/编辑职位
	*
	*/
	public function DistributionJob(){
		$data['id'] = I('param.id','');//职位id
		$res='';
		if(!empty($data['id'])){
			$User = M('CompanyPosition');
			$map['id']=array('eq',$data['id']);
			$result = $User->where($map)->select();
			$res=$result[0];
		}
		$this->assign('result',$res);
		$this->display('companyinfo_startRec');
	}
	/*
	*
	*添加职位
	*
	*/
	public function DistributionJobPro(){
		$User = D('CompanyPosition');
		$id = I('param.ID','');$id=1;
		$data['company_id'] = $_SESSION['id'];
		$data['department'] = I('param.Department','');//部门
		$data['position'] = I('param.Job','');//职位名
		$data['pay'] = I('param.Pay','');//薪酬
		$data['work_addre'] = I('param.WorkPlace','');//工作地址
		$data['work_direction'] = I('param.JobDirec','');//工作方向
		$data['description'] = I('param.JobDetail','');//职位具体描述
		$data['requirement'] = I('param.JobRequire','');//工作要求
		$data['contact'] = I('param.Contacts','');//联系人
		$data['contact_information'] = I('param.ContactWay','');//联系方式
		$data['number'] = I('param.RecNum','');//招聘人数
		$data['accept_number'] = I('param.ReceiveNum','');//接收简历数量
		if (!$datas=$User->create($data)){
			exit($User->getError());
		}else{ 
			if(!empty($id)){
				$res = $User->where("id=$id")->save($datas);
			}else{
				$res = $User->add();
			}
			
			if($res){
				exit('OK');
			}else{
				exit('Error');
			}
		}
	}
	
}