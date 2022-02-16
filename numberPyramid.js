function numberPyramid(params) {
  let n = Number(params[0]);
  let currentNum = 0;
  let targetNum = false;

  for (let row = 1; row <= n; row++) {
    let printNum = "";
    for (coll = 1; coll <= row; coll++) {
      currentNum++;
      printNum += currentNum + " ";
      if (currentNum === n) {
        targetNum = true;
        break;
      }
    }
    console.log(printNum);
    if (targetNum) {
      break;
    }
  }
}
numberPyramid(["7"]);
