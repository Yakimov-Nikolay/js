function bankBalance(params){

    let deposit = params[0];

    let index = 1;
    let balance = 0;

    while(deposit !== "NoMoreMoney"){
        let currentSum = Number(deposit);
        if(currentSum <0){
            console.log("Invalid operation!");
            break;
        }
        balance += currentSum;
        console.log(`Increase: ${currentSum.toFixed(2)}`);
        deposit = params[index];
        index++;

    }
    console.log(`Total: ${balance.toFixed(2)}`);
}
bankBalance(["120",
"45.55",
"-150"])
;