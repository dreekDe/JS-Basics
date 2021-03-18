function demo(input) {
    let buget = Number(input[0]);
    let sesson = input[1];

    let price = 0.0;
    let distanation;
    let where;
    if (buget <= 100) {
        distanation = "Bulgaria";
        if (sesson === "summer") {
            price = buget * 0.3;
            where = "Camp";
        } else if (sesson === "winter") {
            price = buget * 0.7;
            where = "Hotel";
        }
    } else if (buget > 100 && buget <= 1000) {
        distanation = "Balkans";
        if (sesson === "summer") {
            price = buget * 0.4;
            where = "Camp";
        } else if (sesson === "winter") {
            price = buget * 0.8;
            where = "Hotel";
        }
    } else if (buget > 1000 && (sesson === "summer" || sesson === "winter")) {
        price = buget * 0.9;
        distanation = "Europe";
        where = "Hotel";
    }

    console.log(`Somewhere in ${distanation}`);
    console.log(`${where} - ${price.toFixed(2)}`);
}
