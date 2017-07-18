$(document).ready(function() {

	$(window).on("load", function() {
		imLocation();
		var dataImage = {
			"data": [{
				"src": "image1.png"
			}, {
				"src": "image2.png"
			}, {
				"src": "image3.png"
			}, {
				"src": "image4.png"
			}]
		};
		window.onscroll = function() {
			if(scrollside()) {
				$.each(dataImage.data, function(index, value) {
					var box = $("<div>").addClass("box").appendTo($("#container"));
					var content = $("<div>").addClass("content").appendTo(box);
					$("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content);
				});
				imLocation();
			}
		}
	});

});

function imLocation() {
	var box = $(".box");
	var boxWindth = box.eq(0).width();
	var num = Math.floor($(window).width() / boxWindth);
	var boxArr = [];
	box.each(function(index, value) {
		var boxHeight = box.eq(index).height();
		if(index < num) {
			boxArr[index] = boxHeight;
		} else {
			var minboxHeight = Math.min.apply(null, boxArr)
			var minboxIndex = $.inArray(minboxHeight, boxArr);
			$(value).css({
				"position": "absolute",
				"top": minboxHeight,
				"left": box.eq(minboxIndex).position().left
			})
			boxArr[minboxIndex] += box.eq(index).height();
		}

	});
}

function scrollside() {
	var box = $(".box");
	var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
	var documentHeight = $(window).scrollTop();
	var scrollHeight = $(Window).scrollTop();
	return(lastboxHeight < scrollHeight + documentHeight) ? true : false;

}