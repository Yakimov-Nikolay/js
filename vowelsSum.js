function vowelsSum(param){
let text = param[0];

let letterSum = 0;

for(let i=0; i < text.length; i++){

    let letter = text[i];
    if(letter== "a"){
        letterSum +=1;
    }else if(letter == "e"){
        letterSum +=2;
    }else if(letter == "i"){
        letterSum +=3;
    }else if(letter == "o"){
        letterSum +=4;
    }else if(letter == "u"){
        letterSum +=5;
    }

}
console.log(letterSum);

}
vowelsSum(["bamboo"])