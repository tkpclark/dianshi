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


});