function myfun(){
	var a=document.getElementById('fname').value;
	var b=document.getElementById('lname').value;
	var c=document.getElementById('email').value;
	var d=document.getElementById('password').value;
	var e=document.getElementById('cpassword').value;
	var f=document.getElementById('mobile').value;
	var add=a.concat(' ',b);
	var x=document.getElementById('month').value;
	var y=document.getElementById('date').value;
	var z=document.getElementById('year').value;
	var add1=x.concat('-',y);
	var add2=add1.concat('-',z);
	if (a=='')
	{	
		alert("!!! Please Enter First Name !!!");
		document.getElementById('fname').focus();
		return false;
	}
	else if (b=='')
	{	alert("!!!Please Enter Last Name!!!");
		document.getElementById('lname').focus();
		return false;
	}
	else if(c=='')
	{
		alert("!!! Please Enter email !!!");
		document.getElementById('email').focus();
		return false;
	}
	else if(d=='')
	{
		alert("!!! Please Enter Password !!!");
		document.getElementById('password').focus();
		return false;
	}
	else if(e=='')
	{
		alert("!!! Please Confirm Password !!!");
		document.getElementById('cpassword').focus();
		return false;
	}
	else if (d!=e)
	{
		alert("!!! Password Not Matching !!!");
		document.getElementById('cpassword').focus();
		return false;
	}
	else if(f=='')
	{
		alert("!!! Please Enter Mobile Number !!!");
		document.getElementById('mobile').focus();
		return false;
	}
	else if (f.length > 10)
	{
		alert("!!! Mobile Number is too long !!!");
		document.getElementById('mobile').focus();
		return false;
	}
	else if(f.length <10)
	{

		alert("!!! Mobile Number is short !!!");
		document.getElementById('mobile').focus();
		return false;
	}

	localStorage.setItem('fname',add);
	localStorage.setItem('email',c);
	localStorage.setItem('pass',d);
	localStorage.setItem('mobile',f);
	localStorage.setItem('date',add2);
	return true;
}



