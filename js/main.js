/* Menu Hamburger */
(function() {
  const menuBtn = document.querySelector('.header-nav__btn');
  const menu = document.querySelector('.header-nav');
  const links = document.querySelectorAll('.main-nav__link');
  const active = 'header-nav_active';

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle(active);
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.toggle(active);
    })
  });
}());

/* Anchor Smooth Scroll's Animation */
(function () {
  document.querySelectorAll('[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const link = document.querySelector(this.getAttribute('href'));
      console.log(link);
      link.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}());