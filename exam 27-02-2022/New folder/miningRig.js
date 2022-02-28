function miningRig (params){

    let videaCardPrice = Number(params[0]);
    let conectorPrice = Number(params[1]);
    let videoCardConsumaciq = Number(params[2]);
    let winPerDay = Number(params[3]);

    let totalCardPrice = videaCardPrice * 13;
    let totalConectorPrice = conectorPrice * 13;

    let totalPrice = totalCardPrice + totalConectorPrice + 1000;

   let totalWin = (winPerDay - videoCardConsumaciq) * 13;

   let totalDay = Math.ceil(totalPrice / totalWin);
   console.log(totalPrice);
   console.log(totalDay);
}
miningRig(["800",
"10",
"0.32",
"6.4"])

