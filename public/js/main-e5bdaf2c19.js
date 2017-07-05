$(function(){
  console.log('script file loaded');

  // Toggle Buttons - add class active if clicked and remove if click again
  $('.button.toggle').on("click", function(){
    if($(this).hasClass('selected')){
      $(this).removeClass('selected').text('Vote')
    } else {
      $(this).addClass('selected').text('Voted')
    }
  });
});
