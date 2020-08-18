$(document).ready (function(){

  $('.mobile-menu-btn').click(function () {
    $('.navbar').slideToggle("slow");
  });

  $('.js-wp-2').waypoint(function(direction){
      $('.js-wp-2').addClass('animated slideInUp');
    },{
      offset:'70%'
      });

});
