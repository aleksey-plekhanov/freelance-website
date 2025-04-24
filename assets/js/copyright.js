function copyrightBlock() {
    const code = `<p>&copy; ${window.name_description.copyrightYears} ${window.name_description.nameSite}. Все права защищены.</p>`;
    document.getElementById('copyright-block').innerHTML += code;
}

window.onload += copyrightBlock();