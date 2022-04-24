window.onload = function () {
    let menuBtn = document.querySelector('[data-menu-btn]');
    let menu = document.querySelector('[data-menu]');
    let menuIcon = document.querySelector('[data-menu-icon]');


    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
}