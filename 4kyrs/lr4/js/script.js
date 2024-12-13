function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Convertor() {
    const fahrenheit = document.getElementsByName('fahrenheit')[0];
    const celsius = document.getElementsByName('celsius')[0];
    const convertorWrapper = document.querySelector('.converter');

    convertorWrapper.addEventListener('change', (event) => {
        const target = event.target;
        if(target.value){
            if (target == celsius) {
                fahrenheit.value = target.value * 9/5 + 32;
            }
            else if (target == fahrenheit) {
                celsius.value = 5 / 9 * (+target.value - 32);
            }
        }
        else{
            fahrenheit.value = null;
            celsius.value = null
        }
    })
}
Convertor();

function mathTaskGlobal() {


    const math = document.querySelector('.math');

    let firstRandom;
    let secondRandom;
    let resultRandom;
    let globalCounter = 0;
    let counter = 0;
    let chance = true;

    function mathTask(event) {
        const newBtn = document.getElementById('newTask');
        const checkBtn = document.getElementById('check');
        const solution = document.getElementsByName('solution')[0];
        const task = document.getElementsByName('task')[0];
        const target = event.target;
        if (target == newBtn && globalCounter != 10) {
            globalCounter++;
            firstRandom = getRandomInt(9);
            secondRandom = getRandomInt(9);
            resultRandom = firstRandom * secondRandom;
            task.innerHTML = `${firstRandom} x ${secondRandom} = `;
            chance = true;
        }
        else if (target == checkBtn && chance == true) {
            if (solution.value == +resultRandom) {
                ++counter
            }
            chance = false;
        }
        math.querySelector('p').innerHTML = `Загальний рахунок ${counter * 10}% (${counter} правильних відповідей з ${globalCounter})`
    }

    math.addEventListener('click', (event) => mathTask(event));
}
mathTaskGlobal();

function mathTaskRadioGlobal() {

    let firstRandomRadio;
    let secondRandomRadio;
    let resultRandomRadio;
    let globalCounterRadio = 0;
    let counterRadio = 0;

    const mathRadio = document.querySelector('.math-radio');
    function mathTaskRadio(event) {
        const newBtn = document.querySelector('.newTask');
        const task = document.getElementsByName('task')[1];
        const radioBtnArr = document.getElementsByName('radiobtn');
        const target = event.target;
        if (target == newBtn && globalCounterRadio != 10) {
            globalCounterRadio++;
            firstRandomRadio = getRandomInt(9);
            secondRandomRadio = getRandomInt(9);
            resultRandomRadio = firstRandomRadio * secondRandomRadio;
            task.innerHTML = `${firstRandomRadio} x ${secondRandomRadio} = `;
            generateRadio(resultRandomRadio);
        }
        else if (target.type == 'radio') {
            console.log();
            if (target.value == +resultRandomRadio) {
                ++counterRadio
            }
            for (let i of radioBtnArr) {
                i.disabled = true;
            }
        }

        function generateRadio(resultRandom) {
            let correctPosition = getRandomInt(4);
            const radioBtns = document.querySelector('.radiobtns');
            radioBtns.innerHTML = '';
            for (let i = 0; i < 4; i++) {
                let tempInput = document.createElement('input');
                let tempLabel = document.createElement('label');
                tempInput.type = 'radio';
                tempInput.name = "radiobtn";
                // tempLabel.for = 'radiobtn';

                if (i == correctPosition) {
                    tempInput.value = resultRandom;
                    tempLabel.innerHTML = resultRandom;
                }
                else {
                    let randomNumber = getRandomInt(resultRandom + 7);
                    tempInput.value = randomNumber;
                    tempLabel.innerHTML = randomNumber;
                }
                radioBtns.appendChild(tempInput);
                radioBtns.appendChild(tempLabel);
            }
        }
        mathRadio.querySelector('p').innerHTML = `Загальний рахунок ${counterRadio * 10}% (${counterRadio} правильних відповідей з ${globalCounterRadio})`
    }

    mathRadio.addEventListener('click', (event) => mathTaskRadio(event));
}
mathTaskRadioGlobal();

const imagesArray = [
    {
        path: 'images/mcqeen.jpg',
        title: 'Кчау',
        description: 'Блискавка Маквін Кчау'
    },
    {
        path: 'images/hatson.jpg',
        title: 'Легенда',
        description: 'Дог Хатсон'
    },
    {
        path: 'images/metr.jpg',
        title: 'Сирник',
        description: 'Бук-Сирник, Сирник'
    }
];

function initPhotoRotator(divId, images) {
    let currentIndex = 0;
    const rotatorDiv = document.getElementById(divId);

    const imageWrapper = document.createElement('div');
    const imageTitle = document.createElement('h2');
    const image = document.createElement('img');
    const imageDescription = document.createElement('p');
    const imageCounter = document.createElement('p');
    const controlsDiv = document.createElement('div');
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');

    controlsDiv.id = 'controls';
    imageWrapper.classList.add('imageWrapper');
    prevButton.textContent = 'Назад';
    nextButton.textContent = 'Вперед';

    controlsDiv.appendChild(prevButton);
    controlsDiv.appendChild(nextButton);
    rotatorDiv.appendChild(imageCounter);
    rotatorDiv.appendChild(imageWrapper);
    imageWrapper.appendChild(imageTitle);
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageDescription);
    rotatorDiv.appendChild(controlsDiv);

    function updateImage(index) {
        const currentImage = images[index];
        image.src = currentImage.path;
        imageTitle.textContent = currentImage.title;
        imageDescription.textContent = currentImage.description;
        imageCounter.textContent = `Фотографія ${index + 1} із ${images.length}`;

        prevButton.classList.toggle('hidden', index === 0);
        nextButton.classList.toggle('hidden', index === images.length - 1);
    }

    controlsDiv.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName.toLowerCase() == 'button') {
            if (target == prevButton) {
                if (currentIndex > 0) {
                    currentIndex--;
                }
            }
            else if (target == nextButton) {
                if (currentIndex < images.length - 1) {
                    currentIndex++;
                }
            }
            updateImage(currentIndex);
        }
    })
    updateImage(currentIndex);
}
initPhotoRotator('rotator', imagesArray);


function captcha() {
    const captcha = document.querySelector('.captcha');
    const captchaBlock = document.querySelector('.captcha_block');
    const input = captcha.querySelector('input');
    const answer = getRandomInt(9).toString()
        + getRandomInt(9).toString()
        + getRandomInt(9).toString()
        + getRandomInt(9).toString();

    for (let i = 0; i < 15 * 5; i++) {
        let span = document.createElement('span');
        span.classList.add('pixel');
        captchaBlock.appendChild(span);
        if (pixeledNumber(answer).includes(i)) {
            span.classList.add('red');
        }
    }

    function pixeledNumber(answer) {
        let counter = 0;
        const array = [];
        let number = answer.toString();
        for (let i of number) {
            switch (i) {
                case '1':
                    array.push([1, 5, 6, 7, 8, 9].map((x) => x + counter));
                    break;
                case '2':
                    array.push([0, 5, 10, 11, 7, 2, 3, 4, 9, 14].map((x) => x + counter));
                    break;
                case '3':
                    array.push([0, 5, 10, 11, 7, 13, 14, 9, 4].map((x) => x + counter));
                    break;
                case '4':
                    array.push([0, 1, 2, 7, 10, 11, 12, 13, 14].map((x) => x + counter));
                    break;
                case '5':
                    array.push([0, 5, 10, 1, 2, 7, 12, 13, 14, 9, 4].map((x) => x + counter));
                    break
                case '6':
                    array.push([0, 5, 10, 1, 2, 7, 12, 13, 14, 9, 4, 3].map((x) => x + counter));
                    break
                case '7':
                    array.push([0, 5, 10, 11, 7, 8, 9].map((x) => x + counter));
                    break;
                case '8':
                    array.push([0, 5, 10, 1, 2, 7, 12, 13, 14, 9, 4, 3, 11].map((x) => x + counter));
                    break;
                case '9':
                    array.push([0, 5, 10, 1, 2, 7, 12, 13, 14, 9, 4, 11].map((x) => x + counter));
                    break;
                case '0':
                    array.push([0, 5, 10, 1, 2, 12, 13, 14, 9, 4, 3, 11].map((x) => x + counter));
                    break
            }
            counter += 20;
        }
        const result = [].concat(array[0], array[1], array[2], array[3]);
        return result;
    }

    input.addEventListener('change', (event) => {
        let target = event.target;
        let p = captcha.querySelector('p');
        if (target.value == answer) {
            p.textContent = 'Вірно';
            p.style.color = 'green';
        }
        else {
            p.textContent = 'Помилка';
            p.style.color = 'red';
        }
    })
}

captcha();