function treakking(param) {
  let countOfGrups = Number(param[0]);

  let musala = 0;
  let monblan = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;

  let people = 0;

  for (let i = 1; i <= countOfGrups; i++) {
    let peopleCount = Number(param[i]);

    people +=peopleCount;

    if (peopleCount <= 5) {
      musala += peopleCount;
    } else if (peopleCount >= 6 && peopleCount <= 12) {
      monblan += peopleCount;
    } else if (peopleCount >= 13 && peopleCount <= 25) {
      kilimanjaro += peopleCount;
    } else if (peopleCount >= 26 && peopleCount <= 40) {
      k2 += peopleCount;
    } else if (peopleCount >= 41) {
      everest += peopleCount;
    }
  }

  console.log(`${(100 / people * musala).toFixed(2)}%`);
  console.log(`${(100 / people * monblan).toFixed(2)}%`);
  console.log(`${(100 / people * kilimanjaro).toFixed(2)}%`);
  console.log(`${(100 / people * k2).toFixed(2)}%`);
  console.log(`${(100 / people * everest).toFixed(2)}%`);
}
treakking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
;
