// JavaScript Document
$(function(){
$('#loginTitle').find('a').click(function() {
var t0=$('#loginTitle').find('a').index(this);
$('.plogin').hide();
$('.plogin').eq(t0).show();
$('#loginTitle').find('a').removeClass('move')
$(this).addClass('move');
return false;
})

		});
	