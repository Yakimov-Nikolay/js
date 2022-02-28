function compRoom(params) {
  let month = params[0];
  let hoursCount = Number(params[1]);
  let peopleCount = Number(params[2]);
  let partOfDay = params[3];

  let pricePerPerson = 0;

  switch (month) {
    case "march":
    case "april":
    case "may":
      if (partOfDay === "day") {
        pricePerPerson = 10.5;
      } else {
        pricePerPerson = 8.4;
      }
      break;
    case "june":
    case "july":
    case "august":
      if (partOfDay === "day") {
        pricePerPerson = 12.6;
      } else {
        pricePerPerson = 10.2;
      }
      break;
  }
  if(peopleCount >= 4){
      pricePerPerson = pricePerPerson * 0.90;
  }
  if(hoursCount >= 5){
      pricePerPerson = pricePerPerson * 0.50;
  }

  let totalPrice = pricePerPerson * peopleCount * hoursCount;
  console.log(`Price per person for one hour: ${pricePerPerson.toFixed(2)}`);
  console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}
compRoom(["july",
"5",
"5",
"night"])


