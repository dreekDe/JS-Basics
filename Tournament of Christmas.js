function tournament(input) {
    let money = 0;
    let counterWinDays = 0;
    
    let currentIndex = 1;
    let currentToken = input[currentIndex];

    for (let i = 0; i < Number(input[0]); i++) {
        let winGames = 0;
        let loseGames = 0;
        let currentMoney = 0;

        while (currentToken !== "Finish") {
            currentIndex++;
            currentToken = input[currentIndex];
            if (currentToken === "win") {
                winGames++;
                currentMoney += 20;
            } else {
                loseGames++;
            }
            currentIndex++;
            currentToken = input[currentIndex];
        }
        
        if (winGames > loseGames) {
            currentMoney = currentMoney * 1.1;
            counterWinDays++;
        }
        money += currentMoney;
        currentIndex++;
        currentToken = input[currentIndex];
    }

    if (counterWinDays >= (Number(input[0]) / 2)) {
        money = money * 1.2;
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);  
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
    }
}
