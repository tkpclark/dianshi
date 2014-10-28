// JavaScript Document
//预览图片
function previewImage(file)  
{  
  var MAXWIDTH  = 120;  
  var MAXHEIGHT = 160;  
  var div = document.getElementById('preview');  
  if (file.files && file.files[0])  
  {  
    div.innerHTML = '<img id=imghead>';  
    var img = document.getElementById('imghead');  
    img.onload = function(){  
      var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);  
      img.width = rect.width;  
      img.height = rect.height;  
      img.style.marginLeft = rect.left+'px';  
      img.style.marginTop = rect.top+'px';  
    }  
    var reader = new FileReader();  
    reader.onload = function(evt){img.src = evt.target.result;}  
    reader.readAsDataURL(file.files[0]);  
  }  
  else  
  {  
    var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';  
    file.select();  
    var src = document.selection.createRange().text;  
    div.innerHTML = '<img id=imghead>';  
    var img = document.getElementById('imghead');  
    img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;  
    var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);  
    status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);  
    div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;margin-left:"+rect.left+"px;"+sFilter+src+"\"'></div>";  
  }  
}  
function clacImgZoomParam( maxWidth, maxHeight, width, height ){  
    var param = {top:0, left:0, width:width, height:height};  
    if( width>maxWidth || height>maxHeight )  
    {  
        rateWidth = width / maxWidth;  
        rateHeight = height / maxHeight;  
          
        if( rateWidth > rateHeight )  
        {  
            param.width =  maxWidth;  
            param.height = Math.round(height / rateWidth);  
        }else  
        {  
            param.width = Math.round(width / rateHeight);  
            param.height = maxHeight;  
        }  
    }  
      
    param.left = Math.round((maxWidth - param.width) / 2);  
    param.top = Math.round((maxHeight - param.height) / 2);  
    return param;  
}
//保存个人信息
function submitBaseInfo() {

	 var photo = $("#fileToUpload").prev().find("img").attr('src');
	 var name_value = $("#Name").val();
	 var gender_value = $('input[name="Gender"]:checked').val();
 	 var email_value = $("#email").val();
	 var school_value = $("#school").val();
	 var mobile_value = $("#Mobile").val();
	 var address_value =$("#Address").val();
	 var company_value = $("#Company").val();
	 var depart_value =$("#Depart").val();
	 var job_value =$("#Job").val();
	 var wt_value =$("#Worktime").val();
	 var jg_value =$("#JobGrade").val();

	var fd = new FormData();
	fd.append("photo", photo);
	fd.append("name", name_value);
	fd.append("gender", gender_value);
	fd.append("school", school_value);
	fd.append("email", email_value);
	fd.append("mobile", mobile_value);
	fd.append("address", address_value);
	fd.append("company", company_value);
	fd.append("depart", depart_value);
	fd.append("job", job_value);
	fd.append("wt", wt_value);
	fd.append("jg", jg_value);
	fd.append("fileToUpload", document.getElementById('fileToUpload').files[0]);

	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", uploadComplete, false);
	xhr.addEventListener("error", uploadFailed, false);
	xhr.addEventListener("abort", uploadCanceled, false);
	xhr.open("POST", "Information/");
	xhr.send(fd);
}
function uploadComplete(evt) {
/* 接受返回值 */
	if(evt.target.responseText=='OK'){
		alert("个人基本信息保存成功！");
	}else{
		alert(evt.target.responseText);
	}
}

function uploadFailed(evt) {
	alert("There was an error attempting to upload the file.");
}

function uploadCanceled(evt) {
	alert("The upload has been canceled by the user or the browser dropped the connection.");
}

 //保存求职意向
 /*function submitPurposeInfo(){
	 var selecte_value="";
	 $(".span_selected").each(
	 function() {
		 selecte_value += $(this).text()+"|--|";
		 });
	 var jt_value = $("#JobTerm").val();
	 var a1_value = $("#Area1").val();
 	 var a2_value = $("#Area2").val();
	 var a3_value = $("#Area3").val();
	 var wp_value = $("#WantPay").val();
	 var je_value = $("#JobEnvir").val();
	 var jd_value = $("#JobDirec").val();
	 
       $.ajax({
	 		  cache:"False",
	           type:"post",
			   url:"JobIntension/",
			   data:{ 
			       jt:jt_value,
			       a1:a1_value,
				   a2:a2_value,
				   a3:a3_value,
				   wp:wp_value,
				   je:je_value,
				   jd:jd_value,
				   sv:selecte_value
				   },
			   success : function(msg) {
				   if (msg == "OK") {
                        alert("求职意向保存成功！");
                       
                    }
                    else if (msg == "Error") {
                        alert("求职意向保存失败，请重新填写！");
                    }else{
						alert(msg);
					}
						
					}
	 
	 })
 }*/
 function submitPurposeInfo(){
	 
	 //提交投资
	 var touzi_value= "";
	touzi_value= $('.touzi_span_selected').text();
	 var touzi_more_value="";
	 if(touzi_value != ""){
		$(".touzi_more_span_selected").each(
	 function() {
		 touzi_more_value += "|++|"+$(this).text();
		 }); 
	 }
	var touzi_value_all = touzi_value + touzi_more_value;
	
	//提交一级
	 var yiji_value= "";
	 yiji_value= $('.yiji_span_selected').text();
	 var yiji_more_value="";
	 if(yiji_value != ""){
		$(".yiji_more_span_selected").each(
	 function() {
		 yiji_more_value += "|++|"+$(this).text();
		 }); 
	 }
	var yiji_value_all = yiji_value + yiji_more_value;
	
	
	//提交二级按机构
	 var erji_jg_value= "";
	 erji_jg_value= $('.erji_span_selected').text();
	 var erji_jg_more_value="";
	 if(erji_jg_value != ""){
		$(".erji_jg_span_selected").each(
	 function() {
		 erji_jg_more_value += "|++|"+$(this).text();
		 }); 
	 }
	var erji_jg_value_all = erji_jg_value + erji_jg_more_value;
	
	//提交二级按资产
	 var erji_zc_value= "";
	 erji_zc_value= $('.erji_span_selected').text();
	 var erji_zc_more_value="";
	 if(erji_zc_value != ""){
		$(".erji_zc_span_selected").each(
	 function() {
		 erji_zc_more_value += "|++|"+$(this).text();
		 }); 
	 }
	var erji_zc_value_all = erji_zc_value + erji_zc_more_value;
	
	//提交券商
	var quanshang_value= "";
	quanshang_value= $('.quanshang_span_selected').text();
	 var quanshang_more_value="";
	 if(quanshang_value != ""){
		$(".quanshang_more_span_selected").each(
	 function() {
		 quanshang_more_value += "|++|"+$(this).text();
		 }); 
	 }
	var quanshang_value_all = quanshang_value + quanshang_more_value;
	
		 
	 var jt_value = $("#JobTerm").val();
	 var a1_value = $("#Area1").val();
 	 var a2_value = $("#Area2").val();
	 var a3_value = $("#Area3").val();
	 var wp_value = $("#WantPay").val();
	 var je_value = $("#JobEnvir").val();
	 //求职意向分组递交,分别是：投资，一级，二级按机构，二级按资产，券商，每一项是一级标题在第一个，二级标题随后
	 var yx_touzi = touzi_value_all;
	 var yx_yiji = yiji_value_all;
	 var yx_erji_jg = erji_jg_value_all;
	 var yx_erji_zc = erji_zc_value_all;
	 var yx_quanshang = quanshang_value_all;
	 
       $.ajax({
	 		  cache:"False",
	           type:"post",
			   url:"JobIntension/",
			   data:{ 
			       jt:jt_value,
			       a1:a1_value,
				   a2:a2_value,
				   a3:a3_value,
				   wp:wp_value,
				   je:je_value,
				   touzi:yx_touzi,
				   yiji:yx_yiji,
				   erji_jg:yx_erji_jg,
				   erji_zc:yx_erji_zc,
				   quanshang:yx_quanshang,
				   
				   },
			   success : function(msg) {
				   if (msg == "OK") {
                        alert("求职意向保存成功！");
                       
                    }
                    else if (msg == "Error") {
                        alert("求职意向保存失败，请重新填写！");
                    }else{
						alert(msg);
					}
						
					}
	 
	 })
 }
  /*
  提交教育信息
  */
 function submitEduInfo(){
	 
	 var arr1= [], arr2= [] ,arr3=[],arr4=[],arr5=[],arr6=[];
	
	 
     var school,college,academic,sduring,sat,award_value,otherAward_value;

 $.each($('.eduEdit'),function(){
	var school_value = $(this).find('.School').val();
	var college_value = $(this).find('.College').val();
	var academic_value = $(this).find('.Academic').val();
	var sduring_value = $(this).find('.SDuring').val();

  arr1.push(school_value);
  arr4.push(college_value);
  arr5.push(academic_value);
  arr6.push(sduring_value);

	})
	
	
$.each($('.eduEdit'),function(){
	var arr2_aw = [];//本次循环创建数组
   $.each($(this).find('.SAwardtext'), function() {
	     
		 award_value= $(this).val();
		 arr2_aw.push(award_value);
		 });//不能用val,用.each再循环出来，push进去，再push到arr2
   arr2.push(arr2_aw);
 })  
  
$.each($('.eduEdit'),function(){
  
   var arr3_aw= [];
   $.each($(this).find('.otherAwardExp'), function() {
		 otherAward_value= $(this).val();
		 arr3_aw.push(otherAward_value);
		 });//不能用val,用.each再循环出来，push进去，再push到arr2
   arr3.push(arr3_aw);
  
})
	 
       $.ajax({
	 	 		  cache:"False",
	           type:"post",
			   url:"EducationBG/",
			   data:{ 
			       school:arr1,
			       college:arr4,
				   academic:arr5,
				   sduring:arr6,
				   Sat:arr2,
				   otherExp:arr3,
				   },
			   success : function(msg) {
				  if (msg == "OK") {
                        alert("教育背景保存成功！");
                       
                    }
                    else if (msg == "Error") {
                        alert("教育信息保存失败，请重新填写！");
                    }else{
						alert(msg);
					}
						
					}
	 
	 })
 }
 
 /*
  提交工作经历信息
  */
 function submitWorkInfo(){
	 
	 var arr1= [], arr2= [] ,arr3=[],arr4=[],arr5=[],WorkDetail_value;
	

 $.each($('.Work_add_1'),function(){
	var CompanyNOw_value = $(this).find('.CompanyNOw').val();
	var DepartNow_value = $(this).find('.DepartNow').val();
	var NowPay_value = $(this).find('.NowPay').val();
	var WorkTimeNow_value = $(this).find('.WorkTimeNow').val();

  arr1.push(CompanyNOw_value);
  arr2.push(DepartNow_value);
  arr3.push(NowPay_value);
  arr5.push(WorkTimeNow_value);
	})
	
	
$.each($('.Work_add_1'),function(){
	var arr4_WorkDetail = [];//本次循环创建数组
   $.each($(this).find('.WorkDetail'), function() {
	     
		 WorkDetail_value= $(this).val();
		 arr4_WorkDetail.push(WorkDetail_value);
		 });//不能用val,用.each再循环出来，push进去，再push到arr2
   arr4.push(arr4_WorkDetail);
 })  
  
	 
       $.ajax({
 	 		  cache:"False",
	           type:"post",
			   url:"WorkHistory/",
			   data:{ 
			       cn:arr1,
			       dn:arr2,
				   np:arr3,
				   wd:arr4,
					wt:arr5
    			   },
			   success : function(msg) {
				   if (msg == "OK") {
                        alert("工作经历保存成功！");
                       
                    }
                    else if (msg == "Error") {
                        alert("工作经历保存失败，请重新填写！");
                    }else{
						alert(msg);
					}
						
					}
	 
	 })
 }
 
 /*
  提交其他工作和个人能力信息
  */
 function submitOtherWorkInfo(){
	 
	 var OtherWorkDetail= "",PersonalAbi="";
	
$.each($('.OtherWorkDetail'),function(){
	OtherWorkDetail+=$(this).val()+"|--|";
   
 })  
 
 $.each($('.PersonalAbi'),function(){
	PersonalAbi+=$(this).val()+"|--|";
 
 })
  
       $.ajax({
 	 		  cache:"False",
	           type:"post",
			   url:"Other/",
			   data:{ 
			       owd:OtherWorkDetail,
				   oa:PersonalAbi
			       
				   
    			   },
			   success : function(msg) {
				   if (msg == "OK") {
                        alert("其他工作经历和个人能力保存成功！");
                       
                    }
                    else if (msg == "Error") {
                        alert("其他工作经历和个人能力保存失败，请重新填写！");
                    }else{
						alert(msg);
					}
						
					}
	 
	 })
 }
 
 $(document).ready(function(){
$("#JobDirec,#Field").change(function(){
  if($(this).val() == 1){
  $("#finServ").show().siblings("div").hide();
  }
  if($(this).val() == 2){
  $("#oneInvest").show().siblings("div").hide();
  }
  if($(this).val() == 3){
  $("#twoInvest").show().siblings("div").hide();
  }
  if($(this).val() == 4){
  $("#sales").show().siblings("div").hide();
  }
});


$("span.btn_pic").toggle(
function () { 
$(this).addClass("span_selected"); }, 
function () { 
$(this).removeClass("span_selected"); });

//投资分类
$("span.touzi_btn_pic").toggle(
function () { 
$(this).addClass("touzi_more_span_selected"); }, 
function () { 
$(this).removeClass("touzi_more_span_selected"); });
//一级分类
$("span.yiji_btn_pic").toggle(
function () { 
$(this).addClass("yiji_more_span_selected"); }, 
function () { 
$(this).removeClass("yiji_more_span_selected"); });
//二级
//机构
$("span.erji_jg_btn_pic").toggle(
function () { 
$(this).addClass("erji_jg_span_selected"); }, 
function () { 
$(this).removeClass("erji_jg_span_selected"); });
//二级资产
$("span.erji_zc_btn_pic").toggle(
function () { 
$(this).addClass("erji_zc_span_selected"); }, 
function () { 
$(this).removeClass("erji_zc_span_selected"); });
//券商
$("span.quanshang_btn_pic").toggle(
function () { 
$(this).addClass("quanshang_more_span_selected"); }, 
function () { 
$(this).removeClass("quanshang_more_span_selected"); });


$("span.touzi_span").toggle(
function () { 
$(this).addClass("touzi_span_selected");
$('.touzi_div').show(); }, 
function () { 
$(this).removeClass("touzi_span_selected");
 $('.touzi_div').hide();});
 
 $("span.yiji_span").toggle(
function () { 
$(this).addClass("yiji_span_selected");
$('.yiji_div').show(); }, 
function () { 
$(this).removeClass("yiji_span_selected");
 $('.yiji_div').hide();});
 
 $("span.erji_span").toggle(
function () { 
$(this).addClass("erji_span_selected");
$('.erji_div').show(); }, 
function () { 
$(this).removeClass("erji_span_selected");
 $('.erji_div').hide();});
 
 $("span.quanshang_span").toggle(
function () { 
$(this).addClass("quanshang_span_selected");
$('.quanshang_div').show(); }, 
function () { 
$(this).removeClass("quanshang_span_selected");
 $('.quanshang_div').hide();});


//教育信息增删
//temp = $(".SAward");
 $("#Edu_info").on('click','a[name=edu_del]',function(){
  $(this).parent().parent().remove();
    })
 $("#Edu_info").on('click','.edu_add',function(){
   	var target = $(this);
	var div = target.parent().parent().parent().next().find('.del_edu');
	//var item = target.parent().parent().parent().parent().parent().find('.SAward').first();
	var item1 ="<div class=\"SAward\"><input type=\"text\"  class=\"SAwardtext input620\" id=\"SAwardtext\" value=\"\" maxlength=\"60\" name=\"SAwardtext\" placeholder=\"例如：2011-2012全额奖学金\"/><span class=\"btn_pic_del\" style=\"float:right;\"><a class=\"edu_del\" name=\"edu_del\">删除</a></span></div>";
	//item.clone(true).appendTo(div);
	$(item1).appendTo(div);
	
 })
 
  $("#Edu_info").on('click','a[name=exp_del]',function(){
  $(this).parent().parent().remove();
    })
 $("#Edu_info").on('click','.exp_add',function(){
	var target1 = $(this);
 	var div1 = target1.parent().parent().parent().next().find('.del_exp');
	//var item = target1.parent().parent().parent().parent().parent().find('.Exper').first();
	var item1 = "<div class=\"Exper\"><textarea rows=\"6\" class=\"weight620 otherAwardExp\"  name=\"EduDetail\" placeholder=\"例如：2011-2012学生会文艺部\"></textarea><span class=\"btn_pic_del\" style=\"float:right;\"><a class=\"exp_del\" name=\"exp_del\" >删除</a></span> </div>";
	$(item1).appendTo(div1);
    //item.clone(true).appendTo(div1);
 }) 

 
 var temp_addmoreedu = $(".eduEdit:first");
 $(".Edu_edit").on('click','a[name=del_this_edu]',function(){
  $(this).parent().parent().parent().parent().parent().parent().remove();
    })
 $("#Edu_info").on('click','.moreedu_add',function(){
	var item3 =  "<div class=\"eduEdit\" ><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"weight780_mdf weight670\" style=\"float:left;\"><tr><td><span class=\"btn_all_del\"  ><a name=\"del_this_edu\" >删除这条教育背景</a></span></td></tr></table><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"weight780_mdf weight670\" style=\"float:left;\"><tr><td class=\"col_name\">学&nbsp;&nbsp;&nbsp;&nbsp;校</td><td colspan=\"2\"><input class=\"School\" type=\"text\" id=\"School\" value=\"\" maxlength=\"60\" name=\"School\" placeholder=\"例如：上海财经大学\"/></td><td class=\"col_name\">院&nbsp;&nbsp;&nbsp;&nbsp;系</td><td colspan=\"2\"><input type=\"text\" class=\"College\" id=\"College\" value=\"\" maxlength=\"60\" name=\"College\" placeholder=\"例如：金融学院\"/></td></tr><tr><td class=\"col_name\">学&nbsp;&nbsp;&nbsp;&nbsp;历</td><td colspan=\"2\"><input type=\"text\"  class=\"Academic\" id=\"Academic\" value=\"\" maxlength=\"60\" name=\"Academic\" placeholder=\"例如：金融硕士\"/></td><td class=\"col_name\">在校时间</td><td colspan=\"2\"><input type=\"text\" class=\"SDuring\" id=\"SDuring\" value=\"\" maxlength=\"60\" name=\"SDuring\" placeholder=\"例如：2011.09-2013.06\"/></td></tr><tr><td colspan=\"9\" class=\"col_name\" style=\"text-align:left;\">所获学校奖励<span class=\"btn_pic_add\" style=\"float:right;\"><a class=\"edu_add\" >添加</a></span></td></tr><tr class=\"saw\"><td colspan=\"9\"><div  class=\"del_edu\"><div  class=\"SAward\"><input type=\"text\"  class=\"SAwardtext input620\" id=\"SAwardtext\" value=\"\" maxlength=\"60\" name=\"SAwardtext\" placeholder=\"例如：2011-2012全额奖学金\"/><span class=\"btn_pic_del\" style=\"float:right;\"><a class=\"edu_del\" name=\"edu_del\"  >删除</a></span></div></div></td></tr><tr><td colspan=\"9\" class=\"col_name\" style=\"text-align:left;\">其他在校经历<span class=\"btn_pic_add\" ><a class=\"exp_add\" >添加</a></span></td></tr><tr><td colspan=\"9\"><div class=\"del_exp\"><div class=\"Exper\"><textarea rows=\"6\" class=\"weight620 otherAwardExp\"  name=\"EduDetail\" placeholder=\"例如：2011-2012学生会文艺部\"></textarea><span class=\"btn_pic_del\" style=\"float:right;\"><a class=\"exp_del\" name=\"exp_del\" >删除</a></span></div></div></td></tr></table></div>";
  $(item3).appendTo($(".Edu_edit"));
 }) 
 
 
/* 工作经历增删 */     
  $(".Work_edit_add_del").on('click','a[name=work_del]',function(){
  $(this).parent().parent().remove();
    })
 $(".Work_edit_add_del").on('click','.Work_add',function(){
    var target2 = $(this);
	var div2 = target2.parent().parent().parent().next().find('.del_work');
	//var item = target2.parent().parent().parent().parent().parent().find('.WorkExper').first();
	var item1 = "<div class=\"WorkExper\"><textarea rows=\"3\" class=\"weight620 WorkDetail\" id=\"WorkDetail\"  name=\"WorkDetail\" placeholder=\"例如：负责XX项目...\"></textarea><span class=\"btn_pic_del\" ><a class=\"work_del\" name=\"work_del\" id=\"work_del\" >删除</a></span></div>";
	$(item1).appendTo(div2);
   })
 

 var temp_addwork = $(".Work_add_1:first");
 $(".Work_edit_add_del").on('click','a[name=btn_this_work]',function(){
  $(this).parent().parent().parent().parent().parent().parent().remove();
    })
 $(".Work_edit_add_del").on('click','.morework_add',function(){
	 var item2 = "<div  class=\"Work_add_1\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"weight780_mdf weight670\" style=\"float:left;\"><tr><td><span class=\"btn_all_del\"  ><a name=\"btn_this_work\" >删除这条工作经历</a></span></td></tr></table><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"weight780_mdf weight670\" style=\"float:left;\"><tr><td class=\"col_name\">公&nbsp;&nbsp;&nbsp;&nbsp;司</td><td colspan=\"2\"><input type=\"text\"  class=\"CompanyNOw\" id=\"CompanyNOw\" value=\"\" maxlength=\"60\" name=\"CompanyNOw\" placeholder=\"例如：CICC\"/></td><td class=\"col_name\">部门职位</td><td colspan=\"2\"><input type=\"text\" class=\"DepartNow\" id=\"DepartNow\" value=\"\" maxlength=\"60\" name=\"DepartNow\" placeholder=\"例如：投资银行部经理\"/></td></tr><tr><td class=\"col_name\">薪&nbsp;&nbsp;&nbsp;&nbsp;酬</td><td colspan=\"2\"><select  name=\"NowPay\" class=\"NowPay\" id=\"NowPay\"><OPTION VALUE=1 Selected>5万以下</OPTION><OPTION VALUE=2>5～6万</OPTION><OPTION VALUE=3>5～8万</OPTION><OPTION VALUE=4>8～10万</OPTION><OPTION VALUE=5 >10～15万</OPTION><OPTION VALUE=6 >15～20万</OPTION><OPTION VALUE=7 >20～30万</OPTION><OPTION VALUE=8 >30～50万</OPTION></select></td><td class=\"col_name\">工作时间</td><td colspan=\"2\"><input type=\"text\" class=\"WorkTimeNow\" id=\"WorkTimeNow\" value=\"\" maxlength=\"60\" name=\"WorkTimeNow\" placeholder=\"例如：2013.01-至今\"/></td></tr><tr><td colspan=\"9\" class=\"col_name\" style=\"text-align:left;\"> 工作内容<span class=\"btn_pic_add\" style=\"float:right;margin-top:5px;\"><a class=\"Work_add\"  >添加</a></span></td></tr><tr><td colspan=\"9\"><div class=\"del_work\"><div class=\"WorkExper\"><textarea rows=\"3\" class=\"weight620 WorkDetail\" id=\"WorkDetail\"  name=\"WorkDetail\" placeholder=\"例如：负责XX项目...\"></textarea><span class=\"btn_pic_del\" ><a class=\"work_del\" name=\"work_del\" id=\"work_del\" >删除</a></span> </div></div></td></tr></table></div>";
  $(item2).appendTo($(".Work_edit"));
 }) 


/*其他工作和个人能力增删*/       
  $(".OtherWork_add_1").on('click','a[name=otherwork_del]',function(){
  $(this).parent().parent().remove();
    })
 $(".OtherWork_add_1").on('click','.OtherWork_add',function(){
	var target3 = $(this);
	var div3 = target3.parent().parent().parent().next().find('.del_otherwork');
	//var item = target3.parent().parent().parent().parent().parent().find('.OtherWorkExper').first();
	var item1 = "<div class=\"OtherWorkExper\"><textarea rows=\"3\" class=\"weight620 OtherWorkDetail\" id=\"OtherWorkDetail\"  name=\"OtherWorkDetail\" placeholder=\"例如：某NG3年以上工作经历...\"></textarea><span class=\"btn_pic_del\" ><a class=\"otherwork_del\" name=\"otherwork_del\">删除</a></span></div>";
	$(item1).appendTo(div3);
   })
   
$(".OtherWork_add_1").on('click','a[name=otherability_del]',function(){
  $(this).parent().parent().remove();
    })
 $(".OtherWork_add_1").on('click','.OtherAbi_add',function(){
	var target4 = $(this);
	var div4 = target4.parent().parent().parent().next().find('.del_otherability');
	//var item = target4.parent().parent().parent().parent().parent().find('.OtherAbility').first();
	var item2 = "<div class=\"OtherAbility\"><textarea rows=\"3\" class=\"weight620 PersonalAbi\" id=\"PersonalAbi\"  name=\"PersonalAbi\" placeholder=\"例如：精通红酒评鉴...\"></textarea><span class=\"btn_pic_del\" ><a class=\"otherability_del\" name=\"otherability_del\" >删除</a></span> </div>";
	$(item2).appendTo(div4);
   })
});