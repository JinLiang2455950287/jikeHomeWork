$(document).ready(function() {
	$("nav li").each(function() {
		var deviceWidth = $("body").width();
		if($(this).find("a").html().split("").length > 2) {
			$(this).width(deviceWidth / 3);
		} else {
			$(this).width(deviceWidth / 6);
		}
	});
	refreshNews("精选");
	
	$("nav a").click(function(e){
		e.preventDefault();
		var type=$(this).text();
		refreshNews(type);
	});

});

function refreshNews(type) {
	var $lists = $(".news-lists");
	$lists.empty();
	$.ajax({
		url: "/news",
		type: "get",
		datatype: "json",
		data:{newstype:type},
		success: function(data) {
			console.log(data);
			data.forEach(function(item, index, array) {
				var $list = $("<li></li>").addClass("news-list").prependTo($lists);
				var $newsImg = $("<div></div>").addClass("newsimg").appendTo($list);
				var $img = $("<img>").attr("src", item.newimg).appendTo($newsImg);
				var $newsContent = $("<div></div>").addClass("newscontent").appendTo($list);
				var $h1 = $("<h1></h1>").html(item.newstitle).appendTo($newsContent);
				var $p = $("<p></p>").appendTo($newsContent);
				var $newsTime = $("<span></span>").addClass("newstime").html(item.newstime).appendTo($p);
				var $newsSrc = $("<span></span>").addClass("newssrc").html(item.newssrc).appendTo($p);

			});

		}
	});

};