$(document).ready(function() {

	function resize_popup(popup) {
		content_h = popup.children(".popup_content").outerHeight();
		popup.css({
			height: content_h,
			marginTop: -content_h/2,
		})
	}

	function open_popup(popup_prefix){
		var $popup = $(".popup_window."+popup_prefix);
		$popup.fadeIn(300);
		resize_popup($popup);
		$(".popup_overlay."+popup_prefix).fadeIn(300);
	}

	function close_popup(){
		$(".popup_window").fadeOut(200);
		$(".popup_overlay").fadeOut(200);
	}

	$("#generateContent").live("click", function(){
		$(".popup_content").html(
			$(".popup_content").html()+$(".popup_content").html()
		);
		resize_popup($(".popup_window"));
	});

	$(".popupButton").live("click", function () {
		open_popup($(this).data("window"));
	});

	$(".popup_close, .popup_overlay").live("click", function () {
		close_popup();
	});

});
