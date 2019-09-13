$(document).ready(function(){
	/* append() function */
	$("#7").click (function()
	{
		$("#space").append("7")
	});
	$("#8").click (function()
	{
		$("#space").append("8")
	});
	$("#9").click (function()
	{
		$("#space").append("9")
	});
	$("#4").click (function()
	{
		$("#space").append("4")
	});
	$("#5").click (function()
	{
		$("#space").append("5")
	});
	$("#6").click (function()
	{
		$("#space").append("6")
	});
	$("#1").click (function()
	{
		$("#space").append("1")
	});
	$("#2").click (function()
	{
		$("#space").append("2")
	});
	$("#3").click (function()
	{
		$("#space").append("3")
	});
	$("#0").click (function()
	{
		$("#space").append("0")
	});
	$("#div").click (function()
	{
		$("#space").append("/")
	});
	$("#mul").click (function()
	{
		$("#space").append("*")
	});
	$("#sub").click (function()
	{
		$("#space").append("-")
	});
	$("#add").click(function()
	{
		$("#space").append("+")
	});

	/* empty() function to clear */
	$("#clr").click(function(){
		$("#space").empty()
	})
	/* slice() function to backspace */
	$("#bck").click(function(){
			var x=$("#space").text();
			var y=x.slice(0,-1);
			$("#space").text(y);
	});

	/* eval() function for result */
	$("#eq").click(function(){
		var x=$("#space").text();
		var y=eval(x);
		$("#space").text(y);
		alert("VALUE:"+y);
	});

});
