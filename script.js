const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-item a');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  nav.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);  

    const targetElement = document.getElementById(targetId);

    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'  

    });

    // Feche o menu após o clique
    menuButton.classList.remove('active');
    nav.classList.remove('active');
  });
});
