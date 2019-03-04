$(".best_product:nth-child(3)").hide();
$(".best_product:nth-child(4)").hide();
$(".best_product:nth-child(5)").hide();
$(".best_product:nth-child(6)").hide();

$(".left_arrow").click( (event) => {
  let firstBest = $(".carousel_bests").find(".best_product").filter(":visible:first");
    if (firstBest) console.log('first : '+$(".best_product").index(firstBest));
  let lastBest = $(".carousel_bests").find(".best_product").filter(":visible:last");;
    if (lastBest) console.log('last : '+$(".best_product").index(lastBest));
  let prev;

  if ($(".best_product").index(firstBest)<=0) prev = 6;
  else prev = $(".best_product").index(firstBest)-1;  //gets the -1 element
  console.log("prev : "+prev);

  for (let i=$(".best_product").length;i>=2;i--) {
    $(`.best_product:nth-child(${i})`).hide();
  }
  lastBest.hide();
  $(`.best_product:nth-child(${prev})`).show("fast");
});
