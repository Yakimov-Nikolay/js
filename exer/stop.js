function stop(params){

    let index = 0;

    let text = params[index];

    while(text !== "Stop"){
        console.log(text);
        index ++;
        text = params[index];
    }
}
stop(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
