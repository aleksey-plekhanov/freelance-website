const name_description = {
    "nameSite": "FL-STUDIO",
    "iconSite": "fas fa-bars",
    "descriptionSite": "Бюджетно и качественно! ✨",
    "copyrightYears": "2025",
};

const aboutBlock = {
    "headerBlock": "Почему именно мы?",
    "descriptionBlock": "Проводим причины почему необходимо заказывать у нас!!",
    "content":[
        {
            "name" : "Веб-разработка",
            "urlImage": "./assets/img/service3.jpg",
            "description": "Создание современных и функциональных веб-сайтов!"
        },
        {
            "name": "",
            "urlImage": "",
            "description": ""
        }
    ]
};

const service = {
    "headerBlock": "Наши услуги",
    "descriptionBlock": "Наше портфолио включает успешные проекты для клиентов из различных отраслей. Мы гордимся каждым выполненным заказом и стремимся к постоянному совершенствованию.",
    "content":[
        {
            "name" : "Веб-разработка",
            "urlImage": "./assets/img/service3.jpg",
            "description": "Создание современных и функциональных веб-сайтов!",
            "price": "от 10000 ₽"
        },
        {
            "name" : "Веб-разработка",
            "urlImage": "./assets/img/service2.jpg",
            "description": "Создание современных и функциональных веб-сайтов!",
            "price": "от 10000 ₽"
        }
    ]
};

const portfolio = {
    "headerBlock": "Портфолио",
    "descriptionBlock": "Наше портфолио включает успешные проекты для клиентов из различных отраслей. Мы гордимся каждым выполненным заказом и стремимся к постоянному совершенствованию.",
    "content":[
        {
            "name" : "Веб-разработка",
            "urlImage": "./assets/img/service3.jpg",
            "description": "Создание современных и функциональных веб-сайтов!",
            "button": {
                "name": "Подробнее",
                "url": "fdf",
            }
        },
        {
            "name" : "Веб-разработка",
            "urlImage": "./assets/img/service2.jpg",
            "description": "Создание современных и функциональных веб-сайтов!",
            "button": {
                "name": "Подробнее",
                "url": "fdf",
            }
        }
    ]
};

const reviews = {
    "headerReviews": "Отзывы наших клиентов",
    "content":[
        {
            "username": "Плеханов Алексей",
            "project": "4",
            "comment": "4"
        },
        {
            "username": "Плеханов Алексей",
            "project": "5",
            "comment": "6"
        }
    ]
};

const sociallinks = {
    "url_vk": "https://github.com/aleksey-plekhanov",
    "url_telegram": "https://github.com/aleksey-plekhanov"
};

const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    const navbarMenu = document.getElementById('navbar-menu');
    navbarMenu.classList.toggle('active');
});

function headerBlock() {
    const code = `<a href="#" class="navbar-brand" ><i class="${name_description.iconSite}"></i>${name_description.nameSite}</a>`;
    document.getElementById('header-block').innerHTML += code;
}

function promoblock() {
    const code = 
    `
        <h1 class="promo-block-title">${name_description.nameSite}</h1>
        <p class="promo-block-text">${name_description.descriptionSite}</p>
    `;

    document.getElementById('promo-block').innerHTML += code;
}

function aboutblock() {
    const code = 
    `
        <h2>${aboutBlock.headerBlock}</h2>
        <p>${aboutBlock.descriptionBlock}</p>
        <div class="custom-grid">

        ${aboutBlock.content.map(item => `
            <div class="custom-card">
            <img src="${item.urlImage}">
                <div class="custom-card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('')}
        </div>
    `;

    document.getElementById('about-block').innerHTML += code;
}

function serviceBlock() {
    let code = 
    `
        <h2>${service.headerBlock}</h2>
        <p>${service.descriptionBlock}</p>
        <div class="custom-grid">
        ${service.content.map(item => `
            <div class="custom-card">
            <img src="${item.urlImage}">
            <div class="custom-card-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">${item.price}</p>
                </div>
            </div>    
        `).join('')}
        </div>
    `;

    document.getElementById('service-block').innerHTML += code;
}

function portfolioBlock() {
    let code = 
    `
        <h2>${portfolio.headerBlock}</h2>
        <p>${portfolio.descriptionBlock}</p>
        <div class="custom-grid">
        ${portfolio.content.map(item => `
            <div class="custom-card">
                <img src="${item.urlImage}">
                <div class="custom-card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <button class="callback"><a href="${item.button.url}">${item.button.name}</a></button>
                </div>
            </div>
        `).join('')} </div>
    `;

    document.getElementById('portfolio-block').innerHTML += code;
}

function reviewBlock() {
    let code = `            
            <h2>${reviews.headerReviews}</h2>
            <div class="reviews-scrollable" id="reviews-block">
            ${reviews.content.map(item => `
                <div class="review-card">
                    <i class="fas fa-user"></i>
                    <h3>${item.username}</h3>
                    <h6>${item.project}</h6>
                    <p>${item.comment}</p>
                </div>    
            `).join('')} 
            </div>
    `;

    document.getElementById('reviews-block').innerHTML += code;
}

function socialLinksBlock() {
    const code =
    `
        <a href="${sociallinks.url_telegram}"><i class="fab fa-telegram"></i></a>
        <a href="${sociallinks.url_vk}"><i class="fab fa-vk"></i></a>
    `;

    document.getElementById('social-links').innerHTML += code;
}

function copyrightBlock() {
    const code = `<p>&copy; ${name_description.copyrightYears} ${name_description.nameSite}. Все права защищены.</p>`;
    document.getElementById('copyright-block').innerHTML += code;
}

window.onload = () => {
    headerBlock();
    promoblock();
    aboutblock();
    serviceBlock();
    portfolioBlock();
    reviewBlock();
    socialLinksBlock();
    copyrightBlock();
};