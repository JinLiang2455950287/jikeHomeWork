document.write("<h1>今天高温，多雨</h1>")
document.write("<p>今天高温，多余</P>")

var btn = document.getElementById("btn");
btn.innerHTML = "hello javascript";

function myFunction() {
	var ceshi = addNum(10, 20);
	alert(ceshi);
	//	var add = doAdd(10);
	//	alert(add);
	//	howManyArgs("string", 45);
	//	howManyArgs();
	//	howManyArgs(12); 
	//	var x = document.getElementById("demo").value;
	//	if(x == "" || isNaN(x)) {
	//		alert("Not Numeric");
	//	}
}

function howManyArgs() {
	alert(arguments.length);
}

var doAdd = new Function("iNum", "alert(iNum + 20)");
var doAdd = new Function("iNum", "alert(iNum + 40)");

var iBaseNum = 10;

function addNum(iNum1, iNum2) {
	function doAdd() {
		return iNum1 + iNum2 + iBaseNum;
	}
	return doAdd();
}