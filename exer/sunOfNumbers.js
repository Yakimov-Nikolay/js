function sumOfNumbers(params) {
  let num = Number(params[0]);

  let sum = 0;
  let index = 1;

  while (sum < num) {
  let currwentNumber = Number(params[index]);
  sum += currwentNumber;
  index++;
  }
  console.log(sum);
}
sumOfNumbers(["100", "10", "20", "30", "40"]);
