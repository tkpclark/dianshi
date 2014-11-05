<?php
namespace Home\Controller;
use Think\Controller;
class AdminController extends Controller {
	public function __construct(){   
		parent::__construct();
		C('SHOW_PAGE_TRACE','');
	}  
    public function Index(){

		//$this->assign('user','zhangsan');
		$this->display();
    }
	/*
	*公司职位列表
	*/
	public function ComList(){
		$this->display();
    }
	public function ComListPro(){
		$name = I('param.name','');//公司名
		$work_addre = I('param.work_addre','');//职位工作地
		$field = I('param.field','');//公司领域
		$position = I('param.position','');//职位名
		$w=$f=$p=$n='';
		if($name!=''){
			$n=" and i.name like '%".$name."%'";
		}
		if($work_addre!=''){
			$w=" and p.work_addre like '%".$work_addre."%'";
		}
		if($position!=''){
			$p=" and p.position like '%".$position."%'";
		}
		$result = M()->table(array('company_information'=>'i','company_position'=>'p'))->field('p.id,i.name,p.department,p.position,p.work_addre,i.field,p.pay,p.work_direction,p.description,p.requirement,p.contact,p.contact_information,p.number,p.accept_number')->where("p.company_id=i.id $w $n $p")->select();
		if(!empty($field)){
			$field_arr=explode(',',$field);
			for($i=0;$i<count($result);$i++){
				$check='';
				foreach($field_arr as $f){
					if(strpos($result[$i]['field'],$f,0)){
						$check=1;
					}
				}
				if($check!=1){
					unset($result[$i]);
				}
			}
		}
		$this->assign('name',$name);
		$this->assign('work_addre',$work_addre);
		$this->assign('position',$position);
		$this->assign('result',$result);
		$this->assign('field',$field);
		$this->display('ComList');
    }
	/*
	*中间按钮
	*/
	public function Middle(){

		//$this->assign('user','zhangsan');
		$this->display();
    }
	/*
	*个人简历列表
	*/
	public function UserList(){
		$this->display();
    }
	public function UserListPro(){
		$User = M('ApplicantUser');
		
		$school = I('param.school','');//学校
		$job_area = I('param.job_area','');//工作地偏好
		$position = I('param.position','');//职位名
		$s=$j=$p='';
		if($school!=''){
			$s=" and school like '%".$school."%'";
		}
		if($job_area!=''){
			$w=" and job_area like '%".$job_area."%'";
		}
		if($position!=''){
			$p=" and position like '%".$position."%'";
		}


		$result = $User->where("1=1 $s $w $p")->select();
		$this->assign('school',$school);
		$this->assign('job_area',$job_area);
		$this->assign('position',$position);
		$this->assign('result',$result);
		$this->display('UserList');
    }
	/*
	*分配简历
	*/
	public function Distribution(){
		$Delivery = M('delivery');
		$com = I('param.com','');//职位id
		$user = I('param.user','');//用户id
		$com_arr = explode(',',substr($com,0,strrpos($com,',',0)));
		$user_arr = explode(',',substr($user,0,strrpos($user,',',0)));



		$Delivery->startTrans();
		foreach($com_arr as $c){
			foreach($user_arr as $u){
				$data['user_id']=1;
				$data['position_id']=2;
				$ids[] = $Delivery->add($data);
			}
		}
		foreach ($ids as $id){
			if($id==''){
				$Delivery->rollback(); 
				exit('分配失败！');
			}
		}
		$Delivery->commit(); 
		exit('OK');
    }

	
}