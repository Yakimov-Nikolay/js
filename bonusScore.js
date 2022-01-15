function bonusScore(input){
    
    let startPoints = Number(input[0]);
    let bonus = 0.0;

    if(startPoints <= 100){
         bonus = 5;

    }else if(startPoints >1000){
         bonus = startPoints *0.10;
       
    }else{
         bonus = startPoints * 0.20;
    
    }

    if(startPoints % 2 == 0){
        bonus += 1;
    }else if(startPoints % 10 == 5){
        bonus +=2;
    }
    console.log(bonus);
    console.log(startPoints + bonus);
   
}
bonusScore(["2703"])