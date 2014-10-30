
$(function(){   
$("#login_job_button").click(function(){  

var name = document.getElementById("u").value;


   /*var q2 = document.getElementById("q2").value;
  if((q2.indexOf("<") != -1)||(q2.indexOf("(") != -1)||(q2.indexOf("=") != -1)||(q2.indexOf("select") != -1)||(q2.indexOf("insert") != -1)||(q2.indexOf("update") != -1)||(q2.indexOf("delete") != -1))
    { 
      alert("第2题输入有误！");
                  document.getElementById("q2").focus();
      return false;
    }*/
	
	/*if((tel.indexOf("<") != -1)||(tel.indexOf("(") != -1)||(tel.indexOf("=") != -1)||(tel.indexOf("select") != -1)||(tel.indexOf("insert") != -1)||(tel.indexOf("update") != -1)||(tel.indexOf("delete") != -1)){   
   		alert("电话输入有误！");
                  document.getElementById("phone").focus();
   		return false; 
   	}*/
   
   	if((name.indexOf("<") != -1)||(name.indexOf("(") != -1)||(name.indexOf("=") != -1)||(name.indexOf("select") != -1)||(name.indexOf("insert") != -1)||(name.indexOf("update") != -1)||(name.indexOf("delete") != -1)){ 
   		alert("用户名输入有误，请填写邮箱！");
                  document.getElementById("u").focus();
   		return false;
   	}
	
	//checktelephone
	String.prototype.Trim = function() {  
  		var m = this.match(/^\s*(\S+(\s+\S+)*)\s*$/);  
  		return (m == null) ? "" : m[1];  
	}

	String.prototype.isMobile = function() {  
  		return (/^(?:13\d|15\d|18\d)-?\d{5}(\d{3}|\*{3})$/.test(this.Trim()));  
	} 

	String.prototype.isTel = function() {
    		//"兼容格式: 国家代码(2到3位)-区号(2到3位)-电话号码(7到8位)-分机号(3位)"
    		//return (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(this.Trim()));
    		return (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(this.Trim()));
	}
	with(document){
       		 if (tel.isMobile()||tel.isTel()) {  
            		tel = tel.Trim();  
        	          }else if(phone.value!="") {  
            		alert("请输入正确的手机号码或电话号码\n\n例如:13916752109或0712-3614072"); 
            		phone.focus();
            		return false;        
        	          }          
    	}
		
		var email = document.getElementById("email").value;
	  if (email != "") {
     var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	     isok= reg.test(email );
	       if (!isok) {
	            alert("邮箱格式不正确，请重新输入！");
	            document.getElementById("emailname").focus();
	            return false;
	        }
	};
	
$("#form1").submit();



 
   






});   


  






});   

