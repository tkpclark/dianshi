<?php
namespace Home\Controller;
use Think\Controller;
class AdminController extends Controller {
	public function __construct(){   
		parent::__construct();
		//C('SHOW_PAGE_TRACE','');
	}
	public function Login(){
		$this->display();
    }
	public function checklogin(){
		$data['username'] = I('param.username','');//用户名
		$data['password'] = md5(I('param.pwd',''));//密码
		$User = M('admin');
		$result = $User->where($data)->select();
		if($result){
			session('username',$data['username']); 
			$this->display('Index');
		}else{
			$this->error ( "用户名或密码错误！" );
		}
		
    }
	public function top(){
		$this->display('');
    }
	public function menu(){
		$this->display();
    }
	public function main(){
		$this->display();
    }
	public function logout(){
		session(null); 
		$this->display('Login');
    }
	public function Updatepwd(){

		$this->display();
    }
	public function UpdatepwdPro(){
		$oldpassword = I('param.oldpassword','');//
		$newpassword = I('param.newpassword','');//
		$newpasswords = I('param.newpasswords','');//
		if($newpassword==$newpasswords){
			$data['username'] = session('username');//用户名
			$data['password'] = md5($oldpassword);//密码
			$User = M('admin');
			$result = $User->where($data)->select();
			if($result){
				$where=$data['username'];
				$datas['password'] = md5($newpasswords);
				 if($User->where("username='$where'")->save($datas)){
					$this->display('main');
				 }else{
					$this->error ( "修改失败！" );
				 }
				
			}else{
				$this->error ( "老密码不正确！" );
			}
		}else{
			$this->error ( "两次密码不一致！" );
		}
		
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
		$pay = I('param.pay','');//薪资待遇
		$department = I('param.department','');//部门
		
		$w=$f=$p=$n=$py='';
		if($name!=''){
			$n=" and i.name like '%".$name."%'";
		}
		if($work_addre!=''){
			$w=" and p.work_addre like '%".$work_addre."%'";
		}
		if($position!=''){
			$p=" and p.position like '%".$position."%'";
		}
		if($pay!=''){
			$py=" and p.pay = '".$pay."'";
		}
		if($department!=''){
			$d=" and p.department like '%".$department."%'";
		}
		$result = M()->table(array('company_information'=>'i','company_position'=>'p'))->field('p.id,i.name,p.department,p.position,p.work_addre,i.field,p.pay,p.work_direction,p.description,p.requirement,p.contact,p.contact_information,p.number,p.accept_number')->where("p.company_id=i.id $w $n $p $py $d")->select();
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
		$this->assign('pay',$pay);
		$this->assign('department',$department);
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
		$expected_salary = I('param.expected_salary','');//职位名
		$Worktime = I('param.Worktime','');//工作年限
		$job_intension = I('param.job_intension','');//求职方向
		
		$s=$j=$p=$e=$t='';
		if($school!=''){
			$s=" and school like '%".$school."%'";
		}
		if($job_area!=''){
			$j=" and job_area like '%".$job_area."%'";
		}
		if($position!=''){
			$p=" and position like '%".$position."%'";
		}
		if($expected_salary!=''){
			$e=" and expected_salary = '".$expected_salary."'";
		}
		if($Worktime!=''){
			$t=" and work_time = '".$Worktime."'";
		}

		$result = $User->where("1=1 $s $j $p $e $t")->select();

		if(!empty($job_intension)){
			$job_intension_arr=explode(',',$job_intension);
			for($i=0;$i<count($result);$i++){
				$check='';
				foreach($job_intension_arr as $f){
					if(strpos($result[$i]['job_intension'],$f,0)){
						$check=1;
					}
				}
				if($check!=1){
					unset($result[$i]);
				}
			}
		}
		$this->assign('school',$school);
		$this->assign('job_area',$job_area);
		$this->assign('position',$position);
		$this->assign('expected_salary',$expected_salary);
		$this->assign('Worktime',$Worktime);
		$this->assign('job_intension',$job_intension);
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