function processors(params) {
  let targetProcessorsCount = Number(params[0]);
  let workersCount = Number(params[1]);
  let workDays = Number(params[2]);

  let totalWorsHours = workDays * workersCount * 8;

  let totalProcessorsCount = Math.floor(totalWorsHours / 3);

  let diff = Math.abs(targetProcessorsCount - totalProcessorsCount);

  if (totalProcessorsCount < targetProcessorsCount) {
    let totalLosses = (diff * 110.1).toFixed(2);

    console.log(`Losses: -> ${totalLosses} BGN`);
  } else {
    let totalWin = (diff * 110.1).toFixed(2);
    console.log(`Profit: -> ${totalWin} BGN`);
  }
}
processors(["150",
"7",
"18"])

