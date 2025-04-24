const sociallinks = {
    "url_vk": "https://vk.com/example",
    "url_telegram": "https://t.me/example"
};

function socialLinksBlock() {
    const code =
    `
        <a href="${sociallinks.url_telegram}"><i class="fab fa-telegram"></i></a>
        <a href="${sociallinks.url_vk}"><i class="fab fa-vk"></i></a>
    `;

    document.getElementById('social-links').innerHTML += code;
}

window.onload += socialLinksBlock();