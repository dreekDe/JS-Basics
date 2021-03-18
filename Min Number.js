function demo(input) {

    let minValue = Number.MAX_VALUE;
   
    for (let index = 0; index < Number(input[0]); index++) {
        let currentNumber = Number(input[index + 1]); 
        if (currentNumber <= minValue) {
            minValue = currentNumber;
       }
    }
    console.log(minValue);
