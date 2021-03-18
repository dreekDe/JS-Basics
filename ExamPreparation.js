function demo(input) {

    let badGrade = Number(input[0]);
    let i = 1;
    let flag = false;
    let sumGrade = 0;
    let count = 0;
    let currentToken = input[i];

    while (currentToken !== "Enough") {
        i++;
        let currentGrade = Number(input[i++]);
        if (currentGrade <= 4) {
            badGrade--;
            if (badGrade == 0) {
                flag = true;
                break;
            }
        }
        sumGrade += currentGrade;
        count++;
        currentToken = input[i];
    }
    if (flag) {
        console.log(`You need a break, ${input[0]} poor grades.`);
    } else {
        console.log(`Average score: ${(sumGrade/count).toFixed(2)}\nNumber of problems: ${Math.floor(input.length / 2 - 1)}`);
        console.log(`Last problem: ${input[i - 2]}`);
    }
}
