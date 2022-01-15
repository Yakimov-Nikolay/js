function areaOfFigures(input){

    let figure = input[0];

    if(figure == "square"){
         let site = Number(input[1]);
        let area = site * site;
        console.log(area)
    }
    if(figure == "rectangle"){
      let siteA = Number(input[1]);
      let siteB = Number(input[2]);
       let area = siteA * siteB;
       console.log(area)
    }
    if (figure == "circle"){

        let radius = Number(input[1]);
        let area = Math.PI *(radius * radius);
        console.log(area)
    }
    if(figure == "triangle"){
        let hight = Number(input[1]);
        let lenght = Number(input[2]);

        let area = (hight * lenght) / 2;
        console.log(area)
    }
    
}

areaOfFigures(["triangle", "4.5", "20"])