$(document).ready(function() {

	$("#contentUl li").each(function(index) {
		var liTableLi = $(this);

		liTableLi.click(function() {
			liTableLi.addClass("tableLi").siblings().removeClass("tableLi");
			$("div .contentDiv").eq(index).addClass("contentOne").siblings().removeClass("contentOne");

		});
	});

});