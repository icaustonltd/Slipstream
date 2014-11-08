$("#promo1").mouseenter(function() {
	console.log("mouseenter")
	$("#promo1Content").slideDown("slow");
});

$("#promo1").mouseleave(function() {
	console.log("mouseleave")
	$("#promo1Content").slideUp("slow");
});

$("#promo2").mouseenter(function() {
	$("#promo2").find(".post-content").slideDown("slow");	
});

$("#promo2").mouseleave(function() {
	$("#promo2").find(".post-content").slideUp("slow");
});

$("#promo3").mouseenter(function() {
	$("#promo3Content").slideDown("slow");
});

$("#promo3").mouseleave(function() {
	$("#promo3Content").slideUp("slow");
});

