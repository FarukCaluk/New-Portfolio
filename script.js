let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  // Menja izgled ikone
    navbar.classList.toggle('active');  // Otvara/zatvara navbar
};

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`)?.classList.add('active');
            });
        }
    });

    // ❗ Automatski zatvori meni kada korisnik skroluje
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
