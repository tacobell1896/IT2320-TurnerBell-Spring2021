//JQ DOM Traversal
//$("") will be used as a frame of reference
   //parent()
   //parents()
   //find()
   //siblings()
   //children()
   
   //Additional Sibling methods 
   //next
   //nextAll
   //nextUntil   
   
   //prev
   //prevAll
   //prevUntil
    
   //closest
   
   
   //first
   //last
   //filter
   //not   
   //slice


$(function(){  //$(document).ready(function(){})
    
   console.log("hello");
   $("#button1").on("click",function(){
      $("#content").parent().css("border","5px darkgreen solid");      
      $("#content").parents().css("color","black");    
   });

   $("#button2").on("click",function(){
      $("#content").parents().css("background-color","lightgreen");    
      $("#content").parents().css("color","white");    
   });

   $("#button3").on("click",function(){
      $("#content").parentsUntil("#level3").css("border","dashed 5px yellow");
      $("#content").parents().css("color","black");    
   });

   $("#button4").on("click",function(){
      //children are elements at a lower level in the hierarchy
      $("#content").children().css("border","3px dotted blue");
      console.log($("#content").children().length);
   });

   $("#button5").on("click",function(){
      //siblings are elements at the same level in the hierarchy
      $("#content").siblings().css("background-color","purple");
      $("#content").siblings().css("color","white");   
   });

   $("#button6").on("click",function(){
      var descendants = $("#content").find("p");//* means all descendants
      descendants.each(function(){
         $(this).css("background-color","lightgreen");
         console.log($(this).html());
      });
   });
	$("#button7").on("click",function(){
		$("#content").next().append("Sibling set by next() method");
      $("#content").next().css({"background-color": "yellow"});
	});
	$("#button8").on("click",function(){
		$("#content").prev().append("Sibling set by prev() method");
      $("#content").prev().css({"background-color": "grey"});
	});
	$("#button9").on("click",function(){
		$("#item1").closest("li").css({"color": "orange"});
	});
	$("#button10").on("click",function(){
		$("li").first().css({"background-color": "red"});
	});

	$("#button11").on("click",function(){
		$("li").last().css({"background-color": "red"});
	});

	$("#button12").on("click",function(){
		$("li").filter("#item2").css({"background-color": "red"});
	});
	$("#button13").on("click",function(){
		$("li").not("#item2").css({"background-color": "red"});
	});

	$("#button14").on("click",function(){
		$("li").slice(1,4).css({"background-color": "red"});
	});
})
