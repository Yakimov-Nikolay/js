function buildings(params) {
  let flor = Number(params[0]);
  let apartaments = Number(params[1]);

  for (let x = flor; x > 0; x--) {
    let result = "";
    for (let y = 0; y < apartaments; y++) {
      if(x === flor){
        result += (`L${x}${y} `);
      }else if(x %2 === 0){
          result += (`O${x}${y} `);
      }else if(x % 2 !== 0){
          result += (`A${x}${y} `)
      }
    }
    console.log(result);
  }
  
}
buildings(["6", "4"]);
