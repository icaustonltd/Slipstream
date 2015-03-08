$(document).ready(function() {
 
  $("#slipstream-carousel").owlCarousel({
      autoPlay : 3000,
      stopOnHover : true,
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      transitionStyle: "fade"
    });
 
});

// Randonly swap photos of team on the homepage
var images = ['team_member_yuri.gif', 'team_member_andy.gif', 'team_member_ian.gif'];

$('<img src="/assets/img/the_team/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#team-promo');

