function sequence(params) {
  let n = Number(params[0]);
  let number = 1;

  while (number <= n) {
    let current = number;
    console.log(current);
    current = number * 2 + 1;
    number = current;
  }
}
sequence(["31"]);
