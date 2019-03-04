//************ 1ST CAROUSEL LEFT FUNCTION **************
const goBestLeft = ()=>{
  if ($(".best_product").index($(".carousel_bests").find(".best_product").filter(":visible:first"))+1===$(".best_product").index($(".carousel_bests").find(".best_product").filter(":visible:last"))) {
    let firstBest = $(".carousel_bests").find(".best_product").filter(":visible:first");
    let lastBest = $(".carousel_bests").find(".best_product").filter(":visible:last");;
    let prev;
    if ($(".best_product").index(firstBest)<=0) prev = $(".best_product").length+2;
    else prev = $(".best_product").index(firstBest)+2;


    lastBest.hide('fast');
    $(firstBest).before($(`${".best_product"}:nth-child(${prev})`).show("fast"));
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
    $(lastBest).after($(`${".best_product"}:nth-child(${next})`).show("fast"));
  }
  return false;
}

//************ 2ND CAROUSEL LEFT FUNCTION **************
const goBestModelLeft = ()=>{
/*  if ($(".model_brand").index($(".best_models_brands").find(".model_brand").filter(":visible:first"))+1===$(".model_brand").index($(".best_models_brands").find(".best_product").filter(":visible:last"))) {*/
    let firstModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:first");
    let lastModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:last");;
    let prev;
    if ($(".model_brand").index(firstModelBest)<=0) prev = $(".model_brand").length+2;
    else prev = $(".model_brand").index(firstModelBest)+2;

    if ($(".model_brand").index(firstModelBest)===0) $(".left_arrow_models").hide("fast");
    if ($(".model_brand").index(lastModelBest)===$(".model_brand").length-2) $(".right_arrow_models").hide("fast");
      else ($(".right_arrow_models").show("fast"));

    lastModelBest.hide('fast');
    $(firstModelBest).before($(`${".model_brand"}:nth-child(${prev})`).show("fast"));
/*  }
  return false;*/
}

//************ 2ND CAROUSEL RIGHT FUNCTION **************
const goBestModelRight = ()=>{
/*  if ($(".model_brand").index($(".best_models_brands").find(".model_brand").filter(":visible:first"))+1===$(".model_brand").index($(".best_models_brands").find(".model_brand").filter(":visible:last"))) {*/
    let firstModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:first");
    console.log("first : "+$(".model_brand").index(firstModelBest));
    let lastModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:last");
    console.log("last : "+$(".model_brand").index(lastModelBest));

    let next;
    if ($(".model_brand").index(lastModelBest)+2>=$(".model_brand").length) {
      next = 2;
    } else next = $(".model_brand").index(lastModelBest)+6;
    console.log("next : "+next);

    firstModelBest.hide("fast");
    $(lastModelBest).after($(`${".model_brand"}:nth-child(${next})`).show("fast"));

    firstModelBest = $(".best_models_brands").find(".model_brand").filter(":visible:first");
    console.log("first (end): "+$(".model_brand").index(firstModelBest));
    if ($(".model_brand").index(lastModelBest)===$(".model_brand").length-4) $(".right_arrow_models").hide("fast");
    if ($(".model_brand").index(firstModelBest)>=1) $(".left_arrow_models").show("fast");
  /*}
  return false;*/
}

//************ FUNCTION CALLS **************
$(".left_arrow").click(() => goBestLeft());
$(".right_arrow").click(() => goBestRight());

$(".left_arrow_models").click(() => goBestModelLeft());
$(".right_arrow_models").click(() => goBestModelRight());
