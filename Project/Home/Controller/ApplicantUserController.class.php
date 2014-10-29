<?php
namespace Home\Controller;
use Think\Controller;
use Home\Model\ApplicantUserModel;
class ApplicantUserController extends Controller {
    public function Index(){
		$User = M('ApplicantUser');
		$map['id']=array('eq',$_SESSION['id']);
		$result = $User->where($map)->select();
		$res=$result[0];
		$area = explode('|--|',$res['job_area']);
		
		//教育背景
		$User = M('ApplicantEducation');
		$where['user_id']=array('eq',$_SESSION['id']);
		$Education = $User->where($where)->select();
		for($i=0;$i<count($Education);$i++){
			$Education[$i]['school_awards']=explode('|--|',$Education[$i]['school_awards']);
			$Education[$i]['school_experiences']=explode('|--|',$Education[$i]['school_experiences']);
		}
		//工作经历
		$User = M('ApplicantWorkExperience');
		$where['user_id']=array('eq',$_SESSION['id']);
		$Work = $User->where($where)->select();
		for($i=0;$i<count($Work);$i++){
			$Work[$i]['working_content']=explode('|--|',$Work[$i]['working_content']);
		}
		//其他经历能力
		$User = M('ApplicantOtherExperiences');
		$where['user_id']=array('eq',$_SESSION['id']);
		$Other = $User->where($where)->select();
		for($i=0;$i<count($Other);$i++){
			$Other[$i]['experiences']=explode('|--|',$Other[$i]['experiences']);
			$Other[$i]['ability']=explode('|--|',$Other[$i]['ability']);
		}
		$this->assign('Other',$Other[0]);
		$this->assign('Work',$Work);
		$this->assign('Education',$Education);
		$this->assign('area',$area);
		$this->assign('result',$res);
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
		$photo = I('param.photo','');
		if(!$info && empty($photo)) {  
			 $this->error($upload->getError());     // 上传错误提示错误信息    
		}else{       
			$photo = $info['savename'];   // 上传成功 获取上传文件信息 
			$User = D('ApplicantUser');
			$data['name'] = I('param.name','');//姓名
			$data['sex'] = I('param.gender','');//性别
			$data['email'] = I('param.email','');//邮箱
			$data['phone'] = I('param.mobile','');//手机
			$data['school'] = I('param.school','');//最高院校
			$data['address'] = I('param.address','');//地址
			if(!empty($photo)){
				$data['photo'] = $photo;//头像
			}
			
			$data['work_unit'] = I('param.company','');//目前工作单位
			$data['department'] = I('param.depart','');//部门
			$data['position'] = I('param.job','');//职位
			$data['work_time'] = I('param.wt','');//工作时间
			$data['rank'] = I('param.jg','');//职位级别
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
	*求职意向
	*
	*/
	public function JobIntension(){
		$User = D('ApplicantUser');
		$data['job_status'] = I('param.jt','');//目前求职状态
		$data['expected_salary'] = I('param.wp','');//期望年薪
		$data['work_environment'] = I('param.je','');//工作环境

		$touzi = I('param.touzi','');//求职方向 投资银行业务
		$yiji = I('param.yiji','');//求职方向 一级市场投资分析
		$erji_jg = I('param.erji_jg','');//求职方向 二级市场研究、交易、投资 按机构
		$erji_zc = I('param.erji_zc','');//求职方向 二级市场研究、交易、投资 按资产
		$quanshang = I('param.quanshang','');//券商销售
		
		$data['job_intension'] = $touzi.'+||+'.$yiji.'+||+'.$erji_jg.'|++|'.$erji_zc.'+||+'.$quanshang;//求职方向
		$a1 = I('param.a1','');//工作地偏好
		$a2 = I('param.a2','');//工作地偏好
		$a3 = I('param.a3','');//工作地偏好
		$data['job_area'] =$a1.'|--|'.$a2.'|--|'.$a3;
		if (!$datas=$User->create($data)){
			exit($User->getError());
		}else{ 
			if($User->where("id=$_SESSION[id]")->save($datas)){
				exit('OK');
			}else{ 
				exit('求职意向保存失败，请重新填写！');
			}
		}
	
	}
	
	/*
	*
	*教育背景
	*
	*/
	public function EducationBG(){
		$User = D('ApplicantEducation');
		$User->where("user_id=$_SESSION[id]")->delete();
		$data['school'] = I('param.school','');//学    校
		$data['departme'] = I('param.college','');//院    系
		$data['education'] = I('param.academic','');//学    历
		$data['school_time'] = I('param.sduring','');//在校时间
		$data['school_awards'] = I('param.Sat','');//所获学校奖励
		$data['school_experiences'] = I('param.otherExp','');//其他在校经历
		$num = count($data['school']);
		if($num<1 || empty($data['school'][0])){
			exit('OK');
		}
		$User->startTrans();
		for($i=0;$i<$num;$i++){
			$datas[$i]['user_id']=$_SESSION['id'];
			$datas[$i]['school']=$data['school'][$i];
			$datas[$i]['departme']=$data['departme'][$i];
			$datas[$i]['education']=$data['education'][$i];
			$datas[$i]['school_time']=$data['school_time'][$i];
			$datas[$i]['school_awards']=implode('|--|',$data['school_awards'][$i]);
			$datas[$i]['school_experiences']=implode('|--|',$data['school_experiences'][$i]);

			if (!$User->create($datas[$i])){
				exit($User->getError());
			}else{
				$ids[$i] = $User->add();
			}	
		}
		
		foreach ($ids as $id){
			if($id==''){
				$User->rollback(); 
				exit('求职意向保存失败，请重新填写！');
			}
		}
		$User->commit(); 
		exit('OK');
	}
	
	/*
	*
	*工作经历
	*
	*/
	public function WorkHistory(){
		$User = D('ApplicantWorkExperience');
		$User->where("user_id=$_SESSION[id]")->delete();
		$data['company_name'] = I('param.cn','');//公司名称
		$data['department_position'] = I('param.dn','');//部门职位
		$data['pay'] = I('param.np','');//薪酬
		$data['work_time'] = I('param.wt','');//工作时间
		$data['working_content'] = I('param.wd','');//工作内容
		$num = count($data['company_name']);
		if($num<1 || empty($data['company_name'][0])){
			exit('OK');
		}
		$User->startTrans();
		for($i=0;$i<$num;$i++){
			$datas[$i]['user_id']=$_SESSION['id'];
			$datas[$i]['company_name']=$data['company_name'][$i];
			$datas[$i]['department_position']=$data['department_position'][$i];
			$datas[$i]['pay']=$data['pay'][$i];
			$datas[$i]['work_time']=$data['work_time'][$i];
			$datas[$i]['working_content']=implode('|--|',$data['working_content'][$i]);
			if (!$User->create($datas[$i])){
				exit($User->getError());
			}else{
				$ids[$i] = $User->add();
			}	
		}
		
		foreach($ids as $id){
			if($id==''){
				$User->rollback(); 
				exit('求职意向保存失败，请重新填写！');
			}
		}
		$User->commit(); 
		exit('OK');
	
	}
	/*
	*
	*其他经历与经验
	*
	*/
	public function Other(){
		$User = D('ApplicantOtherExperiences');
		$User->where("user_id=$_SESSION[id]")->delete();
		$data['user_id']=$_SESSION['id'];
		$data['experiences'] = I('param.owd','');//其他经历
		$data['experiences'] = substr($data['experiences'],0,strrpos($data['experiences'],'|--|'));
		$data['ability'] = I('param.oa','');//其他能力
		$data['ability'] = substr($data['ability'],0,strrpos($data['ability'],'|--|'));
		if (!$datas=$User->create($data)){
			exit($User->getError());
		}else{ 
			if($id = $User->add()){
				echo 'OK';
			}else{
				echo '添加失败';
			}
		}
	
	}
	/*
	*
	*预览简历
	*
	*/
	public function Preview(){
		$User = M('ApplicantUser');
		$map['id'] = I('param.id','');
		if($map['id']==''){
			$map['id']=array('eq',$_SESSION['id']);
		}
		
		$result = $User->where($map)->select();
		$res=$result[0];
		$area = explode('|--|',$res['job_area']);

		//教育背景
		$User = M('ApplicantEducation');
		$where['user_id']=array('eq',$map['id']);
		$Education = $User->where($where)->select();
		for($i=0;$i<count($Education);$i++){
			$Education[$i]['school_awards']=explode('|--|',$Education[$i]['school_awards']);
			$Education[$i]['school_experiences']=explode('|--|',$Education[$i]['school_experiences']);
		}
		//工作经历
		$User = M('ApplicantWorkExperience');
		$where['user_id']=array('eq',$map['id']);
		$Work = $User->where($where)->select();
		for($i=0;$i<count($Work);$i++){
			$Work[$i]['working_content']=explode('|--|',$Work[$i]['working_content']);
		}
		//其他经历能力
		$User = M('ApplicantOtherExperiences');
		$where['user_id']=array('eq',$map['id']);
		$Other = $User->where($where)->select();
		for($i=0;$i<count($Other);$i++){
			$Other[$i]['experiences']=explode('|--|',$Other[$i]['experiences']);
			$Other[$i]['ability']=explode('|--|',$Other[$i]['ability']);
		}
		$this->assign('Other',$Other[0]);
		$this->assign('Work',$Work);
		$this->assign('Education',$Education);
		$this->assign('area',$area);
		$this->assign('result',$res);
		$this->display('preview_cv');
	}
	/*
	*
	*受邀请列表
	*
	*/
	public function Invite(){
		$Position = M('CompanyPosition');
		$delivery = M('delivery');
		$Com = M('companyInformation');
		$data['user_id'] = $_SESSION['id'];
		$data['invite_flag'] = 1;
		$type = I('param.type','');//请求类型1全部接收到简历 2未处理简历 3 历史简历
		if($type==2){
			$data['accept_flag'] = 0;
		}else if($type==3){
			$data['accept_flag'] = array('neq',0);
		}
		if($position = $delivery->where($data)->field('id,position_id,accept_flag')->select()){
			foreach($position as $p){
				$positions[]=$p['position_id'];
			}

			$pos_str=implode(',',$positions);
			$map['id']=array('in',$pos_str);
			if($delis = $Position->where($map)->select()){
				for($i=0;$i<count($delis);$i++){
					$arr['id']=$delis[$i]['company_id'];
					$com_name=$Com->where($arr)->getField('name');
					$delis[$i]['company_name']=$com_name;

					foreach($position as $po){
						if($po['position_id']==$delis[$i]['id']){
							$delis[$i]['delivery_id']=$po['id'];
							$delis[$i]['accept_flag']=$po['accept_flag'];
						}
					}

				}

			
			}
		}
		$this->assign('delis',$delis);
		$this->display('invite_list');
	}
	/*
	*
	*接受/拒绝邀请
	*
	*/
	public function OperateInvite(){
		$delivery = M('delivery');
		$id = I('param.id','');
		$data['accept_flag'] = I('param.accept_flag','');
		if($delivery->where("id=$id")->save($data)){
			exit('OK');
		}else{ 
			exit('Error');
		}
		
	}
	
	
	
	
}