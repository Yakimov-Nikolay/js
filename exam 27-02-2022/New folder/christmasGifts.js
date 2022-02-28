function christmasGifts(params) {
  

  let adults = 0;
  let kids = 0;

  let index = 0;
  let command = params[index];
  while (command !== "Christmas") {
    let age = Number(params[index]);
    command = params[index];
    index++;
    if (age <= 16) {
      kids++;
    } else if (age > 16) {
      adults++;
    }
   
  }

  let toysPrice = kids * 5;
  let sweaters = adults * 15;

  console.log(`Number of adults: ${adults}`);
  console.log(`Number of kids: ${kids}`);
  console.log(`Money for toys: ${toysPrice}`);
  console.log(`Money for sweaters: ${sweaters}`);
}
christmasGifts(["16",
"16",
"16",
"16",
"16",
"Christmas"])
;
