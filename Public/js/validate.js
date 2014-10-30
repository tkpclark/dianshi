
$(function(){   
//普通用户验证
$("#login_job_button,#regist_job_button").click(function(){  

var name = document.getElementById("u").value;
var password = document.getElementById("p").value;
	
	  if (name != "") {
     var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	     isok= reg.test(name);
	       if (!isok) {
	            //alert("用户名格式不正确，请重新输入！");
				$(".name_null").css("display", "block");
	            document.getElementById("u").focus();
	            return false;
	        }else{$(".name_null").css("display", "none");
			
			if (password == "") {
               $(".pass_null").css("display", "block");
	            document.getElementById("p").focus();
	            return false; }else{$(".pass_null").css("display", "none");}
	};
			
			
			
	};
	
	
$("#jobform").submit();
});  

//企业验证
$("#login_com_button,#regist_com_button").click(function(){  

var name = document.getElementById("cu").value;
var password = document.getElementById("cp").value;
	
	  if (name != "") {
     var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	     isok= reg.test(name);
	       if (!isok) {
	            //alert("用户名格式不正确，请重新输入！");
				$(".cname_null").css("display", "block");
	            document.getElementById("cu").focus();
	            return false;
	        }else{$(".cname_null").css("display", "none");
			
			if (password == "") {
               $(".cpass_null").css("display", "block");
	            document.getElementById("cp").focus();
	            return false; }else{$(".cpass_null").css("display", "none");}
	};
			
			
			
	};
	
	
$("#comform").submit();
});   
});   

