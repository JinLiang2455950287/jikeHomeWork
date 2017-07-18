$(document).ready(function() {

	//修改部分参数

	$('#pager').createPage(function(n) {
		console.log(n);
	}, {
		showTurn: true, //是否显示跳转,默认可以
		showSumNum: true //是否显示总页码
	}, {
		"color": "gray", //字体颜色
		"borderColor": "gray", //边线颜色
		"currentColor": "#35b558;" //当前页码的字体颜色

	});
});