function godzillaVsKong(params) {

    let budget = Number(params[0]);
    let countOfStatists = Number(params[1]);
    let priceOfClouts = Number(params[2]);

    const decorPrice = budget * 0.10;

    let totalPriceForClouts = countOfStatists * priceOfClouts;

    if(countOfStatists > 150){
      totalPriceForClouts = totalPriceForClouts*0.90;
    }

     let totalFilmPrice = decorPrice + totalPriceForClouts;

     let differnt = (budget - totalFilmPrice).toFixed(2);

     if(differnt>=0){
        console.log(`Action!
        Wingard starts filming with ${differnt} leva left.`)
     }else{
         let diff = Math.abs(differnt).toFixed(2);
         console.log(`Not enough money!
         Wingard needs ${diff} leva more.`)
     }
}
godzillaVsKong(["15437.62",
"186",
"57.99"])
;