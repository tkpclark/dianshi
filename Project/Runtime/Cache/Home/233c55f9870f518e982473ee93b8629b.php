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
<script type="text/javascript" src="/dscj/Public/js/jquery-1.26.js"></script>
<script type="text/javascript" src="/dscj/Public/js/jquery.drag.js"></script>
<script type="text/javascript" src="/dscj/Public/js/fn.js"></script>
<script type="text/javascript" src="/dscj/Public/js/all.js"></script>
<script type="text/javascript" src="/dscj/Public/js/cv_mod.js"></script>
<script type="text/javascript" src="/dscj/Public/js/newapplyinfo.js"></script>
<script type="text/javascript" src="/dscj/Public/js/companyinfo.js"></script>
<link rel="stylesheet" type="text/css" href="/dscj/Public/css/core.css" />
<link rel="stylesheet" type="text/css" href="/dscj/Public/css/style.css" />
<link rel="stylesheet" type="text/css" href="/dscj/Public/css/cv.css" />

  <!-- list列表-->
  <div class="rew_down rew_down_mdf">
    <ul class="rew_conl rew_conl_mdf" id="contentHighSet">
          
      <!--NewJJob start-->
      <table border="0" cellspacing="0" cellpadding="0" class="paragraph_title paragraph_title_mdf">
        <tr>
          <td><span class="Bpispan_l" ></span>发布新的职位<a name="SRI"/><span class="Bpispan_r" ></span></td>
		  <input type='hidden' name='id' id='ID' value="<?php echo ($result["id"]); ?>">
        </tr>
      </table>
      <div id="Other_info"  class="Other_info" style="display:"> 
     
        <table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
          <tr>
                <td class="col_name">部&nbsp;&nbsp;&nbsp;&nbsp;门</td>
                <td colspan="2"><input class="Department" type="text" id="Department" value="<?php echo ($result["department"]); ?>" maxlength="60" name="Department" placeholder="例如：研究部"/></td>
                <td class="col_name">职&nbsp;&nbsp;&nbsp;&nbsp;位</td>
                <td colspan="2"><input type="text" class="Job" id="Job" value="<?php echo ($result["position"]); ?>" maxlength="60" name="Job" placeholder="例如：分析师"/></td>
              </tr>
              <tr>
                <td class="col_name">薪&nbsp;&nbsp;&nbsp;&nbsp;酬</td>
                <td colspan="2"><select  name="Pay" class="Pay" id="Pay">
                <OPTION VALUE=1 <?php if($result["pay"] == 1): ?>selected<?php endif; ?> >5万以下</OPTION>
                <OPTION VALUE=2 <?php if($result["pay"] == 2): ?>selected<?php endif; ?> >5～6万</OPTION>
                <OPTION VALUE=3 <?php if($result["pay"] == 3): ?>selected<?php endif; ?> >5～8万</OPTION>
                <OPTION VALUE=4 <?php if($result["pay"] == 4): ?>selected<?php endif; ?> >8～10万</OPTION>
                <OPTION VALUE=5 <?php if($result["pay"] == 5): ?>selected<?php endif; ?> >10～15万</OPTION>
                <OPTION VALUE=6 <?php if($result["pay"] == 6): ?>selected<?php endif; ?> >15～20万</OPTION>
                <OPTION VALUE=7 <?php if($result["pay"] == 7): ?>selected<?php endif; ?> >20～30万</OPTION>
                <OPTION VALUE=8 <?php if($result["pay"] == 8): ?>selected<?php endif; ?> >30～50万</OPTION>
              </select></td>
                <td class="col_name">工作地点</td>
                <td colspan="2"><input type="text" class="WorkPlace" id="WorkPlace" value="<?php echo ($result["work_addre"]); ?>" maxlength="60" name="WorkPlace" placeholder="例如：杭州"/>                </td>
              </tr>
              <tr>
            <td class="col_name" colspan="2">工作方向</td>
            <td colspan="4" valign="middle"><input type="text" class="JobDirec input393" onBlur="checkinputstr('Name','er_name')"  id="JobDirec" value="<?php echo ($result["work_direction"]); ?>" maxlength="100" name="JobDirec" placeholder="例如：欧洲宏观经济研究"/></td>
          </tr>
          
          <tr>
                <td colspan="6" class="col_name" style="text-align:left;">职位具体描述</td>
              </tr>
              <tr>
                <td colspan="6"><div class="del_exp">
                    <div class="Exper">
                      <textarea  class="weight600 JobDetail"  name="JobDetail" id="JobDetail" placeholder="例如：：负责建立欧洲区域经济模型"><?php echo ($result["description"]); ?></textarea>
                      </div>
                  </div></td>
              </tr>
              
              <tr>
                <td colspan="6" class="col_name" style="text-align:left;">职位要求</td>
              </tr>
              
              <tr>
                <td colspan="6"><div class="del_exp">
                    <div class="Exper">
                      <textarea rows="6" class="weight600 JobRequire"  name="JobRequire" id="JobRequire" placeholder="例如：对经济运行基本逻辑的理解..."><?php echo ($result["requirement"]); ?></textarea>
                      </div>
                  </div></td>
              </tr>
              
              
              <tr>
                <td class="col_name">联系人</td>
                <td colspan="2"><input class="Contacts" type="text" id="Contacts" value="<?php echo ($result["contact"]); ?>" maxlength="60" name="Contacts" placeholder="例如：John"/></td>
                <td class="col_name">联系方式</td>
                <td colspan="2"><input type="text" class="ContactWay" id="ContactWay" value="<?php echo ($result["contact_information"]); ?>" maxlength="60" name="ContactWay" placeholder="例如：18500010002"/></td>
              </tr>
              <tr>
                <td class="col_name">预计招聘人数</td>
                <td colspan="2"><input type="text" style="float:left;" class="RecNum" id="RecNum" value="<?php echo ($result["number"]); ?>" maxlength="60" name="RecNum" placeholder="例如：2"/><p >&nbsp;名</p></td>
                <td class="col_name">接受简历数量</td>
                <td colspan="2"><input type="text" style="float:left;" class="ReceiveNum" id="ReceiveNum" value="<?php echo ($result["accept_number"]); ?>" maxlength="60" name="ReceiveNum" placeholder="例如：20"/><p >&nbsp;份</p> </td>
              </tr>
          <tr><!--保存按钮-->
            <td colspan="7"  style="text-align:right;"><input class="btn_pic" type="button"  name="save" id="saveedu" onclick="submitAllCompanyInfo();"  value="保存" /><input class="btn_pic" type="button"  name="save" id="saveedu" onclick="startRecruit();"  value="开始招聘" /><input class="btn_pic" type="button"  name="save" id="saveedu" onclick="endRecruit();"  value="结束招聘" /></td>
          </tr>
        </table>
       
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