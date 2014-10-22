// JavaScript Document


//保存公司信息
function submitCompanyInfo() {

	 var selecte_feild_value="";
	 $(".span_selected").each(
	 function() {
		 selecte_feild_value += $(this).text()+"|--|";
		 });
	 var photo = $("#fileToUpload").prev().find("img").attr('src');
	 var CompanyName_value = $("#CompanyName").val();
	 var Offic_value = $("#Offic").val();
 	 var URL_value = $("#URL").val();
	 var Field_value = $("#Field").val();
	 var PersonNum_value = $("#PersonNum").val();
	 var Asset_value = $("#Asset").val();
	 var CompanyIntro_value = $("#CompanyIntro").val();
	 var CompanyAdvan_value = $("#CompanyAdvan").val();
	 var CompanyEval_value = $("#CompanyEval").val();


	var fd = new FormData();
	fd.append("photo", photo);
	fd.append("CompanyName", CompanyName_value);
	fd.append("Offic", Offic_value);
	fd.append("URL", URL_value);
	fd.append("Feild", Field_value);
	fd.append("PersonNum", PersonNum_value);
	fd.append("Asset", Asset_value);
	fd.append("CompanyIntro", CompanyIntro_value);
	fd.append("CompanyAdvan", CompanyAdvan_value);
	fd.append("CompanyEval", CompanyEval_value);
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
		alert("企业信息保存成功！");
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
/*function submitCompanyInfo(){
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
 }*/
 
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
	var ID_value = $("#ID").val();

	
	 
       $.ajax({
	 		  cache:"False",
	           type:"post",
			   url:"DistributionJobPro/",
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
				   ReceiveNum:ReceiveNum_value,
					ID:ID_value,
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
