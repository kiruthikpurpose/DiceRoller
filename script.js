function rollDice() {
    const dice = document.getElementById('dice');
    const result = document.getElementById('result');
    const diceImages = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png"];
    
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
