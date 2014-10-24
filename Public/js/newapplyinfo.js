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

}); 


$(document).ready(function(){        
  $("a[name=work_del]").on('click',function(){
  $(this).parent().parent().remove();
    })
 $(".Work_add").on('click',function(){
    var target2 = $(this);
	var div2 = target2.parent().parent().parent().next().find('.del_work');
	var item = target2.parent().parent().parent().parent().parent().find('.WorkExper').first();
	item.clone(true).appendTo(div2);
   })
 

 var temp_addwork = $(".Work_add_1:first");
 $("a[name=btn_this_work]").on('click',function(){
  $(this).parent().parent().parent().parent().parent().parent().remove();
    })
 $(".morework_add").on('click',function(){
  temp_addwork.clone(true).appendTo($(".Work_edit"));
 }) 
})

$(document).ready(function(){        
  $("a[name=otherwork_del]").on('click',function(){
  $(this).parent().parent().remove();
    })
 $(".OtherWork_add").on('click',function(){
	var target3 = $(this);
	var div3 = target3.parent().parent().parent().next().find('.del_otherwork');
	var item = target3.parent().parent().parent().parent().parent().find('.OtherWorkExper').first();
	item.clone(true).appendTo(div3);
   })
   
$("a[name=otherability_del]").on('click',function(){
  $(this).parent().parent().remove();
    })
 $(".OtherAbi_add").on('click',function(){
	var target4 = $(this);
	var div4 = target4.parent().parent().parent().next().find('.del_otherability');
	var item = target4.parent().parent().parent().parent().parent().find('.OtherAbility').first();
	item.clone(true).appendTo(div4);
   })
})