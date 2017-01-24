$( document ).ready(function() {
    var touch = $('.nav_span');                   //Adaptive header
  var touch_menu = $('.nav_list');

  $(touch).on('click', function(e) {
   e.preventDefault();
    touch_menu.slideToggle();
   });
   $(window).resize(function() {
  var wid = $(window).width();
  if(wid > 575 && touch_menu.is(':hidden')) {
     touch_menu.removeAttr('style');
     }
   });

$( "#popup_btn" ).click(function() {
    $('.pop-up_container')
      .animate({opacity: 1, top: '100px'}, 200)
      .css('display', 'block');
    $('.pop-up_bg').fadeIn(400);
  });


   $( ".close_btn" ).click(function() {
    $('.pop-up_container')
      .animate({opacity: 0, top: '-100px'}, 200)
      .css('display', 'block');
    $('.pop-up_bg').fadeOut(400);
  });

});