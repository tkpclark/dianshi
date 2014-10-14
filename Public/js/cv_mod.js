// JavaScript Document
var Created = 0;
var allowPrompt = true;
var Submited = 0;
var Returned = 0;

function showinfo(info_id)
{
	$("#" + info_id + "_info").toggle();
	$("#" + info_id + "_show").toggle();
	$("#" + info_id + "_hidden").toggle();
}

function addinfo(info_id)
{
	var numbers = Math.random();
	var i,str,str1,Lan_order;
	var info_num = $("#" + info_id + "_num").val();
	info_num++;
	$("#" + info_id + "_num").val(info_num);

	$.get(MYPATH + "/cv/in/Resume/" + info_id + "Action.php", { NextAction: "edit", info_num: info_num, show_num: info_num,isEnglish: $(".rew_top").find("#isEnglish").val(),numbers : numbers,ReSumeID: $(".rew_top").find("#ReSumeID").val() } , function(result) {
		$("#" + info_id + "_edit").append(result);
		if(info_id == "Lan")
		{
			str = $("#Lan_order").val();
			Lan_order = "";
			for(var i = 0;i < 3;i++)
			{
				str1 = str.charAt(i);
				if(str.charAt(i) == 0)
				{
					$("#Lan_form_add_" + info_num).find("#LangID").val(i + 1);
					str1 = 1;
					Lan_order = Lan_order + str1;
					break;
				}
				else
					Lan_order = Lan_order + str1;
			}
			for(var j = (i + 1);j < 3;j++)
			{
				str1 = str.charAt(j);
				Lan_order = Lan_order + str1;
			}
			$("#Lan_order").val(Lan_order);
		}

        if (('Exp' == info_id) || ('Exp1' == info_id)) {
            var ExpLength  = $("#Exp_edit").find("div").length;
            var Exp1Lenght = $("#Exp1_edit").find("div").length;
            
            if (ExpLength + Exp1Lenght >= eval(info_id + "_Max")) {
                $("#Exp_add").hide();
                $("#Exp1_add").hide();
            }
        }
        else {
            if($("#" + info_id + "_edit").find("div").length >= eval(info_id + "_Max")) $("#" + info_id + "_add").hide();
        }
	});
}

function deleteinfo(info,info_action,info_id)
{
	var numbers = Math.random();
	var i,str,str1,Lan_order;
	if((info == 'Edu' || info == 'Cert') && info_action == 'edit' && $(".rew_top").find("#isEnglish").val() == 0){
		sure = true;
	}else{
		if($(".rew_top").find("#isEnglish").val() == 1)
			sure = confirm("Are you sure to delete?");
		else
			sure = confirm("是否确认删除？");
	}
	if(sure)
	{
		var err = true;
		if(info_action == "edit")
		{
			switch(info)
			{
				case "Edu":
				err = false;
				jQuery.post(MYPATH + '/payservice/verify/verify_ajax.php?' + Math.random(),{type:24,dtype:'edu',eduid:info_id},
					function(str){
						if(str == '1'){
							alert('该信息处于认证状态中，无法删除。');
							delflg = false;
						}else if(str == '2'){
							delflg = confirm('该条记录为通过认证的最高学历，一旦删除将影响总认证标记的显示。请问您确认删除吗？');
						}else if(str == '3'){
							delflg = confirm('您有通过认证的诚信标记和报告在该条记录中，一旦删除将无法恢复。请问您确认删除吗？');
						}else{
							if($(".rew_top").find("#isEnglish").val() == 1){
								delflg = confirm("Are you sure to delete?");
							}else{
								delflg = confirm("是否确认删除？");
							}
						}
						if(delflg){
							$.get(MYPATH + "/cv/in/Resume/EduAction.php", { NextAction: "del", EduID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
								if(result){
									$("#" + info + "_" + info_action + "_" + info_id).remove();
								}
								if(str == '2'){
									location.href = location.href;
								}
								if($("#" + info + "_edit").find("div").length < eval(info + "_Max")) $("#" + info + "_add").show();
								if(result.indexOf("<script")=== 0) document.write(result);
								Histogram();
							});
						}
					}
				);
				break;
				case "Awd":
				$.get(MYPATH + "/cv/in/Resume/AwdAction.php", { NextAction: "del", AwardID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
					if(!result) err = false;
					if(result.indexOf("<script")=== 0) document.write(result);
					Histogram();
				});
				break;
				case "Exp":
				$.get(MYPATH + "/cv/in/Resume/ExpAction.php", { NextAction: "del", PracID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
					if(!result) err = false;
					if(result.indexOf("<script")=== 0) document.write(result);
					Histogram();
				});
				break;
				case "Exp1":
				$.get(MYPATH + "/cv/in/Resume/Exp1Action.php", { NextAction: "del", PracID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
					if(!result) err = false;
					if(result.indexOf("<script")=== 0) document.write(result);
					Histogram();
				});
				break;
				case "Work":
				$.get(MYPATH + "/cv/in/Resume/WorkAction.php", { NextAction: "del", WorkID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
					if(!result) err = false;
					eval(result);
					Histogram();
				});
				break;
				case "Tra":
				$.get(MYPATH + "/cv/in/Resume/TraAction.php", { NextAction: "del", TrainID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
					if(!result) err = false;
					if(result.indexOf("<script")=== 0) document.write(result);
					Histogram();
				});
				break;
				case "IT":
				$.get(MYPATH + "/cv/in/Resume/ITAction.php", { NextAction: "del", ITID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
					if(!result) err = false;
					if(result.indexOf("<script")=== 0) document.write(result);
					Histogram();
				});
				break;
				case "Prj":
				$.get(MYPATH + "/cv/in/Resume/PrjAction.php", { NextAction: "del", ProjectID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
					if(!result) err = false;
					if(result.indexOf("<script")=== 0) document.write(result);
					Histogram();
				});
				break;
				case "Cert":
				err = false;
				jQuery.post(MYPATH + '/payservice/verify/verify_ajax.php?' + Math.random(),{type:24,dtype:'cert',certid:info_id},
					function(str){
						if(str == '1'){
							alert('该信息处于认证状态中，无法删除。');
							delflg = false;
						}else if(str == '3'){
							delflg = confirm('您有通过认证的诚信标记和报告在该条记录中，一旦删除将无法恢复。请问您确认删除吗？');
						}else{
							if($(".rew_top").find("#isEnglish").val() == 1){
								delflg = confirm("Are you sure to delete?");
							}else{
								delflg = confirm("是否确认删除？");
							}
						}
						if(delflg){
							$.get(MYPATH + "/cv/in/Resume/CertAction.php", { NextAction: "del", CertID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
								if(result){
									$("#" + info + "_" + info_action + "_" + info_id).remove();
								}
								if($("#" + info + "_edit").find("div").length < eval(info + "_Max")) $("#" + info + "_add").show();
								if(result.indexOf("<script")=== 0) document.write(result);
								Histogram();
							});
						}
					}
				);
				break;
				case "Attach":
				$.get(MYPATH + "/cv/in/Resume/AttachAction.php", { NextAction: "del", AttachID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
					if(!result) err = false;
					if(result.indexOf("<script")=== 0) document.write(result);
					Histogram();
				});
				break;
				case "Misc":
				$.get(MYPATH + "/cv/in/Resume/MiscAction.php", { NextAction: "del", MiscID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
					if(!result) err = false;
					if(result.indexOf("<script")=== 0) document.write(result);
					Histogram();
				});
				break;
				case "Lan":
				$.get(MYPATH + "/cv/in/Resume/LanAction.php", { NextAction: "del", LangID: info_id, ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers } , function(result) {
					if(!result) err = false;
					if(result.indexOf("<script")=== 0) document.write(result);
					Histogram();
				});
				break;
			}
		}
		if(info == "Lan")
		{
			str = $("#Lan_order").val();
			Lan_order = "";
			for(var i = 0;i < 3;i++)
			{
				str1 = str.charAt(i);
				if($("#" + info + "_" + info_action + "_" + info_id).find("#LangID").val() == (i + 1))
				{
					str1 = 0;
					Lan_order = Lan_order + str1;
					break;
				}
				else
					Lan_order = Lan_order + str1;
			}
			for(var j = (i + 1);j < 3;j++)
			{
				str1 = str.charAt(j);
				Lan_order = Lan_order + str1;
			}
			$("#Lan_order").val(Lan_order);
		}
		if(err) $("#" + info + "_" + info_action + "_" + info_id).remove();


        if (('Exp' == info) || ('Exp1' == info)) {
            var ExpLength  = $("#Exp_edit").find("div").length;
            var Exp1Lenght = $("#Exp1_edit").find("div").length;
            
            if (ExpLength + Exp1Lenght < eval(info + "_Max")) {
                $("#Exp_add").show();
                $("#Exp1_add").show();
            }
        }
        else {
		    if($("#" + info + "_edit").find("div").length < eval(info + "_Max")) $("#" + info + "_add").show();
        }
	}
}

function editinfo(info,info_id,show_num,ReSumeID)
{
	var numbers = Math.random();
	switch(info)
	{
		case "Edu":
		$.get(MYPATH + "/cv/in/Resume/EduAction.php", { NextAction: "edit", EduID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers  } , function(result) {
			$("#Edu_edit" + "_" + info_id).html(result);
		});
		break;
		case "Awd":
		$.get(MYPATH + "/cv/in/Resume/AwdAction.php", { NextAction: "edit", AwardID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {
			$("#Awd_edit" + "_" + info_id).html(result);
		});
		break;
		case "Exp":
		$.get(MYPATH + "/cv/in/Resume/ExpAction.php", { NextAction: "edit", PracID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {
			$("#Exp_edit" + "_" + info_id).html(result);
		});
		break;
		case "Exp1":
		$.get(MYPATH + "/cv/in/Resume/Exp1Action.php", { NextAction: "edit", PracID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {
			$("#Exp1_edit" + "_" + info_id).html(result);
		});
		break;
		case "Work":
		$.get(MYPATH + "/cv/in/Resume/WorkAction.php", { NextAction: "edit", WorkID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {
			$("#Work_edit" + "_" + info_id).html(result);
		});
		break;
		case "Lan":
		$.get(MYPATH + "/cv/in/Resume/LanAction.php", { NextAction: "edit", LangID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {
			$("#Lan_edit" + "_" + info_id).html(result);
		});
		break;
		case "IT":
		$.get(MYPATH + "/cv/in/Resume/ITAction.php", { NextAction: "edit", ITID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {
			$("#IT_edit" + "_" + info_id).html(result);
		});
		break;
		case "Tra":
		$.get(MYPATH + "/cv/in/Resume/TraAction.php", { NextAction: "edit", TrainID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {
			$("#Tra_edit" + "_" + info_id).html(result);
		});
		break;
		case "Prj":
		$.get(MYPATH + "/cv/in/Resume/PrjAction.php", { NextAction: "edit", ProjectID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {
			$("#Prj_edit" + "_" + info_id).html(result);
		});
		break;
		case "Cert":
		$.get(MYPATH + "/cv/in/Resume/CertAction.php", { NextAction: "edit", CertID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {
			$("#Cert_edit" + "_" + info_id).html(result);
		});
		break;
		case "Attach":
		$.get(MYPATH + "/cv/in/Resume/AttachAction.php", { NextAction: "edit", AttachID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {

			$("#Attach_edit" + "_" + info_id).html(result);
		});
		break;
		case "Misc":
		$.get(MYPATH + "/cv/in/Resume/MiscAction.php", { NextAction: "edit", MiscID: info_id, show_num: show_num, ReSumeID: $(".rew_top").find("#ReSumeID").val(),isEnglish: $(".rew_top").find("#isEnglish").val(),numbers: numbers } , function(result) {
			$("#Misc_edit" + "_" + info_id).html(result);
		});
		break;
	}
}

function Resume_check()
{
	info = "#Resume_form";
	$(info).find(".err_red").hide();
	err = true;
	if(Jtrim($("#RSMName").val()) == "")
	{
		$(info).find("#errorMsg_0").show();
		err = false;
	}
	if(!err) $(info).show();
	return err;
}

function Resume_save(check,AdShow)
{
	$(".ReSumeID").val($(".rew_top").find("#ReSumeID").val());
	if(check == 1)
	{
		if(Resume_check())
		{
			var options = {
		        success:       ResumeResponse  // post-submit callback
		    }; 
			$("#Resume_form").ajaxSubmit(options);
		}
	}
	else
	{
		if(!Created && $(".rew_top").find("#ReSumeID").val() == "")
		{
			if(AdShow === 0)
			{
				$("#Resume_form").find("#AdShow").val(0);
			}
			//alert($("#Resume_form").find("#AdShow").val());
			$("#Resume_form").find("#ErrorSave").val(1);
			var options = {
			    success:       ResumeResponse_uncheck
			}; 
			$("#Resume_form").ajaxSubmit(options);
			Created = 1;
		}
		return true;
	}
}


function ResumeResponse_uncheck(responseText, statusText)  {
	if(statusText == 'success')
	{
		if(responseText.indexOf("<script")=== 0)
		{
			allowPrompt = false;
			document.write(responseText);
			return false;
		}
		var numbers = Math.random();
		//$(".ReSumeID").val(responseText);
		//alert(responseText);
		$(".rew_top").html(responseText);
		$(".ReSumeID").val($(".rew_top").find("#ReSumeID").val());
		$("#BPI_info").find("#newReSume").val($(".rew_top").find("#newReSume").val());
		//if($(".rew_top").find("#isEnglish").val() == 1)
		//	$("#ChangeLanguage").html("<a href='" + MYPATH + "/cv/CResume/CV_CModDefault.php?ReSumeID=" + responseText + "&" + numbers + "' class='orange1'><strong>中文简历</strong></a>");
		//else
		//	$("#ChangeLanguage").html("<a href='" + MYPATH + "/cv/EResume/CV_EModDefault.php?ReSumeID=" + responseText + "&" + numbers + "' class='orange1'><strong>英文简历</strong></a>");
		$("#Resume_form").find("#ErrorSave").val(0);
    }
}


function ResumeResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		$(".rew_top").html(responseText);
		$(".ReSumeID").val($(".rew_top").find("#ReSumeID").val());
		$("#BPI_info").find("#newReSume").val($(".rew_top").find("#newReSume").val());
    }
}

function Api_check()
{
	info = "#Api_edit";
	$(info).find(".err_red").hide();
	var err = true;

	if(strlength(Jtrim($(info).find("#Stock").val())) > 200)
	{
		$(info).find("#errorMsg_3").show();
		err = false;
	}
	if(!err) $("#Misc_info").show();
	return err;
}

function Awd_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	err = true;
	if($("#" + info_id).find("#Year").val() == "0" || $("#" + info_id).find("#Month").val() == "0")
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	if(Jtrim($("#" + info_id).find("#AwardName").val()) == "" || strlength(Jtrim($("#" + info_id).find("#AwardName").val())) > 100)
	{
		$("#" + info_id).find("#errorMsg_1").show();
		err = false;
	}
	if(strlength(Jtrim($("#" + info_id).find("#Level").val())) > 200)
	{
		$("#" + info_id).find("#errorMsg_2").show();
		err = false;
	}
	return err;
}

function Cert_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	err = true;
	if($("#" + info_id).find("#Year").val() == "0" || $("#" + info_id).find("#Month").val() == "0")
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	if($("#" + info_id).find("#CerList").val() == "0" && ($("#" + info_id).find("#CertName").val() == "" || $("#" + info_id).find("#CertName").val() == "若无合适选项请在此处填写" || strlength(Jtrim($("#" + info_id).find("#CertName").val())) > 300))
	{
		$("#" + info_id).find("#errorMsg_1").show();
		err = false;
	}
	if(strlength(Jtrim($("#" + info_id).find("#Scores").val())) > 20)
	{
		$("#" + info_id).find("#errorMsg_2").show();
		err = false;
	}
	return err;
}

function Cert_save(info_id)
{
	if(Cert_check(info_id))
	{
		$("#" + info_id).find("#ReSumeID").val($(".rew_top").find("#ReSumeID").val());
		$("#active").val(info_id.replace("_form",""));
		var options = {
		    success:       ITResponse  // post-submit callback
		}; 
		$("#" + info_id).ajaxSubmit(options);
	}
}

function Exp_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	err = true;
	if ($("#" + info_id).find("#FromYear").val() == "0" || $("#" + info_id).find("#FromMonth").val() == "0" ||
       ! ($("#" + info_id).find("#ToYear").val() == "0" && $("#" + info_id).find("#ToMonth").val() == "0" ||
          $("#" + info_id).find("#ToYear").val() != "0" && $("#" + info_id).find("#ToMonth").val() != "0" )
     )
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	if (err && $("#" + info_id).find("#ToYear").val() != "0")
	{   if (!DateCompare($("#" + info_id).find("#FromYear").val(), $("#" + info_id).find("#FromMonth").val(),$("#" + info_id).find("#ToYear").val(),$("#" + info_id).find("#ToMonth").val()))
	    {  
	    	$("#" + info_id).find("#errorMsg_1").show();
	    	err = false;
	    }
	}
	if(Jtrim($("#" + info_id).find("#PracName").val()) == "" || strlength(Jtrim($("#" + info_id).find("#PracName").val())) > 100)
	{
		$("#" + info_id).find("#errorMsg_2").show();
		err = false;
	}
	
	if(strlength(Jtrim($("#" + info_id).find("#PracDesc").val())) > 2000)
	{
		$("#" + info_id).find("#errorMsg_3").show();
		err = false;
	}
	return err;
}

function Awd_save(info_id)
{
	if(Awd_check(info_id))
	{
		if(Resume_save(0))
		{
			if($(".rew_top").find("#ReSumeID").val() == "")
			{
				t = setTimeout("Awd_save('" + info_id + "')",1000);
			}
			else
			{
				$("#active").val(info_id.replace("_form",""));
				var options = {
				        success:       ExpResponse  // post-submit callback
				    }; 
				$("#" + info_id).ajaxSubmit(options);
			}
		}
	}
}

function Bpi_save(num)
{
	if(CheckBaseOK())
	{
		if(Resume_save(0))
		{
			if($(".rew_top").find("#ReSumeID").val() == "")
			{
				t = setTimeout("Bpi_save(" + num + ")",1000);
			}
			else
			{
				if(num <= 1)
					sureMS = true;
				else
				{
					if($(".rew_top").find("#isEnglish").val() == 1)
						sureMS = confirm("Please note that every version of your resume must have the same basic information.  By changing the basic information on one resume, the relevant section of your other resumes will also be changed.  Confirm changes to your basic information?");
					else
						sureMS = confirm("您有多份简历！为保证简历信息的真实性，每份简历的基本个人信息必须相同，如果修改，其他几份简历的基本个人信息将同时被修改，您确定要修改吗？");
				}
				if(sureMS)
				{
                    $('#MPNation').attr("disabled", false);
                    $('#Mobile').attr("disabled", false);
                    $('#email').attr("disabled", false);
					$("#BPI_info").find("#showtrace").val("1");
					var options = {
				        success:       BpiResponse  // post-submit callback
				    }; 
					$("#BPI_form").ajaxSubmit(options);
				}
			}
		}
	}
}

function Api_save()
{
	if(Api_check())
	{
		$("#API_form").find("#ReSumeID").val($(".rew_top").find("#ReSumeID").val());
		var options = {
			success:       ApiResponse  // post-submit callback
		}; 
		$("#API_form").ajaxSubmit(options);
	}
}

function ApiResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		$("#Api_edit").html(responseText);
		Histogram();
		$("#Misc_Complete").show();
    }
}

function BpiResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		$("#BPI_info").html(responseText);
		Histogram();
		//$("#Base_Complete").show();
    }
}

function Exp_save(info_id)
{
	if(Exp_check(info_id))
	{
		if(Resume_save(0))
		{
			if($(".rew_top").find("#ReSumeID").val() == "")
			{
				t = setTimeout("Exp_save('" + info_id + "')",1000);
			}
			else
			{
				$("#active").val(info_id.replace("_form",""));
				var options = {
			        success:       ExpResponse  // post-submit callback
			    }; 
				$("#" + info_id).ajaxSubmit(options);
				return true;
			}
		}
	}
}

function ExpResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		info_id = $("#active").val();
		$("#" + info_id).html(responseText);
		if(info_id.indexOf("add") > 0 && $("#" + info_id).find("form").length == 0)
		{
			str = info_id.split("_");
			$("#" + info_id).attr("id",str[0] + "_edit_" + $("#" + info_id).find("#info_id").val());
		}
		Histogram();
		$("#Stu_Complete").show();
    }
}

function Tra_save(info_id)
{
	if(Tra_check(info_id))
	{
		$("#" + info_id).find("#ReSumeID").val($(".rew_top").find("#ReSumeID").val());
		$("#active").val(info_id.replace("_form",""));
		var options = {
		    success:       TraResponse  // post-submit callback
		}; 
		$("#" + info_id).ajaxSubmit(options);
	}
}

function TraResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		info_id = $("#active").val();
		$("#" + info_id).html(responseText);
		if(info_id.indexOf("add") > 0 && $("#" + info_id).find("form").length == 0)
		{
			str = info_id.split("_");
			$("#" + info_id).attr("id",str[0] + "_edit_" + $("#" + info_id).find("#info_id").val());
		}
		Histogram();
		$("#Tra_Complete").show();
    }
}

function Language_save()
{
	var numbers = Math.random();
	if(Language_check())
	{
		if(Resume_save(0))
		{
			if($(".rew_top").find("#ReSumeID").val() == "")
			{
				t = setTimeout("Language_save()",1000);
			}
			else
			{
				var options = {
			        success:       LanguageResponse  // post-submit callback
			    };
			    document.Language_form.action = document.Language_form.action + "?" + numbers;
				$("#Language_form").ajaxSubmit(options);
			}
		}
	}
}

function LanguageResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		$("#Language_info").html(responseText);
		Histogram();
    }
}

function Language_edit()
{
	var numbers = Math.random();
	$.get(MYPATH + "/cv/in/Resume/LanguageAction.php", { NextAction : "edit",ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers,isEnglish : $(".rew_top").find("#isEnglish").val() } ,  function(result) {
		$("#Language_info").html(result);
	} );
}

function Other_save()
{
	if(Other_check())
	{
		if(Resume_save(0))
		{
			if($(".rew_top").find("#ReSumeID").val() == "")
			{
				t = setTimeout("Other_save()",1000);
			}
			else
			{
				var options = {
			        success:       OtherResponse  // post-submit callback
			    }; 
				$("#Other").ajaxSubmit(options);
			}
		}
	}
}

function OtherResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		$("#Other_info").html(responseText);
		Histogram();
		//$("#Other_Complete").show();
    }
}

function Lan_save(info_id)
{
	if(Lan_check(info_id))
	{
		if(Resume_save(0))
		{
			if($("#" + info_id).find("#ReSumeID").val() == "")
			{
				t = setTimeout("Lan_save('" + info_id + "')",1000);
			}
			else
			{
				$("#active").val(info_id.replace("_form",""));			
				var options = {
			        success:       LanResponse  // post-submit callback
			    }; 
				$("#" + info_id).ajaxSubmit(options);
				return true;
			}
		}
	}
}

function LanResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		info_id = $("#active").val();
		$("#" + info_id).html(responseText);
		if(info_id.indexOf("add") > 0 && $("#" + info_id).find("form").length == 0)
		{
			str = info_id.split("_");
			$("#" + info_id).attr("id",str[0] + "_edit_" + $("#" + info_id).find("#info_id").val());
		}
		Histogram();
		//$("#Lan_Complete").show();
    }
}

function Edu_save(info_id)
{
	if(Edu_check(info_id))
	{
		if(Resume_save(0))
		{
			if($(".rew_top").find("#ReSumeID").val() == "")
			{
				t = setTimeout("Edu_save('" + info_id + "')",1000);
			}
			else
			{
				//alert($(".rew_top").find("#ReSumeID").val());
				$("#active").val(info_id.replace("_form",""));
				var options = {
			        success:       EduResponse  // post-submit callback
			    }; 
				$("#" + info_id).ajaxSubmit(options);
			}
		}
	}
}

function EduResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		info_id = $("#active").val();
		//alert(responseText);
		$("#" + info_id).html(responseText);
		if(info_id.indexOf("add") > 0 && $("#" + info_id).find("form").length == 0)
		{
			str = info_id.split("_");
			$("#" + info_id).attr("id",str[0] + "_edit_" + $("#" + info_id).find("#info_id").val());
		}
		Histogram();
		$("#Edu_Complete").show();
    }
}

function Prj_save(info_id)
{
	if(Prj_check(info_id))
	{
		$("#" + info_id).find("#ReSumeID").val($(".rew_top").find("#ReSumeID").val());
		$("#active").val(info_id.replace("_form",""));
		var options = {
		    success:       ITResponse  // post-submit callback
		}; 
		$("#" + info_id).ajaxSubmit(options);
	}
}

function Work_save(info_id)
{
	if(Work_check(info_id))
	{
		if(Resume_save(0))
		{
			if($(".rew_top").find("#ReSumeID").val() == "")
			{
				t = setTimeout("Work_save('" + info_id + "')",1000);
			}
			else
			{
				$("#active").val(info_id.replace("_form",""));
				var options = {
			        success:       WorkResponse  // post-submit callback
			    }; 
				$("#" + info_id).ajaxSubmit(options);
			}
		}
	}
}

function WorkResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		info_id = $("#active").val();
		$("#" + info_id).html(responseText);
		if(info_id.indexOf("add") > 0 && $("#" + info_id).find("form").length == 0)
		{
			str = info_id.split("_");
			$("#" + info_id).attr("id",str[0] + "_edit_" + $("#" + info_id).find("#info_id").val());
		}
		Histogram();
		$("#Work_Complete").show();
    }
}

function IT_save(info_id)
{
	if(IT_check(info_id))
	{
		$("#" + info_id).find("#ReSumeID").val($(".rew_top").find("#ReSumeID").val());
		$("#active").val(info_id.replace("_form",""));
		var options = {
		    success:       ITResponse  // post-submit callback
		}; 
		$("#" + info_id).ajaxSubmit(options);
	}
}

function ITResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		//alert(responseText);
		info_id = $("#active").val();
		$("#" + info_id).html(responseText);
		$(".temp").remove();
		$("#" + info_id).html($("#" + info_id).html().replace("temp</FORM>",""));
		//alert($("#" + info_id).html());
		if(info_id.indexOf("add") > 0 && $("#" + info_id).find("form").length == 0)
		//if(info_id.indexOf("add") > 0 && document.getElementById(info_id).getElementsByTagName('form').length == 0)
		{
			str = info_id.split("_");
			$("#" + info_id).attr("id",str[0] + "_edit_" + $("#" + info_id).find("#info_id").val());
		}
		Histogram();
		$("#Misc_Complete").show();
    }
}

function Attach_save(info_id)
{
	if(Attach_check(info_id))
	{
		$("#" + info_id).find("#ReSumeID").val($(".rew_top").find("#ReSumeID").val());
		$("#active").val(info_id.replace("_form",""));
		var options = {
		    success:       ITResponse  // post-submit callback
		};
		$("#" + info_id).ajaxSubmit(options);
	}
}

function Misc_save(info_id)
{
	if(Misc_check(info_id))
	{
		$("#" + info_id).find("#ReSumeID").val($(".rew_top").find("#ReSumeID").val());
		$("#active").val(info_id.replace("_form",""));
		var options = {
		    success:       ITResponse  // post-submit callback
		}; 
		$("#" + info_id).ajaxSubmit(options);
	}
}

function Lan_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	var err = true;
	if(($("#" + info_id).find("#Language1").val() == "00") || ("" == $("#" + info_id).find("#Language1").val()))
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	if(!err) $("#LAN_info").show();
	return err;
}

function Misc_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	var err = true;
	if ($("#" + info_id).find("#Topic").val() == "0" && (Jtrim($("#" + info_id).find("#MiscName").val()) == "" || Jtrim($("#" + info_id).find("#MiscName").val()) == "若无合适选项请在此处填写" || strlength(Jtrim($("#" + info_id).find("#MiscName").val())) > 60))
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	var MiscInfo = $("#" + info_id).find("#MiscInfo").val();
	if(MiscInfo == "" || strlength(Jtrim(MiscInfo)) > 4000)
	{
		$("#" + info_id).find("#errorMsg_1").show();
		err = false;
	}
	return err;
}

function Attach_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	var err = true;
	if(Jtrim($("#" + info_id).find("#AttachName").val()) == "" || strlength(Jtrim($("#" + info_id).find("#AttachName").val())) > 50)
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	var userfile = $("#" + info_id).find("#userfile").val();
	if(Jtrim(userfile) == "")
	{
		$("#" + info_id).find("#errorMsg_1").show();
		err = false;
	}
	if(strlength(Jtrim($("#" + info_id).find("#AttachDescribe").val())) > 1000)
	{
		$("#" + info_id).find("#errorMsg_2").show();
		err = false;
	}
	return err;
}

function Language_check()
{
	$("#Language_info").find(".err_red").hide();
	err = true;
	if($("#enlevel").val() == "00")
	{
		$("#Language_info").find("#errorMsg_0").show();
		err = false;
	}

	if(Jtrim($("#Language_info").find("#toefl").val()) == '0' || (Jtrim($("#Language_info").find("#toefl").val())!= "" && !isInt($("#Language_info").find("#toefl").val())))
	{
		$("#Language_info").find("#errorMsg_1").show();
		err = false;
	}
    
	if(Jtrim($("#Language_info").find("#gre").val()) == '0' || (Jtrim($("#Language_info").find("#gre").val())!= "" && !isInt($("#Language_info").find("#gre").val())))
	{
		$("#Language_info").find("#errorMsg_2").show();
		err = false;
	}
    
	if(Jtrim($("#Language_info").find("#gmat").val()) === '0' || (Jtrim($("#Language_info").find("#gmat").val())!= "" && !isInt($("#Language_info").find("#gmat").val())))
	{
		$("#Language_info").find("#errorMsg_3").show();
		err = false;
	}
	
	if(Jtrim($("#Language_info").find("#ielts").val()) === '0' || (Jtrim($("#Language_info").find("#ielts").val())!= "" && isNaN($("#Language_info").find("#ielts").val())))
	{
		$("#Language_info").find("#errorMsg_4").show();
		err = false;
	}
	var toeicSc = Jtrim($("#Language_info").find("#toeic").val());

	if( !(toeicSc == "" || (toeicSc != "" && /^[1-9][\d]{1,2}$/.test(toeicSc) && parseInt(toeicSc)<=990)) )
	{
		$("#Language_info").find("#errorMsg_5").show();
		err = false;
	}
	if(!err) $("#LAN_info").show();
	return err;
}

function IT_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	err = true;
	if(Jtrim($("#" + info_id).find("#SubSkill").val()) == "")
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	if(Jtrim($("#" + info_id).find("#UseTime").val()) == "" || Jtrim($("#" + info_id).find("#UseTime").val()) == 0)
	{
		$("#" + info_id).find("#errorMsg_1").show();
		err = false;
	}
	else
	{
		if(!isInt($("#" + info_id).find("#UseTime").val()))
		{
			$("#" + info_id).find("#errorMsg_4").show();
			err = false;
		}
	}
	if($("#" + info_id).find("#Ability").val() == "")
	{
		$("#" + info_id).find("#errorMsg_2").show();
		err = false;
	}
	return err;
}

function Work_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	err = true;
	if ($("#" + info_id).find("#FromYear").val() == "0" || $("#" + info_id).find("#FromMonth").val() == "0" ||
       ! ($("#" + info_id).find("#ToYear").val() == "0" && $("#" + info_id).find("#ToMonth").val() == "0" ||
          $("#" + info_id).find("#ToYear").val() != "0" && $("#" + info_id).find("#ToMonth").val() != "0" )
     )
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	if (err && $("#" + info_id).find("#ToYear").val() != "0")
	{   if (!DateCompare($("#" + info_id).find("#FromYear").val(), $("#" + info_id).find("#FromMonth").val(),$("#" + info_id).find("#ToYear").val(),$("#" + info_id).find("#ToMonth").val()))
	    {  
	    	$("#" + info_id).find("#errorMsg_1").show();
	    	err = false;
	    }
	}
	if(Jtrim($("#" + info_id).find("#Company").val()) == "")
	{
		$("#" + info_id).find("#errorMsg_2").show();
		err = false;
	}
	if(Jtrim($("#" + info_id).find("#Industry").val()) == "")
	{
		$("#" + info_id).find("#errorMsg_3").show();
		err = false;
	}
	if(Jtrim($("#" + info_id).find("#CompanyType").val()) == "")
	{
		$("#" + info_id).find("#errorMsg_4").show();
		err = false;
	}

	if(Jtrim($("#" + info_id).find("#Division").val()) == "" || strlength(Jtrim($("#" + info_id).find("#Division").val())) > 100)
	{
		$("#" + info_id).find("#errorMsg_5").show();
		err = false;
	}
	if((Jtrim($("#" + info_id).find("#Position").val()) == "" && $("#" + info_id).find("#SubFunction").val().substr(2,2) == "00") || $("#" + info_id).find("#SubFunction").val() == "")
	{
		$("#" + info_id).find("#errorMsg_6").show();
		err = false;
	}

	var SubFunction=Jtrim($("#" + info_id).find("#SubFunction").val());
	var Position=Jtrim($("#" + info_id).find("#Position").val());
	if (SubFunction=='' || SubFunction=='0' || SubFunction=='0000'){
		if (isEnglish==1){
			$("#" + info_id).find("#errorMsg_6")[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Please select Job Title first.';
		}else{
			$("#" + info_id).find("#errorMsg_6")[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />请先选择职位分类';
		}
	err = false;
	$("#" + info_id).find("#errorMsg_6").show();
	}
	if (SubFunction!='' && SubFunction!='0' && SubFunction!='0000' && SubFunction.substr(2,2)=='00' && (Position=='若无合适选项请在此处填写' || Position=='')){
		if (isEnglish==1){
			$("#" + info_id).find("#errorMsg_6")[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Please select or input secondary job title.';
		}else{
			$("#" + info_id).find("#errorMsg_6")[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />请选择职位分类小类，或者手动输入职位名称';
		}
	err = false;
	$("#" + info_id).find("#errorMsg_6").show();
	}
		
	if((Jtrim($("#" + info_id).find("#Subordinate").val()) != "" && !isInt($("#" + info_id).find("#Subordinate").val())) || $("#" + info_id).find("#Subordinate").val() === 0)
	{
		//alert($("#" + info_id).find("#Subordinate").val());
		$("#" + info_id).find("#errorMsg_7").show();
		err = false;
	}
	if(Jtrim($("#" + info_id).find("#Responsiblity").val()) == "")
	{
		$("#" + info_id).find("#errorMsg_8").show();
		err = false;
	}

	var Responsiblity=Jtrim($("#" + info_id).find("#Responsiblity").val());
	if( getlength(Responsiblity) > 4000)
	{
			if (isEnglish==1){
				$("#" + info_id).find("#errorMsg_8")[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Invalid entry. Please make sure that just input English only and limit your entry to 2000 Chinese characters.';
			}else{
				$("#" + info_id).find("#errorMsg_8")[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />输入错误。请控制在2000个汉字以内。';
			}
		err = false;
		$("#" + info_id).find("#errorMsg_8").show();
	}


	if(!err) $("#" + info_id).show();
	return err;
}

function Edu_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	var err = true;
	if ($("#" + info_id).find("#FromYear").val() == "0" || $("#" + info_id).find("#FromMonth").val() == "0" ||
       ! ($("#" + info_id).find("#ToYear").val() == "0" && $("#" + info_id).find("#ToMonth").val() == "0" ||
          $("#" + info_id).find("#ToYear").val() != "0" && $("#" + info_id).find("#ToMonth").val() != "0" )
     )
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	if (err && $("#" + info_id).find("#ToYear").val() != "0")
	{   if (!DateCompare($("#" + info_id).find("#FromYear").val(), $("#" + info_id).find("#FromMonth").val(),$("#" + info_id).find("#ToYear").val(),$("#" + info_id).find("#ToMonth").val()))
	    {  
	    	$("#" + info_id).find("#errorMsg_1").show();
	    	err = false;
	    }
	}
	if(Jtrim($("#" + info_id).find("#SchoolName").val()) == "" || strlength(Jtrim($("#" + info_id).find("#SchoolName").val())) > 100)
	{
		$("#" + info_id).find("#errorMsg_2").show();
		err = false;
	}

	if((Jtrim($("#" + info_id).find("#Degree").val()) == "0") || ("" == Jtrim($("#" + info_id).find("#Degree").val())))
	{
		$("#" + info_id).find("#errorMsg_4").show();
		err = false;
	}

	if((Jtrim($("#" + info_id).find("#Degree").val()) == "3" || Jtrim($("#" + info_id).find("#Degree").val()) == "4" || Jtrim($("#" + info_id).find("#Degree").val()) == "5" || Jtrim($("#" + info_id).find("#Degree").val()) == "6"|| Jtrim($("#" + info_id).find("#Degree").val()) == "6"|| Jtrim($("#" + info_id).find("#Degree").val()) == "7"|| Jtrim($("#" + info_id).find("#Degree").val()) == "8"|| Jtrim($("#" + info_id).find("#Degree").val()) == "-1"))
	{
		var SubMajor=Jtrim($("#" + info_id).find("#SubMajor").val());
		var MoreMajor=Jtrim($("#" + info_id).find("#MoreMajor").val());
		if (SubMajor=='' || SubMajor=='0' || SubMajor=='0000'){
			if (isEnglish==1){
				$("#" + info_id).find("#errorMsg_3")[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Please select Major.';
			}else{
				$("#" + info_id).find("#errorMsg_3")[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />请先选择专业分类';
			}
		err = false;
		$("#" + info_id).find("#errorMsg_3").show();
		}
		if (SubMajor!='' && SubMajor!='0' && SubMajor!='0000' && SubMajor.substr(2,2)=='00' && (MoreMajor=='若无合适选项请在此处填写' || MoreMajor=='')){
			if (isEnglish==1){
				$("#" + info_id).find("#errorMsg_3")[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Please select or input Major.';
			}else{
				$("#" + info_id).find("#errorMsg_3")[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />请选择专业分类小类，或者手动输入专业名称';
			}
		err = false;
		$("#" + info_id).find("#errorMsg_3").show();
		}
	}
	var EduDetail=Jtrim($("#" + info_id).find("#EduDetail").val());
	if( getlength(EduDetail) > 4000)
	{
		err = false;
		$("#" + info_id).find("#errorMsg_5").show();
	}

	if(!err) $("#Edu_info").show();
	return err;
}

function Other_check()
{
	$("#Other").find(".err_red").hide();
	var err = true;
	var OtherYear = $("#Other").find("#Year").val();
	var OtherMonth = $("#Other").find("#Month").val();
	var OtherDay = $("#Other").find("#Day").val();

	if ((OtherYear > 0 && OtherMonth > 0 && OtherDay > 0) && (! isValidDate(OtherYear, OtherMonth, OtherDay )))
	{  
		$("#Other").find("#errorMsg_0").show();
		err = false;
	}
	
	if (OtherYear + OtherMonth + OtherDay > 0 && OtherYear * OtherMonth * OtherDay == 0)
	{  
		$("#Other").find("#errorMsg_0").show();
		err = false;
	}
	
	if(!Checklength(document.Other.Introduction.value,"Other","errorMsg_1",1000)) err = false;	
	if(!err) $("#Other_info").show();
	return err;
}

function Other_edit()
{
	if(typeof(ja) == "undefined")
		getJs(JSPATH + "/jobarea_array_" + JsArray + ".js?20110414");
	if(typeof(it) == "undefined")
		getJs(JSPATH + "/indtype_array_" + JsArray + ".js?20110414");
	if(typeof(ft) == "undefined")
		getJs(JSPATH + "/funtype_array_" + JsArray + ".js?20110414");
	var numbers = Math.random();
	$.get(MYPATH + "/cv/in/Resume/OtherSelfAction.php", { NextAction : "edit",ReSumeID: $(".rew_top").find("#ReSumeID").val(),numbers : numbers,isEnglish : $(".rew_top").find("#isEnglish").val() } ,  function(result) {
		$("#Other_info").html(result);
	} );
}

function Tra_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	err = true;
	if ($("#" + info_id).find("#FromYear").val() == "0" || $("#" + info_id).find("#FromMonth").val() == "0" ||
       ! ($("#" + info_id).find("#ToYear").val() == "0" && $("#" + info_id).find("#ToMonth").val() == "0" ||
          $("#" + info_id).find("#ToYear").val() != "0" && $("#" + info_id).find("#ToMonth").val() != "0" )
     )
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	if (err && $("#" + info_id).find("#ToYear").val() != "0")
	{   if (!DateCompare($("#" + info_id).find("#FromYear").val(), $("#" + info_id).find("#FromMonth").val(),$("#" + info_id).find("#ToYear").val(),$("#" + info_id).find("#ToMonth").val()))
	    {  
	    	$("#" + info_id).find("#errorMsg_1").show();
	    	err = false;
	    }
	}
	if(Jtrim($("#" + info_id).find("#Institution").val()) == "")
	{
		$("#" + info_id).find("#errorMsg_2").show();
		err = false;
	}
	if(Jtrim($("#" + info_id).find("#Course").val()) == "")
	{
		$("#" + info_id).find("#errorMsg_3").show();
		err = false;
	}
	return err;
}

function Prj_check(info_id)
{
	$("#" + info_id).find(".err_red").hide();
	var err = true;
	if ($("#" + info_id).find("#FromYear").val() == "0" || $("#" + info_id).find("#FromMonth").val() == "0" ||
       ! ($("#" + info_id).find("#ToYear").val() == "0" && $("#" + info_id).find("#ToMonth").val() == "0" ||
          $("#" + info_id).find("#ToYear").val() != "0" && $("#" + info_id).find("#ToMonth").val() != "0" )
     )
	{
		$("#" + info_id).find("#errorMsg_0").show();
		err = false;
	}
	if (err && $("#" + info_id).find("#ToYear").val() != "0")
	{   if (!DateCompare($("#" + info_id).find("#FromYear").val(), $("#" + info_id).find("#FromMonth").val(),$("#" + info_id).find("#ToYear").val(),$("#" + info_id).find("#ToMonth").val()))
	    {  
	    	$("#" + info_id).find("#errorMsg_1").show();
	    	err = false;
	    }
	}
	var ProjectName = $("#" + info_id).find("#ProjectName").val();
	if(ProjectName == "" || strlength(ProjectName) > 100)
	{
		$("#" + info_id).find("#errorMsg_2").show();
		err = false;
	}
	var ProjectDesc = $("#" + info_id).find("#ProjectDesc").val();
	if(ProjectDesc == "" || strlength(ProjectDesc) > 2000)
	{
		$("#" + info_id).find("#errorMsg_3").show();
		err = false;
	}
	var Responsibility = $("#" + info_id).find("#Responsibility").val();
	if(Responsibility == "" || strlength(Responsibility) > 500)
	{
		$("#" + info_id).find("#errorMsg_4").show();
		err = false;
	}
	
	return err;
}

function Checkinput(str,info_id,err_id,err_str,maxlength)
{
	if(!err_str) err_str = "";
	if(Jtrim(str) == err_str || (maxlength > 0 && strlength(str) > maxlength))
	{
		setTimeout(function (){$("#" + info_id).find("#" + err_id).show()},50);
		return false;
	}
	setTimeout(function (){$("#" + info_id).find("#" + err_id).hide()},50);
	return true;
}

function Checklength(str,info_id,err_id,str_length)
{
	if(strlength(Jtrim(str)) > str_length)
	{
		$("#" + info_id).find("#" + err_id).show();
		return false;
	}
	$("#" + info_id).find("#" + err_id).hide();
	return true;
}

function CheckUseTime(str,info_id)
{
	$("#" + info_id).find("#errorMsg_1").hide();
	$("#" + info_id).find("#errorMsg_4").hide();
	if(Checkinput(str,info_id,"errorMsg_1"))
	{
		if(!isInt($("#" + info_id).find("#UseTime").val()))
		{
			$("#" + info_id).find("#errorMsg_4").show();
		}
		else
		{
			$("#" + info_id).find("#errorMsg_4").hide();
		}
	}
}

function CheckTopic(info_id)
{
	if ($("#" + info_id).find("#Topic").val() == "0" && Jtrim($("#" + info_id).find("#MiscName").val()) == "" || strlength(Jtrim($("#" + info_id).find("#MiscName").val())) > 30)
	{
		$("#" + info_id).find("#errorMsg_0").show();
		return false;
	}
	$("#" + info_id).find("#errorMsg_0").hide();
	return true;
}

function More_show(info_id,more_id)
{
	$("#" + info_id).find("#" + more_id).toggle();
	$("#" + info_id).find("#up").toggle();
	$("#" + info_id).find("#down").toggle();
}

function chkUserEmail_r(info_id)
{
	str = Jtrim($("#EmailAdd").val());
	if(str == "")
	{
		$("#" + info_id).find("#errorMsg_4").html("请填写EMAIL地址！");
		$("#" + info_id).find("#errorMsg_4").show();
		return false;
	}
	if(str.length > 100)
	{
		$("#" + info_id).find("#errorMsg_4").html("Email地址长度不能超过100位！");
		$("#" + info_id).find("#errorMsg_4").show();
		return false;
	}
	str = str.toLowerCase();
	if(isEmail(str) == false)
	{
		$("#" + info_id).find("#errorMsg_4").html('Email书写不正确');
		$("#" + info_id).find("#errorMsg_4").show();
		return false;
	}

	$("#" + info_id).find("#errorMsg_4").hide();
	return true;
}


function Bpi_edit()
{
	if(typeof(ja) == "undefined")
		getJs(JSPATH + "/jobarea_array_" + JsArray + ".js?20120503");
	if(typeof(ja_new) == "undefined")
		getJs(JSPATH + "/jobarea_new_array_" + JsArray + ".js?20120503");
	if(typeof(pr) == "undefined")
		getJs(JSPATH + "/province_array_" + JsArray + ".js");
	if(typeof(na) == "undefined")
		getJs(JSPATH + "/nationality_array_" + JsArray + ".js");
	var numbers = Math.random();
	$.get(MYPATH + "/cv/in/Resume/BPIAction.php", { NextAction : "edit", ReSumeID : $(".rew_top").find("#ReSumeID").val(),numbers : numbers,isEnglish : $(".rew_top").find("#isEnglish").val() } ,  function(result) {
		$("#BPI_info").html(result);
	} );
}

function Api_edit()
{
	var numbers = Math.random();
	$.get(MYPATH + "/cv/in/Resume/APIAction.php", { NextAction : "edit", ReSumeID : $(".rew_top").find("#ReSumeID").val(),numbers : numbers,isEnglish : $(".rew_top").find("#isEnglish").val() } ,  function(result) {
		$("#Api_edit").html(result);
	} );
}

function Resume_edit(ReSumeID)
{
	var numbers = Math.random();
	$.get(MYPATH + "/cv/CResume/CV_CNewParSet.php", { NextAction : "edit", ReSumeID : ReSumeID,numbers : numbers,isEnglish : $(".rew_top").find("#isEnglish").val() } ,  function(result) {
		$(".rew_top").html(result);
	} );
}

function All_check()
{
	var k;
	var err = true;
	
	if($("#Resume_form").length) 
	{
		if(!Resume_check()) err = false;
	}
	var base_err = false;
	//基本信息是否完整
	if($("#BPI_form").length)
	{
		if(!CheckBaseOK()) 
		{
			err = false;
		}else{
			base_err=true;
		}
			
	}
	else
	{
		if($("#Base_Complete").is( ":hidden ")) 
		{
			err = false;
		}
		else
		{
			base_err=true;
		}
	}
	
	//教育经历是否完整:一条教育经历完整,就算完整
	var Edu_form = $("#Edu_edit").find("form");
	var Edu_count = Edu_form.length;
	if(Edu_count > 0)
	{
		var edu_err = false;
		for(var k = 0;k < Edu_count;k++)
		{
			if(Edu_check(Edu_form[k].id)) edu_err = true;
		}
		if(!edu_err) err = false;
	}
	else
	{
		if($("#Edu_Complete").is( ":hidden "))
		{ 
			err = false;
		}else{
			edu_err = true;
		}
	}
	
	//社会简历需要判工作经验是否完整:一条工作经验完整,就算完整
	var work_err = false;
	if($("#Student").val() == 0)
	{
		var Work_form = $("#Work_edit").find("form");
		var Work_count = Work_form.length;
		if(Work_count > 0)
		{
			for(var k = 0;k < Work_count;k++)
			{
				if(Work_check(Work_form[k].id)) work_err = true;
			}
			if(!work_err) err = false;
		}
		else
		{
			if($("#Work_Complete").is( ":hidden "))
			{
				err = false;
			}
			else
			{
				work_err = true;
			}
		}
	}

	if(!err)
	{
		CompleteSave(base_err,edu_err,work_err);
	}
	else
	{
		ErrSave(0);
	}
}

function CompleteSave(base_err,edu_err,work_err)
{
	if ( !window.ConfirmSave ) {
		var ConfirmAllSave = {
			openType: 2 , //居中定位
			filterParam: {} //滤镜层设置
		}
		window.ConfirmSave = new ExtZzLayer( ConfirmAllSave );
	}
	var studentgroup=$("#Student").val();
	var numbers = Math.random();
	$.get(MYPATH + "/templet/cv/CResume/ConfirmSave.template.php?isenglish=" + $(".rew_top").find("#isEnglish").val()+"&studentgroup="+studentgroup+"&base_err="+base_err+"&edu_err="+edu_err+"&work_err="+work_err+"&"+numbers, function(result) {
		//alert(result);
		ConfirmSave.setContent( result );
		ConfirmSave.setCloseNode( 'Confirm_close' );
		ConfirmSave.setCloseNode( 'Confirm1_close' );
		ConfirmSave.open();
	} );
}

function ErrSave(other,regs)
{
	if(Resume_save(0,0))
	{
		if($(".rew_top").find("#ReSumeID").val() == "")
		{
			t = setTimeout("ErrSave('" + other + "','" + regs + "')",1000);
		}
		else
		{
			var forms_all = $("form");
			var forms_count = forms_all.length;
			var IT_submit = "",Cert_submit = "",Awd_submit = "",IT_item = 0,Cert_item = 0,Awd_item = 0;
			var IT_list = new Array();
			var Cert_list = new Array();
			
			$(".ErrorSave").val(1);
			if(!Submited)
			{
				var orderID = $("#mast_order_id").val();
				if( $("#MastInResume_"+orderID).attr("checked") == false )
				{
					$("#delete_Mast").click();
				}

                var spiId = $("#spi2p_order_id").val();
				if( $("#Spi2pInResume_"+spiId).attr("checked") == false )
				{
					$("#delete_Spi2p").click();
				}
				
				for(var k = 1;k < forms_count;k++)
				{
					//alert(forms_all[k].id.indexOf("av"));
					if(forms_all[k].id.indexOf("IT") > -1 || forms_all[k].id.indexOf("Cert") > -1 || forms_all[k].id.indexOf("Awd") > -1 || forms_all[k].id.indexOf("BPI") > -1 )
					{
						if(forms_all[k].id.indexOf("IT") > -1)
						{
							if(IT_list.length == 0 || jQuery.inArray($("#" + forms_all[k].id).find("#SubSkill").val(), IT_list) == -1)
							{
								IT_list.push($("#" + forms_all[k].id).find("#SubSkill").val());
								IT_submit = IT_submit + "&" + $("#" + forms_all[k].id).serialize();
								IT_item++;
							}
						}
						else if(forms_all[k].id.indexOf("Awd") > -1)
						{
							Awd_submit = Awd_submit + "&" + $("#" + forms_all[k].id).serialize();
							Awd_item++;
						}
						else if(forms_all[k].id.indexOf("Cert") > -1)
						{
							if(Cert_list.length == 0 || jQuery.inArray($("#" + forms_all[k].id).find("#SubCerList").val(), Cert_list) == -1)
							{
								$("#" + forms_all[k].id).find("#CertCode").remove();
								if($("#" + forms_all[k].id).find("#SubCerList").val())
								{
									Cert_list.push($("#" + forms_all[k].id).find("#SubCerList").val());
								}
								Cert_submit = Cert_submit + "&" + $("#" + forms_all[k].id).serialize();
								Cert_item++;
							}
						}else if(forms_all[k].id.indexOf("BPI") > -1){//add by robin 2009-05-29
                            $('#MPNation').attr("disabled", false);
                            $('#Mobile').attr("disabled", false);
                            $('#email').attr("disabled", false);
							var options = {
						        success:       ErrSaveResponseBPIall  // post-submit callback
						    };
							$("#BPI_form").ajaxSubmit(options);
							Submited++;							
						}
					}
					else
					{
						var options = {
					        success:       ErrSaveResponse  // post-submit callback
					    };
					    
					    var numbers = Math.random();
						var formId  = forms_all[k].id;
						var formObj = document.getElementById(formId);
						for(i=0;i<formObj.attributes.length;i++) {
							if ('action' == formObj.attributes[i].name) {
								formObj.attributes[i].value += "?" + numbers;
							}
						}
						$("#" + forms_all[k].id).ajaxSubmit(options);
						Submited++;
					}
				}
				if(IT_item > 0)
				{
					UniteForm("IT_form",IT_item + IT_submit,MYPATH + "/cv/in/Resume/ITAction.php");
					var options = {
				        success:       ErrSaveResponse  // post-submit callback
				    };
					$("#IT_form").ajaxSubmit(options);
					Submited++;
				}
				if(Cert_item > 0)
				{
					UniteForm("Cert_form",Cert_item + Cert_submit,MYPATH + "/cv/in/Resume/CertAction.php");
					var options = {
				        success:       ErrSaveResponse  // post-submit callback
				    };
					$("#Cert_form").ajaxSubmit(options);
					Submited++;
				}
				if(Awd_item > 0)
				{
					UniteForm("Awd_form",Awd_item + Awd_submit,MYPATH + "/cv/in/Resume/AwdAction.php");
					var options = {
				        success:       ErrSaveResponse  // post-submit callback
				    };
					$("#Awd_form").ajaxSubmit(options);
					Submited++;
				}
				
			}
			if(Submited == Returned)
			{
				allowPrompt = false;
				
				var newReSume=$(".rew_top").find("#newReSume").val();
				var checkgoogle=$("#BPI_info").find("#CheckGoogle").val();
				if(regs == 1)
				{
					if($(".rew_top").find("#isEnglish").val() == 1)
						self.location.href = MYPATH_RESUME + "/CV_EModDefault.php?fromregs=1&ReSumeID=" + $(".rew_top").find("#ReSumeID").val()+"&newReSume="+newReSume+"&checkgoogle="+checkgoogle+"&isPResume=0&ran="+Math.random();
					else
						self.location.href = MYPATH_RESUME + "/CV_CModDefault.php?fromregs=1&ReSumeID=" + $(".rew_top").find("#ReSumeID").val()+"&newReSume="+newReSume+"&checkgoogle="+checkgoogle+"&isPResume=0&ran="+Math.random();
				}
				else
					self.location.href = MYPATH_RESUME + "/CV_ResumeCompleted.php?ReSumeID=" + $(".rew_top").find("#ReSumeID").val()+"&newReSume="+newReSume+"&checkgoogle="+checkgoogle+"&isPResume=0&ran="+Math.random();
			}
			else
			{
				t = setTimeout("ErrSave('" + other + "','" + regs + "')",1000);
			}	
		}
	}
}

function ErrSaveResponse(responseText, statusText)  {
	if(statusText == 'success')
	{
		Returned++;
	}
}

function ErrSaveResponseBPIall(responseText, statusText)  {
	if(statusText == 'success')
	{
		$("#BPI_info").html(responseText);
		Returned++;
	}
}


//初始化各简历内容的条数
function init_hidden()
{
	var num = $(".num");
	var num_count = num.length;
	var Lan_order = $("#Lan_order").val();
	var info;
	var i,info_num,j = 1;
	for(var i = 0;i < num_count;i++)
	{
		info = num[i].id.split("_");
		info_num = $("#" + info[0] + "_edit").find("div").length;
		num[i].value = info_num;
		if(info_num >= eval(info[0] + "_Max")) $("#" + info[0] + "_add").hide();
	}
	if(Lan_order != "111")
	{
		for(var i = 0;i < 3;i++)
		{
			if(Lan_order.charAt(i) == "1" && $("#Lan_edit_" + j).length > 0)
			{
				$("#Lan_edit_" + j).html($("#Lan_edit_" + j).html().replace("editinfo('Lan','" + j + "'," + j + ")","editinfo('Lan','" + (i + 1) + "'," + (i + 1) + ")"));
				//alert($("#Lan_edit_" + j).html());
				$("#Lan_edit_" + j).attr("id","Lan_edit_" + (i + 1));
				j++;
			}
		}
	}
}
	
function searchInit(openNodes,_valueNodes,_textNodes,data,headTitle,colNum,isMulty,SubColNum,LayerType) {	
	if ( window.JobLayer ) {
		if(!isMulty) isMulty = false;
		//clearInterval( intVal );
		var param = {
			cfg : cfg ,
			openNodes : openNodes ,
			_valueNodes : _valueNodes ,
			_textNodes : _textNodes  ,
			isMulty : isMulty ,
			data : data ,
			headTitle: headTitle ,
			selectedTitle: headTitle ,
			isHasNolimit : false,
			colNum : colNum ? colNum : 4,
			getSubColNum : function(len) { return SubColNum ? SubColNum : Math.ceil( Math.sqrt( len ) );}
		};   
		if(!isMulty)
		{
			param.subBeforeOpen = function(){
					var btn = arguments[0].target || arguments[0].srcElement;
					this.setValueNodes( btn.nextSibling );
					this.setTextNodes( btn );
				};
		}
		switch(LayerType)
		{
			case "IT":
				if(!window.ITLayer)
					window.ITLayer = new JobLayer( param );
				else
					window.ITLayer.pushOpenNodes(openNodes);
			break;
			case "CertList":
				if(!window.CertLayer)
					window.CertLayer = new CertListLayer( param );
				else
					window.CertLayer.pushOpenNodes(openNodes);
				break;
			case "Major":
				if(!window.MajorLayer)
					window.MajorLayer = new JobLayer( param );
				else
					window.MajorLayer.pushOpenNodes(openNodes);
			break;
			case "Functype":
				if(!window.FunctypeLayer)
					window.FunctypeLayer = new JobLayer( param );
				else
					window.FunctypeLayer.pushOpenNodes(openNodes);
			break;
			case "Industrytype":
				if(!window.IndustrytypeLayer)
					window.IndustrytypeLayer = new JobLayer( param );
				else
					window.IndustrytypeLayer.pushOpenNodes(openNodes);
			break;
            case 'Province':
                if(!window.ProvinceLayer) {
                    param.data = '';
                    param.cfg.langs.gzdd = headTitle;
					param.noShowSpArea = true;
                    window.ProvinceLayer = new JobareaLayer( param );
                }
                else {
                    window.ProvinceLayer.pushOpenNodes(openNodes);
                }
            break;
			default:
				var jl = new JobLayer( param );
		}
		openNodes.click();
	}
}

function ChangeGroup(Student,regs)
{
	if ( !window.ChangeDiv ) {
		var Change = {
			openType: 2 , //居中定位
			filterParam: {} //滤镜层设置
		}
		window.ChangeDiv = new ExtZzLayer( Change );
	}
	var numbers = Math.random();
	$.get(MYPATH + "/templet/cv/CResume/ChangeGroup.template.php", { Student : Student,isEnglish: $(".rew_top").find("#isEnglish").val(),numbers : numbers,regs : regs } ,  function(result) {
		ChangeDiv.setContent( result );
		ChangeDiv.setCloseNode( 'Change_close' );
		ChangeDiv.setCloseNode( 'Change1_close' );
		ChangeDiv.open();
	} );
}

function ChangeGroup_Save(Student)
{
	var numbers = Math.random();
	var ReSumeID = $(".rew_top").find("#ReSumeID").val();
	if(Student) Student = 0;
	else Student = 1;
	if(ReSumeID)
	{
		$.get(MYPATH + "/cv/CResume/CV_CNewParSet.php", { ReSumeID : ReSumeID,RSMName : $(".rew_top").find("#RSMName").val(),Student : Student,Openness : $(".rew_top").find("#Openness").val(),numbers : numbers,isEnglish: $(".rew_top").find("#isEnglish").val(),changeGroup: 1 } ,  function(result) {
			allowPrompt = false;
			if($(".rew_top").find("#isEnglish").val() == 1)
				self.location.href=MYPATH_RESUME + '/CV_EModDefault.php?ReSumeID=' + ReSumeID + '&' + numbers;
			else
				self.location.href=MYPATH_RESUME + '/CV_CModDefault.php?ReSumeID=' + ReSumeID + '&' + numbers;

			//self.location.reload(); 
		} );
	}
}

function Histogram()
{
	var numbers = Math.random();
	var ReSumeID = $(".rew_top").find("#ReSumeID").val();
	var completed;
	var show = 0;
	if(ReSumeID)
	{
		if($("#histogram").find("table").length > 0) show = 1;
		$.get(MYPATH + "/cv/in/Resume/histogram.php", { ReSumeID : ReSumeID,numbers : numbers,show : show,isEnglish: $(".rew_top").find("#isEnglish").val()} ,  function(result1) {
			$("#histogram").html(result1);
			
			completed = $("#CompletedShow").val().split("|");
			if(completed[0] == 1) {
                $("#Base_Complete").show();
                $("#Base_Incomplete").hide();
            }
			else {
                $("#Base_Complete").hide();
                $("#Base_Incomplete").show();
            }
				
			if(completed[1] == 1) {
                $("#Edu_Complete").show();
                $("#Edu_Incomplete").hide();
            }
			else {
                $("#Edu_Complete").hide();
                $("#Edu_Incomplete").show();
            }
			
			if(completed[2] == 1) {
                $("#Stu_Complete").show();
                $("#Stu_Incomplete").hide();
            }
			else {
                $("#Stu_Complete").hide();
                $("#Stu_Incomplete").show();
            }
			
			if(completed[3] == 1) {
                $("#Work_Complete").show();
                $("#Work_Incomplete").hide();
            }
			else {
                $("#Work_Complete").hide();
                $("#Work_Incomplete").show();
            }
			
			if(completed[4] == 1) {
                $("#Other_Complete").show();
                $("#Other_Incomplete").hide();
            }
			else {
                $("#Other_Complete").hide();
                $("#Other_Incomplete").show();
            }
			
			if(completed[5] == 1) {
                $("#Tra_Complete").show();
                $("#Tra_Incomplete").hide();
            }
			else {
                $("#Tra_Complete").hide();
                $("#Tra_Incomplete").show();
            }
			
			if(completed[6] == 1) {
                $("#Lan_Complete").show();
                $("#Lan_Incomplete").hide();
            }
			else {
                $("#Lan_Complete").hide();
                $("#Lan_Incomplete").show();
            }
			
			if(completed[7] == 1) {
                $("#Misc_Complete").show();
                $("#Misc_Incomplete").hide();
            }
			else {
                $("#Misc_Complete").hide();
                $("#Misc_Incomplete").show();
            }
			
			$("#tishi").html($("#TishiShow").val());
		} );
	}
}

function WarnUser()
{
	var forms_current = $("form");
	//弹层中的form弹出后不会注销掉，要从总数中减去弹层form的个数
	var forms_count = forms_current.length - $("#Upload_Form").length - $("#My_Modify_Form").length - $("#Location_form").length;

	if(forms_count <= 1) allowPrompt = false;
	if(allowPrompt)
	{
	   //return ("是否离开");
	   return " ";
	}
	else
	{
	   // Reset the flag to its default value.
	   allowPrompt = true;
	}
}

window.onbeforeunload = WarnUser;

var baseallcheck="";//初始化状态
function CheckBaseOK(){
	var errornum=0;
	baseallcheck="1";//标记状态

	if (!checkinputstr('Name','er_name')){
		errornum++;	
	}

	if (!checkinputstr('Birthday','er_birthday')){
		errornum++;	
	}
	if (!checkinputstr('WorkYear','er_workyear')){	
		errornum++;	
	}
	
	if (!checkinputstr('IDNumber','er_idnumber')){	
		errornum++;		
	}

	if (!checkinputstr('Location','er_location')){	
		errornum++;	
	}

	if (!checkinputstr('email','er_email')){	
		errornum++;	
	}

	if (!checkinputstr('phone','er_phone')){	
		errornum++;	
	}

	if ((0 == $(".rew_top").find("#isEnglish").val()) && !checkinputstr('resumekey', 'er_resumekey')) {
		errornum++;
	}

	if (!checkinputstr('stature','er_stature')){	
		errornum++;	
	}

	if (!checkinputstr('Address','er_address')){	
		errornum++;	
	}	

	if (!checkinputstr('HomePage','er_homepage')){	
		errornum++;	
	}	

	if (!checkinputstr('alitalk','er_alitalk')){	
		errornum++;	
	}
	if (!checkinputstr('qqid','er_qqid')){	
		errornum++;	
	}
	
		
	baseallcheck="";//还原状态
	if (errornum>0){
		$("#Bpi_more").show();
		$("#BPI_info").find("#up").show();
		$("#BPI_info").find("#down").hide();
		return false;
	}else{
		return true;
	}
}
function checkinputstr(Inputid,divid)
{
	if(Inputid == 'phone')
	{
		var mpObj = document.getElementById('MPNation');
		var phone_errmsg_id = divid + '_' + mpObj.value;
		var phone_innerhtml = $("#er_phone").html();
		$("#er_phone_msg").html($("#"+phone_errmsg_id).val());
	}
	if (checkhtml(Inputid,divid)){
		setTimeout(function () {$("#"+divid).hide()},50);
		return true;
	}else{
		setTimeout(function () {$("#"+divid).show()},50);
		return false;
	}
}

function checkhtml(Inputid,divid)
{
	var checkfinish=false;
	if (Inputid=='phone'){
			if (!checkphone()){
				return false;
			}
			return true;
	}


    if (Inputid=='email') {
        if (!isEmail($.trim($("#email").val()))) {
            if (baseallcheck=='1'){
                $("#email").focus();		
                baseallcheck='';
            }
            return false;
        }
    }

	if(Inputid=='Birthday') {
		if ($.trim($("#YearOfBirthday")[0].value)=='0' || $.trim($("#MonthOfBirthday")[0].value)=='0' || $.trim($("#DayOfBirthday")[0].value)=='0'){
				if (isEnglish==1){
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Please select Date of Birth.';
				}else{
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />请选择出生日期';
				}

				if (baseallcheck=='1'){
					$("#YearOfBirthday").focus();		
					baseallcheck='';
				}
				return false;
		}else{
			if (!isValidDate($.trim($("#YearOfBirthday")[0].value),$.trim($("#MonthOfBirthday")[0].value),$.trim($("#DayOfBirthday")[0].value))){
				if (isEnglish==1){
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Something wrong with your Date of Birth. Please check it again.';
				}else{
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />请正确选择出生日期';
				}

				if (baseallcheck=='1'){
					$("#YearOfBirthday").focus();		
					baseallcheck='';
				}
				return false;
			}
		}
		return true;
	}
	if(Inputid=='Name') {
		if (isEnglish==1){
			if ($.trim($("#FirstName")[0].value)=="" || $.trim($("#LastName")[0].value)==""){
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Please input your name.';
				if (baseallcheck=='1'){
					if ($.trim($("#FirstName")[0].value)=="")
						$("#FirstName").focus();		
					else
						$("#LastName").focus();
					baseallcheck='';
				}
					return false;
				}else if(getlength($.trim($("#FirstName")[0].value)) > 20 || getlength($.trim($("#LastName")[0].value)) > 20) {
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />First name and last name limit 20 characters. Please try again.';
				if (baseallcheck=='1'){
					if (getlength($.trim($("#FirstName")[0].value)) > 20)
						$("#FirstName").focus();		
					else
						$("#LastName").focus();
					baseallcheck='';
				}
					return false;
			}
		}else{
			if ($.trim($("#"+Inputid)[0].value) == ""){
				$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />请输入姓名';
				if (baseallcheck=='1'){
					$("#Name").focus();
					baseallcheck='';
				}
				return false;
			}else if(getlength($.trim($("#"+Inputid)[0].value)) > 20) {
				$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />姓名不能超过10个汉字';
				return false;
			}			
		}
		return true;
	}
	if(Inputid=='IDNumber') {
		if ($.trim($("#"+Inputid)[0].value) == ""){
					if (isEnglish==1){
						$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Please input your ID Number.';
					}else{
						$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />请输入证件号';
					}

					if (baseallcheck=='1'){
						$("#IDNumber").focus();
						baseallcheck='';
					}
					return false;			
			}else{
				if (getlength($.trim($("#"+Inputid)[0].value)) > 25 || ($.trim($("#CardType")[0].value)=="0" && !checkid())){
					if (isEnglish==1){
						$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Something wrong with your ID Number. Please check it again.';
					}else{
						$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />请正确填写证件号（若为身份证号需核对位数和出生日期）';
					}

					if (baseallcheck=='1'){
						$("#IDNumber").focus();
						baseallcheck='';
					}
					return false;
				}
		}
		return true;
	}

	if(Inputid=='Address') {
			var ZipCode=$.trim($("#ZipCode")[0].value);
			var Address=$.trim($("#Address")[0].value);
			if (Address!="" && ZipCode=="" || Address=="" && ZipCode!=""){
				if (isEnglish==1){
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Please fill out your full mailing address, including the postal zip code.';
				}else{
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />地址和邮政编码请同时填写（香港：000000）';
				}
				if (baseallcheck=='1'){
					if (ZipCode=="")
						$("#ZipCode").focus();
					if (Address=="")
						$("#Address").focus();
					baseallcheck='';
				}
				return false;
			}
			if (Address!="" && getlength(Address) > 150){
				if (isEnglish==1){
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Address limit 150 characters. Please try again.';
				}else{
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />地址不能超过75个汉字';
				}
				if (baseallcheck=='1'){
					$("#Address").focus();
					baseallcheck='';
				}
				return false;
			}
			if ((!isnumber(ZipCode) || ZipCode.length!=6) && ZipCode!="" ){
				if (isEnglish==1){
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Zip Code limit 6 numbers.';
				}else{
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />邮编需为6位数字';
				}
				if (baseallcheck=='1'){
					$("#ZipCode").focus();
					baseallcheck='';
				}
				return false;
			}

			return true;		
	}

	if(Inputid=='HomePage') {
			var HomePage=$.trim($("#HomePage")[0].value);
			if (HomePage==""){
				return true;
			}
			if (getlength(HomePage) > 200){
				if (isEnglish==1){
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />HomePage limit 200 characters. Please try again.';
				}else{
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />个人主页不能超过100个汉字';
				}
				if (baseallcheck=='1'){
					$("#HomePage").focus();
					baseallcheck='';
				}
				return false;
			}
			return true;		
	}

	if(Inputid=='stature') {
			var stature=$.trim($("#stature")[0].value);
			if (stature==""){
				return true;
			}
			if (!isnumber(stature) || stature.length >3){
				if (baseallcheck=='1'){
					$("#stature").focus();
					baseallcheck='';
				}
				return false;
			}
			return true;		
	}

	if(Inputid=='alitalk') {
			var alitalk=$.trim($("#alitalk")[0].value);
			if (alitalk==""){
			if (baseallcheck=='1'){
				$("#alitalk").focus();
				baseallcheck='';
			}
				return true;
			}
			
		if (getlength(alitalk) >20 || getlength(alitalk) < 5 ){
			if (isEnglish==1){
				$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Limit 5-20 characters.';
			}else{
				$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />旺旺ID必须为5-20个字符';
			}
			if (baseallcheck=='1'){
				$("#alitalk").focus();
				baseallcheck='';
			}
			return false;
			}
		return true;		
	}
	if(Inputid == 'qqid')
	{
		var qqid = $.trim($("#qqid")[0].value);
		if (qqid==""){
			if (baseallcheck=='1'){
				$("#qqid").focus();
				baseallcheck='';
			}
				return true;
			}
		if(getlength(qqid) > 20)
		{
			if (isEnglish==1){
				$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />Limit 0-20 characters.';
			}else{
				$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />QQ号不能超过20个字符';
			}
			if (baseallcheck=='1'){
				$("#qqid").focus();
				baseallcheck='';
			}
			return false;
		}
		return true;
	}
	
	if(Inputid=='resumekey') {
		if (0 == isEnglish) {
			var sResumeKey = $.trim($("#"+Inputid)[0].value);
			if ('' != sResumeKey) {
				sResumeKey = sResumeKey.replace(/(\s)+/g, "$1");
				aResumeKey = sResumeKey.split(' ');
				if (aResumeKey.length > 10) {
					$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />超过关键词数量，请修改！';

          if (baseallcheck=='1') {
            $("#"+Inputid).focus();
            baseallcheck='';
          }
          return false;
				}
				else {
					for(var i=0;i<aResumeKey.length;i++) {
						if (getlength(aResumeKey[i]) > 12) {
							if (0 == isEnglish) {
								$("#"+divid)[0].innerHTML='<img src="'+IMGPATH_RESUME+'/icon_error.gif" width="16" height="15" align="absmiddle" />关键词超长，请重新输入！';

                if (baseallcheck=='1') {
                  $("#"+Inputid).focus();
                  baseallcheck='';
                }
                return false;
							}
						}
					}
				}	
			}
			else {
				return true;
			}
		}
	}

	if (($.trim($("#"+Inputid)[0].value) == "" || $.trim($("#"+Inputid)[0].value) == "0")){
			if (baseallcheck=='1'){
				$("#"+Inputid).focus();
				baseallcheck='';
			}

			return false;
	}

	return true;
}

function checkid()
{

	var year=0;
	var month=0;
	var day=0;
	var idtmp=$.trim($("#IDNumber")[0].value);
	var birthyear=$.trim($("#YearOfBirthday")[0].value);
	var birthmonth=$.trim($("#MonthOfBirthday")[0].value);
	var birthday=$.trim($("#DayOfBirthday")[0].value);

	if (birthmonth.length==1){
		birthmonth="0"+birthmonth;
	}
	if (birthday.length==1){
		birthday="0"+birthday;
	}	
	if ($.trim($("#IDNumber")[0].value).length!=15 && $.trim($("#IDNumber")[0].value).length!=18){
				return false;
	}
	if ($.trim($("#IDNumber")[0].value).length==15){
		year=idtmp.substring(6,8);
		month=idtmp.substring(8,10);
		day=idtmp.substring(10,12);
	}
	if ($.trim($("#IDNumber")[0].value).length==18){
		year=idtmp.substring(6,10);
		month=idtmp.substring(10,12);
		day=idtmp.substring(12,14);
	}
	if (year.length==2){
		birthyear=birthyear.substring(2,4);
	}
	if (birthyear!=year || birthmonth!=month || birthday!=day){
		return false;

	}

	return true;
}

function checkphone()
{
	if (($.trim($("#Mobile")[0].value) == "" || $.trim($("#Mobile")[0].value) == "手机号") && ($.trim($("#HPNumber")[0].value) == "" || $.trim($("#HPNumber")[0].value) == "电话号码") && ($.trim($("#FPNumber")[0].value) == "" || $.trim($("#FPNumber")[0].value) == "总机号码")){
		if (baseallcheck=='1'){
			$("#Mobile").focus();
			baseallcheck='';
		}
		return false;
	}
	if (($.trim($("#Mobile")[0].value) == "" || $.trim($("#Mobile")[0].value) == "Tel. No") && ($.trim($("#HPNumber")[0].value) == "" || $.trim($("#HPNumber")[0].value) == "Tel. No") && ($.trim($("#FPNumber")[0].value) == "" || $.trim($("#FPNumber")[0].value) == "Tel. No")){
		if (baseallcheck=='1'){
			$("#Mobile").focus();
			baseallcheck='';
		}
		return false;
	}

	var mpcountry=$.trim($("#MPNation")[0].value);
	var mobilephone=$.trim($("#Mobile")[0].value);
	var hpcountry=$.trim($("#HPNation")[0].value);
	var hpcity=$.trim($("#HPCity")[0].value);
	var homephone=$.trim($("#HPNumber")[0].value);
	var fpcountry=$.trim($("#FPNation")[0].value);
	var fpcity=$.trim($("#FPCity")[0].value);
	var firmphone=$.trim($("#FPNumber")[0].value);
	var fpextention=$.trim($("#FPExtension")[0].value);

	if( hpcountry == '' ){
		hpcountry = "086";
	}
	if( hpcity == '区号' || hpcity == 'City' ){
		hpcity = '';
	}
	if( homephone == '电话号码' || homephone == 'Tel. No' ){
		homephone = '';
	}
	if( fpcountry == '' ){
		fpcountry = '086';
	}
	if( fpcity == '区号' || fpcity == 'City' ){
		fpcity = '';
	}
	if( firmphone == '总机号码' || firmphone == 'Tel. No' ){
		firmphone = '';
	}
	if( fpextention == '分机' || fpextention == 'Ext' ){
		fpextention = '';
	}
	if( mpcountry == '' ){
		mpcountry = '086';
	}
	if( mobilephone == '手机号' || mobilephone == 'Tel. No' ){
		mobilephone = '';
	}


    var oMobileComponent = new mobileComponent();

	if (('' == mobilephone) || (mobilephone != '' && !oMobileComponent.checkMobile(mobilephone, mpcountry))) {
		if (baseallcheck=='1'){
			$("#Mobile").focus();
			baseallcheck='';
		}
		return false;		
	} else {
        if (!isnumber(mpcountry)){
            if (baseallcheck=='1'){
                $("#MPNation").focus();
                baseallcheck='';
            }
            return false;		
        }

        if (!isnumber(hpcountry)){
            if (baseallcheck=='1'){
                $("#HPNation").focus();
                baseallcheck='';
            }
            return false;
        }

        if (!isnumber(hpcity)){
            if (baseallcheck=='1'){
                $("#HPCity").focus();
                baseallcheck='';
            }
            return false;	
        }

        if (!isnumber(homephone)){
            if (baseallcheck=='1'){
                $("#HPNumber").focus();
                baseallcheck='';
            }
            return false;	
        }

        if (!isnumber(fpcountry)){
            if (baseallcheck=='1'){
                $("#FPNation").focus();
                baseallcheck='';
            }
            return false;		
        }

        if (!isnumber(fpcity)){
            if (baseallcheck=='1'){
                $("#FPCity").focus();
                baseallcheck='';
            }
            return false;	
        }
        
        if (!isnumber(firmphone)){
            if (baseallcheck=='1'){
                $("#FPNumber").focus();
                baseallcheck='';
            }
            return false;	
        }

        if (!isnumber(fpextention)){
            if (baseallcheck=='1'){
                $("#FPExtension").focus();
                baseallcheck='';
            }
            return false;		
        }

        if (!isnumber(hpcity)){
            if (baseallcheck=='1'){
                $("#"+hpcity).focus();
                baseallcheck='';
            }
            return false;		
        }
    }
	return true;
}

function isnumber(str)
{
	if (str.match(/\D/)==null){
		return true;
	}else{
		return false;
	}
}

//该函数不在使用, 通过调用component/mobile.js来实现
function isPhoneNumber(mpcountry,phone)
{
	var reg = '';
	var chkResult = false;
	if(mpcountry == '086')
	{
		reg = /^1[3458]{1,1}[0-9]{9,9}$/;
	}else if(mpcountry == '000')
	{
		reg = /^[0-9]{1,20}$/;
	}
	if(reg != '')
	{
		chkResult = reg.test(phone);
	}
	return chkResult;
}

function showMsg(page)
{
	window.open(MYPATH + "/tip/Tip_Page.php?cenglish=" + isEnglish + "&id="+page, "", "scrollbars=yes,fullscreen=no,channelmode=no,location=no,toolbar=no,status=no,menubar=no;resizable=no,width=320,height=300");
}

function clearinput(info_id,Input_id,css)
{
	if($("#" + info_id).find("#" + Input_id).val()=='若无合适选项请在此处填写') $("#" + info_id).find("#" + Input_id).val('');
	$("#" + info_id).find("#" + Input_id).removeClass(css);
}

function LocationInit(extData) {
	if ( window.JobLayer ) {
		var param = {
			cfg : cfg ,
			openNodes : document.BPI_form.btnLocation ,
			_valueNodes : document.BPI_form.Location  ,
			_textNodes : document.BPI_form.btnLocation  ,
			isMulty : false ,
			noShowSpArea : true,
			showPvnCityDistrict : true,
			isHasNolimit : false,
			extData : extData,
			subBeforeClose : function(){
				if(document.BPI_form.Location.value == '330000')
				{
					document.BPI_form.MPNation.value = '852';
					document.BPI_form.HPNation.value = '852';
					document.BPI_form.FPNation.value = '852';
				}
				else
				{
					document.BPI_form.MPNation.value = '086';
					document.BPI_form.HPNation.value = '086';
					document.BPI_form.FPNation.value = '086';
				}
			}
		};
		var jl1 = new JobareaLayer( param );
		document.BPI_form.btnLocation.click();
	}
}

function UniteForm(form_name,input_value,form_action)
{
	var f = document.createElement("form");
	document.body.appendChild(f);
	var i = document.createElement("input");
	i.type = "hidden";
	f.appendChild(i);
	i.value = input_value;
	i.name = "input_str";
	i.id = "input_str";
	f.action = form_action;
	f.name = form_name;
	f.id = form_name;
	f.method = "post";
}

function GetObjID(ObjName, ObjForm)
{ 
	for (var ObjID=0; ObjID < ObjForm.elements.length; ObjID++)
    if ( ObjForm.elements[ObjID].name == ObjName )
    {  return(ObjID);
       break;
    }
  return(-1);
}
function ChangeOption(ObjName, DesName, ObjForm)
{
  //GET OBJECT VALUE, ID OF DESTINATION OBJECT
  ObjID    = GetObjID(ObjName, ObjForm);
  DesObjID = GetObjID(DesName, ObjForm);
  if ( ObjID != -1 && DesObjID != -1 )
  {
    if (ObjForm.elements[ObjID].value == "0")
       ObjForm.CertName.focus();
    else
       ObjForm.CertName.value = "";
    CatValue = ObjForm.elements[ObjID].value.substring(0, 2);
    if ( CatValue == "0" )
      ObjForm.elements[DesObjID].length=0;
    else
    { //PARSING
      ObjForm.elements[DesObjID].length=0;
      var tt = $("#CertCode").val();
      var SubCategory = tt.split(";");
      //GENERATE OPTIONS
      j=0;
      for (var i=0; i< SubCategory.length; i++ )
      {
        pp = SubCategory[i].split(",");
        if ( pp[0].substring(0,2) == CatValue && pp[0].substring(2,4) != "00" )
        {
          ObjForm.elements[DesObjID].options[j]= new Option( pp[1], pp[0]);
          j++;
        }//if
      }//for
    }//if
  }//if
}

function getJs(ScriptPath)
{
	var new_element=document.createElement("script");
	new_element.setAttribute("type","text/javascript");
	new_element.setAttribute("src",ScriptPath);
	document.body.appendChild(new_element);

}

function CreateCert(input_value)
{
	var i = document.createElement("input");
	i.type = "hidden";
	document.body.appendChild(i);
	i.value = input_value;
	i.name = "CertCode";
	i.id = "CertCode";
}

function editMast( orderID,accountID,isEnglish )
{
	var action_url = MYPATH + "/cv/in/Resume/editMast.php?ran=" + Math.random();
	$.get( action_url, { accountID: accountID , orderID: orderID , action:"edit" , isEnglish: isEnglish } , function(result) {
		$("#Mast_edit").html(result);
	});
}

function saveMast( orderID,accountID,key,isEnglish )
{
	if( $("#MastInResume_"+orderID).attr("checked") == true )
	{
		var InResume = 1;
	}
	else
	{
		var InResume = 0;
	}
	
	if(InResume==0)
	{
		deleteMast( orderID,accountID,key,isEnglish )
	}
	else
	{
		var action_url = MYPATH + "/cv/in/Resume/editMast.php?ran=" + Math.random();
		$.get( action_url, { accountID: accountID , orderID: orderID , key: key , action:"add" , isEnglish: isEnglish } , function(result) {
			if(result == 0)
			{
				alert('保存失败！');
				return false;
			}
			else
			{
				$("#Mast_edit").html(result);
				return true;
			}
		});
	}
}
function deleteMast( orderID,accountID,key,isEnglish )
{
	var action_url = MYPATH + "/cv/in/Resume/editMast.php?ran=" + Math.random();
	$.get( action_url, { accountID: accountID , orderID: orderID , key: key , action:"delete" , isEnglish: isEnglish } , function(result) {
		if(result == 1)
		{
			$("#Mast_edit").fadeOut("slow", function() {
                hideEvaluationReport();
            });
			return true;
		}
		else
		{
			return false;
		}
	});
}

function showMastNotice( obj,orderID )
{
	if( obj.checked )
	{
		$("#MastNotice_"+orderID).hide();
	}
	else
	{
		$("#MastNotice_"+orderID).show();
	}
}

function editSpi2p( reportID,accountID,isEnglish )
{
	var action_url = MYPATH + "/cv/in/Resume/editSpi2p.php?ran=" + Math.random();
	$.get( action_url, { accountID: accountID , reportID: reportID , action:"edit" , isEnglish: isEnglish } , function(result) {
		$("#Spi2p_edit").html(result);
	});
}

function saveSpi2p( reportID,accountID,isEnglish )
{
	if( $("#Spi2pInResume_"+reportID).attr("checked") == true )
	{
		var InResume = 1;
	}
	else
	{
		var InResume = 0;
	}
	
	if(InResume==0)
	{
		deleteSpi2p( reportID,accountID,isEnglish );
	}
	else
	{
		var action_url = MYPATH + "/cv/in/Resume/editSpi2p.php?ran=" + Math.random();
		$.get( action_url, { accountID: accountID , reportID: reportID ,action:"add" , isEnglish: isEnglish } , function(result) {
			if(result == 0)
			{
				alert('保存失败！');
				return false;
			}
			else
			{
				$("#Spi2p_edit").html(result);
				return true;
			}
		});
	}
}

function deleteSpi2p( reportID,accountID,isEnglish )
{
	var action_url = MYPATH + "/cv/in/Resume/editSpi2p.php?ran=" + Math.random();
	$.get( action_url, { accountID: accountID , reportID: reportID, action:"delete" , isEnglish: isEnglish } , function(result) {
		if(result == 1)
		{
			$("#Spi2p_edit").fadeOut("slow", function() {
                hideEvaluationReport();
            });
			return true;
		}
		else
		{
			return false;
		}
	});
}

function showSpi2pNotice( obj,reportID )
{
	if( obj.checked )
	{
		$("#Spi2pNotice_"+reportID).hide();
	}
	else
	{
		$("#Spi2pNotice_"+reportID).show();
	}
}


function editOip(iReportId, iAccountId, bEnglish) {
    var sActionUrl = MYPATH + '/cv/in/Resume/edit_oip.php?ran=' + Math.random() + '&jsoncallback=?';
    var oPassParams = {
        accountId:iAccountId,
        reportId:iReportId,
        action:'edit',
        isEnglish:bEnglish
    }

    $.getJSON(sActionUrl, oPassParams, function (data) {
        switch (data.status) {
            case 1:
                break;

            case 2:
                $('#oip_edit').fadeOut('slow', function() {
                    hideEvaluationReport();
                });
                break;

            case 3:
                $('#oip_edit').html(data.result);
                break;
        }
    });
}

function saveOip(iReportId, iAccountId, bEnglish) {
    var bInResume = false;
    if (true == $('#oipInResume_' + iReportId).attr('checked')) {
        bInResume = true;
    }

    if (bInResume) {
        var sActionUrl = MYPATH + '/cv/in/Resume/edit_oip.php?ran=' + Math.random();
        var oPassParams = {
            accountId:iAccountId,
            reportId:iReportId,
            action:'add',
            isEnglish:bEnglish
        }

        $.getJSON(sActionUrl, oPassParams, function (data) {
            switch (data.status) {
                case -2:
                    alert('保存失败!');
                    return false;
                    break;

                default:
                    $('#oip_edit').html(data.result);
                    return true;
                    break;
            }
        });
    } else {
        deleteOip(iReportId, iAccountId, bEnglish);
    }
}

function hideEvaluationReport() {
    var bHideEvaluationReport = false;
    var bHideMastReport = false;
    var bHideSpiReport  = false;
    var bHideOipReport  = false;
    if ($('#Mast_edit').length > 0) {
        if ('none' == $('#Mast_edit').css('display')) {
            bHideMastReport = true;
        }
    } else {
        bHideMastReport = true;
    }

    if ($('#Spi2p_edit').length > 0) {
        if ('none' == $('#Spi2p_edit').css('display')) {
            bHideSpiReport = true;
        }
    } else {
        bHideSpiReport = true;
    }


    if ($('#oip_edit').length > 0) {
        if ('none' == $('#oip_edit').css('display')) {
            bHideOipReport = true;
        }
    } else {
        bHideOipReport = true;
    }

    if (bHideMastReport && bHideSpiReport && bHideOipReport) {
        $('#MAST').fadeOut('slow');
    }
}

function deleteOip(iReportId, iAccountId, bEnglish) {
    var sActionUrl = MYPATH + '/cv/in/Resume/edit_oip.php?ran=' + Math.random();
    var oPassParams = {
        accountId:iAccountId,
        reportId:iReportId,
        action:'delete',
        isEnglish:bEnglish
    }

    $.getJSON(sActionUrl, oPassParams, function (data) {
        switch (data.status) {
            case 2:
                $('#oip_edit').fadeOut('slow', function() {
                    hideEvaluationReport();
                });
                return true;
                break;

            default:
                return false;
                break;
        }
    });
}

function showOipNotice(oElement, iReportId) {
    if (oElement.checked) {
        $('#OipNotice_' + iReportId).hide();
    } else {
        $('#OipNotice_' + iReportId).show();
    }
}

function str_limit(info_id,str,strid,isEnglish)
{
	if(isEnglish)
	{
		$("#" + info_id).find("#" + strid).html(strlength(Jtrim(str)));
	}
	else
	{
		$("#" + info_id).find("#" + strid).html(Math.ceil(strlength(Jtrim(str))/2));
	}
}

function resumeKeyShow(DOMAIN_MY) {
  if (!window.resumeKey) {
    var oResumeKeySetPara = {
      openType: 2,
      filterParam: {}
    }
    window.resumeKey = new ExtZzLayer(oResumeKeySetPara);
  }

  var iResumeId  = $("#ReSumeID").val();
  var sActionUrl = DOMAIN_MY + '/templet/cv/CResume/ResumeKey.template.php';

  $.get(sActionUrl, {resumeId:iResumeId}, function (data) {
    resumeKey.setContent(data);
    resumeKey.setCloseNode('resumekey_window_close');
    resumeKey.open();
  });
}

function resumeKeySubmit() {
	if ('' != $("#resumekey").val()) {
	  var options = {
	    success:  resumeKeyResponse
	  };
	  $("#resumeKey").ajaxSubmit(options);		
	}
	else {
		resumeKey.close();
	}
}

function resumeKeyResponse(responseText, statusText) {
  if(statusText == 'success') {
    if ('' == responseText) {
      resumeKey.close();
      return;
    }
    var aResponseText = responseText.split('|||');
    
    if (-1 == aResponseText[1]) {
			resumeKey.close();    	
    	return;
    }

    if(0 == aResponseText[1]) {
      $("#resumekey_err").hide();
      if ('' != aResponseText[0]) {
          var htmlspecialchars          = ['&amp;', '&lt;', '&gt;'];
          var transfer_htmlspecialchars = [/&/g, /</g, />/g];
          var sResumeKey                = aResponseText[0];
          for(var i=0;i<htmlspecialchars.length;i++) {
            sResumeKey = sResumeKey.replace(transfer_htmlspecialchars[i], htmlspecialchars[i]);
          }

          var sResumeKeyLayer = '<td class="col_name" align="left" valign="top">关键词</td><td valign="top" colspan="4"><span id="resumeKeyId">' + sResumeKey + '</span></td>';
          $("#resumeKeyLayer").html(sResumeKeyLayer);
      }
      else {
        $("#resumeKeyLayer").hide();
      }
      resumeKey.close();
    }
    else {
      switch (aResponseText[1]) {
        case '1':
          $("#resumekey_err").html('超过关键词数量，请修改！');
          $("#resumekey").focus();
          break;

        case '2':
          $("#resumekey_err").html('关键词超长，请重新输入！');
          $("#resumekey").focus();
          break;
      }
      $("#resumekey_err").show();
    }
  }
}

function Provinceshow(sAreaCode, bResume, bEnglish) {
	if (!window.province) {
		var oProvinceSetPara = {
			openType: 2 , //居中定位
			filterParam: {} //滤镜层设置
		}
		window.province = new ExtZzLayer(oProvinceSetPara);
	}
	$.get(MYPATH + "/templet/cv/CResume/Province.template.php", {areaCode:sAreaCode, isResume:bResume, isEnglish:bEnglish},  function(result) {
		province.setContent(result);
		province.open();
	});
}

function ProvinceSubmit() {
    var radioChecked = $("#Province_form input[type='radio']:checked");

    if (0 == radioChecked.length) {
        alert('请选择市！');
        return;
    }

	var options = {
    success: ProvinceResponse  // post-submit callback
  }; 
  $("#Province_form").ajaxSubmit(options);
}

function ProvinceResponse(responseText, statusText) {
	if(statusText == 'success')
	{
    	var aResponseText = responseText.split('|||');
		if(aResponseText[0] != 0) {
            if (1 == aResponseText[2]) {
			    $("#Province_id").html(aResponseText[0]);
            }
            else {
			    $("#btnHuKou").val(aResponseText[0]);
                $("#HuKouNew").val(aResponseText[2]);
            }

		}
		province.close();

        if (1 == aResponseText[1]) {
          resumeKeyShow(aResponseText[3]);
        }
    }

}

function provinceClose(bShow, DOMAIN_MY) {
  window.province.close();
  if (1 == bShow) {
    resumeKeyShow(DOMAIN_MY);
  }
}

function inVerify(imgpath){
	var message = '您的认证信息已经提交，请等待三个工作日之后返回认证报告。';
	var str = '<div class="window04" style="width:465px;"><p class="window_title"><span style="float:left">提示信息</span></p><div class="window_con05" style="width:465px"><p class="amend_con" style="font-size:14px;width:400px">' + message + '</p><p class="amend_btn"><a onfocus="blur();" id="check_confirm"><img src="' + imgpath + '/im/2009/fans/fans_layerbutton3.gif" border="0"/></a></p></div></div>';
	if ( !window.pop ){
		var Param = {
			openType: 2 ,
			divProps: { style : { zIndex : 1007 } } ,
			filterParam: {}
		};
		window.pop = new ExtZzLayer( Param );
	}
	pop.setContent( str );
	pop.setCloseNode( 'check_confirm' );
	pop.open();
}
function verifyInfo(vtype, my_domain, opid, resumeid){
	if(!opid){
		opid = '';
	}
	if(!resumeid){
		resumeid = '';
	}
	allowPrompt = false;
	jQuery.post(my_domain + '/payservice/verify/verify_ajax.php?' + Math.random(),{type:26,vtype:vtype,opid:opid,resumeid:resumeid},
		function(str){
			if(str.substring(0,4) == 'http'){
				location.href = str;
			}else{
				if ( !window.pop ){
					var Param = {
						openType: 2 ,
						divProps: { style : { zIndex : 1007 } } ,
						filterParam: {}
					};
					window.pop = new ExtZzLayer( Param );
				}
				pop.setContent( str );
				pop.setCloseNode( 'check_confirm' );
				pop.open();
			}
	});
}
var si, sto; 
function editVerifyMobilephone(my_domain, imgpath){
	jQuery.post(my_domain + '/payservice/verify/verify_ajax.php?' + Math.random(),{type:15},
		function(str){
			if(str.substring(0,4) == 'http'){
				location.href = str;
			}else{
				if ( !window.mep ){
					var Param = {
						openType: 2 ,
						divProps: { style : { zIndex : 1007 } },
						afterClose:function(){
							clearTimeout(si);
							clearTimeout(sto);
						},
						filterParam: {}
					};
					window.mep = new ExtZzLayer( Param );
				}
				mep.setContent( str );
				mep.setCloseNode( 'window_confirm' );
				mep.setCloseNode( 'phone_close' );
				mep.setCloseNode( 'error_close' );
				mep.open();
			}
		}
	);
}
function sendEditValidateCode(my_domain, imgpath){
	var mobilephone = document.getElementById('vmobilephone').value.Trim();
	var error  = false;

    var oMobileComponent = new mobileComponent();



	if(mobilephone == '' || !oMobileComponent.checkMobile(mobilephone, '086')){
		document.getElementById('chkMobilephone').style.display = '';
		document.getElementById('chkMobilephone').innerHTML = '<span style="color:#FF0000;margin-left:95px;"><img style="position:relative;bottom:2px;" width="16" height="15" align="absmiddle" src="' + imgpath + '/im/2009/cv/cresume/icon_error.gif">' + oMobileComponent.sMobileErrorMessage_CHINA_CN + '</span>';
		error = true;
	}else{
		document.getElementById('chkMobilephone').style.display = 'none';
		document.getElementById('chkMobilephone').innerHTML = '';
	}
	if(!error){
		document.getElementById('chkValidateCode').style.display = '';
		document.getElementById('chkValidateCode').innerHTML = '<span style="color:#FF0000;margin-left:100px;">请查看手机短信，并输入收到的验证码。</span>';
		document.getElementById('countdown').style.display = '';
		document.getElementById('sendcode').onclick = function(){return false;};
		document.getElementById('sendcode').innerHTML = '<img border="0" src="' + imgpath + '/im/2009/verify/sent_no.gif" align="absmiddle"/>';
		si  = setInterval("countDown()", 1000);
		stp = setTimeout("countDownOver('" + my_domain + "', '" + imgpath + "')", 60 * 1000);
		jQuery.post(my_domain + '/payservice/verify/verify_ajax.php?' + Math.random(),{type:13,mobilephone:mobilephone},
			function(str){
				if(str.substring(0,4) == 'http'){
					location.href = str;
				}else{
					if ( !window.mep2 ){
						var Param = {
							openType: 2 ,
							divProps: { style : { zIndex : 1007 } }
						};
						window.mep2 = new ExtZzLayer( Param );
					}
					mep2.setContent( str );
					mep2.setCloseNode( 'window_confirm' );
					mep2.setCloseNode( 'phone_close' );
					mep2.setCloseNode( 'error_close' );
					mep2.open();
				}
			}
		);
	}
}
function saveEditVerifyMobilephone(my_domain, imgpath){
	var code        = document.getElementById('validatecode').value.Trim();
	var mobilephone = document.getElementById('vmobilephone').value.Trim();
	var error = false;
	if(code == '' || code.length < 6){
		document.getElementById('chkValidateCode').style.display = '';
		document.getElementById('chkValidateCode').innerHTML = '<span style="color:#FF0000;margin-left:95px;"><img style="position:relative;bottom:2px;" width="16" height="15" align="absmiddle" src="' + imgpath + '/im/2009/cv/cresume/icon_error.gif">请正确输入6位验证码</span>';
		error = true;
	}else{
		document.getElementById('chkValidateCode').style.display = 'none';
		document.getElementById('chkValidateCode').innerHTML = '';
	}
	if(!error){
		jQuery.post(my_domain + '/payservice/verify/verify_ajax.php?' + Math.random(),{type:16,code:code,mobilephone:mobilephone},
			function(str){
				if(str.substring(0,4) == 'http'){
					location.href = str;
				}else{
					if(str.substring(0,4) == 'succ'){
						setMobile(mobilephone);
						str = str.substring(4, str.length);
					}
					if ( !window.mep2 ){
						var Param = {
							openType: 2 ,
							divProps: { style : { zIndex : 1007 } }
						};
						window.mep2 = new ExtZzLayer( Param );
					}
					mep2.setContent( str );
					mep2.setCloseNode( 'window_confirm' );
					mep2.setCloseNode( 'phone_close' );
					mep2.setCloseNode( 'error_close' );
					mep2.open();
				}
			}
		);
	}
}
function countDown(){
	document.getElementById('time').innerHTML -= 1; 
}
function countDownOver(my_domain, imgpath){
	document.getElementById('countdown').style.display = 'none';
	document.getElementById('time').innerHTML = '60';
	document.getElementById('sendcode').onclick = function(){
		sendEditValidateCode(my_domain, imgpath);
	};
	document.getElementById('sendcode').innerHTML = '<img border="0" src="' + imgpath + '/im/2009/verify/sent.gif" align="absmiddle"/>';
	clearTimeout(si);
	clearTimeout(sto);
}
function setMobile(mobile){
	if(document.getElementById('Mobile')){
		document.getElementById('Mobile').value = mobile;
	}
	if(document.getElementById('hideMobile')){
		document.getElementById('hideMobile').value = mobile;
	}
}
function copyExp(opid, resumeid, vtype, my_domain){
	jQuery.post(my_domain + '/payservice/verify/verify_ajax.php?' + Math.random(),{type:27,opid:opid,resumeid:resumeid,vtype:vtype},
		function(str){
			if(str.substring(0,4) == 'http'){
				location.href = str;
			}else{
				if ( !window.pop ){
					var Param = {
						openType: 2 ,
						divProps: { style : { zIndex : 1007 } } ,
						filterParam: {}
					};
					window.pop = new ExtZzLayer( Param );
				}
				pop.setContent( str );
				pop.setCloseNode( 'check_confirm' );
				pop.open();
			}
	});
}
function confirmDelRs(domain, imgpath, tp, isenglish )
{
	if( tp != "ss" && tp != "ds" )
		return false;
	var confirmStr = '<div class="layernew02"><p class="window_title"><span class="window_close02 top_login_close"><img src="'+imgpath+'/im/2009/emy/folder/icon_close.gif" id="window_close_ss" align="absmiddle" /></span>操作确认</p><div class="window_con02"><ul class="window_con_bg"><div class="record"><p>';
	if(tp == 'ss' )
	{
		confirmStr += '是否确认将视频从简历中取消吗？';
	}else
	{
		confirmStr += '是否确认将设计秀从简历中取消吗？';
	}
	confirmStr += '</p><p><a href="javascript:void(0);"><img border="0" src="'+imgpath+'/im/2009/payservice/spokenshow/float_img1.gif" onclick="delRsFromRsm(\''+tp+'\',\''+domain+'\',\''+imgpath+'\',\''+isenglish+'\');"/></a> <a href="javascript:void(0);"> <img  border="0" src="'+imgpath+'/im/2009/payservice/spokenshow/float_img2.gif" onclick="ssobj.close();"/></a></p></div></ul></div></div>';
	PopWindow( confirmStr );
}
function delRsFromRsm( tp, domain, imgpath, isenglish)
{
	if(window.ssobj)
		ssobj.close();
	var loadStr = '<div class="layernew02" style="width:400px;"><p class="window_title"><span class="window_close02 top_login_close"></span>操作进行中,请等待</p><div class="window_con02" style="width:384px;"><ul class="window_con_bg"><div class="record" style="width:380px;"><p><img src="'+imgpath+'/im/2009/loading.gif" /></p></div></ul></div></div>';
	PopWindow( loadStr );
	var returnStr = '';
	$.ajax({
	type:'post',
	cache:'false',
	url:domain+'/payservice/resumeshow/spokenshow/spokenshow.php?'+Math.random(),
	data:{act:2,tp:tp},
	success:function( returnStr ){
		if(returnStr == 'nologin' || returnStr == 'illegal' )
		{
			window.location.href= domain+"/my/My_SignOut.php";
		}else
		{
			PopWindow( returnStr );
			var errorTag = $('#hd_spokenshow_error').val();
			if( isenglish == '0' && errorTag == 'noerror' )
			{
				if( tp == 'ss' )
				{
					$("#td_resumeshow_ss").html('<a name="LAN">&nbsp;</a>语言能力&nbsp;&nbsp;&nbsp;&nbsp; <span><a href="'+domain+'/payservice/resumeshow/spokenshow/redirect.php" style="color:#FF7101;font-size:12px;font-weight:normal;">New！口语好就来秀一下！</a></span>');
				}else if( tp == 'ds' )
				{
					$("#td_resumeshow_ds").html('<strong style="padding-left:35px">·IT技能</strong>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="'+domain+'/payservice/resumeshow/designshow/redirect.php" style="color:#FF7101;font-size:12px;font-weight:normal;">NEW！你有设计才能？点击秀一下！</a></span>');
				}
			}else if( isenglish == '1' && errorTag == 'noerror' )
			{
				if( tp == 'ss' )
				{
					$("#td_resumeshow_ss").html('<a name="LAN">&nbsp;</a>Language Skills&nbsp;&nbsp;&nbsp;&nbsp; <span><a href="'+domain+'/payservice/resumeshow/spokenshow/redirect.php" style="color:#FF7101;font-size:12px;font-weight:normal;">New！Click for Oral Show!</a></span>');
				}else if( tp == 'ds' )
				{
					$("#td_resumeshow_ds").html('<strong style="padding-left:35px">·IT Skills</strong>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="'+domain+'/payservice/resumeshow/designshow/redirect.php" style="color:#FF7101;font-size:12px;font-weight:normal;">NEW! Have design talent? Click for Design Show!</a></span>');
				}
			}
		}
	}
	});
}
function PopWindow(popStr)
{
	if ( !window.ssobj )
	{
		var Param = {
			openType: 2 ,
			divProps: { style : { zIndex : 1007 } } ,
			filterParam: {}
		};
		window.ssobj = new ExtZzLayer( Param );
	}
	ssobj.setContent( popStr );
	ssobj.setCloseNode('window_close_ss');
	ssobj.open();
}

function DistrictShow(areaCode,areaValue,imgPath,topfunctype)
{
	var layerContent = '<div style=" background: url(\''+imgPath+'/im/2009/my/sms/message_nbg02.gif\') repeat-x scroll 0 0 transparent;border: 1px solid #82868D;font-size: 12px;overflow: hidden;padding: 0;width: 575px;width:526px; background-color:#fff;">';
	layerContent += '<p style="background: url(\''+imgPath+'/im/2009/my/window_title_bg.gif\') repeat-x scroll 0 0 transparent;color: #FF5F00;font-size: 14px;font-weight: bold;height: 28px;line-height: 28px;padding-left: 20px;margin: 0px;">';
	layerContent += '<span style="margin: 0 5px 0 6px;float: right;padding: 5px;"><img src="'+imgPath+'/im/2009/emy/folder/icon_close.gif" align="absmiddle" id="ResidenceClose" name="ResidenceClose"/></span>分区功能向导</p><div style="background-color:#FFFFFF; margin:0px; padding:0px;width:526px;">';
	layerContent += '<p style="padding:10px 20px 0px 20px; margin-top:30px; font-size:14px; line-height:24px; color:#333333;"><b>亲爱的会员：</b><br/>　　很高兴通知您。您所在的"居住地"可以精确到区了！通过51job的调查，将居住地精确到区，将有利于HR搜索到您的简历！<br/><span style="font-size:12px; font-weight:bold;">点击以下按钮，选择分区</span></p>';
	layerContent += '<table style="margin:0 20px 0 20px;" width="300" border="0" cellspacing="0" cellpadding="0"><tr><td width="60">居住地：</td><td><input type="button" onfocus="blur()" value="'+areaValue+'" id="btnResidence" class="choose" name="btnResidence"></td><td><a href="javascript:void(0);"><img src="'+imgPath+'/im/2009/cv/btn_ok.gif"  id="areabtnok" width="82" height="30" border="0" onclick="saveArea(\'update\');" /></a></td></tr></table><p style="margin:40px 10px 10px 0; text-align:right;"><a href="javascript:saveArea(\'kown\');" style="text-decoration:underline; color:#999999;" id="kownlater">我知道了，以后再说</a></p><input type="hidden" id="hd_oldarea" value="" /><input type="hidden" id="hd_newarea" value="" /></div></div>';
	
	
	if ( !window.rsobj )
	{
		if(topfunctype != '0')
		{
			var Param = {
				openType: 2 ,
				divProps: { style : { zIndex : 1007 } } ,
				filterParam: {},
				subBeforeClose: function(){RSMIndustryLayer(imgPath,topfunctype)}
			};
		}else
		{
			var Param = {
				openType: 2 ,
				divProps: { style : { zIndex : 1007 } } ,
				filterParam: {}
			};
		}
		window.rsobj = new ExtZzLayer( Param );
	}
	rsobj.afterClose = function(){if(window.srsobj)srsobj.close(); };
	rsobj.setContent( layerContent );

	rsobj.setCloseNode( 'ResidenceClose' );
	rsobj.open();

	var btnArea = document.getElementById('btnResidence');
	btnArea.onclick=getSubarea;

	var btnOldArea = document.getElementById('hd_oldarea');
	btnOldArea.value = areaCode;
	btnOldArea.text = areaValue;
}

function getSubarea(event)
{
	var areaCode = document.getElementById('hd_oldarea').value;
	var areaValue = document.getElementById('hd_oldarea').text;
	var colNum = 5;
	var colTotal = 0;
	var divObj = document.createElement('div');
	divObj.style.cssText='border: 0px none; background-color:#ffffff;';
	var tbObj = document.createElement('table');
	tbObj.className = 'jobLayer subLayer';
	tbObj.style.cssText = 'margin:0;border-collapse:collapse;';

	var tbodyObj = document.createElement('tbody');

	var trObj = document.createElement('tr');

	var tdObj = document.createElement('td');
	tdObj.className = 'zz_51LowerYellow';
	tdObj.style.cssText = 'cursor: pointer; width: 120px; padding-left: 1px; font-weight: bold;';
	tdObj.innerHTML = areaValue;
	tdObj.acode = areaCode;
	tdObj.cvalue = areaValue;
	tdObj.onclick = sethdArea;
	trObj.appendChild(tdObj);
	tdObj.onmouseover  = function(){this.style.backgroundColor="#FFA22E"};
	tdObj.onmouseout  = function(){this.style.backgroundColor="#FEFFEF"};
			
	tdObj = document.createElement('td');
	tdObj.colSpan = colNum-1;
	trObj.appendChild(tdObj);
	
	tbodyObj.appendChild(trObj);
	

	for(var key in ja_new)
	{
		var substr2 = key.substr(0,2);
		if( (key.substr(4,2) != '00' && key.substr(0,4)+'00' == areaCode) || ( (substr2=='01'||substr2=='02'||substr2=='04' ||substr2=='05'||substr2=='06') && key.substr(2,2) != '00' && key.substr(0,2) + '0000' == areaCode ) )
		{
			if(colTotal%colNum == 0)
			{
				trObj = document.createElement('tr');
			}
			tdObj = document.createElement('td');
			tdObj.className = 'zz_51LowerYellow';
			tdObj.style.cssText = 'cursor: pointer; width: 120px; padding-left: 1px;';
			tdObj.innerHTML = ja_new[key];
			tdObj.acode = key;
			tdObj.cvalue = ja_new[key];
			tdObj.onclick = sethdArea;
			tdObj.onmouseover  = function(){this.style.backgroundColor="#FFA22E"};
			tdObj.onmouseout  = function(){this.style.backgroundColor="#FEFFEF"};
			trObj.appendChild(tdObj);
			colTotal++;
			if(colTotal%colNum == 0)
			{
				tbodyObj.appendChild(trObj);
			}
		}
	}
	if(colTotal%colNum != 0)
	{
		tdObj = document.createElement('td');
		tdObj.colSpan = colNum - (colTotal%colNum);
		trObj.appendChild(tdObj);
		tbodyObj.appendChild(trObj);
	}
	tbObj.appendChild(tbodyObj);
	divObj.appendChild(tbObj);
	if ( !window.srsobj )
	{
		var Param = {
			openType: 1
		};
		window.srsobj = new ExtZzLayer( Param );
	}
	srsobj.setContent(divObj);
	srsobj.open(event);
}

function sethdArea(event)
{
	var btnNewArea = document.getElementById('hd_newarea');
	if(btnNewArea != undefined)
	{
		btnNewArea.value = this.acode;
		btnNewArea.cvalue = this.cvalue;
	}

	var btnView = document.getElementById('btnResidence');
	if( btnView != undefined )
	{
		btnView.value=this.cvalue;
	}
	if(window.srsobj)
		srsobj.close();
}

function saveArea(type)
{
	var dobj = new Object();
	dobj.act = type;
	var checkRes = true;
	if(type=='update')
	{
		dobj.area = document.getElementById('hd_newarea').value;
		if(dobj.area == '')
		{
			alert('请选择"居住地"之后再保存！');
			checkRes = false;
		}else if(dobj.area == document.getElementById('hd_oldarea').value)
		{
			alert('请选择"居住地"之后再保存！');
			checkRes = false;
		}
	}
	
	if(checkRes)
	{
		if(window.rsobj)
			rsobj.close();
		if(window.srsobj)
			srsobj.close();

		var loadStr = '<div class="window04" width="327px" height="74px"><p class="window_title"><span style="float:left">操作进行中,请等待</span></p><div class="window_con05"><p style="text-align:center;height:35px;padding-top:15px;"><img src="'+IMGPATH+'/im/2009/loading.gif" /></p></div></div>';
		
		if ( !window.loadobj )
		{
			var Param = {
				openType: 2 ,
				divProps: { style : { zIndex : 1007 } } ,
				filterParam: {}
			};
			window.loadobj = new ExtZzLayer( Param );
		}
		loadobj.setContent( loadStr );
		loadobj.open();

		$.ajax({
				type: 'post',
				cache: false,
				url: MYPATH+'/cv/in/Resume/residence.php?'+Math.random(),
				data: dobj,
				success: function(htmlStr)
				{
					if(htmlStr == 'nologin'){
						self.location.href=MYPATH+'/my/My_SignOut.php';
					 }else
					 {
						if(htmlStr=='success' && type=='update')
						{
							var locationView = document.getElementById('Location_id');
							if(locationView != undefined )
							{
								locationView.innerHTML = '&nbsp;' + document.getElementById('hd_oldarea').text+'-'+document.getElementById('hd_newarea').cvalue;
								if ( window.loadobj )
									loadobj.close();
							}
						}else if(htmlStr=='success' && type=='kown')
						{
							if ( window.loadobj )
								loadobj.close();
						}else if( htmlStr=='failed' )
						{
							self.location.href=MYPATH+'/my/My_SignOut.php';
						}else
						{
							if ( window.loadobj )
							{
								loadobj.close();
							}
							loadobj.setContent( htmlStr );
							loadobj.open();
						}
					 }
				}
			});	
	}
}

function SearchCoList(cuid, workId ,img_path,domain_my,searchurl,addurl){
	var workobj = $('#Work_edit_'+workId);
	if( workobj.length == 0 ){
		alert('非法操作');
		return false;
	}
	var coName = $('#Work_edit_'+workId+'  [name="Company"]').val();
	if( coName == '' || typeof coName == 'undefined'){
		alert('公司名称不存在');
		return false;
	}

	if ( !window.ConfirmSave ) {
		var ConfirmAllSave = {
			openType: 2 ,	//居中定位
			filterParam: {} //滤镜层设置
		}
		window.ConfirmSave = new ExtZzLayer( ConfirmAllSave );
	}
	var studentgroup=$("#Student").val();
	var numbers = Math.random();
	var html_begin  = '<div class="layernew03" style="width:500px;">\<p class="window_title"><span class="window_close02 top_login_close"><img id="btn_close" src="'+img_path+'/im/2009/emy/folder/icon_close.gif" align="absmiddle" /></span>加关注做雇员</p>\
		  <div class="window_con020"><ul class="window_con_bg">';
	var findcolist = '<p class="float_page1_font">为您搜索到匹配的企业粉丝团如下</p><p><div class="logo_list"><ul>';
	var notfind = '<p class="float_page1_font">尚未为您搜索到匹配的企业粉丝团。可能的原因如下：</p>\
			<p class="style_font">1.您填写的公司名称与该公司在51job上对外显示的公司名称不一致。比如您填写了"51job",而实际上公司对外却使用了"前程无忧"</p><p class="style_font">2.您所填写的公司尚未加入51job的公司库</p>\
			<p> </p><p class="float_page1_btn"><img style="cursor:pointer" id="ok_close" src="'+img_path+'/im/2009/my/folder/btn_sure.gif" width="87" height="39" /></p></ul></div></div>';
	var between = '</ul><div style="clear:both;"></div></div></p>';
	var content = '';
	var showAdd = '<p class="float_page1_btn"><a href="javascript:void(0)" onclick="AddCoEp('+cuid+','+workId+',\'' + addurl + '\',\''+img_path+'\',\'' + domain_my + '\')"><img src="'+img_path+'/im/2009/my/folder/btn_fans.gif" width="215" height="42" /></a></p>';
	var html_end = '<p class="style_font_1">您的雇员身份，可以随时至<a href="'+domain_my+'/my/My_Fans_Employee.php" target="_blank" id="ok_close">隐私设置</a>页面变更</p></ul></div></div>';
	
	$.getJSON(searchurl, {coname: coName,numbers : numbers } , function(result) {
		if(result.message== '' || 'undefined' == typeof result.message){
			return false;
		}
		if(result.message == 'success'){
			var json = result;
			var content = '';
			var num = 0;
			for(var i = 0;i< json["0"].length;i++){
				var is_check = '';
				var is_disabled = '';
				var show_guangzh = '';
				var imgurl = '';
				if(i > 0 && i%4 == 0){
					content += '</ul><div style="clear:both;"></div><ul>';
				}
				if(json["0"][i]['isep'] == 1){
					is_disabled = 'disabled';
					show_guangzh = '<span style="margin-left:8px;color:grey" >已是雇员</span>';
				}else{
					if(num == 0 ){
						is_check = 'checked';
					}
					num += 1;
				}
				if(json["0"][i]['imgurl'] != ''){
					imgurl = '<img src="'+json["0"][i]['imgurl']+'" />';
				}else{
					imgurl = '<div style="height:14px;"></div><div style="text-align:center;width:58px;">'+json["0"][i]['cname']+'</div>';
					
				}
				content += '<li><div class="radio">\
								<input name="co_id" class="co_id" type="radio" value="'+ json["0"][i]['coid'] +'" '+ is_disabled  + is_check +'/>\
							</div><div class="fans" title="'+json["0"][i]['cname']+'"><span class="logo_show">'+imgurl+'</span><span class="fans_num" title="'+json["0"][i]['fans_num']+'">粉:'+json["0"][i]['fans_num']+'</span>'+show_guangzh+'</div></li>';
				
			}
			var html = '';
			if(num > 0){
				html = html_begin + findcolist + content + between + showAdd + html_end;
			}else{
				html = html_begin + findcolist + content + between + html_end;
			}
			ConfirmSave.setContent( html );
			ConfirmSave.setCloseNode( 'btn_close' );
			ConfirmSave.setCloseNode( 'ok_close' );
			ConfirmSave.open();
			return true;
		}else if(result.message == 'null'){
			var html = html_begin + notfind;
			ConfirmSave.setContent( html );
			ConfirmSave.setCloseNode( 'btn_close' );
			ConfirmSave.setCloseNode( 'ok_close' );
			ConfirmSave.open();
		}
	});
}

function AddCoEp( cuid,workId,addurl,img_path,domain_my){
	var numbers = Math.random();
	var arr_coid = $('.co_id');
	var check_id = 0;
	$(arr_coid).each(function(){
		if( $(this).attr('checked') == true ){
			check_id = $(this).val();
		}
	});
	var succesHtml = '<div class="layernew02" style="width:500px;">\
		<p class="window_title"><span class="window_close02 top_login_close"><img id="btn_close" src="'+img_path+'/im/2009/emy/folder/icon_close.gif" align="absmiddle" /></span>加关注做雇员</p>\
		<div class="window_con020"><ul class="window_con_bg"><p class="float_page1_font"><img src="'+img_path+'/im/2009/my/folder/guanzhu_img1.gif" /></p>\
		<p class="style_font_1">您的雇员身份，可以随时至<a href="'+domain_my+'/my/My_Fans_Employee.php" target="_blank" id="ok_close">隐私设置</a>页面变更</p>\
		<p></p><p class="float_page1_btn"></p></ul></div><div style="clear:both;"></div></div>';
	var failHtml = '<div class="layernew02" style="width:500px;">\
		<p class="window_title"><span class="window_close02 top_login_close"><img id="btn_close" src="'+img_path+'/im/2009/emy/folder/icon_close.gif" align="absmiddle" /></span></p>\
		<div class="window_con020"><ul class="window_con_bg">\
		<p class="float_page1_font"><img src="'+img_path+'/im/2009/my/folder/guanzhu_img2.gif" width="55" height="50" align="absmiddle" /> ';
	var endFailHtml = '</p>\<p class="style_font"></p><p class="style_font_1">您的雇员身份，可以随时至<a href="'+domain_my+'/my/My_Fans_Employee.php" target="_blank" id="ok_close">隐私设置</a>页面变更</p>\
		<p></p><p class="float_page1_btn"></p></ul></div><div style="clear:both;"></div></div>';
	if( parseInt( check_id ) >0 ){
		allowPrompt = false;
		$.getJSON(addurl, {coid: check_id} , function(result) {
			if(result["result"] == 1){
				if(result["message"] == 'success'){
					ConfirmSave.setContent(succesHtml);
				}else{
					ConfirmSave.setContent(failHtml + '系统出错了' + endFailHtml);
				}
			}else if(result["result"] == 0){
				if(result["message"] == 'full'){
				//已达最大值
					ConfirmSave.setContent(failHtml + '对不起，您开放的雇员数量已达到上限!!' + endFailHtml);
				}
			}
			ConfirmSave.setCloseNode( 'btn_close' );
			ConfirmSave.setCloseNode( 'ok_close' );
			ConfirmSave.open();
		});
	}
}



function RSMIndustryLayer(imgPath,type)
{
	var layerContent = '<div class="window02">';
	layerContent += '		<p class="window_title" id="window_title">职能新增提示层<span style="margin:0px 5px 0 360px;"><img id="IndustryLayerClose" src="'+imgPath+'/im/2009/emy/folder/icon_close.gif" align="absmiddle" style="cursor: pointer;"></span></p>';
	layerContent += '		<div class="window_con02">';
	layerContent += '			<div class="window_con_bg" style="text-align:left;line-height:24px;font-family:arial;">';
	layerContent += '				<p style="font-size:12px; text-align:center" class="text_hint"><img src="'+imgPath+'/im/2009/cv/cresume/good_massageImg.png" width="70" height="26"></p>';
	layerContent += '				<p style="margin-top:8px; padding-left:40px;">您所选的"职能"类别细分了！您可以到"工作经验-职能"下修改！</p>';

	switch(type)
	{
		case '46': //房地产文字提示
			layerContent += '				<p style="padding-left:40px;" >原<b style="color:#ff7200">"房地产"</b>职能细分为<b style="color:#ff7200">"房地产开发"</b>、<b style="color:#ff7200">"房地产中介"</b>快去看看！</p>';
			break;
		case '54': //汽车文字提示
			layerContent += '				<p style="padding-left:40px;" >原<b style="color:#ff7200">"汽车"</b>职能细分为<b style="color:#ff7200">"汽车制造"</b>、<b style="color:#ff7200">"汽车销售与服务"</b>快去看看！</p>';
			break;
		default :
			layerContent += '				<p style="padding-left:40px;" >原<b style="color:#ff7200">"房地产"</b>职能细分为<b style="color:#ff7200">"房地产开发"</b>、<b style="color:#ff7200">"房地产中介"</b>快去看看！</p>';
	}
	layerContent += '				<p class="increment_fc1" style="text-align: center;"><img id="btn_ok_know" onclick="indtypeLayer.close();" src="'+imgPath+'/im/2009/cv/cresume/btn_ok_now.gif" width="177" height="37" align="absbottom" border="0" style="cursor:pointer" > </p>';
	layerContent += '			</div>';
	layerContent += '		</div>';
	layerContent += '	</div>';
	
	if ( !window.indtypeLayer )
	{
		var Param = {
			openType: 2 ,
			divProps: { style : { zIndex : 1006 } } ,
			filterParam: {},
			subBeforeClose : function(){IndustryChangeRemind();}
		};
		window.indtypeLayer = new ExtZzLayer( Param );
	}
	indtypeLayer.afterClose = function(){if(window.srsobj)srsobj.close(); };
	indtypeLayer.setContent( layerContent );

	indtypeLayer.setCloseNode( 'IndustryLayerClose' );
	indtypeLayer.open();
}

function IndustryChangeRemind()
{
	$.ajax({
				type: 'post',
				url: MYPATH+'/AjaxAction/ajaxSetCookie.php?'+Math.random(),
				data: {'type':1}
			});	
}


function closeResumeoptimization(DOMAIN_MY, IMGPATH, sCloseType, sRedirectUrl) {
    switch (sCloseType) {
        case '0':
            $('#resumeoptimization').hide();
            break;

        case '1':
            var sActionUrl = DOMAIN_MY + "/AjaxAction/ajaxSetCookie.php?" + Math.random();

            $.ajax({
                type: 'post',
                url: sActionUrl,
                data: {'type':2},
                success: function (data) {
                    closeResumeoptimization(DOMAIN_MY, IMGPATH, '0', '');

                    window.open(sRedirectUrl, '_blank');
                }
            });
            break;
    }
}
