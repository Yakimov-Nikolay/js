function catFood(params) {

  let catCount = Number(params[0]);

  let grup1 = 0;
  let grup2 = 0;
  let grup3 = 0;

  let totalfoodQuantity = 0;

  for (let i = 1; i <= catCount; i++) {
    let foodQuantity = Number(params[i]);
    totalfoodQuantity += foodQuantity;
    if (foodQuantity >= 100 && foodQuantity < 200) {
      grup1++;
    } else if (foodQuantity >= 200 && foodQuantity < 300) {
      grup2++;
    } else if (foodQuantity >= 300 && foodQuantity < 400) {
      grup3++;
    }
  }
  let totalFoodPerKg = totalfoodQuantity / 1000; 
  let foodPerDayPrice = (totalFoodPerKg * 12.45).toFixed(2);

  console.log(`Group 1: ${grup1} cats.`);
  console.log(`Group 2: ${grup2} cats.`);
  console.log(`Group 3: ${grup3} cats.`);
  console.log(`Price for food per day: ${foodPerDayPrice} lv.`);
}
catFood(["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])



