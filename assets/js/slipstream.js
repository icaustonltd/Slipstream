(function($) {
   $( 'a[href="#"]' ).click( function(e) {
      e.preventDefault();
   } );
} )(jQuery);


$(".more-info").click(function(){

	// reset
	$(".post-content").hide();
	$(".promo-image-button").show();

	$(this).parent().siblings(".post-content").show();
    $(this).parent().hide();
});

$.fn.carousel.defaults = {
    interval: false
  , pause: 'hover'
}

