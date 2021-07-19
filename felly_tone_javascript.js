	function validate(){
		var a=document.getElementById("number").value;
		if(a>0 && a<11)
		{
			document.getElementById("error").innerHTML="Number is correct"
		}
		else
		{
			document.getElementById("error").innerHTML="Error"
		}
		var pass=document.getElementById("pass").value
		var comfirmpass=document.getElementById("retypepassword").value
		 if(pass!=comfirmpass){
		 	document.getElementById("errorpass").innerHTML="Password and retypepassword not matching"
		 }
		 return false;
	}