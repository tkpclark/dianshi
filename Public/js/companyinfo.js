// JavaScript Document
//dongxueying companyinfo js
function submitCompanyInfo(){
	var selecte_feild_value="";
	 $(".span_selected").each(
	 function() {
		 selecte_feild_value += $(this).text()+"|--|";
		 });
	 var CompanyName_value = $("#CompanyName").val();
	 var Offic_value = $("#Offic").val();
 	 var URL_value = $("#URL").val();
	 var PersonNum_value = $("#PersonNum").val();
	 var Asset_value = $("#Asset").val();
	 var CompanyIntro_value = $("#CompanyIntro").val();
	 var CompanyAdvan_value = $("#CompanyAdvan").val();
	 var CompanyEval_value = $("#CompanyEval").val();

	 
       $.ajax({
	 		  cache:"False",
	           type:"post",
			   url:"companyinfo.php",
			   data:{ 
			       CompanyName:CompanyName_value,
			       Offic:Offic_value,
				   URL:URL_value,
				   Feild:selecte_feild_value,
				   PersonNum:PersonNum_value,
				   Asset:Asset_value,
				   CompanyIntro:CompanyIntro_value,
				   CompanyAdvan:CompanyAdvan_value,
				   CompanyEval:CompanyEval_value
				   },
			   success : function(msg) {
				   if (msg == "OK") {
                        alert("企业信息保存成功！");
                       
                    }
                    else if (msg == "Error") {
                        alert("企业信息保存失败，请重新填写！");
                    }
						
					}
	 
	 })
 }
 
function submitAllCompanyInfo(){
	
	 var Department_value = $("#Department").val();
	 var Job_value = $("#Job").val();
 	 var Pay_value = $("#Pay").val();
	 var WorkPlace_value = $("#WorkPlace").val();
	 var JobDirec_value = $("#JobDirec").val();
	 var JobDetail_value = $("#JobDetail").val();
	 var JobRequire_value = $("#JobRequire").val();
	var Contacts_value = $("#Contacts").val();
	var ContactWay_value = $("#ContactWay").val();
	var RecNum_value = $("#RecNum").val();
	var ReceiveNum_value = $("#ReceiveNum").val();

	
	 
       $.ajax({
	 		  cache:"False",
	           type:"post",
			   url:"StartRecruit.php",
			   data:{ 
			       Department:Department_value,
			       Job:Job_value,
				   Pay:Pay_value,
				   WorkPlace:WorkPlace_value,
				   JobDirec:JobDirec_value,
				   JobDetail:JobDetail_value,
				   JobRequire:JobRequire_value,
				   Contacts:Contacts_value,
				   ContactWay:ContactWay_value,
				   RecNum:RecNum_value,
				   ReceiveNum:JobRequire_value,
				   },
			   success : function(msg) {
				   if (msg == "OK") {
                        alert("招聘信息保存成功！");
                       
                    }
                    else if (msg == "Error") {
                        alert("招聘信息保存失败，请重新填写！");
                    }
						
					}
	 
	 })
 }
