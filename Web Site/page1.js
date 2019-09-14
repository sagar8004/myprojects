function check(){
	var x=document.getElementById('text').value;
	var y=document.getElementById('password').value;
	if(x=='')
	{
		alert("!! Enter Username !!");
		return false;
	}
	else if(y=='')
	{
		alert("!! Enter Password !!");
		return false;
	}
}