function rollDice() {
    const dice = document.getElementById('dice');
    const result = document.getElementById('result');
    const diceImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
    
    result.textContent = "Rolling the dice...";
    
    let rollCount = 0;
    const maxRolls = 10; 
    const rollInterval = 50;

    dice.style.transform = "rotate(360deg)";
    
    const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * diceImages.length);
        dice.src = diceImages[randomIndex];
        rollCount++;
        
        if (rollCount >= maxRolls) {
            clearInterval(intervalId);
            const finalNumber = randomIndex + 1;
            setTimeout(() => {
                result.textContent = `You rolled a ${finalNumber}`;
            }, 300);
            dice.style.transform = "rotate(0deg)";
        }
    }, rollInterval);
}
