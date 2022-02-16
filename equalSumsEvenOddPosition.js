function equalSumsEvenOddPosition(params) {
  let startNum = Number(params[0]);
  let endNum = Number(params[1]);
  let printLine = "";
  for (let num = startNum; num <= endNum; num++) {
    let currentNum = "" + num;

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < currentNum.length; i++) {
      if (i % 2 === 0) {
        evenSum += Number(currentNum[i]);
      } else {
        oddSum += Number(currentNum[i]);
      }
      
    }
    if (evenSum === oddSum) {
        printLine += currentNum + " ";

      }
  }
  console.log(printLine);
}
equalSumsEvenOddPosition(["123456",
"124000"])

