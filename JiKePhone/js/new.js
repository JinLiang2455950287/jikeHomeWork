$(document).ready(function() {
	$("nav li").each(function() {
		var deviceWidth = $("body").width();
		if($(this).find("a").html().split("").length > 2) {
			$(this).width(deviceWidth / 3);
		} else {
			$(this).width(deviceWidth / 6);
		}
	});
});