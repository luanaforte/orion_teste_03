let menu = document.querySelector('nav ul');
let menuBar = document.querySelector('nav .menu-icon');
let iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', () => {

    if (iconMenu.getAttribute("src") == 'imagens/menu.png') {
        iconMenu.setAttribute("src","imagens/close.png");
    }else{
        iconMenu.setAttribute("src","imagens/menu.png");
    }

   menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('active');
    });
});