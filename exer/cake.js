function cake(params) {
  let width = Number(params[0]);
  let length = Number(params[1]);

  let area = width * length;

  let index = 2;
  let command = params[index];
  while (command !== "STOP") {
    let pieses = Number(params[index]);
    area -= pieses;
    if (area < 0) {
      console.log(`No more cake left! You need ${Math.abs(area)} pieces more.`);
      break;
    }

    index++;
    command = params[index];
  }
  if (area >= 0) {
    console.log(`${area} pieces are left.`);
  }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
;
