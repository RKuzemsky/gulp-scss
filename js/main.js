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
});