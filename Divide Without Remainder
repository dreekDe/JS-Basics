function demo(input) {
    let n = Number(input[0]);

    let p1 = 0.0;
    let p2 = 0.0;
    let p3 = 0.0;

    for (let i = 1; i <= n; i++) {
        let p = Number(input[i]);

        if (p % 4 == 0) {
            p3 = p3 + 1;
        }

        if (p % 2 == 0) {
            p1 = p1 + 1;
        }

        if (p % 3 == 0) {
            p2 = p2 + 1;
        }
    }

    let totalp1 = p1 / n * 100;
    let totalp2 = p2 / n * 100;
    let totalp3 = p3 / n * 100;

    console.log(`${totalp1.toFixed(2)}%`);
    console.log(`${totalp2.toFixed(2)}%`);
    console.log(`${totalp3.toFixed(2)}%`);
}
