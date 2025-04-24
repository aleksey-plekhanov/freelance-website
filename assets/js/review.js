const reviews = {
    "headerReviews": "Отзывы наших клиентов",
    "content":[
        {
            "username": "Плеханов Алексей",
            "project": "Проект №123",
            "comment": "Все четко! Очень доволен результатом."
        },
        {
            "username": "Иванова Мария",
            "project": "Проект №456",
            "comment": "Отличная работа, все сделано в срок!"
        },
        {
            "username": "Сидоров Сергей",
            "project": "Проект №789",
            "comment": "Профессиональный подход и качественный результат."
        },
        {
            "username": "Кузнецова Анна",
            "project": "Проект №101",
            "comment": "Рекомендую! Очень довольна сотрудничеством."
        },
        {
            "username": "Тимофеев Алексей",
            "project": "Проект №202",
            "comment": "Все сделано на высшем уровне!"
        },
        {
            "username": "Смирнова Ольга",
            "project": "Проект №303",
            "comment": "Команда профессионалов, с удовольствием работаем дальше."
        },
        {
            "username": "Петров Николай",
            "project": "Проект №404",
            "comment": "Отличный сервис и качество работы!"
        },
    ]
};

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

window.onload += reviewBlock();

