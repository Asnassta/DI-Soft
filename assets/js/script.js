$(document).ready(function() {
  /*===============Modal=================*/
  $(".modal-open").on("click", function(event) {
    event.preventDefault();
    $(".modal").fadeIn(111);
 
    $('.modal').css('top', $(window).scrollTop()+'px');
    $(".modal__inner").fadeIn(111);
    $('body').addClass("hidden");
  });
  $(".modal__close,  .closex").on("click", function(event) {
    event.preventDefault();
    $(".modal").fadeOut(111);
    $('body').removeClass("hidden");
  });
/*==============/modal=================*/

$('.copyright__year').html((new Date()).getFullYear());
})


$(function() {
  $('form').submit(function(e) {
    var $form = $(this);

    
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $form.serialize()
    }).done(function(e) {
 
      if(e == 'error')
      {
        $form + $(' .form-contact__error').fadeIn(333);
      }
      else
      {
        $form + $(' .form-contact__result').fadeIn(222);
        $('.modal-open').hide();
        $('.btn-send__result').show();
        // if($form.find($('input[name="modal"]')).val() == 1)
       

      }
     
    }).fail(function(e) {
      $form + $(' .form-contact__error').fadeIn(333);
    });

    
    //отмена действия по умолчанию для кнопки submit
    e.preventDefault(); 
  });
});



 
 