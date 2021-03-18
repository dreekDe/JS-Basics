function totalPrice(priceOver20kg, realKg, days, countOfBags) {
    let price;
    if (realKg > 20) {
        price = priceOver20kg;
    } else if (realKg >= 10 && realKg <= 20) {
        price = priceOver20kg * 0.50;
    } else {
        price = priceOver20kg * 0.20;
    }

    if (days > 30) {
        price *= 1.1;
    } else if (days >= 7 && days <= 30) {
        price *= 1.15;
    } else {
        price *= 1.40;
    }
    price = (price * countOfBags).toFixed(2);

    console.log(`The total price of bags is: ${price} lv.`)
}
