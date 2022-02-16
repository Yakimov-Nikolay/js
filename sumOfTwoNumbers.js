function sumOfTwoNumbers(params) {
  let startNum = Number(params[0]);
  let endNum = Number(params[1]);
  let magicNum = Number(params[2]);

  let validComb = 0;
  let isFound = false;

  for (let s = startNum; s <= endNum; s++) {
    for (let e = startNum; e <= endNum; e++) {
      validComb++;
      if (s + e === magicNum) {
        console.log(`Combination N:${validComb} (${s} + ${e} = ${magicNum})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${validComb} combinations - neither equals ${magicNum}`);
  }
}
sumOfTwoNumbers(["23", "24", "20"]);
