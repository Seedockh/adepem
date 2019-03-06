//************ 1ST CAROUSEL LEFT FUNCTION **************
const goBestLeft = ()=>{
  if ($(".best_product").index($(".carousel_bests").find(".best_product").filter(":visible:first"))+1===$(".best_product").index($(".carousel_bests").find(".best_product").filter(":visible:last"))) {
    let firstBest = $(".carousel_bests").find(".best_product").filter(":visible:first");
    let lastBest = $(".carousel_bests").find(".best_product").filter(":visible:last");;
    let prev;
    if ($(".best_product").index(firstBest)<=0) prev = $(".best_product").length+2;
    else prev = $(".best_product").index(firstBest)+2;

    lastBest.hide("fast");
    $(firstBest).before($(`.best_product:nth-child(${prev})`).show("fast"));
  }
  return false;
}

//************ 1ST CAROUSEL RIGHT FUNCTION **************
const goBestRight = ()=>{
  if ($(".best_product").index($(".carousel_bests").find(".best_product").filter(":visible:first"))+1===$(".best_product").index($(".carousel_bests").find(".best_product").filter(":visible:last"))) {
    let firstBest = $(".carousel_bests").find(".best_product").filter(":visible:first");
    let lastBest = $(".carousel_bests").find(".best_product").filter(":visible:last");;

    let next;
    if ($(".best_product").index(lastBest)+3>=$(".best_product").length+2) {
      next = 3;
    } else next = $(".best_product").index(lastBest)+4;

    firstBest.hide("fast");
    $(lastBest).after($(`.best_product:nth-child(${next})`).show("fast"));
  }
  return false;
}

//************ 2ND CAROUSEL LEFT FUNCTION **************
const goBestModelLeft = ()=>{
    let firstModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:first");
    let lastModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:last");;
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
$(".left_arrow").click(() => goBestLeft());
$(".right_arrow").click(() => goBestRight());

$(".left_arrow_models").click(() => goBestModelLeft());
$(".right_arrow_models").click(() => goBestModelRight());


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
