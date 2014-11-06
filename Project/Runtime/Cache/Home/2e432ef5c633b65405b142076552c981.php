<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>企业信息 | 点石成金</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />




<!--[if lt IE 7]>
<script>var file_root = '/';</script>
<script type="text/javascript" src="/js/unitpngfix.js"></script>
<![endif]--><!--<script>
    	//数组最后一个为样式中默认的　#indexpage
    	var homeimgbg=['/img/hbg2.jpg','/img/hbg3.jpg','/img/hbg1.jpg'];
    </script>-->


</head>
<body id="index">
<div class="wrap">
  <div class="header_wrap">
    <div class="head">
      <div class="logo_area">
        <h1 class="logo"><a href="#" class="txt">金点</a></h1>
      </div>
      <div class="menu_area">
        <ul class="menu_list">
          <li class=" "><!--添加类名 current 显示隐藏子菜单--> 
            <a href="#" class="menu_item">点石成金</a>
            <div class="sub_menu">
              <ul class="sub_menu_list">
                <li><a href="#">点石成金</a></li>
              </ul>
            </div>
          </li>
          <li> <a href="#" class="menu_item">点石成金</a>
            <div class="sub_menu">
              <ul class="sub_menu_list">
                <li><a href="#">点石成金</a></li>
                <li><a href="#">点石成金</a></li>
              </ul>
            </div>
          </li>
          <li> <a href="#" class="menu_item">点石成金</a>
            <div class="sub_menu">
              <ul class="sub_menu_list">
                <li><a href="#">点石成金</a></li>
                <li><a href="#">点石成金</a></li>
              </ul>
            </div>
          </li>
          <li> <a href="#" class="menu_item">点石成金</a>
            <div class="sub_menu">
              <ul class="sub_menu_list">
                <li><a href="#">Next Idea</a></li>
              </ul>
            </div>
          </li>
		  <?php if(!empty($_SESSION['id'])): ?><li> <a href="/dscj/index.php/Home/Index/Logout" class="menu_item">注销</a></li><?php endif; ?>
        </ul>
		
      </div>
    </div>
  </div>
<link rel="stylesheet" type="text/css" href="/dscj/Public/css/core.css" />
<link rel="stylesheet" type="text/css" href="/dscj/Public/css/style.css" />
<link rel="stylesheet" type="text/css" href="/dscj/Public/css/cv.css" />
<link rel="stylesheet" type="text/css" href="/dscj/Public/css/worklist.css" />
<link rel="stylesheet" type="text/css" href="/dscj/Public/css/preview_cv_table.css" />
<script type="text/javascript" src="/dscj/Public/js/jquery-1.8.2.js"></script>
<script type="text/javascript" src="/dscj/Public/js/jquery.drag.js"></script>
<script type="text/javascript" src="/dscj/Public/js/fn.js"></script>
<script type="text/javascript" src="/dscj/Public/js/all.js"></script>
<script type="text/javascript" src="/dscj/Public/js/worklist.js"></script>
<SCRIPT>
$(document).ready(function(){

$(".pre_cv_read").click(function(){ 
//$(".icon_width_mdf_list").addClass("pre_btn_selected");
	var id_value=$(this).attr('_attr');
	var evt=$(this);
	$.ajax({
		  cache:"False",
		   type:"post",
		  url:"/dscj/index.php/Home/CompanyInformation/PegRead/",
		   data:{ 
			   id:id_value,
			   },
		   success : function(msg) {
			   if (msg == "OK") {
					$(evt).hide(); 
					$(evt).next().show();   
				}else if (msg == "Error") {
					alert("标记失败！");
				}
					
			}

	})

});
$(".pre_cv_send").click(function(){ 
//$(".icon_width_mdf_list").addClass("pre_btn_selected");
	var id_value=$(this).attr('_attr');
	var evt=$(this);
	$.ajax({
		  cache:"False",
		   type:"post",
		  url:"/dscj/index.php/Home/CompanyInformation/PegSend/",
		   data:{ 
			   id:id_value,
			   },
		   success : function(msg) {
			   if (msg == "OK") {
					$(evt).hide(); 
					$(evt).next().show();   
				}else if (msg == "Error") {
					alert("标记失败！");
				}
					
			}

	})

});

});
</SCRIPT>

  <!-- list列表-->
  <div class="rew_down rew_down_mdf">
    <ul class="rew_conl rew_conl_mdf" id="contentHighSet">
      <!--NewJJob start-->
      <table border="0" cellspacing="0" cellpadding="0" class="paragraph_title paragraph_title_mdf">
        <tr>
          <td><span class="Bpispan_l" ></span>职位列表<a name="SRI"/><span class="Bpispan_r" ></span></td>
        </tr>
      </table>
      <div class="cv_table" style=" width:100%;">
        
        <TABLE BORDER="0" CELLSPACING="0" CELLPADDING="10" ALIGN="CENTER" WIDTH="750" CLASS="left" style="border:0 none;">
          <TR>
            <TD VALIGN="TOP" BGCOLOR="#FFFFFF">

			 <?php if(empty($pos_res)): ?><table width="95%" border="0" cellspacing="0" cellpadding="0">
                 <tr>
                  <td>暂未发布职位列表</td>
                 </tr>
              </table>
			 <?php else: ?> 
			 <?php if(is_array($pos_res)): $i = 0; $__LIST__ = $pos_res;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$pos): $mod = ($i % 2 );++$i;?><table class="main_table" width="95%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="E1E1E1">
                <tr bgcolor="#F6F6F6">
                  <td width="145" height="28" align="right">部门： </td>
                  <td class="color17" colspan="1"><?php echo ($pos["department"]); ?></td>
                  <td width="145" height="28" align="right">职位： </td>
                  <td class="color17" colspan="1"><?php echo ($pos["position"]); ?></td>
                </tr>
                <tr bgcolor="#F6F6F6">
                  <td width="145" height="28" align="right">工作地点： </td>
                  <td class="color17" colspan="1"><?php echo ($pos["work_addre"]); ?></td>
                  <td width="145" height="28" align="right">工作方向： </td>
                  <td class="color17" colspan="1"><?php echo ($pos["work_direction"]); ?></td>
                </tr>
                <tr bgcolor="#F6F6F6">
                  <td width="145" height="28" align="right">预计招聘人数： </td>
                  <td class="color17" colspan="1"><?php echo ($pos["number"]); ?>人</td>
                  <td width="145" height="28" align="right">接受简历数量： </td>
                  <td class="color17" colspan="1"><?php echo ($pos["accept_number"]); ?>份</td>
                </tr>
                <tr bgcolor="#F6F6F6">
                  <td width="145" height="28" align="right">已接收简历数量： </td>
                  <td class="color17" colspan="1"><?php echo ($pos["accept_num"]); ?>份</td>
                  <td width="145" height="28" align="right">已浏览简历数量：</td>
                  <td class="color17" colspan="1"><?php echo ($pos["see_num"]); ?>份 </td>
                </tr>
                <tr bgcolor="#F6F6F6">
                  <td width="145" height="28" align="right">发送面试邀请人数:</td>
                  <td class="color17" colspan="1"><?php echo ($pos["invite_num"]); ?>人</td>
                  <td width="145" height="28" align="right">确认参加面试人数：</td>
                  <td class="color17" colspan="1"><?php echo ($pos["confirm_num"]); ?>人</td>
                </tr>
                <tr><!--保存按钮-->
                  <td colspan="2"  bgcolor="#F6F6F6"><div class="icon_width_mdf_list"> &nbsp;&nbsp;&nbsp;&nbsp; <a class="pre_cv">浏览简历</a> </div></td>
                  <td colspan="2" bgcolor="#F6F6F6"><div class="icon_width_mdf_list icon_width_mdf_detail"> &nbsp;&nbsp;&nbsp;&nbsp; <a href="/dscj/Project/Home/View/ApplicantUser/worklist.html" target="_blank">查看职位详情</a> </div></td>
                </tr>
              </table>
              <table width="95%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>&nbsp;</td>
                </tr>
              </table>
              <div  class="hind_table" style="height:180px;  overflow-y:scroll; display:none;">
                <table class="main_table " width="95%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="E1E1E1">
                  <?php if(empty($pos["user"])): ?><table width="95%" border="0" cellspacing="0" cellpadding="0">
					<tr bgcolor="#F6F6F6">
                    <td width="145" height="10" colspan="5">还没有收到简历</td>
                  </tr>
				 <?php else: ?> 
				 <?php if(is_array($pos["user"])): $i = 0; $__LIST__ = $pos["user"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$user): $mod = ($i % 2 );++$i;?><tr bgcolor="#F6F6F6">
                    <td rowspan="4" align="center"><a href="http://seekersso.chinahr.com/photos/GetImg.aspx?UserId=21401995" target="_blank"><img src="/rec2014/images/cv_img.jpg" alt="" width="90" border="0"></a></td>
                    <td width="145" height="28" align="right">姓名： </td>
                    <td class="color17" colspan="3"><?php echo ($user["name"]); ?></td>
                  </tr>
                  <tr bgcolor="#F6F6F6">
                    <td width="145" height="28" align="right">毕业院校： </td>
                    <td class="color17" colspan="3"><?php echo ($user["school"]); ?></td>
                  </tr>
                  <tr bgcolor="#F6F6F6">
                    <td width="145" height="28" align="right">目前工作： </td>
                    <td class="color17" colspan="3"><?php echo ($user["position"]); ?></td>
                  </tr>
                  <tr bgcolor="#F6F6F6">
                    <td width="145" height="28" align="right">工作时间： </td>
                    <td class="color17" colspan="1" >
					<?php switch($user["work_time"]): case "1": ?>1年以下<?php break;?>
					  <?php case "2": ?>1～3年<?php break;?>
					  <?php case "3": ?>3～5年<?php break;?>
					  <?php case "4": ?>5～8年<?php break;?>
					  <?php case "5": ?>10～15年<?php break;?>
					  <?php case "6": ?>15～20年<?php break;?>
					  <?php case "7": ?>20年以上<?php break;?>
					  <?php default: endswitch;?>
					</td>
                    <td width="145" height="28" align="right">职级： </td>
                    <td class="color17" colspan="1" ><?php echo ($user["rank"]); ?></td>
                  </tr>
                  <tr><!--保存按钮-->
                    <td colspan="2"  bgcolor="#F6F6F6"><div class="inner_list"> &nbsp;&nbsp;&nbsp;&nbsp; <a href="/dscj/index.php/ApplicantUser/Preview/id/<?php echo ($user["id"]); ?>" target="_blank" class="pre_cv">浏览简历</a> </div></td>
                    <td colspan="2"  bgcolor="#F6F6F6">
						<?php if($user["read_flag"] == 1): ?><div class="inner_list pre_cv_read" style="display:none;"> &nbsp;&nbsp;&nbsp;&nbsp; <a class="pre_cv">标记为已读</a> </div>
							<div class="inner_list_read"> &nbsp;&nbsp;&nbsp;&nbsp; <a class="pre_cv">已读</a> </div>
						<?php else: ?>
							<div class="inner_list pre_cv_read" _attr=<?php echo ($user["acc_id"]); ?>> &nbsp;&nbsp;&nbsp;&nbsp; <a class="pre_cv">标记为已读</a> </div>
							<div class="inner_list_read" style="display:none;"> &nbsp;&nbsp;&nbsp;&nbsp; <a class="pre_cv">已读</a> </div><?php endif; ?>
						
					</td>
                    <td colspan="2" bgcolor="#F6F6F6">
						<?php if($user["invite_flag"] == 1): ?><div class="inner_list pre_cv_send" style="display:none;"> &nbsp;&nbsp;&nbsp;&nbsp; <a>发送面试邀请</a> </div>
						<div  class="inner_list_send"> &nbsp;&nbsp;&nbsp;&nbsp; <a class="pre_cv">已发送</a> </div>
						<?php else: ?>
						<div class="inner_list pre_cv_send" _attr=<?php echo ($user["acc_id"]); ?>> &nbsp;&nbsp;&nbsp;&nbsp; <a>发送面试邀请</a> </div>
						<div style="display:none;" class="inner_list_send"> &nbsp;&nbsp;&nbsp;&nbsp; <a class="pre_cv">已发送</a> </div><?php endif; ?>
					</td>
                  </tr>
                  <tr bgcolor="#F6F6F6">
                    <td width="145" height="10" colspan="5"></td>
                  </tr><?php endforeach; endif; else: echo "" ;endif; endif; ?>
                </table>
              </div><?php endforeach; endif; else: echo "" ;endif; endif; ?>



			</TD>
          </TR>
        </TABLE>
      </div>
      <!--OTHER end-->
      
    </ul>
    <ul class="rew_conr rew_conr_mdf" id="contentHighSetLeft">
      <li class="big_btn_resume btn_resume_mdf" style="width:auto;margin-left:0">
        <div class="icon_width icon_width_mdf" style="margin-right:10px;"> <span class="text_red">&nbsp;&nbsp;></span> <a href="/dscj/index.php/Home/CompanyInformation/Index/">&nbsp;&nbsp;公司信息</a> </div>
        <img src="/dscj/Public/images/icon_need.gif" class="icon_need" align="absmiddle" id="Other_Complete" style="display:none;margin-left:-2px;"/> <img src="/dscj/Public/images/icon_incomplete.gif" class="icon_need" align="absmiddle" id="Other_Incomplete" style="display:block; margin-left:-2px;" /> </li>
      <li class="btn_resume btn_resume_mdf">
        <div class="icon_width icon_width_mdf">&nbsp;&nbsp;&nbsp;&nbsp; <a href="/dscj/index.php/Home/CompanyInformation/DistributionJob/">开始招聘</a> </div>
        <img src="/dscj/Public/images/icon_need.gif" class="icon_need" align="absmiddle" id="Other_Complete" style="display:none;"/> <img src="/dscj/Public/images/icon_incomplete.gif" class="icon_need" align="absmiddle" id="Other_Incomplete" style="display:block;" /> </li>
      <li class="btn_resume btn_resume_mdf">
        <div class="icon_width icon_width_mdf"> &nbsp;&nbsp;&nbsp;&nbsp; <a href="/dscj/index.php/Home/CompanyInformation/JobList/">职位列表</a> </div>
        <img src="/dscj/Public/images/icon_need.gif" class="icon_need" align="absmiddle" id="Edu_Complete" style="display:none;"/> <img src="/dscj/Public/images/icon_incomplete.gif" class="icon_need" align="absmiddle" id="Edu_Incomplete" style="display:block;" /> </li>
    </ul>
    <div style="line-height:2px;height:2px;clear:both;background:#FFFFFF;">&nbsp;</div>
  </div>
  <!--foot-->
 <div class="footer">
    <div class="block">
      <div class="Lcontent">
        <dl>
          <dt>
            <h3>合作伙伴</h3>
          </dt>
          <dd>
            <p style="display:none;"><a href="http://www.weather.com.cn/wzfw/gywm/">合作伙伴</a><a href="http://www.weather.com.cn/wzfw/lxwm/">合作伙伴</a><a href="http://www.weather.com.cn/wzfw/sybz/">帮助</a><a href="http://www.weather.com.cn/wzfw/ryzp/">合作伙伴</a></p>
          </dd>
        </dl>
        <div class="clear"></div>
      </div>
      <div class="serviceinfo">
        <p><span><a href="#">清波科技有限公司</a></span></p>
      </div>
      <div class="clear"></div>
    </div>
  </div>
  
  <!--foot-->
  
  <div class="footer_wrap">
    <div class="links"> <a target="blank" href="#">关于金点</a> <span>|</span> <a target="blank" href="#">服务条款</a> <span>|</span> <a target="blank" href="#">广告服务</a> <span>|</span> <a target="blank" href="#">联系方式</a> <span>|</span> <a target="blank" href="#">加入我们</a> </div>
    <div class="copyright">Copyright &copy; 1998 - 2014 #. All Rights Reserved.</div>
  </div>
  <script type="text/javascript">
	    if(typeof(pgvMain)=='function')
	        pgvMain();
    </script></div>
</body>
</html>