// ===== MENU HAMBÚRGUER =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('open');
  });
});

// ===== HEADER COM SOMBRA AO ROLAR =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(201,168,76,0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ===== ANIMAÇÃO DE ENTRADA DOS ELEMENTOS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .depoimento, .sobre__texto, .contato__info')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

// ===== ANO DINÂMICO NO FOOTER =====
document.querySelector('.footer p').innerHTML =
  `© ${new Date().getFullYear()} BarberKing. Todos os direitos reservados.`;