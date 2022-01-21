function evenPow(param) {
  let n = Number(param[0]);

  for (let i = 0; i <= n; i += 2) {
    let nPow = Math.pow(2, i);
    console.log(nPow);
  }
}
evenPow(["7"]);