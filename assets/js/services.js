const service = {
    "headerBlock": "Наши услуги",
    "descriptionBlock": "Наше портфолио включает успешные проекты для клиентов из различных отраслей. Мы гордимся каждым выполненным заказом и стремимся к постоянному совершенствованию.",
    "content":[
        {
            "name" : "Веб-разработка",
            "urlImage": "./assets/img/service1.jpg",
            "description": "Создание современных и функциональных веб-сайтов!",
            "price": "от 10000 ₽"
        },
        {
            "name" : "Мобильная разработка",
            "urlImage": "./assets/img/service2.jpg",
            "description": "Разработка мобильных приложений для iOS и Android!",
            "price": "от 15000 ₽"
        },
        {
            "name" : "SEO-оптимизация",
            "urlImage": "./assets/img/service3.jpg",
            "description": "Оптимизация сайтов для повышения видимости в поисковых системах!",
            "price": "от 8000 ₽"
        },
        {
            "name" : "Дизайн",
            "urlImage": "./assets/img/service4.jpg",
            "description": "Создание уникального и привлекательного дизайна для вашего сайта!",
            "price": "от 12000 ₽"
        }
    ]
};

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

window.onload += serviceBlock();