$(function(){

	//all jquery code goes here
	//hide button
	$("#btn1").click(function(){
		$("#1").hide();
		$("#2").hide();
		$("#3").hide();
		$("#4").hide();
	});

	//show button
	$("#btn2").click(function(){
		$("#1").show();
		$("#2").show();
		$("#3").show();
		$("#4").show();
	});

	//chess board button
	$("#btn3").click(function(){
		$("#1").text("one");	
		$("#2").text("two");	
		$("#3").text("three");	
		$("#4").text("four");	
		$("#1").css({"background-color": "black", "color": "white"});
		$("#3").css({"background-color": "black", "color": "white"});
		$("#2").css({"background-color": "white", "color": "black"});
		$("#4").css({"background-color": "white", "color": "black"});
	});

	// hover effects
	$(".wrapperDiv").mouseover(function(){
		$(".wrapperDiv").removeAttr("style");
	});

	$("#1").mouseover(function(){
		$("#1").css("background-color", "yellow");
	});
	$("#2").mouseover(function(){
		$("#2").css("background-color", "yellow");
	});
	$("#3").mouseover(function(){
		$("#3").css("background-color", "yellow");
	});
	$("#4").mouseover(function(){
		$("#4").css("background-color", "yellow");
	});
	$(".wrapperDiv").mouseout(function(){
		$(".wrapperDiv").removeAttr("style");
	});
	
});
