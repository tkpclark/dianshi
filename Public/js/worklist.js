// JavaScript Document

 $(document).ready(function(){

$(".icon_width_mdf_list").toggle(
function(){ 
$(this).parent().parent().parent().parent().next().next().show(); },
function () { 
$(this).parent().parent().parent().parent().next().next().hide();
});


//已读
$(".pre_cv_read").click(
function(){ 
$(this).hide(); 
$(this).next().show(); }
);

//已发送
$(".pre_cv_send").click(
function(){ 
$(this).hide(); 
$(this).next().show(); }
);

});