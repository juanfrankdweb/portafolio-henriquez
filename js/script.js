// Seleccionar el header
const header = document.querySelector('.header');

// Obtener la posición inicial del header
const stickyOffset = header.offsetTop;

// Añadir un evento al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > stickyOffset) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
