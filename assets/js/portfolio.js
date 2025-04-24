const portfolio = {
    "headerBlock": "Портфолио",
    "descriptionBlock": "Наше портфолио включает успешные проекты для клиентов из различных отраслей. Мы гордимся каждым выполненным заказом и стремимся к постоянному совершенствованию.",
    "content":[
        {
            "name" : "Проект для компании XYZ",
            "urlImage": "./assets/img/service1.jpg",
            "description": "Создание корпоративного сайта для компании XYZ.",
            "button": {
                "name": "Подробнее",
                "url": "https://example.com/project1",
            }
        },
        {
            "name" : "Мобильное приложение ABC",
            "urlImage": "./assets/img/service2.jpg",
            "description": "Разработка мобильного приложения для ABC.",
            "button": {
                "name": "Подробнее",
                "url": "https://example.com/project2",
            }
        },
        {
            "name" : "SEO-оптимизация для сайта DEF",
            "urlImage": "./assets/img/service3.jpg",
            "description": "Оптимизация сайта DEF для повышения трафика.",
            "button": {
                "name": "Подробнее",
                "url": "https://example.com/project3",
            }
        },
        {
            "name" : "Дизайн для GHI",
            "urlImage": "./assets/img/service4.jpg",
            "description": "Создание дизайна для сайта GHI.",
            "button": {
                "name": "Подробнее",
                "url": "https://example.com/project4",
            }
        }
    ]
};

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

window.onload += portfolioBlock();