// --- Terminal Typing Effect ---
// Words reflect a developer's environment
const words = ["Machine Learning Models", "REST APIs in Django", "React Interfaces", "Optimized Algorithms"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 2000;

function typeEffect() {
    const currentWord = words[wordIndex];
    const typingElement = document.getElementById('typing-text');
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let timeoutSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        timeoutSpeed = delayBetweenWords;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeoutSpeed = 500;
    }

    setTimeout(typeEffect, timeoutSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);

// --- Mobile Navigation ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

// --- Hacker Mode Theme Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('hacker-theme');
    
    const icon = themeToggleBtn.querySelector('i');
    const textSpan = themeToggleBtn.querySelector('span');
    
    if (document.body.classList.contains('hacker-theme')) {
        icon.className = 'fas fa-code';
        textSpan.textContent = 'GUI Mode';
    } else {
        icon.className = 'fas fa-terminal';
        textSpan.textContent = 'Hacker Mode';
    }
});

// --- Mock API Contact Form Alert ---
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('200 OK: Payload received. Manish will review your code/message shortly.');
        contactForm.reset();
    });
}

// --- Scroll Animation for Code Cards ---
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .timeline-content');
    
    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${(index % 3) * 0.15}s`;
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(el => animateOnScroll.observe(el));
});