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
  console.log(`carousel width : ${carouselWidth}`);
  console.log($('.carousel_bests').scrollLeft());
  if($('.carousel_bests').scrollLeft()>=carouselWidth) {
    $('.right_arrow').css('background','darkgrey').attr('disabled','disabled');
  }
  $('.left_arrow').css('background','linear-gradient(#ffb84d, #ff9900)').removeAttr('disabled');
  $('.carousel_bests').animate({scrollLeft:$('.carousel_bests').scrollLeft()+$('.best_product').outerWidth(true)},300);
});

//************ 2ND CAROUSEL LEFT FUNCTION **************
const goBestModelLeft = ()=>{
    let firstModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:first");
    let lastModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:last");
    let prev;
    if ($(".model_brand").index(firstModelBest)<=1) {
      prev = $(".model_brand").index(firstModelBest);
      $(".left_arrow_models").hide("fast");
      $(`.model_brand:nth-child(${$(".model_brand").index(lastModelBest)})`).css("border-right","0");
    } else {
      prev = $(".model_brand").index(firstModelBest);
      $(`.model_brand:nth-child(${$(".model_brand").index(lastModelBest)})`).css("border-right","0");
    }

    lastModelBest.hide('fast');
    $(firstModelBest).before($(`.model_brand:nth-child(${prev})`).show("fast"));

    if ($(".model_brand").index(lastModelBest)<$(".model_brand").length) $(".right_arrow_models").show("fast");
}

//************ 2ND CAROUSEL RIGHT FUNCTION **************
const goBestModelRight = ()=>{
    let firstModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:first");
    let lastModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:last");
    let next;
    if ($(".model_brand").index(lastModelBest)+2>=$(".model_brand").length) { //If we reach the last element
      next = $(".model_brand").length;
      $(".right_arrow_models").hide("fast");
      $(`.model_brand:nth-child(${next})`).css("border-right","0");
    } else next = $(".model_brand").index(lastModelBest)+2;

    firstModelBest.hide("fast");
    $(lastModelBest).after($(`.model_brand:nth-child(${next})`).show("fast"));

    // Show left arrow if firstmodel is >= 2nd element of the list
    firstModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:first");
    if ($(".model_brand").index(firstModelBest)>=0) $(".left_arrow_models").show("fast");

    // Column borders managing
    if (next<=$(".model_brand").length+1) {
      $(`.model_brand:nth-child(${$(".model_brand").index(lastModelBest)+1})`).css("border-right","1px solid rgba(128, 128, 128, .2)");
      $(`.model_brand:nth-child(${next+1})`).css("border-right","0");
    } else $(`.model_brand:nth-child(6)`).css("border-right","0");
}


//************ FUNCTION CALLS **************
$(".left_arrow_models").click(() => goBestModelLeft());
$(".right_arrow_models").click(() => goBestModelRight());
