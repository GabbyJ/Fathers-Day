$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
  
  $('.mailform input, .mailform textarea').on('keyup', function(){
    if(this.value !== ''){
      $(this).prev('label').addClass('show');
    } else {
      $(this).prev('label').removeClass('show');
    }
  }).on("focus",function(){
    $(this).prev("label").addClass('focus');
  }).on("blur",function(){
      $(this).prev("label").removeClass('focus');
  });
  
  $('.notification').find('p').last().click(function(){
   $(this).closest('.notification').prev('.envelope').removeClass('send').addClass('new');
   $(this).closest('.notification').prev('.envelope').find('.mailform')[0].reset();
    $(this).closest('.notification').prev('.envelope').find('label').removeClass('show');
  });
  
  $('.mailform').submit(function(event) {
    event.preventDefault();
    
    $(this).closest('.envelope').removeClass('open').addClass('send');

    //Put jQuery code for submitting the form with AJAX here.
  });
  
});