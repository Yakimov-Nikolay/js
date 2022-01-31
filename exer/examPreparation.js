function examPreparation(params) {
  let poor = Number(params[0]);

  let goodGrades = 0;
  let poorGrades = 0;
  let sumOfGrades = 0;
  let lastProblem = "";

  let index = 1;
  let problemName = params[index];

  while (problemName != "Enough") {
    let grade = Number(params[index + 1]);
    lastProblem = problemName;

    if (grade <= 4) {
      poorGrades++;
      if (poorGrades >= poor) {
        break;
      }
      sumOfGrades += grade;
    } else {
      sumOfGrades += grade;
    }
    index += 2;
    goodGrades++;
    problemName = params[index];
  }
  if (poorGrades >= poor) {
    console.log(`You need a break, ${poorGrades} poor grades.`);
  } else {
    console.log(`Average score: ${(sumOfGrades / goodGrades).toFixed(2)}`);
    console.log(`Number of problems: ${goodGrades}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
;
