// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu li a');
const closeMenu = document.querySelector('.close-menu');

// Function to close menu
function closeNavMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Function to open menu
function openNavMenu() {
    hamburger.classList.add('active');
    navMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
}

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        closeNavMenu();
    } else {
        openNavMenu();
    }
});

// Close menu when clicking close button
closeMenu.addEventListener('click', closeNavMenu);

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', closeNavMenu);
});

// Close menu when clicking outside (only on mobile)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
            closeNavMenu();
        }
    }
});

// Close menu on window resize if it becomes desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        closeNavMenu();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});