function demo(input) {
    
    let n = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 0; i < n; i++) {
        let name = input[2 + i];
        switch (name) {
            case "Facebook":
                salary = salary - 150;
                break;
            case "Instagram":
                salary = salary - 100;
                break;
            case "Reddit":
                salary = salary - 50;
                break;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0) {
        console.log(salary);
    }
}
