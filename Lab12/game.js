$(function(){
//jQuery code goes here
	$("#up").on("click", function(){
		$("#box").stop();
		$("#box").animate({
			bottom: "350px"
		});
	});

	$("#down").on("click", function(){
		$("#box").stop();
		$("#box").animate({
			top: "350px"
		});
	});
	$("#left").on("click", function(){
		$("#box").stop();
		$("#box").animate({
			right: "350px"
		});
	});
	$("#right").on("click", function(){
		$("#box").stop();
		$("#box").animate({
			left: "350px"
		});
	});
	$("#fadeout").on("click", function(){
		$("#box").fadeOut();
	});
	$("#fadein").on("click", function(){
		$("#box").fadeIn();
	});
	$("#blink").on("click", function(){

		$("#box").toggle("fast");
	});
	$("#reset").on("click", function(){

	});
});
