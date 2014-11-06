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
<script type="text/javascript" src="/dscj/Public/js/jquery-1.8.2.js"></script>
<script type="text/javascript" src="/dscj/Public/js/jquery.drag.js"></script>
<script type="text/javascript" src="/dscj/Public/js/fn.js"></script>
<script type="text/javascript" src="/dscj/Public/js/all.js"></script>
<script type="text/javascript" src="/dscj/Public/js/cv_mod.js"></script>
<script type="text/javascript" src="/dscj/Public/js/newapplyinfo.js"></script>
  <!-- list列表-->
  <div class="rew_down rew_down_mdf">
    <ul class="rew_conl rew_conl_mdf" id="contentHighSet">
      <!--base start-->
      <table border="0" cellspacing="0" cellpadding="0" class="paragraph_title paragraph_title_mdf">
        <tr>
          <td><span class="Bpispan_l" ></span>个人基本信息<a name="BPI"></a><span class="Bpispan_r"></span></td>
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
            <td class="col_name"><span class="text_red">*</span>姓&nbsp;&nbsp;&nbsp;&nbsp;名</td>
            <td >
			  <label>
              <div style="float:left;">
                <input type="text" onBlur="checkinputstr('Name','er_name')"  id="Name" value="<?php echo ($result["name"]); ?>" maxlength="20" name="Name"/>
              </div>
              </label>
			</td>

            <td align="left" class="col_name"><span class="text_red">*</span>性&nbsp;&nbsp;&nbsp;&nbsp;别 </td>
            <td class="">
			
			<input type="radio" value="1" <?php if($result["sex"] == 1): ?>checked<?php endif; ?> name="Gender"/>
              男
              <input type="radio" value="2" <?php if($result["sex"] == 2): ?>checked<?php endif; ?> name="Gender"/>
              女 
			  </td>
          </tr>
          <tr>
            <td align="left" class="col_name">常用邮箱 </td>
            <td ><input name="email" type="text" class="weight150" id="email" value="<?php echo ($result["email"]); ?>" placeholder="例如：dianshichengj@dscj.com" /></td>
         
            <td align="left" class="col_name"><!--<span class="text_red">*</span>-->手机号码</td>
            <td colspan="3" valign="middle"><div style="float:left;">
                <input id="Mobile" name="Mobile" onBlur="checkinputstr('phone','er_phone')" maxlength="20"  value="<?php echo ($result["phone"]); ?>" type="text" placeholder="188-8888-8888"  />
              </div></td>
          </tr>
		  <tr>
            <td align="left" class="col_name">最高学历院校 </td>
            <td colspan="3"><input name="school" type="text" class="weight150" id="school" value="<?php echo ($result["school"]); ?>" placeholder="例如：上海财经大学" /></td>
          </tr>
          <tr>
            <td class="col_name">地&nbsp;&nbsp;&nbsp;&nbsp;址</td>
            <td colspan="4" valign="middle"><input type="text" class="input550" onBlur="checkinputstr('Name','er_name')"  id="Address" value="<?php echo ($result["address"]); ?>" maxlength="100" name="Address" placeholder="例如：北京市朝阳区清平家园"/></td>
          </tr>
          <tr>
            <td class="col_name">目前工作单位</td>
            <td colspan="4" valign="middle"><input type="text" class="input550" onBlur="checkinputstr('Name','er_name')"  id="Company" value="<?php echo ($result["work_unit"]); ?>" maxlength="100" name="Address" placeholder="例如：CITICS"/></td>
          </tr>
          <tr>
            <td class="col_name">部&nbsp;&nbsp;&nbsp;&nbsp;门</td>
            <td colspan="2" valign="middle"><input type="text" onBlur="checkinputstr('Name','er_name')"  id="Depart" value="<?php echo ($result["department"]); ?>" maxlength="100" name="Address" placeholder="例如：研究部"/></td>
            <td class="col_name">职&nbsp;&nbsp;&nbsp;&nbsp;位</td>
            <td colspan="2" valign="middle"><input type="text" onBlur="checkinputstr('Name','er_name')"  id="Job" value="<?php echo ($result["position"]); ?>" maxlength="100" name="Address" placeholder="例如：分析师"/></td>
          </tr>
          <tr>
            <td class="col_name">工作年限</td>
            <td colspan="2" valign="middle"><select  name="Worktime" id="Worktime" onBlur="checkinputstr('Name','er_name')" >
                <OPTION VALUE=0 <?php if($result["work_time"] == 0): ?>selected<?php endif; ?> >请选择</OPTION>
                <OPTION VALUE=1 <?php if($result["work_time"] == 1): ?>selected<?php endif; ?> >1年以下</OPTION>
                <OPTION VALUE=2 <?php if($result["work_time"] == 2): ?>selected<?php endif; ?> >1～3年</OPTION>
                <OPTION VALUE=3 <?php if($result["work_time"] == 3): ?>selected<?php endif; ?> >3～5年</OPTION>
                <OPTION VALUE=4 <?php if($result["work_time"] == 4): ?>selected<?php endif; ?> >5～8年</OPTION>
                <OPTION VALUE=5 <?php if($result["work_time"] == 5): ?>selected<?php endif; ?> >10～15年</OPTION>
                <OPTION VALUE=6 <?php if($result["work_time"] == 6): ?>selected<?php endif; ?> >15～20年</OPTION>
                <OPTION VALUE=7 <?php if($result["work_time"] == 7): ?>selected<?php endif; ?> >20年以上</OPTION>
              </select></td>
            <td class="col_name">职&nbsp;&nbsp;&nbsp;&nbsp;级</td>
            <td colspan="2" valign="middle"><input type="text" onBlur="checkinputstr('Name','er_name')"  id="JobGrade" value="<?php echo ($result["rank"]); ?>" maxlength="100" name="Address" placeholder="例如：高级经理"/></td>
          </tr>
          <tr><!--保存按钮-->
            <td colspan="5" align="left" style="text-align:right;"><input class="btn_pic" type="button" name="imgfile" id="imgfile" onclick="submitBaseInfo();" style="cursor:pointer" value="保存" /></td>
          </tr>
        </table>
        <input type="hidden" id="CheckGoogle" name="CheckGoogle" value=""/>
      </div>
      <!--base end--> 
      <!--OTHER start-->
      <table border="0" cellspacing="0" cellpadding="0" class="paragraph_title paragraph_title_mdf">
        <tr>
          <td><span class="Bpispan_l" ></span>求职意向<a name="OTHER"/><span class="Bpispan_r" ></span></td>
        </tr>
      </table>
      <div id="Other_info"  class="Other_info" style="display:"> 
     
        <table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
          <tr>
            <td  colspan="2" class="col_name">目前求职状态</td>
            <td colspan="5"><select  name="JobTerm" id="JobTerm">
                <OPTION VALUE=1 <?php if($result["job_status"] == 1): ?>selected<?php endif; ?> >目前正在找工作</OPTION>
                <OPTION VALUE=2 <?php if($result["job_status"] == 2): ?>selected<?php endif; ?> >半年内无换工作的计划</OPTION>
                <OPTION VALUE=3 <?php if($result["job_status"] == 3): ?>selected<?php endif; ?> >1年内无换工作的计划</OPTION>
                <OPTION VALUE=4 <?php if($result["job_status"] == 4): ?>selected<?php endif; ?> >观望有好的机会再考虑</OPTION>
                <OPTION VALUE=5 <?php if($result["job_status"] == 5): ?>selected<?php endif; ?> >我暂时不想找工作</OPTION>
              </select></td>
          </tr>
          <tr>
            <td  colspan="2" align="left" class="col_name">工作地偏好</td>
            <td><input type="text" id="Area1" value="<?php echo ($area[0]); ?>" maxlength="20" name="Area" placeholder="例如：北京"/></td>
            <td><input type="text" id="Area2" value="<?php echo ($area[1]); ?>" maxlength="20" name="Area" placeholder="上海"/></td>
            <td><input type="text" id="Area3" value="<?php echo ($area[2]); ?>" maxlength="20" name="Area" placeholder="广州"/></td>
            
          </tr>
          <tr>
            <td colspan="4" style="border:0;"></td>
          </tr>
          <tr>
            <td colspan="2" class="col_name">期望年薪</td>
            <td colspan="5"><select  name="WantPay" id="WantPay">
                <OPTION VALUE=1 <?php if($result["expected_salary"] == 1): ?>selected<?php endif; ?> >5万以下</OPTION>
                <OPTION VALUE=2 <?php if($result["expected_salary"] == 2): ?>selected<?php endif; ?> >5～6万</OPTION>
                <OPTION VALUE=3 <?php if($result["expected_salary"] == 3): ?>selected<?php endif; ?> >5～8万</OPTION>
                <OPTION VALUE=4 <?php if($result["expected_salary"] == 4): ?>selected<?php endif; ?> >8～10万</OPTION>
                <OPTION VALUE=5 <?php if($result["expected_salary"] == 5): ?>selected<?php endif; ?> >10～15万</OPTION>
                <OPTION VALUE=6 <?php if($result["expected_salary"] == 6): ?>selected<?php endif; ?> >15～20万</OPTION>
                <OPTION VALUE=7 <?php if($result["expected_salary"] == 7): ?>selected<?php endif; ?> >20～30万</OPTION>
                <OPTION VALUE=8 <?php if($result["expected_salary"] == 8): ?>selected<?php endif; ?> >30～50万</OPTION>
              </select></td>
          </tr>
          <tr>
            <td  colspan="2" class="col_name">工作环境</td>
            <td colspan="5"><input type="text" class="input580" id="JobEnvir" value="<?php echo ($result["work_environment"]); ?>" maxlength="60" name="JobEnvir" placeholder="您所期望的工作环境"/></td>
          </tr>
          <tr>
            <td  colspan="2" class="col_name">求职方向</td>
            <td colspan="5">
				<div id="finServ" style="display:block" >
				
                <span class="btn_dir_span touzi_span <?php if( strpos($result['job_intension'],'投资银行业务')!==false ) echo 'touzi_span_selected' ; ?>">投资银行业务</span>
                <span class="btn_dir_span yiji_span <?php if( strpos($result['job_intension'],'一级市场投资分析') ) echo 'yiji_span_selected' ; ?>">一级市场投资分析</span>
                <span class="btn_dir_span erji_span <?php if( strpos($result['job_intension'],'二级市场研究、交易、投资') ) echo 'erji_span_selected' ; ?>" style="line-height:20px;">二级市场研究、交易、投资</span>
                <span class="btn_dir_span quanshang_span <?php if( strpos($result['job_intension'],'券商销售') ) echo 'quanshang_span_selected' ; ?>">券商销售</span>
                </div>
			 </td>
          </tr>
          <tr>
            <td colspan="7" class="">
            <div class="span_title touzi_div" <?php if( strpos($result['job_intension'],'投资银行业务')===false ) echo 'style="display:none"' ; ?>>
				<span class="Tpispan_l" ></span>投资银行业务<span class="Tpispan_r" ></span>
				<div id="finServ" > 
					<span class="btn_pic btn_pic_span touzi_btn_pic <?php if( strpos($result['job_intension'],'股权')) echo 'span_selected touzi_more_span_selected' ; ?>">股权</span> 
					<span class="btn_pic btn_pic_span touzi_btn_pic <?php if( strpos($result['job_intension'],'债券')) echo 'span_selected touzi_more_span_selected' ; ?>">债券</span> 
					<span class="btn_pic btn_pic_span touzi_btn_pic <?php if( strpos($result['job_intension'],'并购') ) echo 'span_selected touzi_more_span_selected' ; ?>">并购</span> 
					<span class="btn_pic btn_pic_span touzi_btn_pic <?php if( strpos($result['job_intension'],'ECM') ) echo 'span_selected touzi_more_span_selected' ; ?>">ECM</span> 
					<span class="btn_pic btn_pic_span touzi_btn_pic <?php if( strpos($result['job_intension'],'DCM') ) echo 'span_selected touzi_more_span_selected' ; ?>">DCM</span> 
				</div>
			</div>
             
             <div class="span_title yiji_div" <?php if( !strpos($result['job_intension'],'一级市场投资分析') ) echo 'style="display:none"' ; ?>>
				<span class="Tpispan_l" style="width:222px;"></span>一级市场投资分析<span class="Tpispan_r" style="width:217px;" ></span>
				<div  id="oneInvest"  >
					<span class="btn_pic btn_pic_span yiji_btn_pic <?php if( strpos($result['job_intension'],'PE') ) echo 'span_selected yiji_more_span_selected' ; ?>">PE</span> 
					<span class="btn_pic btn_pic_span yiji_btn_pic <?php if( strpos($result['job_intension'],'VC') ) echo 'span_selected yiji_more_span_selected' ; ?>">VC</span> 
					<span class="btn_pic btn_pic_span yiji_btn_pic <?php if( strpos($result['job_intension'],'信托') ) echo 'span_selected yiji_more_span_selected' ; ?>">信托</span> 
					<span class="btn_pic btn_pic_span yiji_btn_pic <?php if( strpos($result['job_intension'],'其他投资机构') ) echo 'span_selected yiji_more_span_selected' ; ?>">其他投资机构</span> 
				</div>
			 </div>
              
              <div class="span_title erji_div" <?php if( !strpos($result['job_intension'],'二级市场研究、交易、投资') ) echo 'style="display:none"' ; ?>>
				  <span class="Tpispan_l" style="width:200px;"></span>二级市场研究、交易、投资<span class="Tpispan_r" style="width:185px;"></span>
				  <table border="0" cellspacing="0" cellpadding="0">
					  <tr>
						  <td><span class="btn_erji_span">按机构:</span></td>
						  <td>
							  <div  id="twoInvest" >
								  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['job_intension'],'卖方研究') ) echo 'span_selected erji_jg_span_selected' ; ?>">卖方研究</span> 
								  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['job_intension'],'公募基金') ) echo 'span_selected erji_jg_span_selected' ; ?>">公募基金</span> 
								  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['job_intension'],'私募基金') ) echo 'span_selected erji_jg_span_selected' ; ?>">私募基金</span> 
								  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['job_intension'],'信托') ) echo 'span_selected erji_jg_span_selected' ; ?>">信托</span> 
								  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['job_intension'],'资管') ) echo 'span_selected erji_jg_span_selected' ; ?>">资管</span> 
								  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['job_intension'],'券商自营') ) echo 'span_selected erji_jg_span_selected' ; ?>">券商自营</span> 
								  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['job_intension'],'银行金融市场') ) echo 'span_selected erji_jg_span_selected' ; ?>">银行金融市场</span> 
								  <span class="btn_pic btn_pic_span erji_jg_btn_pic <?php if( strpos($result['job_intension'],'其他投资机构') ) echo 'span_selected erji_jg_span_selected' ; ?>">其他投资机构</span>
							  </div>
						  </td>
					  </tr>
					  <tr>
						  <td><span class="btn_erji_span">按资产：</span></td>
						  <td>
							  <div>
								  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['job_intension'],'股票') ) echo 'span_selected erji_zc_span_selected' ; ?>">股票</span> 
								  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['job_intension'],'债券') ) echo 'span_selected erji_zc_span_selected' ; ?>">债券</span> 
								  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['job_intension'],'期货') ) echo 'span_selected erji_zc_span_selected' ; ?>">期货</span> 
								  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['job_intension'],'外汇') ) echo 'span_selected erji_zc_span_selected' ; ?>">外汇</span> 
								  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['job_intension'],'量化') ) echo 'span_selected erji_zc_span_selected' ; ?>">量化</span> 
								  <span class="btn_pic btn_pic_span erji_zc_btn_pic <?php if( strpos($result['job_intension'],'其他金融资产') ) echo 'span_selected erji_zc_span_selected' ; ?>">其他金融资产</span> 
							  </div>
						  <td>
					   </tr>
				   </table>
               </div>
              
               <div class="span_title quanshang_div" <?php if( !strpos($result['job_intension'],'券商销售') ) echo 'style="display:none"' ; ?>>
					<span class="Tpispan_l" style="width:244px;"></span>券商销售<span class="Tpispan_r" style="width:244px;"></span>
					<div id="sales"> 
					  <span class="btn_pic btn_pic_span quanshang_btn_pic <?php if( strpos($result['job_intension'],'股票') ) echo 'span_selected quanshang_more_span_selected' ; ?>">股票</span> 
					  <span class="btn_pic btn_pic_span quanshang_btn_pic <?php if( strpos($result['job_intension'],'债券') ) echo 'span_selected quanshang_more_span_selected' ; ?>">债券</span> 
					</div>
			   </div>
			</td>
          </tr>


          <tr><!--保存按钮-->
            <td colspan="7"  style="text-align:right;"><input class="btn_pic" type="button" name="imgfile" id="imgfile" onclick="submitPurposeInfo();" style="cursor:pointer" value="保存" /></td>
          </tr>
        </table>
       
      </div>
      <!--OTHER end--> 
      
      <!--EDU start-->
      <table border="0" cellspacing="0" cellpadding="0" class="paragraph_title paragraph_title_mdf">
        <tr>
          <td><span class="Bpispan_l" ></span>教育背景<a name="EDU"></a><span class="Bpispan_r" ></span></td>
        </tr>
      </table>

      <div id="Edu_info">
        <div id="Edu_edit" class="Edu_edit">
			<?php if(empty($Education)): ?><div class="eduEdit" >
						 
				<table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
					<tr>
					  <td><span class="btn_all_del"  ><a name="del_this_edu" >删除这条教育背景</a></span></td>
					</tr>
				  </table>
				<table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
				  <tr>
					<td class="col_name">学&nbsp;&nbsp;&nbsp;&nbsp;校</td>
					<td colspan="2"><input class="School" type="text" id="School" value="" maxlength="60" name="School" placeholder="例如：上海财经大学"/></td>
					<td class="col_name">院&nbsp;&nbsp;&nbsp;&nbsp;系</td>
					<td colspan="2"><input type="text" class="College" id="College" value="" maxlength="60" name="College" placeholder="例如：金融学院"/></td>
				  </tr>
				  <tr>
					<td class="col_name">学&nbsp;&nbsp;&nbsp;&nbsp;历</td>
					<td colspan="2"><input type="text"  class="Academic" id="Academic" value="" maxlength="60" name="Academic" placeholder="例如：金融硕士"/></td>
					<td class="col_name">在校时间</td>
					<td colspan="2"><input type="text" class="SDuring" id="SDuring" value="" maxlength="60" name="SDuring" placeholder="例如：2011.09-2013.06"/></td>
				  </tr>
				  <tr>
					<td colspan="9" class="col_name" style="text-align:left;">所获学校奖励<span class="btn_pic_add" style="float:right;"><a class="edu_add" >添加</a></span></td>
				  </tr>
													 
				  <tr class="saw">
					<td colspan="9">
						<div  class="del_edu">
							<div  class="SAward">
							  <input type="text"  class="SAwardtext input620" id="SAwardtext" value="" maxlength="60" name="SAwardtext" placeholder="例如：2011-2012全额奖学金"/>
							  <span class="btn_pic_del" style="float:right;"><a class="edu_del" name="edu_del"  >删除</a></span> 
							  </div>
						 </div>
					  </td>
				  </tr>
				  
				  

				  <tr>
					<td colspan="9" class="col_name" style="text-align:left;">其他在校经历<span class="btn_pic_add" ><a class="exp_add" >添加</a></span></td>
				  </tr>
				  <tr>
					<td colspan="9"><div class="del_exp">
						<div class="Exper">
						  <textarea rows="6" class="weight620 otherAwardExp"  name="EduDetail" placeholder="例如：2011-2012学生会文艺部"></textarea>
						  <span class="btn_pic_del" style="float:right;"><a class="exp_del" name="exp_del" >删除</a></span> </div>

					  </div></td>
				  </tr>
				  
				  <!--<tr>保存按钮
				  
					<td colspan="9">
					  
					</td>
				  </tr>-->
				</table>
						   
			  </div>
			
			<?php else: ?> 
			<?php if(is_array($Education)): $i = 0; $__LIST__ = $Education;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$data): $mod = ($i % 2 );++$i;?><div class="eduEdit" >
						 
				<table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
					<tr>
					  <td><span class="btn_all_del"  ><a name="del_this_edu" >删除这条教育背景</a></span></td>
					</tr>
				  </table>
				<table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
				  <tr>
					<td class="col_name">学&nbsp;&nbsp;&nbsp;&nbsp;校</td>
					<td colspan="2"><input class="School" type="text" id="School" value="<?php echo ($data["school"]); ?>" maxlength="60" name="School" placeholder="例如：上海财经大学"/></td>
					<td class="col_name">院&nbsp;&nbsp;&nbsp;&nbsp;系</td>
					<td colspan="2"><input type="text" class="College" id="College" value="<?php echo ($data["departme"]); ?>" maxlength="60" name="College" placeholder="例如：金融学院"/></td>
				  </tr>
				  <tr>
					<td class="col_name">学&nbsp;&nbsp;&nbsp;&nbsp;历</td>
					<td colspan="2"><input type="text"  class="Academic" id="Academic" value="<?php echo ($data["education"]); ?>" maxlength="60" name="Academic" placeholder="例如：金融硕士"/></td>
					<td class="col_name">在校时间</td>
					<td colspan="2"><input type="text" class="SDuring" id="SDuring" value="<?php echo ($data["school_time"]); ?>" maxlength="60" name="SDuring" placeholder="例如：2011.09-2013.06"/></td>
				  </tr>
				  <tr>
					<td colspan="9" class="col_name" style="text-align:left;">所获学校奖励<span class="btn_pic_add" style="float:right;"><a class="edu_add" >添加</a></span></td>
				  </tr>
													 
				  <tr class="saw">
					<td colspan="9">
						<div  class="del_edu">
							<?php if(is_array($data["school_awards"])): $i = 0; $__LIST__ = $data["school_awards"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$awards): $mod = ($i % 2 );++$i;?><div  class="SAward">
							  <input type="text"  class="SAwardtext input620" id="SAwardtext" value="<?php echo ($awards); ?>" maxlength="60" name="SAwardtext" placeholder="例如：2011-2012全额奖学金"/>
							  <span class="btn_pic_del" style="float:right;"><a class="edu_del" name="edu_del"  >删除</a></span> 
							  </div><?php endforeach; endif; else: echo "" ;endif; ?>
						 </div>
					  </td>
				  </tr>
				  
				  

				  <tr>
					<td colspan="9" class="col_name" style="text-align:left;">其他在校经历<span class="btn_pic_add" ><a class="exp_add" >添加</a></span></td>
				  </tr>
				  <tr>
					<td colspan="9"><div class="del_exp">
						<?php if(is_array($data["school_experiences"])): $i = 0; $__LIST__ = $data["school_experiences"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$experiences): $mod = ($i % 2 );++$i;?><div class="Exper">
						  <textarea rows="6" class="weight620 otherAwardExp"  name="EduDetail" placeholder="例如：2011-2012学生会文艺部"><?php echo ($experiences); ?></textarea>
						  <span class="btn_pic_del" style="float:right;"><a class="exp_del" name="exp_del" >删除</a></span> </div><?php endforeach; endif; else: echo "" ;endif; ?>

					  </div></td>
				  </tr>
				  
				  <!--<tr>保存按钮
				  
					<td colspan="9">
					  
					</td>
				  </tr>-->
				</table>
						   
			  </div><?php endforeach; endif; else: echo "" ;endif; endif; ?>
        </div>
		
        <div class="btn_add_edu" style=""><span class="btn_edu_span"><a class="moreedu_add" >增加教育背景</a></span><input class="btn_pic" type="button"  name="save" id="saveedu" onclick="submitEduInfo();"  value="保存" />
             </div> 
      </div>
      
      <!--EDU end--> 
      
      <!--Work start-->
      <table border="0" cellspacing="0" cellpadding="0" class="paragraph_title paragraph_title_mdf">
        <tr>
          <td><span class="Bpispan_l" ></span>工作实习经历<a name="WORK" id="WORK"></a><span class="Bpispan_r" ></span></td>
          
        </tr>
      </table>

        <div  class="Work_edit">

		  <?php if(empty($Work)): ?><div  class="Work_add_1">
           <table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
			<tr>
			  <td><span class="btn_all_del"  ><a name="btn_this_work" >删除这条工作经历</a></span></td>
			</tr>
			 </table>
               <table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
                <tr>
                <td class="col_name">公&nbsp;&nbsp;&nbsp;&nbsp;司</td>
                <td colspan="2"><input type="text"  class="CompanyNOw" id="CompanyNOw" value="" maxlength="60" name="CompanyNOw" placeholder="例如：CICC"/></td>
                <td class="col_name">部门职位</td>
                <td colspan="2"><input type="text" class="DepartNow" id="DepartNow" value="" maxlength="60" name="DepartNow" placeholder="例如：投资银行部经理"/></td>
              </tr>
              <tr>
                <td class="col_name">薪&nbsp;&nbsp;&nbsp;&nbsp;酬</td>
                <td colspan="2"><select  name="NowPay" class="NowPay" id="NowPay">
                <OPTION VALUE=1 Selected>5万以下</OPTION>
                <OPTION VALUE=2>5～6万</OPTION>
                <OPTION VALUE=3>5～8万</OPTION>
                <OPTION VALUE=4>8～10万</OPTION>
                <OPTION VALUE=5 >10～15万</OPTION>
                <OPTION VALUE=6 >15～20万</OPTION>
                <OPTION VALUE=7 >20～30万</OPTION>
                <OPTION VALUE=8 >30～50万</OPTION>
              </select></td>
                <td class="col_name">工作时间</td>
                <td colspan="2"><input type="text" class="WorkTimeNow" id="WorkTimeNow" value="" maxlength="60" name="WorkTimeNow" placeholder="例如：2013.01-至今"/></td>
              </tr> 
             
                
              <tr>
                <td colspan="9" class="col_name" style="text-align:left;"> 工作内容<span class="btn_pic_add" style="float:right;margin-top:5px;"><a class="Work_add"  >添加</a></span></td>
              </tr>
              <tr>
                <td colspan="9"><div class="del_work">
                    <div class="WorkExper">
                      <textarea rows="3" class="weight620 WorkDetail" id="WorkDetail"  name="WorkDetail" placeholder="例如：负责XX项目..."></textarea>
                      <span class="btn_pic_del" ><a class="work_del" name="work_del" id="work_del" >删除</a></span> </div>
                  </div></td>
              </tr>
          
			</table>
          </div>
		  <?php else: ?> 
		  <?php if(is_array($Work)): $i = 0; $__LIST__ = $Work;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$W): $mod = ($i % 2 );++$i;?><div  class="Work_add_1">
           <table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
			<tr>
			  <td><span class="btn_all_del"  ><a name="btn_this_work" >删除这条工作经历</a></span></td>
			</tr>
			 </table>
               <table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
                <tr>
                <td class="col_name">公&nbsp;&nbsp;&nbsp;&nbsp;司</td>
                <td colspan="2"><input type="text"  class="CompanyNOw" id="CompanyNOw" value="<?php echo ($W["company_name"]); ?>" maxlength="60" name="CompanyNOw" placeholder="例如：CICC"/></td>
                <td class="col_name">部门职位</td>
                <td colspan="2"><input type="text" class="DepartNow" id="DepartNow" value="<?php echo ($W["department_position"]); ?>" maxlength="60" name="DepartNow" placeholder="例如：投资银行部经理"/></td>
              </tr>
              <tr>
                <td class="col_name">薪&nbsp;&nbsp;&nbsp;&nbsp;酬</td>
                <td colspan="2"><select  name="NowPay" class="NowPay" id="NowPay">
                <OPTION VALUE=1  <?php if($W["pay"] == 1): ?>selected<?php endif; ?> >5万以下</OPTION>
                <OPTION VALUE=2 <?php if($W["pay"] == 2): ?>selected<?php endif; ?> >5～6万</OPTION>
                <OPTION VALUE=3 <?php if($W["pay"] == 3): ?>selected<?php endif; ?> >5～8万</OPTION>
                <OPTION VALUE=4 <?php if($W["pay"] == 4): ?>selected<?php endif; ?> >8～10万</OPTION>
                <OPTION VALUE=5  <?php if($W["pay"] == 5): ?>selected<?php endif; ?> >10～15万</OPTION>
                <OPTION VALUE=6  <?php if($W["pay"] == 6): ?>selected<?php endif; ?> >15～20万</OPTION>
                <OPTION VALUE=7  <?php if($W["pay"] == 7): ?>selected<?php endif; ?> >20～30万</OPTION>
                <OPTION VALUE=8  <?php if($W["pay"] == 8): ?>selected<?php endif; ?> >30～50万</OPTION>
              </select></td>
                <td class="col_name">工作时间</td>
                <td colspan="2"><input type="text" class="WorkTimeNow" id="WorkTimeNow" value="<?php echo ($W["work_time"]); ?>" maxlength="60" name="WorkTimeNow" placeholder="例如：2013.01-至今"/></td>
              </tr> 
             
                
              <tr>
                <td colspan="9" class="col_name" style="text-align:left;"> 工作内容<span class="btn_pic_add" style="float:right;margin-top:5px;"><a class="Work_add"  >添加</a></span></td>
              </tr>
              <tr>
                <td colspan="9"><div class="del_work">
					<?php if(is_array($W["working_content"])): $i = 0; $__LIST__ = $W["working_content"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$content): $mod = ($i % 2 );++$i;?><div class="WorkExper">
                      <textarea rows="3" class="weight620 WorkDetail" id="WorkDetail"  name="WorkDetail" placeholder="例如：负责XX项目..."><?php echo ($content); ?></textarea>
                      <span class="btn_pic_del" ><a class="work_del" name="work_del" id="work_del" >删除</a></span> </div><?php endforeach; endif; else: echo "" ;endif; ?>
                  </div></td>
              </tr>
          
			</table>
          </div><?php endforeach; endif; else: echo "" ;endif; endif; ?>


      </div>
          <div class="btn_add_edu" ><span class="btn_edu_span"><a class="morework_add" >增加工作经历</a></span><input class="btn_pic" type="button"  name="save" id="saveedu" onclick="submitWorkInfo();"  value="保存" />
             </div> 
      
      <!--Work end--> 
      
     <!--OtherWork start-->
      <table border="0" cellspacing="0" cellpadding="0" class="paragraph_title paragraph_title_mdf">
        <tr>
          <td><span class="Bpispan_l" ></span>其他经历和个人能力<a name="OTHERWORK" id="OTHERWORK" ></a><span class="Bpispan_r" style=" width:280px;"></span></td>
          
        </tr>
      </table>

       
        <div class="OtherWork_edit">
          <div class="OtherWork_add_1">
           
               <table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left;">
               
              <tr>
                <td colspan="9" class="col_name" style="text-align:left;"> 其他经历<span class="btn_pic_add" style="float:right;margin-top:5px;"><a class="OtherWork_add">添加</a></span></td>
              </tr>
              <tr>
                <td colspan="9"><div class="del_otherwork" >

					<?php if(empty($Other["experiences"])): ?><div class="OtherWorkExper">
                      <textarea rows="3" class="weight620 OtherWorkDetail" id="OtherWorkDetail"  name="OtherWorkDetail" placeholder="例如：某NG3年以上工作经历..."></textarea>
                      <span class="btn_pic_del" ><a class="otherwork_del" name="otherwork_del">删除</a></span> </div>
					<?php else: ?> 
					<?php if(is_array($Other["experiences"])): $i = 0; $__LIST__ = $Other["experiences"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$o): $mod = ($i % 2 );++$i;?><div class="OtherWorkExper">
                      <textarea rows="3" class="weight620 OtherWorkDetail" id="OtherWorkDetail"  name="OtherWorkDetail" placeholder="例如：某NG3年以上工作经历..."><?php echo ($o); ?></textarea>
                      <span class="btn_pic_del" ><a class="otherwork_del" name="otherwork_del">删除</a></span> </div><?php endforeach; endif; else: echo "" ;endif; endif; ?>

                  </div></td>
              </tr>
              <tr>
                <td colspan="9" class="col_name" style="text-align:left;"> 其他个人能力<span class="btn_pic_add" style="float:right;margin-top:5px;"><a class="OtherAbi_add"  >添加</a></span></td>
              </tr>
              <tr>
                <td colspan="9"><div class="del_otherability" >
					<?php if(empty($Other["ability"])): ?><div class="OtherAbility">
                      <textarea rows="3" class="weight620 PersonalAbi" id="PersonalAbi"  name="PersonalAbi" placeholder="例如：精通红酒评鉴..."></textarea>
                      <span class="btn_pic_del" ><a class="otherability_del" name="otherability_del" >删除</a></span> </div>
					<?php else: ?> 
					<?php if(is_array($Other["ability"])): $i = 0; $__LIST__ = $Other["ability"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$a): $mod = ($i % 2 );++$i;?><div class="OtherAbility">
                      <textarea rows="3" class="weight620 PersonalAbi" id="PersonalAbi"  name="PersonalAbi" placeholder="例如：精通红酒评鉴..."><?php echo ($a); ?></textarea>
                      <span class="btn_pic_del" ><a class="otherability_del" name="otherability_del" >删除</a></span> </div><?php endforeach; endif; else: echo "" ;endif; endif; ?>

                  </div></td>
              </tr>
           <tr><!--保存按钮-->
            <td colspan="5" align="left" style="text-align:right;"><input class="btn_pic" type="button" name="saveOtherWork" id="saveOtherWork" onclick="submitOtherWorkInfo();" style="cursor:pointer" value="保存" /></td>
          </tr>
          
</table>
          </div>
      </div>
  
      <!--OtherWork end--> 
   
  <div class="btn_preview" >
  <table border="0" cellspacing="0" cellpadding="0" class="weight780_mdf weight670" style="float:left; height:50px;">
  <tr>
  <td colspan="9"><span class="btn_preview_span" ><a href="Preview/" target="_blank" class="otherability_del" name="otherability_del" >简历预览</a></span> 
  </td>
  </tr>
  </table>
  </div>     
    
    </ul>
    <ul class="rew_conr rew_conr_mdf" id="contentHighSetLeft">
      <li class="big_btn_resume btn_resume_mdf" style="width:auto;margin-left:0">
        <div class="icon_width icon_width_mdf" style="margin-right:10px;"> <span class="text_red">&nbsp;&nbsp;></span> <a href="/dscj/index.php/Home/ApplicantUser/Index/#BPI">我的求职信息</a> </div>
      </li>
      <li class="btn_resume btn_resume_mdf">
        <div class="icon_width icon_width_mdf"> <span class="text_red">&nbsp;&nbsp;*</span> <a href="/dscj/index.php/Home/ApplicantUser/Index/#BPI">个人基本信息</a> </div>
        <img src="/dscj/Public/images/icon_need.gif" class="icon_need" align="absmiddle" id="Base_Complete" style="display:none;"/> <img src="/dscj/Public/images/icon_incomplete.gif" class="icon_need" align="absmiddle" id="Base_Incomplete" style="display:none;" /> </li>
      <li class="btn_resume btn_resume_mdf">
        <div class="icon_width icon_width_mdf">&nbsp;&nbsp;&nbsp;&nbsp; <a href="/dscj/index.php/Home/ApplicantUser/Index/#OTHER">求职意向</a> </div>
        <img src="/dscj/Public/images/icon_need.gif" class="icon_need" align="absmiddle" id="Other_Complete" style="display:none;"/> <img src="/dscj/Public/images/icon_incomplete.gif" class="icon_need" align="absmiddle" id="Other_Incomplete" style="display:none;" /> </li>
      <li class="btn_resume btn_resume_mdf">
        <div class="icon_width icon_width_mdf"> &nbsp;&nbsp;&nbsp;&nbsp; <a href="/dscj/index.php/Home/ApplicantUser/Index/#EDU">教育背景</a> </div>
        <img src="/dscj/Public/images/icon_need.gif" class="icon_need" align="absmiddle" id="Edu_Complete" style="display:none;"/> <img src="/dscj/Public/images/icon_incomplete.gif" class="icon_need" align="absmiddle" id="Edu_Incomplete" style="display:none;" /> </li>
      <li class="btn_resume btn_resume_mdf">
        <div class="icon_width icon_width_mdf"> &nbsp;&nbsp;&nbsp;&nbsp; <a href="/dscj/index.php/Home/ApplicantUser/Index/#WORK">工作实习经历</a> </div>
        <img src="/dscj/Public/images/icon_need.gif" class="icon_need" align="absmiddle" id="Work_Complete" style="display:none;"/> <img src="/dscj/Public/images/icon_incomplete.gif" class="icon_need" align="absmiddle" id="Work_Incomplete" style="display:none;" /> </li>
      <li class="btn_resume btn_resume_mdf">
        <div class="icon_width icon_width_mdf">&nbsp;&nbsp;&nbsp;&nbsp; <a href="/dscj/index.php/Home/ApplicantUser/Index/#OTHERWORK">其他经历和个人能力</a> </div>
        <img src="/dscj/Public/images/icon_need.gif" class="icon_need" align="absmiddle" id="Lan_Complete" style="display:none;"/> <img src="/dscj/Public/images/icon_incomplete.gif" class="icon_need" align="absmiddle" id="Lan_Incomplete" style="display:none;" /> </li>
      <li class="big_btn_resume btn_resume_mdf" style="width:auto;margin-left:0">
        <div class="icon_width icon_width_mdf" style="margin-right:10px;"> <span class="text_red">&nbsp;&nbsp;></span> <a class="invite" href='/dscj/index.php/Home/ApplicantUser/Invite/type/1'>收到的面试邀请</a> </div>
      </li>
      <li class="btn_resume btn_resume_mdf">
        <div class="icon_width icon_width_mdf">&nbsp;&nbsp;&nbsp;&nbsp; <a class="untreated" href='/dscj/index.php/Home/ApplicantUser/Invite/type/2'>未处理的面试邀请(3)</a> </div>
      </li>
      <li class="btn_resume btn_resume_mdf">
        <div class="icon_width icon_width_mdf">&nbsp;&nbsp;&nbsp;&nbsp; <a class="past_invite" href='/dscj/index.php/Home/ApplicantUser/Invite/type/3'>过去的面试邀请(11)</a> </div>
      </li>
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