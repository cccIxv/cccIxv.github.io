// Завдання 1: Годинник у реальному часі
const clockInput = document.getElementById("clockInput");
const updateClock = () => {
    const now = new Date();
    clockInput.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    setTimeout(updateClock, 1000);
};
updateClock();

// Завдання 2.5: Кнопка для оновлення часу
const currentClock = document.getElementById("currentClock");
const updateClockButton = document.getElementById("updateClockButton");
const showCurrentTime = () => {
    const now = new Date();
    currentClock.innerText = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
};
updateClockButton.addEventListener("click", showCurrentTime);
showCurrentTime();

// Завдання 3: Анімація друку тексту
const textInput = document.getElementById("textInput");
const printTextButton = document.getElementById("printTextButton");
const animatedText = document.getElementById("animatedText");
const animateText = () => {
    const text = textInput.value;
    animatedText.innerText = "";
    let index = 0;

    const interval = setInterval(() => {
        if (index < text.length) {
            animatedText.innerText += text[index] === " " ? "\u00A0" : text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);
};
printTextButton.addEventListener("click", animateText);

// Завдання 4: Імітація ставки
const betInput = document.getElementById("betInput");
const placeBetButton = document.getElementById("placeBetButton");
const betResult = document.getElementById("betResult");
const handleBet = () => {
    const betAmount = parseInt(betInput.value, 10);
    if (!betAmount || betAmount <= 0) {
        betResult.innerText = "Введіть коректну суму для ставки.";
        return;
    }
    const multiplier = Math.floor(Math.random() * 11) - 5;
    setTimeout(() => {
        if (multiplier > 0) {
            betResult.innerText = `Ви виграли: ${betAmount * multiplier} одиниць!`;
        } else {
            betResult.innerText = "Ви програли! Спробуйте ще раз.";
        }
    }, 1000);
};
placeBetButton.addEventListener("click", handleBet);
