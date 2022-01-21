function histograma(param) {
  let n = Number(param[0]);

  let p1 =0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= n; i++) {
        let num = Number(param[i]);

        if(num<200){
            p1 +=1;
        }else if(num >=200 && num<=399){
            p2 += 1;
        }else if(num >=400 && num<=599){
            p3 += 1;
        }else if(num >=600 && num<=799){
            p4 += 1;
        }else if(num >= 800){
            p5 += 1;
        }
  }
  console.log(`${(100 / n *p1).toFixed(2)}%`);
  console.log(`${(100 / n *p2).toFixed(2)}%`);
  console.log(`${(100 / n *p3).toFixed(2)}%`);
  console.log(`${(100 / n *p4).toFixed(2)}%`);
  console.log(`${(100 / n *p5).toFixed(2)}%`);
}

histograma(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])
;
