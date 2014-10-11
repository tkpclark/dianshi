// JavaScript Document
//找工作、企业表单切换

	
//弹出插件
jQuery.fn.setLightBox=function(options){
if($.browser.msie&&$.browser.version=='6.0'){
	$('select').each(function(){
		if($(this).hasClass('none')||$(this).css('display')=='none')return;
		$(this).addClass('forieSelect none');
	});	
}
var layoverBg=options.layoverBg?options.layoverBg:'#fff';
var layoverOpa=options.layoverOpa?options.layoverOpa:'0.5';
var alertdivWidth=options.alertdivWidth?options.alertdivWidth:'auto';
var alertdivHeight=options.alertdivHeight?options.alertdivHeight:'auto';
var alertdivBg=options.alertdivBg?options.alertdivBg:'#fff';
var closebut=options.closeBut;
var layerdiv,alertdiv;var isfirst=true;
if(jQuery('.layoverdiv').length==0){
layerdiv=jQuery('<div class="layoverdiv" style="position:absolute;width:100%;height:100%;z-index:9998;left:0;top:0;display:none;"></div>');
alertdiv=jQuery('<div class="alertdiv" style="position:absolute;top:50%;left:50%;display:none;z-index:9999;"></div>');
jQuery('body').append(alertdiv).append(layerdiv);
}else{
isfirst=false;
layerdiv=jQuery('.layoverdiv');
if(options.multil){
off=jQuery('.alertdiv').length*3+50+'%';
alertdiv=jQuery('<div class="alertdiv alertmultil" style="position:absolute;top:'+off+';left:'+off+';display:none;z-index:9999;"></div>');
jQuery('body').append(alertdiv);
}else{
jQuery('.alertmultil').remove();
alertdiv=jQuery('.alertdiv');
}
}
layerdiv.css('background',layoverBg);
//layerdiv.width(jQuery('body').outerWidth(true));
layerdiv.height(jQuery('body').outerHeight(true)>document.documentElement.scrollHeight?jQuery('body').outerHeight(true):document.documentElement.scrollHeight);
alertdiv.css({'width':alertdivWidth,'height':alertdivHeight}).html('').append(jQuery(this));
if(!options.multil){
layerdiv.css('opacity','0').css('display','block').fadeTo(500,layoverOpa);
}
alertdiv.fadeIn(600,function(){
layerdiv.height(jQuery('body').outerHeight(true)>document.documentElement.scrollHeight?jQuery('body').outerHeight(true):document.documentElement.scrollHeight);
});
if(!options.canNotDrag){
var dragbodys=options.dragbody?alertdiv.find(options.dragbody):alertdiv;
if(alertdiv.find('img').length!=0){
if(options.closeBut||options.multil){
dragbodys.drag({dragbody: alertdiv,opacity: '0.8',preventEvent:true});
}else{
dragbodys.drag({dragbody: alertdiv,opacity: '0.8',preventEvent:true,mouseupFn:function(){if(!draged){$.ml.closeLightBox();}}});
}
}else{
if(options.closeBut||options.multil){
dragbodys.drag({dragbody: alertdiv,opacity: '0.8'});
}else{
dragbodys.drag({dragbody: alertdiv,opacity: '0.8',mouseupFn:function(){if(!draged){$.ml.closeLightBox();}}});
}
}
}
var mtop = -(alertdiv.outerHeight()/2);
var clientH = document.documentElement.clientHeight;
var clientW = document.documentElement.clientWidth;
var stop = clientH/2+(document.documentElement.scrollTop==0?document.body.scrollTop:document.documentElement.scrollTop);
if(stop+mtop<0){
stop = 20;
mtop = 0;
}
var inwindow_padding = 15;
alertdiv.css('top',stop+'px');
alertdiv.css({'margin-left':'-'+(alertdiv.outerWidth()/2+'px'),'margin-top':mtop+'px'});
jQuery(this).add(jQuery(this).find('img')).load(function(){
if(options.inWindow){
if(($(this).height())>clientH){
$(this).height(clientH-inwindow_padding*2);
}
if((false&&$(this).width())>clientH){
$(this).width(clientW-inwindow_padding*2);
}
}
stop = clientH/2+(document.documentElement.scrollTop==0?document.body.scrollTop:document.documentElement.scrollTop);
mtop = -(alertdiv.outerHeight()/2);
if(stop+mtop<0){
stop = 20;
mtop = 0;
alertdiv.css('top',stop+'px');
}
alertdiv.css('top',stop+'px');
alertdiv.css({'margin-left':'-'+(alertdiv.outerWidth()/2+'px'),'margin-top':mtop+'px'});
});
//}
if(!options.layerdivClick&&!options.multil){
layerdiv.unbind('click').click(function(){
$.ml.closeLightBox();
});
}
if(closebut!=undefined){
alertdiv.find(closebut).unbind('click').click(function(){
if(typeof(options.closeFn)=='function'&&options.closeFn()===false){
	return;
}
if(options.closeSelf){
$.ml.hideLightBox();
}else if(options.multil){
alertdiv.remove();
}else{
$.ml.closeLightBox();
}
});
}
if(options.sureBut!=undefined){
alertdiv.find(options.sureBut).unbind('click').click(function(){
$(this).attr('disabled',true);
if(options.closeSelf){
$.ml.hideLightBox();
}
if(typeof(options.sureFn)=='function'&&options.sureFn($(this),options.suerPara)===false){
$(this).attr('disabled',false);
return;
}
$(this).attr('disabled',false);
if(!options.closeSelf){
if(options.multil){
alertdiv.remove();
}else{
$.ml.closeLightBox();
}
}
});
}
if(options.closeSelfBut!=undefined){
alertdiv.find(options.closeSelfBut).unbind('click').click(function(){
alertdiv.remove();
});
}
};
//弹出插件２
jQuery.fn.setLightBox2=function(options){
var layoverBg=options.layoverBg?options.layoverBg:'#fff';
var layoverOpa=options.layoverOpa?options.layoverOpa:'0.5';
var alertdivWidth=options.alertdivWidth?options.alertdivWidth:'auto';
var alertdivHeight=options.alertdivHeight?options.alertdivHeight:'auto';
var alertdivBg=options.alertdivBg?options.alertdivBg:'#fff';
var id=options.id?options.id:'1';
var closebut=options.closeBut;
var layerdiv,alertdiv;var isfirst=true;
var alertClass='alertdiv'+id;
var layerClass='layoverdiv'+id;
if(jQuery('.'+layerClass).length==0){
layerdiv=jQuery('<div class="'+layerClass+'" style="position:absolute;width:100%;height:100%;z-index:9998;left:0;top:0;display:none;"></div>');
//alertdiv=jQuery('<div class="'+alertClass+'" style="position:absolute;top:50%;left:50%;display:none;z-index:9999;"></div>');
jQuery(this).wrap('<div class="'+alertClass+'" style="position:absolute;top:50%;left:50%;display:none;z-index:9999;"></div>');
jQuery('body').append(layerdiv);
}
layerdiv=jQuery('.'+layerClass);
alertdiv=jQuery('.'+alertClass);

layerdiv.css('background',layoverBg);
//layerdiv.width(jQuery('body').outerWidth(true));
layerdiv.height(jQuery('body').outerHeight(true)>document.documentElement.scrollHeight?jQuery('body').outerHeight(true):document.documentElement.scrollHeight);
alertdiv.css({'width':alertdivWidth,'height':alertdivHeight});
if(!options.multil){
layerdiv.css('opacity','0').css('display','block').fadeTo(500,layoverOpa);
}
alertdiv.fadeIn(600,function(){
layerdiv.height(jQuery('body').outerHeight(true)>document.documentElement.scrollHeight?jQuery('body').outerHeight(true):document.documentElement.scrollHeight);
});
if(!options.canNotDrag){
var dragbodys=options.dragbody?alertdiv.find(options.dragbody):alertdiv;
if(alertdiv.find('img').length!=0){
if(options.closeBut||options.multil){
dragbodys.drag({dragbody: alertdiv,opacity: '0.8',preventEvent:true});
}else{
dragbodys.drag({dragbody: alertdiv,opacity: '0.8',preventEvent:true,mouseupFn:function(){if(!draged){$.ml.closeLightBox();}}});
}
}else{
if(options.closeBut||options.multil){
dragbodys.drag({dragbody: alertdiv,opacity: '0.8'});
}else{
dragbodys.drag({dragbody: alertdiv,opacity: '0.8',mouseupFn:function(){if(!draged){$.ml.closeLightBox();}}});
}
}
}
var mtop = -(alertdiv.outerHeight()/2);
var clientH = document.documentElement.clientHeight;
var clientW = document.documentElement.clientWidth;
var stop = clientH/2+(document.documentElement.scrollTop==0?document.body.scrollTop:document.documentElement.scrollTop);
if(stop+mtop<0){
stop = 20;
mtop = 0;
}
var inwindow_padding = 15;
alertdiv.css('top',stop+'px');
alertdiv.css({'margin-left':'-'+(alertdiv.outerWidth()/2+'px'),'margin-top':mtop+'px'});
jQuery(this).add(jQuery(this).find('img')).load(function(){
if(options.inWindow){
if(($(this).height())>clientH){
$(this).height(clientH-inwindow_padding*2);
}
if((false&&$(this).width())>clientH){
$(this).width(clientW-inwindow_padding*2);
}
}
stop = clientH/2+(document.documentElement.scrollTop==0?document.body.scrollTop:document.documentElement.scrollTop);
mtop = -(alertdiv.outerHeight()/2);
if(stop+mtop<0){
stop = 20;
mtop = 0;
alertdiv.css('top',stop+'px');
}
alertdiv.css('top',stop+'px');
alertdiv.css({'margin-left':'-'+(alertdiv.outerWidth()/2+'px'),'margin-top':mtop+'px'});
});
//}
if(!options.layerdivClick&&!options.multil){
layerdiv.unbind('click').click(function(){
$.ml.closeLightBox();
});
}
if(closebut!=undefined){
alertdiv.find(closebut).unbind('click').click(function(){
if(typeof(options.closeFn)=='function'&&options.closeFn()===false){
	return;
}
if(options.closeSelf){
$.ml.hideLightBox();
}else if(options.multil){
alertdiv.remove();
}else{
$.ml.closeLightBox();
}
});
}
if(options.sureBut!=undefined){
alertdiv.find(options.sureBut).unbind('click').click(function(){
$(this).attr('disabled',true);
if(options.closeSelf){
$.ml.hideLightBox();
}
if(typeof(options.sureFn)=='function'&&options.sureFn($(this),options.suerPara)===false){
$(this).attr('disabled',false);
return;
}
$(this).attr('disabled',false);
if(!options.closeSelf){
if(options.multil){
alertdiv.remove();
}else{
$.ml.closeLightBox();
}
}
});
}
if(options.closeSelfBut!=undefined){
alertdiv.find(options.closeSelfBut).unbind('click').click(function(){
alertdiv.remove();
});
}
};
$.ml = {closeLightBox:function(options){
	$('.alertdiv,.layoverdiv').remove();
	if($.browser.msie&&$.browser.version=='6.0'){
		$('.forieSelect').removeClass('none');	
	}
},hideLightBox:function(options){
	$('.alertdiv,.layoverdiv').remove();
	if($.browser.msie&&$.browser.version=='6.0'){
		$('.forieSelect').removeClass('none');	
	}
}
};
function isChecked(c){
var	ischecked=false;;
$(c).each(function(){
if($(this).attr('checked')){
ischecked=true;
return false;
};
});
return ischecked;;
}
//验证方法
//validate="custom:checkCertificate"
//validate="email"	required
//validate="regex:^\d{4}-\d{2}-\d{2}$:格式不正确，如1990-05-15"
//customfn(val,jq_e,jq_msg) return [false,'error']
var errorE=null;
var submiting = false;
function validateMyInfo(selector){
	var jq_e = $(selector);
	if(typeof(validateType)!='undefined'&&validateType=='class'){
		var jq_msg = jq_e.parent().parent().find('.'+jq_e.attr('tip')+':first');
	}else{
		var jq_msg = $('#'+jq_e.attr('tip'));
	}
	
	var validate_str = $.trim(jq_e.attr('validate'));
	//if(validate_str=='')return true;
	var validate_array = validate_str.split(':');
	var val = $.trim(jq_e.val());
	var r =true;
	var msg = '';
	var tipClass = 'tipError';
	switch(validate_array[0]){
		case 'regex': {
			r=validateMyRegex(validate_array[1],val); 
			msg =  validate_array[2];
			break;
		}
		case 'required':{
			if(val==''){
				r = false;
				msg = (validate_array[1]&&validate_array[1]!='')?validate_array[1]:(jq_e.get(0).tagName.toUpperCase()=='SELECT'?'请选择该项':'请填写该项');
			}
			break;
		}
		case 'email':{
			if(!val.match(/^([\w-+\._]+){1,}@[\w-]{2,}(\.[\w-]{2,}){1,4}$/)){
				r = false;
				msg = '邮件格式不正确';
			}
			break;
		}
		case 'custom':{
			if(validate_array[1]!=''){
				custom_r = eval(validate_array[1])(val,jq_e,jq_msg);
				r = custom_r[0];//错误标记
				msg = custom_r[1];//错误提示
				tipClass= custom_r[2]?custom_r[2]:'tipError';//class
			}
			break;
		}
		default :return true;
	}
	if(r){
		jq_e.removeClass('error focus');
		var show = jq_e.attr('show');
		if(tipClass=='tipNotice'){
			jq_msg.removeClass('tipError').addClass('tipNotice').html(msg?msg:(show?show:''));
		}else{
			jq_msg.removeClass('tipError tipNotice').html(msg?msg:(show?show:''));
		}
	}else{
		jq_e.addClass('error');
		jq_msg.removeClass('tipError tipNotice').addClass(tipClass).html(msg);
	}
	return r;
}
function validateMyRegex(regex,str){
	var re = new RegExp(regex);
	if(re.test(str)){
		return true;
	}
	return false;
}
function checkMyCommonFields(selector){
	var sign = true;
	errorE = null;
	selector.each(function(){
		if(validateMyInfo(this)!=true){
			sign=false;
			if(!errorE){
				errorE = $(this);
			}
			return false;
		}
	});
	return sign;
}

//检查身份证
function checkCertificate(val,jq_e,jq_msg){
	var typeID = $('#CertificateTypeID').val();
	var len_val= val.length;
	if(typeID=='1'){
		//判断15,18位
		if(len_val!=15&&len_val!=18){
			return [false,'身份证为15或18位']; 
		}
		//非法字符
		if(!val.match(/(^\d{18}$)|(^\d{17}[Xx]$)|(^\d{15}$)/)){
			return [false,'身份证格式不正确'];
		}
		//判断前两位是否为省的代号
		if(!val.match(/^(11|22|35|44|53|12|23|36|45|54|13|31|37|46|61|14|32|41|50|62|15|33|42|51|63|21|34|43|52|64|65|71|81|82|91)/)){
			return [false,'身份证前两位不是合法的行政区代码'];
		}
		var m = null;var year = month = day = Gender = 0;var offYear = 0;
		var max = 60;min=18;
		if(len_val==15){
			m = val.match(/^\d{6}(\d{2})(\d{2})(\d{2})\d{2}(\d)$/);
			year = '19'+m[1];month = m[2];day = m[3];Gender = m[4];
		}else if(len_val==18){
			m = val.match(/^\d{6}(\d{4})(\d{2})(\d{2})\d{2}(\d)([\dXx])$/);
			year = m[1];month = m[2];day = m[3];Gender = m[4]; 
		}
		year = parseInt(year);
		offYear = nowYear-year;
		//合法月日
		if(month>12||day>31){
			return [false,'身份证出生日期不正确'];
		}
		//检查年龄必须在18到35岁之间
		if(offYear>35||offYear<18){
			return [false,'身份证出生日期不正确，小于18周岁或大于35周岁'];
		}
		//校验18位最后一位的校验码
		if(len_val==18&&(!checkEndByte(val))){
			return [false,'身份证最后一位校验位错误'];
		}
		tongbuBirthday(year,month,day,Gender);
	}else{
		if(len_val<6){
			return [false,'证件号码至少为6位']; 
		}
	}
	if(!submiting){
		$.ajax({
			url:'ajax.php',
			data:'act=checkCertificate&certificate='+val,
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
	return [true,''];
}
//校验码验证
function checkEndByte(val){
	var arrVarifyCode = ["1","0","x","9","8","7","6","5","4","3","2"];
    var Wi = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
    var Ai = val.split("");
    var sum = 0;
    for (var i = 0; i < 17; i++){
        sum += Wi[i] * parseInt(Ai[i]);
    }
    
    var y = -1;
    y = sum%11;
    if (arrVarifyCode[y] != Ai[17].toLowerCase()){
        return false;
    }

    return true;
}
//修改身份证同步出生年月 性别
function tongbuBirthday(y,m,d,sex){
	if(submiting)return;
	$('#birthYear').val(y);
	$('#birthMonth').val(m);
	$('#birthDay').val(d);
	
	sex = parseInt(sex);
	if(sex%2==0){
		sex = '女';
		$('#girl').attr('checked',true);
	}else{
		sex = '男';
		$('#boy').attr('checked',true);
	}
}
/*
图片切换33不自动
iteml = jQuery(this).find('.smallitem').length;
iteml = ((iteml-allowl)>allowl)?allow:(iteml-allowl);
imagesSwitch33(pre,next,jQuery(this).find('.smallitem'),900,iteml);
*/
function imagesSwitch33(left,right,items,movetime,num){
movetime=(parseInt(movetime))?movetime:400;
items.parent().css({position:'relative',overflow:'hidden'});
items.parent().wrapInner('<div></div>');
items.parent().css('position','absolute');
items.parent().css('left','0');
var offw=items.eq(0).outerWidth(true);
var allw=items.outerWidth(true)*(items.length);
var movew=offw*num;
items.parent().width(allw+'px');
var len=items.length;
var isclick=false;

left.click(function(){
	//clearInterval(MyMar);
	if(items.parent().queue('fx').length!=0)return;
	isclick=true;
	items.parent().prepend(items.parent().find('>').slice(len-num,len));
	items.parent().css('left','-'+movew+'px');
	items.parent().animate({left:'+='+movew+'px'},movetime,function(){
		//items.parent().append(items.parent().find('>').slice(0,num));
		items.parent().css('left',0);
		if(items.parent().find('.item:first').attr('pos')=='first'){
			left.addClass('none');
		}
		right.removeClass('none');
	});
});
right.click(function(){
	//clearInterval(MyMar);
	if(items.parent().queue('fx').length!=0)return;
	isclick=true;
	items.parent().animate({left:'-='+movew+'px'},movetime,function(){
		//items.parent().prepend(items.parent().find('>').slice(len-num,len));
		items.parent().append(items.parent().find('>').slice(0,num));
		items.parent().css('left',0);
		if(items.parent().find('.item:first').attr('pos')=='end'){
			right.addClass('none');
		}
		left.removeClass('none');
	});
});
}
$.fn.searchRemind=function(options){
	var left = options.left?options.left:'0';
	var top = options.top?options.top:'25px';
	var width = options.width?options.width:'200px';
	var url = options.url;
	var index=0;
	var getstr='';
	var inputstr='';
	var activeOutdiv=null;
	//var activeInterviewer=null;
	var activeTheinput=activeSchool=null;
	this.each(function(index){
	$(this).parent().css('position','relative').css('z-index',999);
	$(this).attr('autocomplete','off');
	$(this).after('<div class="searchoutdiv" style="z-index:9999;left:'+left+';top:'+top+';width:'+width+';position:absolute;background-color:#fff;border:1px solid #809db9;display:none;"></div>');
	var showCollegesFn=function(event){
	var outdiv = $(this).next('.searchoutdiv');
	activeTheinput = $(this);
	activeSchool = $(this).parents('table:first').find('.school_name_college:first');
	//activeInterviewer = $(this).parent().find('.interviewer');
	if(event.keyCode==13||event.keyCode==27){
	var firstdiv = outdiv.find('div');
	if(event.keyCode==13&&firstdiv.length==1){
	activeTheinput.val(firstdiv.text());
	validateMyInfo(activeTheinput);
	//activeInterviewer.val(firstdiv.attr('val'));
	}
	index=0;
	outdiv.html('').css('display','none');return;
	}
	inputstr=$(this).val();
	getstr='';
	if(inputstr==''){
	outdiv.css('display','none');
	return;
	}
	if(event.keyCode==38||event.keyCode==40)return;
	var items = getInterviewerByKey(inputstr,$.trim(activeSchool.val()),16);
	var items_len = items.length;
	if(items_len==0){
	outdiv.html('');
	return;
	}
	activeOutdiv = outdiv;
	$(this).parent().css('z-index',1000);
	outdiv.css('display','block');
	index=0;
	outdiv.html('');
	for (var i =0;i<items_len;i++){
	outdiv.append('<div val="'+items[i]+'">'+items[i]+'</div>');
	}
	outdiv.find('div').each(function(i){
	$(this).mouseover(function(){
	index=i+1;
	outdiv.find('div').css('background-color','#fff');
	$(this).css('background-color','#e2e6f0');
	}).mouseout(function(){
	index=0;
	outdiv.find('div').css('background-color','#fff');
	$(this).css('background-color','#fff');
	}).click(function(){
	index=0;
	activeTheinput.val($(this).text());
	validateMyInfo(activeTheinput);
	//activeInterviewer.val($(this).attr('val'));
	}).css('cursor','default');
	});
	};
	$(this).keyup(showCollegesFn);
	$(this).focus(showCollegesFn);
	$(this).click(function(event){
		event.stopPropagation();
	});
	});
	$('body').click(function(){
	index=0;
	$('.searchoutdiv').html('').css('display','none').parent().css('z-index',999);
	});
	$('body').keydown(function(event){
	if(!activeOutdiv||activeOutdiv.css('display')=='none')return;
	if(event.keyCode==38){
	if(index<=1)index=activeOutdiv.find('div').length+1;
	index--;
	activeOutdiv.find('div').css('background-color','#fff');
	outdiv_item = activeOutdiv.find('div').eq(index-1);
	outdiv_item.css('background-color','#e2e6f0');
	activeTheinput.val(outdiv_item.text());
	validateMyInfo(activeTheinput);
	//activeInterviewer.val(outdiv_item.attr('val'));
	}
	if(event.keyCode==40){
	if(index==activeOutdiv.find('div').length)index=0;
	index++;
	activeOutdiv.find('div').css('background-color','#fff');
	outdiv_item = activeOutdiv.find('div').eq(index-1);
	outdiv_item.css('background-color','#e2e6f0');
	activeTheinput.val(outdiv_item.text());
	validateMyInfo(activeTheinput);
	//activeInterviewer.val(outdiv_item.attr('val'));
	}
	if(event.keyCode==13||event.keyCode==27){
	index=0;
	//$('.searchoutdiv').html('').css('display','none').parent().css('z-index',999);
	}
	});
	};
	function getInterviewerByKey(key,school,size){
		if(!size){
			size = 10;
		}
		if(typeof(colleges)=='undefined')return [];
		var data = colleges[school];
		var len = data?data.length:0;
		var temp = new Array();
		for(var i=0;i<len;i++){
			if(data[i].indexOf(key)!=-1){
				temp[temp.length] = data[i]; 
				if(size--==0){
					break;
				}
			}
		}
		return temp;	//返回
	}
	