function cleverLili(param) {
  const lilisYear = Number(param[0]);
  const washPrice = Number(param[1]);
  const toysPrice = Number(param[2]);

  let toysCount = 0;
  let money = 0;
  let counter = 0;
  let deposit = 0;

  for (let i = 1; i <= lilisYear; i++) {
    if (i % 2 == 0) {
      money = money + 10;
      deposit = deposit + money;
      counter++;
    } else {
      toysCount++;
    }
  }
  let priceFromToys = toysCount * toysPrice;
  let totalMoney = deposit + priceFromToys - counter;

  let diff = totalMoney - washPrice;

  if(totalMoney >= washPrice){
    console.log(`Yes! ${(diff).toFixed(2)}`)
  }else{
      console.log(`No! ${Math.abs(diff).toFixed(2)}`)
  }
}
cleverLili(["21",
"1570.98",
"3"])
;
