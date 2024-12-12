// URL для отримання даних JSON
const requestURL = "https://semegenkep.github.io/json/example.json";

// Функція для заповнення заголовка
function populateHeader(superHeroes) {
    const header = document.querySelector('header');
    const title = document.createElement('h1');
    title.textContent = superHeroes.teamName;
    header.appendChild(title);
}

// Функція для створення карток героїв
function showHeroes(superHeroes) {
    const section = document.querySelector('section');

    superHeroes.members.forEach(hero => {
        const heroCard = document.createElement('div');
        heroCard.classList.add('hero-card');

        const heroImage = document.createElement('img');
        heroImage.src = hero.image;
        heroCard.appendChild(heroImage);

        const heroName = document.createElement('h3');
        heroName.textContent = hero.name;
        heroCard.appendChild(heroName);

        const heroDescription = document.createElement('p');
        heroDescription.textContent = hero.description;
        heroCard.appendChild(heroDescription);

        section.appendChild(heroCard);
    });
}

// Функція для завантаження даних з JSON
function loadJSON() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL, true);
    xhr.responseType = 'json';  // Вказуємо, що очікуємо JSON від сервера

    // Виконується після успішного запиту
    xhr.onload = function() {
        if (xhr.status === 200) {  // Перевірка на успішну відповідь
            const superHeroes = xhr.response;

            // Викликаємо функції для заповнення заголовка та карток героїв
            populateHeader(superHeroes);
            showHeroes(superHeroes);
        } else {
            console.error('Помилка при завантаженні даних:', xhr.status);
        }
    };

    // Відправляємо запит
    xhr.send();
}

// Викликаємо функцію завантаження даних при завантаженні сторінки
window.onload = loadJSON;
