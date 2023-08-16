const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Menutup burger menu ketika salah satu link di dalamnya diklik
navLinks.addEventListener('click', () => {
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
});
