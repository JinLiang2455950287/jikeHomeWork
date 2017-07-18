$(document).ready(function() {
	//分页start
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
	//分页end

	//课程库切换start
	$(".contentMeddleTitleRightLi li").each(function(index) {
		var liTableLi = $(this);

		liTableLi.click(function() {
			if(index == 0) {
				$('.contentDecribleDiv').removeClass("contentGone");
				$(".contentone").addClass("contentGone");
			} else {
				$(".contentone").removeClass("contentGone");
				$('.contentDecribleDiv').addClass("contentGone");
			}

		});
	});
	//课程库切换end

	//课程动画效果start
	$(".contentDecribleUl li").each(function() {
		$(this).children(".timeandicon").fadeOut()
	});
	$(".contentDecribleUl li").mouseenter(function() {
		$(this).children(".timeandicon").stop().fadeIn()
	}).mouseleave(function() {
		$(this).children(".timeandicon").stop().fadeOut()
	});
	//课程动画效果end
});