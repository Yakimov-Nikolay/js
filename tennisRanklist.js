function tennisRanklist(param) {
  let countOfTourn = Number(param[0]);
  let startPoints = Number(param[1]);

  let etapIndex = 2;
 

  let f = 0;
  let w =0;
  let sf =0;

  let totalPoints = startPoints;

  for (let i = 0; i < countOfTourn; i++) {
    let etap = param[etapIndex];

    if (etap == "F") {
        totalPoints += 1200;
        f++;
    }else if(etap == "W"){
        totalPoints += 2000;
        w++;
    }else if(etap == "SF"){
        totalPoints += 720;
        sf++;
    }
    etapIndex++;
  }

  let average = (totalPoints - startPoints) / countOfTourn;
  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${Math.floor(average)}`);
  console.log(`${(100 / countOfTourn * w).toFixed(2)}%`);
  
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])

;
