// Показати лоадер
function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

// Сховати лоадер
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Загальна функція для запуску завдань
function runTask(taskNumber) {
    showLoader();
    // Очищення результату
    document.getElementById(`result${taskNumber}`).innerText = "";

    switch (taskNumber) {
        case 1:
            task1();
            break;
        case 2:
            task2();
            break;
        case 3:
            task3();
            break;
        case 4:
            task4();
            break;
        case 5:
            task5();
            break;
        default:
            hideLoader();
            break;
    }
}

// Завдання 1: Promise з "Hello, World!"
function task1() {
    const promiseHello = new Promise((resolve) => {
        setTimeout(() => resolve("Hello, World!"), 2000);
    });

    promiseHello.then((message) => {
        hideLoader();
        document.getElementById('result1').innerText = message;
    }).catch((error) => {
        hideLoader();
        document.getElementById('result1').innerText = `Помилка: ${error}`;
    });
}

// Завдання 2: Перевірка числа
function task2() {
    function checkNumber(num) {
        return new Promise((resolve, reject) => {
            if (num > 10) {
                resolve("Число більше 10");
            } else {
                reject("Число менше або дорівнює 10");
            }
        });
    }

    checkNumber(12).then((result) => {
        hideLoader();
        document.getElementById('result2').innerText = result;
    }).catch((error) => {
        hideLoader();
        document.getElementById('result2').innerText = error;
    });

    checkNumber(5).then((result) => {
        hideLoader();
        document.getElementById('result2').innerText = result;
    }).catch((error) => {
        hideLoader();
        document.getElementById('result2').innerText = error;
    });
}

// Завдання 3: Випадкове число
function task3() {
    function randomNumber() {
        return new Promise((resolve) => {
            const delay = Math.floor(Math.random() * 3 + 1) * 1000;
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 100) + 1);
            }, delay);
        });
    }

    randomNumber().then((num) => {
        hideLoader();
        document.getElementById('result3').innerText = `Число: ${num}`;
    });
}

// Завдання 4: Порівняння чисел
function task4() {
    function compareNumbers(num1, num2) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num1 > num2) {
                    resolve("Перше число більше");
                } else if (num1 < num2) {
                    resolve("Друге число більше");
                } else {
                    reject("Числа рівні");
                }
            }, 1000);
        });
    }

    compareNumbers(12, 10).then((result) => {
        hideLoader();
        document.getElementById('result4').innerText = result;
    }).catch((error) => {
        hideLoader();
        document.getElementById('result4').innerText = error;
    });
}

// Завдання 5: Сума чисел
function task5() {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => resolve(Math.floor(Math.random() * 10) + 1), 1000);
    });
    const promise2 = new Promise((resolve) => {
        setTimeout(() => resolve(Math.floor(Math.random() * 10) + 1), 2000);
    });
    const promise3 = new Promise((resolve) => {
        setTimeout(() => resolve(Math.floor(Math.random() * 10) + 1), 3000);
    });

    Promise.all([promise1, promise2, promise3]).then((results) => {
        const sum = results.reduce((acc, val) => acc + val, 0);
        hideLoader();
        document.getElementById('result5').innerText = `Сума чисел: ${sum}`;
    });
}
