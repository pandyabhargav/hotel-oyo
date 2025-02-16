// loading footer 


// // Mobile Menu Functionality
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-closed');
    mobileMenu.classList.add('menu-open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-open');
    mobileMenu.classList.add('menu-closed');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close menu when clicking navigation links
const navLinks = document.querySelectorAll('#mobileMenu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open');
        mobileMenu.classList.add('menu-closed');
        document.body.style.overflow = ''; // Restore scrolling
    });
});

