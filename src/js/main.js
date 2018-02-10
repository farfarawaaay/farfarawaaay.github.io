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

  $("a.feature__btn").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 600,
         easing: "swing"
      });
      return false;
   });
});
