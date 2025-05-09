function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menuIcon');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        menuIcon.classList.remove('open');
    } else {
        menu.style.display = 'flex';
        menuIcon.classList.add('open');
    }
}

//Свайпер
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.adventure-photo-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

//Модальне вікно
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const contactLink = document.getElementById('contact-link');
    const closeBtn = document.querySelector('.close-btn');
    const contactForm = document.getElementById('contact-form');

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Дякуємо за ваше повідомлення! Ми зв’яжемося з вами найближчим часом.');
        modal.style.display = 'none';
        contactForm.reset();
    });
});

//Генерацыя через json на сторінці напрямки
document.addEventListener('DOMContentLoaded', function () {
  fetch('https://raw.githubusercontent.com/cccIxv/cccIxv.github.io/refs/heads/main/kyrsova/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка завантаження даних: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const destinationSection = document.getElementById('destinationSection');
            displayDestinations(data.products);
        })
        .catch(error => console.error(error));

    function displayDestinations(destinations) {
        destinationSection.innerHTML = '';

        destinations.forEach(destination => {
            const destinationCard = createDestinationCard(destination);
            destinationSection.appendChild(destinationCard);
        });
    }

    function createDestinationCard(destination) {
        const card = document.createElement('div');
        card.classList.add('destination-card');
        card.style.backgroundImage = `url(${destination.image})`;

        card.innerHTML = `
                <div class="destination-content">
                    <h2>${destination.title}</h2>
                    <p>${destination.description}</p>
                    <p class="button-link">${destination.label}</p>
                </div>
            `;

        return card;
    }

  fetch('https://raw.githubusercontent.com/cccIxv/cccIxv.github.io/refs/heads/main/kyrsova/data2.json')
        .then(response => response.json())
        .then(data => {
            const priceCardsBlock = document.querySelector('.price-cards-block');
            data.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('price-card');
                cardElement.innerHTML = `
                <img src="${card.image}" alt="img">
                <p class="title-tour">${card.title}</p>
                <p class="price-insurance">${card.price}<span class="title-tour">${card.unit}</span></p>
                <div class="line-block"></div>
                <p class="price-text">${card.description}</p>
                ${card.features.map(feature => `<p class="price-text"><i class="fa-solid fa-check" style="color: #6E6E6E;"></i>${feature}</p>`).join('')}
                <a href="#offer">Докладніше</a>
            `;
                priceCardsBlock.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Помилка завантаження даних:', error));
});
