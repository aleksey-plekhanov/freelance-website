function headerBlock() {
    const code = `<a href="#" class="navbar-brand" ><i class="${window.name_description.iconSite}"></i>${window.name_description.nameSite}</a>`;
    document.getElementById('header-block').innerHTML += code;
}

window.onload += headerBlock();