// JavaScript Document

(function(){
	$(document).ready(function(){
		var slide_i=0;
		var slide_img_set=$(".banner_bg .img");
		var slide_timer=setInterval(function(e){
			
			$(slide_img_set[slide_i]).fadeOut("slow");
			if(slide_i==slide_img_set.length-1){
				slide_i=0;	
			}
			else{
				slide_i++;
			}
			$(slide_img_set[slide_i]).fadeIn("slow");
			
		},3500);
		
	});
})();

$(function() {

	allPage();
	if($('#indexpage').length!=0){
		indexpage();
		return;
	}
	if($('#welfare').length!=0){
		welfarepage();
		return;
	}
	if($('#workEnvipage').length!=0){
		imgChange();
		return;
	}
	if($('#ypinfopage').length>0){
		ypinfoPage();return;
	}
	if($('#grinfopage').length>0){
		grinfoPage();return;
	}
	if($('#eduinfopage').length>0){
		eduinfoPage();return;
	}
	if($('#hdinfopage').length>0){
		hdinfoPage();return;
	}
	if($('#hdinfopage').length>0){
		hdinfoPage();return;
	}
	if($('#preach').length>0){
		preachPage();
	}
	if($('#previewpage').length>0){
		previewPage();
	}

});
function allPage(){
	if(typeof(mustShowLogin)!='undefined'&&mustShowLogin){
		showLogin(true);
	}
	if(typeof(alertError)!='undefined'){
		alert(alertError);
	}
	$('a').focus(function(){
		$(this).blur();
	});	
}
var homeimgLoaded=[];homeindex=0;
function indexpage(){
	//换低图
	//autoChangeHomebg();
}
function autoChangeHomebg(){
	if(typeof(homeimgbg)!='object')return;
	loadImgs(homeimgbg);
	setInterval(changeHomeBackgroud, 7000);
}
function changeHomeBackgroud(){
	if(homeimgLoaded.length==0)return;
	if(!homeimgLoaded[homeindex]){
		homeindex=0;
	}
	if('url("'+homeimgLoaded[homeindex]+'")'==$('body:first').css('background-image')){
		if(++homeindex==homeimgLoaded.length){
			homeindex = 0;
		}
	}
	$('body:first').css('background-image','url('+homeimgLoaded[homeindex]+')');
	if(++homeindex==homeimgLoaded.length){
		homeindex = 0;
	}
}
function loadedImg(){
	homeimgLoaded.push(this.src);
}
function loadImgs(imgs){
	var len_imgs = imgs.length;
	for(var i = 0;i<len_imgs;i++){
		img = new Image();
		img.onload=loadedImg;
		img.src = imgs[i];
	}
}


//closeGoHome在强制登录页面，点击关闭去首页

function gohome(){
	window.location.href='index.php';
}

function ptlogin2_onResize(width, height) {
	//获得浮动Div对象
	var login_frame = document.getElementById("login_frame");
	if (login_frame)  {
		//重新设置大小注意，一定要加px，否则firefox下有问题
		login_frame.style.width = width + "px";
		login_frame.style.height = height + "px";
		//最好重新调整登录框的位置， 这儿略....
		//先隐藏，在显示，这样可以避免滚动条的出现
		login_frame.style.visibility = "hidden";
		login_frame.style.visibility = "visible";
	}

}

function imgChange(){
	$('.imgchange').each(function(){
		var big_img=$(this).find('.bigimg');
		var dot=$(this).find('.squars a');
		dot.mouseover(function(){
			if($(this).hasClass('active')) return;
				if(big_img.queue('fx').length!=0){
					big_img.stop(true);
				}
			dot.removeClass('active');
			var img=$(this).attr('b');
			$(this).addClass('active');
		
			big_img.animate({'opacity':'0.2'},400,function(){
				big_img.css('background-image','url('+img+')');
				big_img.animate({'opacity':'1'},700);
			});
		}).click( function(e){
			e.stopPropagation();
			e.preventDefault();
			return false;
			});
	});
}
function ypinfoPage(){
	$('[validate]').each(function(){
		if($(this).get(0).tagName.toUpperCase()=='SELECT'){
			$(this).change(function(){
				validateMyInfo(this);
			});
		}else{
			$(this).blur(function(){
				validateMyInfo(this);
			});
		}
	});
	$('#isDeploy,#notDeploy').click(function(){
		if($(this).val()=='1'){
			$('#expectWorkPlace2div').removeClass('none');
		}else{
			$('#expectWorkPlace2div').addClass('none');
		}
	});
}
function grinfoPage(){
	$('[validate]').blur(function(){
		validateMyInfo(this);
	});
	initBirthDate();
}
function eduinfoPage(){
	$('.dept_name_college').searchRemind({left:'0px',top:'25px',width:'300px'});
//$('[validate]').blur(function(){
//		validateMyInfo(this);
//	});
	changeAddDelEdu();
}
function hdinfoPage(){
	$('#regresume textarea').focus(function(){
		if($(this).attr('title')==$.trim($(this).val())){
			$(this).val('').removeClass('gray');
		}else{
			$(this).removeClass('gray');
		}
		
	}).blur(function(){
		if(''==$.trim($(this).val())){
			$(this).val($(this).attr('title')).addClass('gray');
		}
	}).blur();
	$('#regresume [type=radio]').click(function(){
		if($(this).val()=='1'){
			$(this).parent().find('.textarea:first').removeClass('none');
		}else{
			$(this).parent().find('.textarea:first').addClass('none');
		}
		activeProveReq();
	});
	activeProveReq();
}
//显示隐藏活动证明人是否必填
function activeProveReq(){
	if(hasActive()){
		$('#activeProveReq').removeClass('none');
	}else{
		$('#activeProveReq').addClass('none');
	}
}
//有选择有的。。。
function hasActive(){
	var flag = false;
	$('#hasProject,#hasPractice,#hasScholarship,#hasAwards,#hasCadres').each(function(){
		if($(this).attr('checked')){
			flag=true;
			return false;
		}
	});
	return flag;
}
function activeProve(val,jq_e,jq_msg){
	if(hasActive()){
		if(val==''){
			return [false,'请填写该项'];
		}
	}
	return [true,''];
}

function getOptionHtml(start,end,now){
	var option  ='<option value="">请选择</option>';
	var selected = '';var for0 = '';
	for(;start<=end;start++){
		if(start==now){
			selected = ' selected="selected"';
		}else{
			selected = '';
		}
		for0 = start<10?'0':'';
		option +='<option'+selected+' value="'+for0+start+'">&nbsp;'+start+'</option>';
	}
	return option;
}
function otherNotBank(val,jq_e,jq_msg){
	if(jq_e.attr('checked')&&$.trim($('#'+jq_e.attr('oId')).val())==''){
		return [false,'请填写细节'];
	}
	return [true,''];
}
function resumeFile(val,jq_e,jq_msg){
	if(val==""){
		return [false,'请填写细节'];
	}
	return [true,''];
}
function checkHasAwards(val,jq_e,jq_msg){
	if(jq_e.attr('checked')&&(!isChecked('.awards'))&&($.trim($('#awardsarea').val())=='')){
		return [false,'请填写细节'];
	}
	return [true,''];
}
function checkMobile(val,jq_e,jq_msg){
	var show = '';var flag = true;
	if(val==''){
		return [false,'请填写该项'];
	}else if(val.length!=11&&$('#mobileType').val()=='1'){
		return [false,'长度不为11位'];
	}else if(val.match(/\D/)){
		return [false,'只能是数字'];
	}
	if(!submiting){
		$.ajax({
			url:'ajax.php',
			data:'act=checkMobile&mobile='+val,
			type:'POST',
			dataType:'text',
			timeout:15000,
			error:function(){
				
			},
			success:function(text){//nologin
				text = $.trim(text);
				if(text=='nologin'){
					showLogin(true);
				}else{
					var r = eval('('+text+')');
					if(!r[0]){
						jq_msg.removeClass('tipError tipNotice').addClass('tipError').html(r[1]);
					}
				}
			}
		});
	}
	if(true||flag){
		return [true,''];
	}else{
		return [true,show,'tipNotice'];
	}	
}

function changeAddDelEdu(){
	var dels =$('.oneedu .del');
	if(dels.length==1){
		dels.addClass('none');
	}else{
		dels.removeClass('none');
	}
	$('.oneedu .add').addClass('none');
	$('.oneedu .add:last').removeClass('none');
}
function showBigImg(the){
	var html = '<img src="'+$(the).attr('src')+'"/>';
	$(html).setLightBox({layoverBg:'#000',layoverOpa:'0.1',alertdivBg:'#fff'});
}

//检查FAQ页面发送反馈表单是否为空，并提交查询
//thetype可能是反馈建议

function changeCode(){
	$('#code').attr('src','checkno.php?r='+Math.random());
}
function showManhua(){
	//只初始化一次
	var manhuas = $('#manhuas');
	var items = manhuas.find('.item');
	var prev = manhuas.find('.prev:first');
	var next = manhuas.find('.next:first');
	if(!manhuas.attr('inited')){
		//初始化背景
		items.each(function(){
			$(this).css('background-image','url('+$(this).attr('src')+')');
		});
	}
	//$('body > div').css('display','none');
	//manhuas.css('display','block');
	manhuas.css('display','block').setLightBox2({id:'1',layoverBg:'#000',layoverOpa:'0.5',alertdivBg:'#fff',alertdivWidth:'1000px',layerdivClick:true,canNotDrag:true});
	if(!manhuas.attr('inited')){
		//初始化事件
		imagesSwitch33(prev,next,items,900,1);
		manhuas.attr('inited',1);
	}
}
function hideManhua(){
	//$('#manhuas').css('display','none');
	$('.layoverdiv1,.alertdiv1').css('display','none');
	if($.browser.msie&&$.browser.version=='6.0'){
		$('.forieSelect').removeClass('none');	
	}
	//$('body > div').css('display','block');
	//manhuas.css('display','none');
}
function schoolinputKeyup(the){
var jq_msg = $(the).parent().parent().find('.'+$(the).attr('tip')+':first').removeClass('tipNotice').addClass('tipError').html('请选择');
}

function alertExam(){
	$(function(){
		//public edit
		$.get("/",{act:"check_exam"},function(databack){
			$("body").append(databack);
		});
	});
}

function closeExamTip(){
	$(".index_exam_tip_bg").remove();
	$(".index_exam_tip").remove();
}
