window.name_description = {
    "nameSite": "APLEKHANOV",
    "iconSite": "fa fa-code",
    "descriptionSite": "Бюджетно и качественно! ✨",
    "copyrightYears": "2025",
};

const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    const navbarMenu = document.getElementById('navbar-menu');
    navbarMenu.classList.toggle('active');
});