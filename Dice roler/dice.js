function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const imageDisplay = document.getElementById('imageDisplay');

    if (randomNumber === 1) {
        imageDisplay.style.backgroundImage = 'url(dice1.jpg)';
    } else if (randomNumber === 2) {
        imageDisplay.style.backgroundImage = 'url(dice2.jpg)';
    } else if (randomNumber === 3) {
        imageDisplay.style.backgroundImage = 'url(dice3.jpg)';
    } else if (randomNumber === 4) {
        imageDisplay.style.backgroundImage = 'url(dice4.jpg)';
    } else if (randomNumber === 5) {
        imageDisplay.style.backgroundImage = 'url(dice5.jpg)';
    } else if (randomNumber === 6) {
        imageDisplay.style.backgroundImage = 'url(dice6.jpg)';
    }
}

