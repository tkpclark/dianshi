// JavaScript Document
$(document).ready(function(){
	
	
$('.work_invite').load('/dscj/Project/Home/View/CompanyInformation/invite_list.html');
	
	$("a.invite").click(function(){
		
		//alert($('.content').html());
		 $('.work_invite').load('/dscj/Project/Home/View/CompanyInformation/invite_list.html');
		
		
	})
	$("a.untreated").click(function(){
		
		//alert($('.content').html());
		 $('.work_invite').load('/dscj/Project/Home/View/CompanyInformation/invite_list.html');
		
		
	})
	
	
	$("a.past_invite").click(function(){
		
		
		 $('.work_invite').load('/dscj/Project/Home/View/CompanyInformation/invite_list.html');
		
		 
		
	})
	
$(".spread_detail").click(
function(){ 
$(this).hide(); 
$(this).next().show();
$(this).parent().parent().parent().parent().find('.hide_detail').show();
 }
);

$(".unspread_detail").click(
function(){ 
$(this).hide(); 
$(this).parent().find('.spread_detail').show();
$(this).parent().parent().parent().parent().find('.hide_detail').hide();
 }
);
//已接受
$(".invite_cv_send").click(
function(){ 
$(this).next().show().siblings("div").hide();
 }
);
//接受改为不接受
$(".inner_list_invite").click(
function(){
$(this).next().show().siblings("div").hide(); 
 }
);
//不接受改为接受
$(".notinterest_cv_send").click(
function(){
$(this).parent().find('.inner_list_invite').show().siblings("div").hide();
 }
);

$.each($("input,textarea"),function(){$("input,textarea").attr("disabled", "disabled")});	
	
})