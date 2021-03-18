function demo(input) {
    let n = Number(input[0]);
    let p1 = 0.0;
    let p2 = 0.0;
    let p3 = 0.0;
    let p4 = 0.0;
    let p5 = 0.0;
    let totalp1 = 0.0;
    let totalp2 = 0.0;
    let totalp3 = 0.0;
    let totalp4 = 0.0;
    let totalp5 = 0.0;

    for (let i = 0; i < n; i++) {
        let p = Number(input[i + 1]);
        if (p >= 1 && p < 200) {
            p1 = p1 + 1;
            totalp1 = p1 / n * 100;
        } else if (p >= 200 && p < 400) {
            p2 = p2 + 1;
            totalp2 = p2 / n * 100;
        } else if (p >= 400 && p < 600) {
            p3 = p3 + 1;
            totalp3 = p3 / n * 100;
        } else if (p >= 600 && p < 800) {
            p4 = p4 + 1;
            totalp4 = p4 / n * 100;
        } else if (p >= 800) {
            p5 = p5 + 1;
            totalp5 = p5 / n * 100;
        }
    }

    console.log(`${totalp1.toFixed(2)}%`);
    console.log(`${totalp2.toFixed(2)}%`);
    console.log(`${totalp3.toFixed(2)}%`);
    console.log(`${totalp4.toFixed(2)}%`);
    console.log(`${totalp5.toFixed(2)}%`);
} 
