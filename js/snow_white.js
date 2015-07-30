$(document).ready(function(){
"use strict";
	var tl = new TimelineMax();
	var width = $(".center").width();
	var height = $("#queryHolder").height()+$(".mirror").height()*0.15;
	$(".imageHolder").css({
		top:$(".mirror").height()*0.1,
		left: width*0.5-$(".imageHolder").width()*0.55
	});
	$(".hole").css({"top":height+"px"});
	$("i").width(width*0.15).height(width*0.15).css({
		"border-radius":width*0.2+"px "+width*0.25+"px"
		});
	tl.staggerTo($("i"), 3, {scale:3,opacity:0, boxShadow: "0px 0px 50px rgba(255, 255, 255, 1)"},0.7);
	tl.to($(".holder"),1,{ backgroundColor: "#fff"});
	tl.to($(".imageHolder"),1,{ opacity: 1});

});
