function goldMine(params) {
  let index = 0;
  let locationCount = Number(params[index]);
  index++;
  for (let i = 0; i < locationCount; i++) {
    let goldDobiv = Number(params[index]);
    index++;
    let days = Number(params[index]);
    index++;

    let totalDobiv = 0;
    for (let j = 0; j < days; j++) {
      let dobiv = Number(params[index]);
      totalDobiv += dobiv;
      index++;
    }
    let averageDobiv = totalDobiv / days;
    if (averageDobiv >= goldDobiv) {
      console.log(
        `Good job! Average gold per day: ${averageDobiv.toFixed(2)}.`
      );
    } else {
      let diff = goldDobiv - averageDobiv;
      console.log(`You need ${diff.toFixed(2)} gold.`);
    }
  }
}
goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
