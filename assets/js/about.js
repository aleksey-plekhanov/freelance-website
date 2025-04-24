const aboutBlock = {
    "headerBlock": "Почему именно мы?",
    "descriptionBlock": "Проводим причины почему необходимо заказывать у нас!!",
    "content":[
        {
            "name" : "Веб-разработка",
            "urlImage": "./assets/img/service1.jpg",
            "description": "Создание современных и функциональных веб-сайтов!"
        },
        {
            "name" : "Мобильная разработка",
            "urlImage": "./assets/img/service2.jpg",
            "description": "Разработка мобильных приложений для iOS и Android!"
        },
        {
            "name" : "SEO-оптимизация",
            "urlImage": "./assets/img/service3.jpg",
            "description": "Оптимизация сайтов для повышения видимости в поисковых системах!"
        },
        {
            "name" : "Дизайн",
            "urlImage": "./assets/img/service4.jpg",
            "description": "Создание уникального и привлекательного дизайна для вашего сайта!"
        }
    ]
};

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

window.onload += aboutBlock();