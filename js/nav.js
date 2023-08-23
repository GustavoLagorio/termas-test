const navMenu = document.querySelector('.nav_menu');
const navToggle = document.getElementById('nav_toggle');

navToggle.addEventListener('click', () => {
    
    navMenu.classList.toggle('activo');
})