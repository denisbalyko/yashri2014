$(document).ready(function() {

	function open_popup(popup_prefix){
		var $popup = $(".popup_window."+popup_prefix);
		$popup.fadeIn(300);
		$(".popup_overlay."+popup_prefix).fadeIn(200);
		$(".popup_flex").css({
			display: "-webkit-box",
			display: "-moz-box",
			display: "-ms-flexbox",
			display: "-webkit-flex",
			display: "flex",
		});
	}

	function close_popup(){
		$(".popup_window").fadeOut(200);
		$(".popup_flex").fadeOut(200);
		$(".popup_overlay").fadeOut(200);
	}

	$("#generateContent").live("click", function(){
		$(".popup_content").html(
			$(".popup_content").html()+$(".popup_content").html()
		);
	});

	$(".popupButton").live("click", function () {
		open_popup($(this).data("window"));
	});

	$(".popup_close").live("click", function () {
		close_popup();
	});

});
