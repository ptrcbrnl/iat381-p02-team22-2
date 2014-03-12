$(document).ready(function() {

	// debugging code
	//var debugText = "It Works!";
	//$("title").html("Debug:"+debugText);

	var windowWidth = $(window).width();
	//$("title").html("Debug:"+windowWidth);

	if (windowWidth<485) {
		$("#navToggle").css("display", "block");
		$("ul").hide();
		$(".customSearch").hide();
		$(".sectionTitleExpand").hide();
		$(".cartButton").hide();
	}

	$("#navToggle").click(function() {
		$("ul").slideToggle(1000);
		$(".customSearch").slideToggle(1000);
		$(".sectionTitleExpand").slideToggle(1000);
		$(".cartButton").slideToggle(1000);
	})

	$(window).resize(function() {
		var windowWidth = $(window).width();
		if(windowWidth>485){
			$("#navToggle").css("display", "none");
			$("ul").show();
			$(".customSearch").show();
			$(".sectionTitleExpand").show();
			$(".cartButton").show();
		}
		else{
			$("#navToggle").css("display", "block");
			$("ul").hide();
			$(".customSearch").hide();
			$(".sectionTitleExpand").hide();
			$(".cartButton").hide();
		}
	})

});