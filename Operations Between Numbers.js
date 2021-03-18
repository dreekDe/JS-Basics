function demo(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operators = input[2].charAt(0);

    let result = 0.0;
    let tryDevideByZero = false;
    switch (operators) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 == 0) {
                tryDevideByZero = true;
            } else {
                result = n1 / n2;
            }
            break;
        case '%':
            if (n2 == 0) {
                tryDevideByZero = true;
            } else {
                result = n1 % n2;
                break;
            }
    }

    if (tryDevideByZero) {
        console.log(`Cannot divide ${n1} by zero`);
    } else {
        if (operators == '+' || operators == '-' || operators == '*') {
            if (result % 2 == 0) {
                console.log(`${n1} ${operators} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${operators} ${n2} = ${result} - odd`);
            }
        } else if (operators == '%') {
            console.log(`${n1} ${operators} ${n2} = ${result}`);
        } else {
            console.log(`${n1} ${operators} ${n2} = ${result.toFixed(2)}`);
        }
    }
}
