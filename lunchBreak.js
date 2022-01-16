function lunchBreak(params) {

    let nameOfFilm = params[0];
    let episodeLen = Number(params[1]);
    let breakLen = Number(params[2]);

    let lunchTime = (breakLen * 1) / 8;
    let breakTime = (breakLen * 1) / 4;

    let timeForFilm = Math.abs(breakLen - lunchTime - breakTime);
 
    let diffrent = Math.abs(timeForFilm - episodeLen);

    if(timeForFilm >= episodeLen){
        console.log(`You have enough time to watch ${nameOfFilm} and left with ${Math.ceil(diffrent)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${nameOfFilm}, you need ${Math.ceil(diffrent)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",
"48",
"60"])
;