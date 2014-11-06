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
<script type="text/javascript" src="/dscj/Public/js/jquery-1.8.2.js"></script>
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
      <!--base start-->
      <table border="0" cellspacing="0" cellpadding="0" class="paragraph_title paragraph_title_mdf">
        <tr>
          <td><span class="Bpispan_l" ></span>公司信息<a name="CPI"></a><span class="Cpispan_r"></span></td>
          <td align="right"><img src="http://img01.51jobcdn.com/im/2009/cv/cresume/btn_shrink.gif" align="absmiddle" hspace="10" onClick="showinfo('BPI');" style="cursor:pointer; display:none;" id="BPI_hidden"/><img src="http://img01.51jobcdn.com/im/2009/cv/cresume/btn_spread.gif" align="absmiddle" hspace="10" onClick="showinfo('BPI');" style="cursor:pointer; display:none" id="BPI_show"/></td>
        </tr>
      </table>
      <div id="BPI_info" class="BPI_info"> 
        <table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf">
          <tr>
            <td  rowspan="3" width="120px" height="160px">
			<div id="preview">  
					<img id="imghead" width='120px' height="160px"  src='/dscj/Uploads/Photo/<?php echo ($result["photo"]); ?>'>  
				</div>
              <input type="file" value="" class="imgfile" name="fileToUpload"  id="fileToUpload" style="width:120px" onchange="previewImage(this)" />

              </td>
            <td align="left" class="col_name">公&nbsp;&nbsp;司&nbsp;&nbsp;名&nbsp;&nbsp;</td>
            <td ><label>
              
                <input type="text" onBlur="checkinputstr('Name','er_name')" class="CompanyName input400" id="CompanyName" value="<?php echo ($result["name"]); ?>" maxlength="20" name="CompanyName" placeholder="公司名"/>
              
              </label></td>
                      </tr>
          <tr>
            <td class="col_name">办公地址 </td>
            <td><input name="Offic" type="text" class="Offic input400" id="Offic" value="<?php echo ($result["address"]); ?>" placeholder="办公地址" /></td>
          </tr>
          <tr>
            <td  class="col_name">网&nbsp;&nbsp;&nbsp;&nbsp;址</td>
            <td valign="middle">
                <input id="URL" name="URL"  class="URL input400"onBlur="checkinputstr('phone','er_phone')" maxlength="20"  value="<?php echo ($result["website"]); ?>" type="text" placeholder="例如：dianshichengjin@dscj.com"  />
              </td>
          </tr>
          


          <tr>
            <td colspan=""  class="col_name">领&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;域</td>
            <td colspan="5"><div id="Field" name="Field" style="display:block" >
				<span class="btn_dir_span touzi_span <?php if( strpos($result['field'],'投资银行业务')!==false ) echo 'touzi_span_selected' ; ?>">投资银行业务</span>
                <span class="btn_dir_span yiji_span <?php if( strpos($result['field'],'一级市场投资分析') ) echo 'yiji_span_selected' ; ?>">一级市场投资分析</span>
                <span class="btn_dir_span erji_span <?php if( strpos($result['field'],'二级市场研究、交易、投资') ) echo 'erji_span_selected' ; ?>" style="line-height:20px;">二级市场研究、交易、投资</span>
                <span class="btn_dir_span quanshang_span <?php if( strpos($result['field'],'券商销售') ) echo 'quanshang_span_selected' ; ?>">券商销售</span>
              </div></td>
          </tr>
          <tr>
            <td colspan="7" class="">
            <div class="span_title touzi_div" <?php if( strpos($result['field'],'投资银行业务')===false ) echo 'style="display:none"' ; ?>><span class="Tpispan_l" ></span>投资银行业务<span class="Tpispan_r" ></span>
            <div id="finServ" > 
			<span class="btn_pic btn_pic_span touzi_btn_pic <?php if( strpos($result['field'],'股权')) echo 'span_selected touzi_more_span_selected' ; ?>">股权</span> 
			<span class="btn_pic btn_pic_span touzi_btn_pic <?php if( strpos($result['field'],'债券')) echo 'span_selected touzi_more_span_selected' ; ?>">债券</span> 
			<span class="btn_pic btn_pic_span touzi_btn_pic <?php if( strpos($result['field'],'并购') ) echo 'span_selected touzi_more_span_selected' ; ?>">并购</span> 
			<span class="btn_pic btn_pic_span touzi_btn_pic <?php if( strpos($result['field'],'ECM') ) echo 'span_selected touzi_more_span_selected' ; ?>">ECM</span> 
			<span class="btn_pic btn_pic_span touzi_btn_pic <?php if( strpos($result['field'],'DCM') ) echo 'span_selected touzi_more_span_selected' ; ?>">DCM</span> 
            </div></div>
             
             <div class="span_title yiji_div" <?php if( !strpos($result['field'],'一级市场投资分析') ) echo 'style="display:none"' ; ?>><span class="Tpispan_l" style="width:222px;"></span>一级市场投资分析<span class="Tpispan_r" style="width:217px;" ></span>
              <div  id="oneInvest"  >
			   <span class="btn_pic btn_pic_span yiji_btn_pic <?php if( strpos($result['field'],'PE') ) echo 'span_selected yiji_more_span_selected' ; ?>">PE</span> 
				<span class="btn_pic btn_pic_span yiji_btn_pic <?php if( strpos($result['field'],'VC') ) echo 'span_selected yiji_more_span_selected' ; ?>">VC</span> 
				<span class="btn_pic btn_pic_span yiji_btn_pic <?php if( strpos($result['field'],'信托') ) echo 'span_selected yiji_more_span_selected' ; ?>">信托</span> 
				<span class="btn_pic btn_pic_span yiji_btn_pic <?php if( strpos($result['field'],'其他投资机构') ) echo 'span_selected yiji_more_span_selected' ; ?>">其他投资机构</span> 
               </div></div>
              
              <div class="span_title erji_div" <?php if( !strpos($result['field'],'二级市场研究、交易、投资') ) echo 'style="display:none"' ; ?>><span class="Tpispan_l" style="width:200px;"></span>二级市场研究、交易、投资<span class="Tpispan_r" style="width:185px;"></span>
               
              <table border="0" cellspacing="0" cellpadding="0">
              <tr>
              <td><span class="btn_erji_span">按机构:</span></td>
              <td><div  id="twoInvest" >
			  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['field'],'卖方研究') ) echo 'span_selected erji_jg_span_selected' ; ?>">卖方研究</span> 
				  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['field'],'公募基金') ) echo 'span_selected erji_jg_span_selected' ; ?>">公募基金</span> 
				  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['field'],'私募基金') ) echo 'span_selected erji_jg_span_selected' ; ?>">私募基金</span> 
				  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['field'],'信托') ) echo 'span_selected erji_jg_span_selected' ; ?>">信托</span> 
				  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['field'],'资管') ) echo 'span_selected erji_jg_span_selected' ; ?>">资管</span> 
				  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['field'],'券商自营') ) echo 'span_selected erji_jg_span_selected' ; ?>">券商自营</span> 
				  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['field'],'银行金融市场') ) echo 'span_selected erji_jg_span_selected' ; ?>">银行金融市场</span> 
				  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['field'],'其他投资机构') ) echo 'span_selected erji_jg_span_selected' ; ?>">其他投资机构</span>
              </td>
              </tr>
              <tr>
              <td><span class="btn_erji_span">按资产：</span></td>
              <td><div>
			  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['field'],'股票') ) echo 'span_selected erji_zc_span_selected' ; ?>">股票</span> 
			  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['field'],'债券') ) echo 'span_selected erji_zc_span_selected' ; ?>">债券</span> 
			  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['field'],'期货') ) echo 'span_selected erji_zc_span_selected' ; ?>">期货</span> 
			  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['field'],'外汇') ) echo 'span_selected erji_zc_span_selected' ; ?>">外汇</span> 
			  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['field'],'量化') ) echo 'span_selected erji_zc_span_selected' ; ?>">量化</span> 
			  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['field'],'其他金融资产') ) echo 'span_selected erji_zc_span_selected' ; ?>">其他金融资产</span> 
              </div>
              <td>
               </tr>
               </table>
               </div>
              
              <div class="span_title quanshang_div" <?php if( !strpos($result['field'],'券商销售') ) echo 'style="display:none"' ; ?>><span class="Tpispan_l" style="width:244px;"></span>券商销售<span class="Tpispan_r" style="width:244px;"></span>
              <div id="sales"> 
			  <span class="btn_pic btn_pic_span quanshang_btn_pic <?php if( strpos($result['field'],'股票') ) echo 'span_selected quanshang_more_span_selected' ; ?>">股票</span> 
				<span class="btn_pic btn_pic_span quanshang_btn_pic <?php if( strpos($result['field'],'债券') ) echo 'span_selected quanshang_more_span_selected' ; ?>">债券</span> 
              </div>
              </div>
              </td>
          </tr>
           <tr>
            <td class="col_name">规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;模</td>
            <td  valign="middle"><select  name="PersonNum" class="PersonNum" id="PersonNum" placeholder="公司人数">
                <OPTION VALUE=1  <?php if($result["scale_people"] == 1): ?>selected<?php endif; ?>  >30人以下</OPTION>
                <OPTION VALUE=2 <?php if($result["scale_people"] == 2): ?>selected<?php endif; ?> >30～100人</OPTION>
                <OPTION VALUE=3 <?php if($result["scale_people"] == 3): ?>selected<?php endif; ?> >100～500人</OPTION>
                <OPTION VALUE=4 <?php if($result["scale_people"] == 4): ?>selected<?php endif; ?> >500～1000人以上</OPTION>
                <OPTION VALUE=5 <?php if($result["scale_people"] == 5): ?>selected<?php endif; ?> >1000人以上</OPTION>
                </select></td>
            <td valign="middle"><select  name="Asset" id="Asset" placeholder="公司资产">
                <OPTION VALUE=1 <?php if($result["scale_bankroll"] == 1): ?>selected<?php endif; ?> >100万以下</OPTION>
                <OPTION VALUE=2 <?php if($result["scale_bankroll"] == 2): ?>selected<?php endif; ?> >100万～1000万</OPTION>
                <OPTION VALUE=3 <?php if($result["scale_bankroll"] == 3): ?>selected<?php endif; ?> >1000万～1亿</OPTION>
                <OPTION VALUE=4 <?php if($result["scale_bankroll"] == 4): ?>selected<?php endif; ?> >1亿～100亿</OPTION>
                <OPTION VALUE=5 <?php if($result["scale_bankroll"] == 5): ?>selected<?php endif; ?> >1000亿～1000亿</OPTION>
                <OPTION VALUE=6 <?php if($result["scale_bankroll"] == 6): ?>selected<?php endif; ?> >1000亿以上</OPTION>
                </select></td>
            
          </tr>
          <tr>
                <td colspan="3" class="col_name" style="text-align:left;">公司介绍</td>
              </tr>
              <tr>
                <td colspan="3"><div class="del_exp">
                    <div class="Exper">
                      <textarea rows="6" class="weight700 CompanyIntro"  name="CompanyIntro"  id="CompanyIntro" placeholder="例如：清波资产是一家宏观对冲基金，强调大类资产配置和周期轮动..."><?php echo ($result["introduction"]); ?></textarea>
                      </div>
                  </div></td>
              </tr>
            <tr>
                <td colspan="3" class="col_name" style="text-align:left;">公司优势</td>
              </tr>
              <tr>
                <td colspan="3"><div class="del_exp">
                    <div class="Exper">
                      <textarea rows="6" class="weight700 CompanyAdvan"  name="CompanyAdvan" id="CompanyAdvan" placeholder="例如：：工作环境优越，待遇极为优厚，管理扁平透明..."><?php echo ($result["advantage"]); ?></textarea>
                      </div>
                  </div></td>
              </tr>
              
              <tr>
                <td colspan="3" class="col_name" style="text-align:left;">业内评价</td>
              </tr>
              <tr>
                <td colspan="3"><div class="del_exp">
                    <div class="Exper">
                      <textarea rows="6" class="weight700 CompanyEval"  name="CompanyEval" id="CompanyEval" placeholder="例如：投资理念领先，视野广，业绩--有疑问的看他们的净值吧..."><?php echo ($result["evaluation"]); ?></textarea>
                      </div>
                  </div></td>
              </tr>
          
         
          <tr><!--保存按钮-->
            <td colspan="5" align="left" style="text-align:right;"><input class="btn_pic" type="button" name="imgfile" id="imgfile" onclick="submitCompanyInfo();" style="cursor:pointer" value="保存" /></td>
          </tr>
        </table>
        </div>
      <!--CompanyBase end--> 
        
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