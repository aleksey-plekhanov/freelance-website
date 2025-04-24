function promoBlock() {
    const code = 
    `
        <h1 class="promo-block-title">${window.name_description.nameSite}</h1>
        <p class="promo-block-text">${window.name_description.descriptionSite}</p>
    `;

    document.getElementById('promo-block').innerHTML += code;
}

window.onload += promoBlock();