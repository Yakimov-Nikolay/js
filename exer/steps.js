function steps(params) {
  let steps = params[0];
  let index = 0;

  let totalSteps = 0;

  while (steps !== "Going home") {
    steps = Number(params[index]);
    totalSteps += steps;
    if(totalSteps>= 10000){
        let diff = Math.abs(totalSteps - 10000);
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
        break;
    }
    index ++;
    steps = params[index];
  }
  if(steps === "Going home"){
     let stepsAfter = Number(params[index +1]);
     totalSteps += stepsAfter;
     let diff = Math.abs(totalSteps - 10000);
     if(totalSteps >= 10000){
        
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
     }else {
         console.log(`${diff} more steps to reach goal.`)
     }

  }

}
steps(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

;
