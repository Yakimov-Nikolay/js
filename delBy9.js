function delBy9(param) {
  let from = Number(param[0]);
  let to = Number(param[1]);

  let sum = 0;
  let res = "";

  for (let i = from; i <= to; i++) {
    if(i % 9 === 0){
        sum += i;
        res += i + "\n";
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(res);
}
delBy9(["100", "200"]);
