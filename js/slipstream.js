$("#promo1").mouseenter(function() {
	$("#promo1Content").slideDown("slow");
});

$("#promo1").mouseleave(function() {
	$("#promo1Content").slideUp("slow");
});

$(".more-info").click(function(){
	if($(this).text() == '+'){
    	$(this).text('-');
    } else {
        $(this).text('+');
    }
});