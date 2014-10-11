// JavaScript Document
var draged=false;
(function($) {
$.fn.drag=function(options){
$.lsw.alertLeftTop($(options.dragbody));
$(this).each(function(){
var the=$(this);
the.css('cursor','move');
var dragit=false;
$(this).mousedown(function(event){
draged=false;
if(dragit){
return false;
}
if(typeof(options.mousedownFn)=='function'){
options.mousedownFn(eval(options.fnPara));
}
if((options.preventEvent)&&event.preventDefault){
event.preventDefault();
}
event.stopPropagation();
dragit=true;
oldX=event.clientX;
oldY=event.clientY;
allOffX=0;
allOffY=0;
clickX=oldX;
clickY=oldY;
$(this).css('z-index',99999);
});
$('html').mouseup(function(event){
$(options.dragbody).each(function(){
var opacity=1;
var zindex=$(this).css('zIndex');
var thisjq=$(this);
thisjq.css('z-index',zindex);
thisjq.css('opacity',opacity);
thisjq.get(0).style.filter='';
});
if(!dragit){
dragit=false;
return;
}
dragit=false;
if(typeof(options.mouseupFn)=='function'){
options.mouseupFn(eval(options.fnPara));
}
if(!options.grid)return;
var left,top,mustX,mustY;
var allOffXLt0=allOffX<0;
var allOffYLt0=allOffY<0;
if(options.grid[0]>0){
mustX=parseInt(((allOffX<0?-allOffX:allOffX)+options.grid[0]/2)/options.grid[0])*options.grid[0];
allOffX=allOffX<0?(mustX+allOffX):(allOffX-mustX);
}
if(options.grid[1]>0) {
mustY=parseInt(((allOffY<0?-allOffY:allOffY)+options.grid[1]/2)/options.grid[1])*options.grid[1];
allOffY=allOffY<0?(mustY+allOffY):(allOffY-mustY);
}
$(options.dragbody).each(function(){
left=parseInt($(this).css('left').match(/^(.+)(px)?$/)[1])-allOffX+'px';
top=parseInt($(this).css('top').match(/^(.+)(px)?$/)[1])-allOffY+'px';
$(this).css('left',left);
$(this).css('top',top);
});
if((options.preventEvent)&&event.preventDefault){
event.preventDefault();
}
return false;
});
$('html').mousemove(function(e){
if(!dragit||(options.ctrl?e.ctrlKey:false)){
return;
}else{
if(e.preventDefault){
e.preventDefault();
}
draged=true;
newX=e.clientX;
newY=e.clientY;
offX=newX-oldX;
offY=newY-oldY;
oldX=newX;
oldY=newY;
allOffX=parseInt(offX?offX:0)+allOffX;
allOffY=parseInt(offY?offY:0)+allOffY;
$.lsw.moveThey(options,offX,offY,e);
return;
}
});
});
if(options.spring&&$(this).length!=0){
$(this).eq(0).mousedown();
}
};
$.lsw={
moveThey: function(options,offX,offY,e){
if(isNaN(offX)||isNaN(offY))return;
if(options.mousemoveFn){
if(typeof(options.mousemoveFn)=='function'){
var setvalue={'offX':offX,'offY':offY};
if(!options.mousemoveFn(options.fnPara,e,setvalue))return;
}
}
if(options.selffixed){
return;
}
$(options.dragbody).each(function(){
if(options.clone){
var jq=$(this).clone();
var opt=owl.util.copy(options);
opt.dragbody=jq;
if(opt.fnPara)opt.fnPara=jq;
jq.insertBefore(this);
jq.drag(opt);
options.clone=false;
}
$(this).css('opacity',options.opacity);
var pos=$(this).position();
if(options.onlyxy=='y')$(this).css('top',offY+parseInt($(this).css('top').match(/^(.+)(px)?$/)[1])+'px');
if(options.onlyxy=='x')$(this).css('left',offX+parseInt($(this).css('left').match(/^(.+)(px)?$/)[1])+'px');
if((options.onlyxy!='y'&&(options.onlyxy!='x'))){
$(this).css('top',offY+parseInt($(this).css('top').match(/^(.+)(px)?$/)[1])+'px');
$(this).css('left',offX+parseInt($(this).css('left').match(/^(.+)(px)?$/)[1])+'px');
}
$(this).css('right','auto').css('bottom','auto');
});
},
alertLeftTop: function(jq){
jq.each(function(){
if($(this).css('position')!='relative'&&$(this).css('position')!='absolute'&&$(this).css('position')!='fixed'){
$(this).css('position','relative');
}
if(!$(this).css('left').match(/^[\d\.-]+(px)?$/)){
if($(this).css('position')=='relative'){
$(this).css('left','0px');return;
}
$(this).css('left',$(this).position().left+'px');
}
if(!$(this).css('top').match(/^[\d\.-]+(px)?$/)){
if($(this).css('position')=='relative'){
$(this).css('top','0px');
}
$(this).css('top',$(this).position().top+'px');
}
})
}
};
})(jQuery);