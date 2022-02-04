function moving(params) {

    let width = Number(params[0]);
    let length = Number(params[1]);
    let height = Number(params[2]);

    let volume = (width * length * height);

    let index = 3;
    let command = params[index];
    while(command !== "Done"){
        let countOfBox = Number(params[index]);
        volume -= countOfBox;
        if(volume<=0){
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            break;
        }
        index++;
        command = params[index];
    }
    if(volume > 0){
        console.log(`${volume} Cubic meters left.`)
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);