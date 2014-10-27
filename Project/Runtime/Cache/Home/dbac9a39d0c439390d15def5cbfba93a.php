<?php if (!defined('THINK_PATH')) exit();?><link rel="stylesheet" type="text/css" href="/dscj/Public/css/core.css" />
<link rel="stylesheet" type="text/css" href="/dscj/Public/css/style.css" />
<script type="text/javascript" src="/dscj/Public/js/jquery-1.8.2.js"></script>
<script type="text/javascript" src="/dscj/Public/js/jquery.drag.js"></script>
<script type="text/javascript" src="/dscj/Public/js/fn.js"></script>
<script type="text/javascript" src="/dscj/Public/js/all.js"></script>
<script type="text/javascript" src="/dscj/Public/js/index.js"></script>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
        </ul>
      </div>
    </div>
  </div>



<link href="/favicon.ico" type="image/ico" rel="shortcut icon"/>
<!--[if lt IE 7]>
<script>var file_root = '/';</script>
<script type="text/javascript" src="/js/unitpngfix.js"></script>
<![endif]--><!--<script>
    	//数组最后一个为样式中默认的　#indexpage
    	var homeimgbg=['/img/hbg2.jpg','/img/hbg3.jpg','/img/hbg1.jpg'];
    </script>-->
<script>
$(function(){
$('#login_job_button').click(function() {
	var path = "/dscj/index.php/Home/Index/Login";  
	$('#jobform').attr("action", path).submit(); 
})
$('#login_com_button').click(function() {
	var path = "/dscj/index.php/Home/Index/Login";  
	$('#comform').attr("action", path).submit(); 
})
$('#regist_job_button').click(function() {
	var path = "/dscj/index.php/Home/ApplicantUser/Registration";   
	$('#jobform').attr("action", path).submit(); 
})
$('#regist_com_button').click(function() {
	var path = "/dscj/index.php/Home/CompanyInformation/Registration";   
	$('#comform').attr("action", path).submit(); 
})
});
</script>

  <div class="banner_wrap">
    <div class="banner_bg"> <a href="#" style=" background:#fff url(/dscj/Public/images/data/banner_1.jpg) no-repeat center 0; display:block;" class="img"></a> <a href="#" style=" background:#fff url(/dscj/Public/images/data/banner_2.jpg) no-repeat center 0;" class="img"></a> <a href="#" style=" background:#fff url(/dscj/Public/images/data/banner_1.jpg) no-repeat center 0;" class="img"></a> <a href="#" style=" background:#fff url(/dscj/Public/images/data/banner_2.jpg) no-repeat center 0;" class="img"></a> </div>
    <div class="jobForm" style="position: absolute; top: 50px; z-index: 1000; left: 600px; color: rgb(255, 255, 255);">
      <div class="other_login" id="other_login">
        <div class="loginTitle" id="loginTitle" > <a class="move"><span class="jobB" >我要找工作</span></a><span>|</span> <a><span  class="comB">我是企业</span></a> </div>
        <!--快速登录--> 
        <!-- 我要找工作表单-->
        <div class="plogin" style="display:block;">
          <form id="jobform" autocomplete="off" name="loginform" action="job.php" method="post"   target="_self" style="margin:0px;">
			<input type='hidden' name='type' value='1'>
            <div class="login_form">
              <div class="uinArea" id="uinArea" >
                <label class="input_tips" id="uin_tips"  for="u" ></label>
                <div class="inputOuter">
                  <input type="text" class="inputstyle"  id="u" name="username" value="普通用户账户|邮箱"   tabindex="1"  onKeyDown="textdown(event)" onKeyUp="textup()" onfocus="if(value=='普通用户账户|邮箱'){value=''} this.style.color='#545454';" onblur="if (value ==''){value='普通用户账户|邮箱'}this.style.color='#a0a0a0';"/>
                  <span class="uin_icon"></span> <a class="uin_del" id="uin_del" href="javascript:void(0);"></a> </div>
                <ul class="email_list" id="email_list" >
                </ul>
              </div>
              <div class="pwdArea" id="pwdArea" >
         
                <label class="input_tips" id="pwd_tips"  for="p" ></label>
                <div class="inputOuter">
                  <input type="password"  class="inputstyle" id="p" name="password" value="" maxlength="16" tabindex="2"  placeholder="密码"/>
                  <span class="p_icon"></span> </div>
                <div class="lock_tips" id="caps_lock_tips"> <span class="lock_tips_row"></span> <span >大写锁定已打开</span> </div>
              </div>
              <div class="verifyArea" id="verifyArea">
                <div class="verifyinputArea" id="verifyinputArea" >
                  <label class="input_tips" id="vc_tips"  for="verifycode">验证码</label>
                  <div class="inputOuter">
                    <input name="verifycode" type="text"  class="inputstyle verifycode" id="verifycode" value="" maxlength="5" tabindex="3"/>
                  </div>
                </div>
                <div class="verifyimgArea" id="verifyimgArea"> <img class="verifyimg" id="verifyimg"  title="看不清，换一张" /> <a tabindex="4" href="javascript:void(0);" class="verifyimg_tips">看不清，换一张</a> </div>
              </div>
              <div class="submit"> <a class="login_button" hideFocus=true href="javascript:void(0);">
                <li style="margin-bottom:5px;">
                  <input type="button" tabindex="6"   value="登 录"  class="btn" id="login_job_button" />
                </li>
                <li>
                  <input type="button" tabindex="6"   value="注册"  class="btn" id="regist_job_button" />
                </li>
                </a> </div>
            </div>
          </form>
        </div>
         <!-- 企业表单--> 
        <div class="plogin" style="display:none;">
          <form id="comform" autocomplete="off" name="loginform" action="job.php" method="post"   target="_self" style="margin:0px;">
			<input type='hidden' name='type' value='2'>
            <div class="login_form">
              <div class="uinArea" id="uinArea" >
                <label class="input_tips" id="uin_tips"  for="u"></label>
                <div class="inputOuter">
                  <input type="text" class="inputstyle"  id="u" name="username" value="企业用户账户|邮箱"   tabindex="1"  onKeyDown="textdown(event)" onKeyUp="textup()" onfocus="if(value=='企业用户账户|邮箱'){value=''} this.style.color='#545454';" onblur="if (value ==''){value='企业用户账户|邮箱'}this.style.color='#a0a0a0';"/>
                  <span class="uin_icon"></span> <a class="uin_del" id="uin_del" href="javascript:void(0);"></a> </div>
                <ul class="email_list" id="email_list" >
                </ul>
              </div>
              <div class="pwdArea" id="pwdArea" >
                <label class="input_tips" id="pwd_tips"  for="p"></label>
                <div class="inputOuter">
                  <input type="password"  class="inputstyle password" id="p" name="password" value="" maxlength="16" tabindex="2"   placeholder="密码"/>
                  <span class="p_icon"></span> </div>
                <div class="lock_tips" id="caps_lock_tips"> <span class="lock_tips_row"></span> <span >大写锁定已打开</span> </div>
              </div>
              <div class="verifyArea" id="verifyArea">
                <div class="verifyinputArea" id="verifyinputArea" >
                  <label class="input_tips" id="vc_tips"  for="verifycode">验证码</label>
                  <div class="inputOuter">
                    <input name="verifycode" type="text"  class="inputstyle verifycode" id="verifycode" value="" maxlength="5" tabindex="3"/>
                  </div>
                </div>
                <div class="verifyimgArea" id="verifyimgArea"> <img class="verifyimg" id="verifyimg"  title="看不清，换一张" /> <a tabindex="4" href="javascript:void(0);" class="verifyimg_tips">看不清，换一张</a> </div>
              </div>
              <div class="submit"> <a class="login_button" hideFocus=true href="javascript:void(0);">
                <li style="margin-bottom:5px;">
                  <input type="button" tabindex="6"   value="登 录"  class="btn" id="login_com_button" />
                </li>
                <li>
                  <input type="button" tabindex="6"   value="注册"  class="btn" id="regist_com_button" />
                </li>
                </a> </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
   
    
  </div>
  <div class="imglist">
    <ul class="left">
      <li class="left"><img src="/dscj/Public/images/3.jpg" /></li>
      <li class="right"><img src="/dscj/Public/images/3.jpg" /></li>
    </ul>
    <ul class="left">
      <li class="left"><img src="/dscj/Public/images/2.jpg" /></li>
      <li class="right"><img src="/dscj/Public/images/2.jpg" /></li>
    </ul>
    <ul class="left">
      <li class="left"><img src="/dscj/Public/images/1.jpg" /></li>
      <li class="right"><img src="/dscj/Public/images/1.jpg" /></li>
    </ul>
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