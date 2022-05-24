$(document).ready(function() {
  /*===============Modal=================*/
  $(".modal-open").on("click", function(event) {
    event.preventDefault();
    $(".modal").fadeIn(333);
 
    $('.modal').css('top', $(window).scrollTop()+'px');
    $(".modal__inner").fadeIn(333);
    $('body').addClass("hidden");
  });
  $(".modal__close,  .closex").on("click", function(event) {
    event.preventDefault();
    $(".modal").fadeOut('222');
    $('body').removeClass("hidden");
  });
/*==============/modal=================*/


})