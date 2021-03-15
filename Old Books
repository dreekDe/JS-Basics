function demo(input) {
    let wishBook = input[0];

    let i = 1;
    let flag = false;
    while (input[i] != "No More Books") {
        if (input[i] === wishBook) {
            flag = true;
            break;
        }
        i++;
    }
    
    if (flag) {
        console.log(`You checked ${i - 1} books and found it.`)
    } else {
        console.log(`The book you search is not here!\nYou checked ${i - 1} books.`);
    }
}
