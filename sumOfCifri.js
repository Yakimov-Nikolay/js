function sumOfCifri(param){

    let n = param[0];

    let sum = 0;

    for(let i = 0; i < n.length; i++){

        let cifra =Number(n[i]);
        sum += cifra;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfCifri(["1234"]);