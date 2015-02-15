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

var images = ['team_member_yuri.gif', 'team_member_andy.gif', 'team_member_ian.gif'];

$('<img src="/assets/img/the_team/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#team-promo');