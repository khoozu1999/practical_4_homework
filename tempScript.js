// JavaScript Document

function temp(form)
{
	var f = parseFloat(form.DegF.value, 10);
	var c = 0;
	c = (f - 32.0) * 5.0 / 9.0;
	form.DegC.value = Math.round(c*1000)/1000;
}

function option()
{
	var i;
	for (i=1;i<=100;i++){
		document.write("<option value=" + i + ">" + i + "</option>");
	}
}

function quantity()
{
var x = document.getElementById("form2").value;
var y = document.getElementById("quantity").value;
var total = x * y;
document.getElementById("form3").innerHTML=total;
}