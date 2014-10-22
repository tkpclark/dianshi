// JavaScript Document

 $(document).ready(function(){

$(".icon_width_mdf_list").toggle(
function(){ 
//$(".icon_width_mdf_list").addClass("pre_btn_selected");
$(this).parent().parent().parent().parent().next().next().show(); },
function () { 
//$(".icon_width_mdf_list").removeClass("pre_btn_selected"); 
$(this).parent().parent().parent().parent().next().next().hide();
});



$(".pre_cv_read").click(
function(){ 
//$(".icon_width_mdf_list").addClass("pre_btn_selected");
$(this).hide(); 
$(this).next().show(); }
);


$(".pre_cv_send").click(
function(){ 
//$(".icon_width_mdf_list").addClass("pre_btn_selected");
$(this).hide(); 
$(this).next().show(); }
);

});