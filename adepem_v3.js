
//************ CAROUSEL LEFT FUNCTION **************
const goLeft = (container,element)=>{
  if ($(element).index($(container).find(element).filter(":visible:first"))+1===$(element).index($(container).find(element).filter(":visible:last"))) {
    let firstBest = $(container).find(element).filter(":visible:first");
    let lastBest = $(container).find(element).filter(":visible:last");;
    let prev;
    if ($(element).index(firstBest)<=0) prev = $(element).length+2;
    else prev = $(element).index(firstBest)+2;

    lastBest.hide();
    $(firstBest).before($(`${element}:nth-child(${prev})`).show("fast"));
  }
  return false;
}

//************ CAROUSEL RIGHT FUNCTION **************
const goRight = (container,element)=>{
  if ($(element).index($(container).find(element).filter(":visible:first"))+1===$(element).index($(container).find(element).filter(":visible:last"))) {
    let firstBest = $(container).find(element).filter(":visible:first");
    let lastBest = $(container).find(element).filter(":visible:last");;

    let next;
    if ($(element).index(lastBest)+3>=$(element).length+2) {
      next = 3;
    } else next = $(element).index(lastBest)+4;

    firstBest.hide("fast");
    $(lastBest).after($(`${element}:nth-child(${next})`).show("fast"));
  }
  return false;
}

//************ FUNCTION CALLS **************
$(".left_arrow").click( (event) => {
  goLeft(".carousel_bests",".best_product");
});

$(".right_arrow").click( (event) => {
  goRight(".carousel_bests",".best_product");
});

$(".left_arrow_models").click( (event) => {
  alert('left model');
  goLeft(".best_models_brands",".model_brand");
});

$(".right_arrow_models").click( (event) => {
  alert('right model');
  goRight(".best_models_brands",".model_brand");
});
