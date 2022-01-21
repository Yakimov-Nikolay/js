function multiplicationTable(param){

    let num = Number(param[0]);
    
    for(let i = 1; i <=10; i++){

        let result = i *num;
        console .log(`${i} * ${num} = ${result}`)
    }
}
multiplicationTable(["5"])