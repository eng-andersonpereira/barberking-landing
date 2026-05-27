const hamburguer = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
});


navMenu.querySelectorAll('a').forEach(n => n.addEventListener('click', () => {navMenu.classList.remove('active');
}));