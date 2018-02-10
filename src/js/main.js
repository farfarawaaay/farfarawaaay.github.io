$(function(){
  $(window).on('load', function () {
      var $preloader = $('#page-preloader'),
          $spinner   = $preloader.find('.cssload-thecube');
      $spinner.fadeOut();
      $preloader.delay(350).fadeOut('slow');
  });
  $('.burger').click(function() {
    $('.menu-collapse').toggleClass('d-none');
    $('.menu-collapse').toggleClass('menu__active');
  });
});