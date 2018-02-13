$(function(){
  $(window).on('load', function () {
      var $preloader = $('#page-preloader'),
          $spinner   = $preloader.find('.cssload-thecube');
      $spinner.fadeOut();
      $preloader.delay(350).fadeOut('slow');
  });
  // Preloader


  $('.burger').click(function() {
    $('.menu-collapse').toggleClass('d-none');
    $('.menu-collapse').toggleClass('menu__active');
  });
  // Burger-menu


  $('a.feature__btn').click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top
      }, {
         duration: 700,
         easing: "swing"
      });
      return false;
   });
  // Smooth scroll


  $('.slider').slick();
  // Slick slider

  $('.modal-button').click(function(e) {
    e.preventDefault();
    $('#modal').arcticmodal();
  });
});