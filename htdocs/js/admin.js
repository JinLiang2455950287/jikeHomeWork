$(document).ready(function() {
	var $newsTable = $("#newstable tbody");
	$newsTable.empty();

	$("#btnsubmit").click(function(e) {
		//		e.preventDefault();
		if($("#newstitle").val() === "" || $("#newstype").val() === "" ||
			$("#newsimg").val() === "" || $("#newstime").val() === "" ||
			$("#newssrc").val() === "") {
			if($("#newstitle").val() === "") {
				$("#newstitle").parent().addClass("has-error");
			} else {
				$("#newstitle").parent().removeClass("has-error");
			}

			if($("#newstype").val() === "") {
				$("#newstype").parent().addClass("has-error");
			} else {
				$("#newstype").parent().removeClass("has-error");
			}

			if($("#newsimg").val() === "") {
				$("#newsimg").parent().addClass("has-error");
			} else {
				$("#newsimg").parent().removeClass("has-error");
			}

			if($("#newstime").val() === "") {
				$("#newstime").parent().addClass("has-error");
			} else {
				$("#newstime").parent().removeClass("has-error");
			}

			if($("#newssrc").val() === "") {
				$("#newssrc").parent().addClass("has-error");
			} else {
				$("#newssrc").parent().removeClass("has-error");
			}

		} else {
			var jsonNews = {
				newstitle: $('#newstitle').val(),
				newstype: $('#newstype').val(),
				newimg: $('#newsimg').val(),
				newstime: $('#newstime').val(),
				newssrc: $('#newssrc').val()

			};
			$.ajax({
				type: "post",
				url: "php/insert.php",
				data: jsonNews,
				datatype: 'json',
				success: function(data) {
					console.log(data);
					refreshNews();
				}
			});
		}
	});

	refreshNews();
	var deleteId = null;

	$newsTable.on("click", ".btn-danger", function(e) {
		$("#deleteModal").modal("show");
		deleteId = $(this).parent().prevAll().eq(5).html();
	});
	
	
	//删除数据
	$("#deleteModal #confirmDelete").click(function(e) {
		if(deleteId) {
			$.ajax({
				type: "post",
				url: "php/delete.php",
				data: {
					newsid: deleteId
				},
				success: function() {
					console.log("删除成功");
					$("#deleteModal").modal("hide");
					refreshNews();
				}
			});
		}
	});

	var updataId = null;
	$newsTable.on("click", ".btn-primary", function(e) {

		$("#updataModal").modal("show");
		updataId = $(this).parent().prevAll().eq(5).html();
		$.ajax({
			type: "get",
			url: "php/curnews.php",
			data: {
				newsid: updataId
			},
			success: function(data) {
				console.log(data);
				$("#unewstitle").val(data[0].newstitle);
				$("#unewstype").val(data[0].newstype);
				$("#unewsimg").val(data[0].newsimg);
				$("#unewssrc").val(data[0].newssrc);
				var utime = data[0].newstime.splice(" ")[0];
				$("#unewstime").val(utime);
				refreshNews();
			}
		});
	});

    //修改数据
	$("#updataModal #confirmupdata").click(function(e) {
		$.ajax({
			type: "post",
			url: "php/updata.php",
			data: {
				newstitle: $('#unewstitle').val(),
				unewstype: $('#unewstype').val(),
				unewsimg: $('#unewsimg').val(),
				unewssrc: $('#unewssrc').val(),
				unewstime: $('#unewstime').val()
			},
			success: function(data) {
				console.log(data);
				$('#updateModal').modal("hide");
				refreshNews();
			}
		});
	});
});


//刷新新数据
function refreshNews() {
	$("#newstable tbody").empty();
	$.ajax({
		url: "php/new.php",
		type: "get",
		datatype: "json",
		success: function(data) {
			console.log(data);
			data.forEach(function(item, index, array) {
				var $newsTable = $("#newstable");
				var $tdid = $("<td>").html(item.id);
				var $tdtype = $("<td>").html(item.newstype);
				var $tdtitle = $("<td>").html(item.newstitle);
				var $tdimg = $("<td>").html(item.newsimg);
				var $tdsrc = $("<td>").html(item.newssrc);
				var $tdtime = $("<td>").html(item.newstime);
				var $tdctrl = $("<td>");
				var $btnupdate = $("<button>").addClass("btn btn-primary btn-xs").html("修改");
				var $btndelete = $("<button>").addClass("btn btn-danger btn-xs").html("删除");
				$tdctrl.append($btnupdate, $btndelete);
				var $tRow = $("<tr>");
				$tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdsrc, $tdtime, $tdctrl);
				$newsTable.append($tRow);
			});
		}
	});

};