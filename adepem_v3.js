//************ SHOW MORE PIECES ***************
$('.show_more_pieces').click(()=>{
  $('.show_more_pieces').hide("fast");
  $('.pieces_list_line').show('slow');
});

//************ SHOW MORE BRANDS ***************
$('.show_more_brands').click(()=>{
  $('.show_more_brands').hide("fast");
  $('.brands_list_line').show('slow');
});

//************ DISPLAY ALL ***************
$('.display_all_button').click(()=>{
  $('.left_arrow').hide(); $('.right_arrow').hide();
  $('.carousel_bests').css('white-space','normal').css('overflow','visible');
  $('.best_product').css('float','left').css('display','inline-block');
  $('.display_all_button').hide();
})

//************ 1ST CAROUSEL LEFT **************
$(".left_arrow").click(() => {
  if($('.carousel_bests').scrollLeft()<=$('.best_product').outerWidth(true)) {
    $('.left_arrow').css('background','darkgrey').attr('disabled','disabled');
  }
  $('.right_arrow').css('background','linear-gradient(#ffb84d, #ff9900)').removeAttr('disabled');
  $('.carousel_bests').animate({scrollLeft:$('.carousel_bests').scrollLeft()-$('.best_product').outerWidth(true)},300);
});

//************ 1ST CAROUSEL RIGHT **************
$(".right_arrow").click(() => {
  let carouselWidth = ($('.best_product').length-2.5) * $('.best_product').width();
  if($('.carousel_bests').scrollLeft()>=carouselWidth) {
    $('.right_arrow').css('background','darkgrey').attr('disabled','disabled');
  }
  $('.left_arrow').css('background','linear-gradient(#ffb84d, #ff9900)').removeAttr('disabled');
  $('.carousel_bests').animate({scrollLeft:$('.carousel_bests').scrollLeft()+$('.best_product').outerWidth(true)},300);
});

//************ 2ND CAROUSEL LEFT **************
$(".left_arrow_models").click(() => {
  if($('.best_models_brands').scrollLeft()<=$('.model_brand').outerWidth(true)) {
    $('.left_arrow_models').css('background','transparent').attr('disabled','disabled');
  }
  $('.right_arrow_models').css('background','linear-gradient(#ffb84d, #ff9900)').removeAttr('disabled');
  $('.best_models_brands').animate({scrollLeft:$('.best_models_brands').scrollLeft()-$('.model_brand').outerWidth(true)},200);
});

//************ 2ND CAROUSEL RIGHT **************
$(".right_arrow_models").click(() => {
  let carouselWidth = ($('.model_brand').length-2.5) * $('.model_brand').width();
  if($('.best_models_brands').scrollLeft()>=carouselWidth) {
    $('.right_arrow_models').css('background','transparent').attr('disabled','disabled');
  }
  $('.left_arrow_models').css('background','linear-gradient(#ffb84d, #ff9900)').removeAttr('disabled');
  $('.best_models_brands').animate({scrollLeft:$('.best_models_brands').scrollLeft()+$('.model_brand').outerWidth(true)},200);
});
