function demo(input) {
    let months = input[0];
    let night = Number(input[1]);

    let priceApartment = 0.0;
    let priceStudio = 0.0;

    switch (months) {
        case "May":
        case "October":
            priceApartment = 65;
            priceStudio = 50;
            if (night > 7 && night <= 14) {
                priceStudio *= 0.95;
            }
            if (night > 14) {
                priceStudio *= 0.70;
            }
            break;
        case "June":
        case "September":
            priceApartment = 68.7;
            priceStudio = 75.20;
            if (night > 14) {
                priceStudio *= 0.80;
            }
            break;
        case "July":
        case "August":
            priceApartment = 77;
            priceStudio = 76;
            break;
    }
    if (night > 14) {
        priceApartment *= 0.90;
    }

    let apartmentPriseForAllNight = priceApartment * night;
    let studioPriseForAllNight = priceStudio * night;

    console.log(`Apartment: ${apartmentPriseForAllNight.toFixed(2)} lv.\n` +
    `Studio: ${studioPriseForAllNight.toFixed(2)} lv.`);
}
