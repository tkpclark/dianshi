// JavaScript Document
function submitBaseInfo(){
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

       $.ajax({
	 		   cache:"False",
	           type:"post",
			   url:"index.php",
			   data:{ 
			       name:name_value,
			       gender:gender_value,
				   email:email_value,
				   mobile:mobile_value,
				   address:address_value,
				   company:company_value,
				   depart:depart_value,
				   job:job_value,
				   wt:wt_value,
				   jg:jg_value
				   },
			   success : function(msg) {
				         if (msg == "OK") {
                        alert("个人基本信息保存成功！");
                       
                    }
                    else if (msg == "Error") {
                        alert("个人基本信息保存失败，请重新填写！");
                    }
					}
	 
	 })
 }
 //保存求职意向
 function submitPurposeInfo(){
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
			   url:"apply.php",
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
			   url:"edu.php",
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
                    }
						
					}
	 
	 })
 }
 
 /*
  提交工作经历信息
  */
 function submitWorkInfo(){
	 
	 var arr1= [], arr2= [] ,arr3=[],arr4=[],WorkDetail_value;
	

 $.each($('.Work_add_1'),function(){
	var CompanyNOw_value = $(this).find('.CompanyNOw').val();
	var DepartNow_value = $(this).find('.DepartNow').val();
	var NowPay_value = $(this).find('.NowPay').val();

  arr1.push(CompanyNOw_value);
  arr2.push(DepartNow_value);
  arr3.push(NowPay_value);
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
			   url:"work.php",
			   data:{ 
			       cn:arr1,
			       dn:arr2,
				   np:arr3,
				   wd:arr4
    			   },
			   success : function(msg) {
				   if (msg == "OK") {
                        alert("工作经历保存成功！");
                       
                    }
                    else if (msg == "Error") {
                        alert("工作经历保存失败，请重新填写！");
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
			   url:"otherWorkAbility.php",
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


$("span.btn_pic").find('a').toggle(
function () { 
$(this).addClass("span_selected"); }, 
function () { 
$(this).removeClass("span_selected"); });
}); 



/*$(document).ready(function(){        
 //temp = $(".SAward");
 $("a[name=edu_del]").on('click',function(){
  $(this).parent().parent().remove();
    })
 $(".edu_add").on('click',function(){
   	var target = $(this);
	var div = target.parent().parent().parent().next().find('.del_edu');
	var item = target.parent().parent().parent().parent().parent().find('.SAward').first();
	item.clone(true).appendTo(div);
 })
 
 var temp_exp = $(".Exper:first");
 $("a[name=exp_del]").on('click',function(){
  $(this).parent().parent().remove();
    })
 $(".exp_add").on('click',function(){
	var target1 = $(this);
 	var div1 = target1.parent().parent().parent().next().find('.del_exp');
	var item = target1.parent().parent().parent().parent().parent().find('.Exper').first();
    item.clone(true).appendTo(div1);
 }) 
 
 var temp_addmoreedu = $(".eduEdit:first");
 $("a[name=del_this_edu]").live('click',function(){
  $(this).parent().parent().parent().parent().parent().parent().remove();
    })
 $(".moreedu_add").on('click',function(){
	 
  temp_addmoreedu.clone(true).appendTo($(".Edu_edit"));
 }) 
})*/


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