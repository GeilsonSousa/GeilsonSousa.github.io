// Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        menuIcon.src = 'assets/icons/close.svg';
    } else {
        menuIcon.src = 'assets/icons/menu.svg';
    }
});

// Efeito Typewriter
const typewriter = document.getElementById('typewriter');
const texts = ['Geilson Sousa', 'QA Engineer'];
let count = 0;
let index = 0;
let currentText = '';
let isDeleting = false;

function type() {
    currentText = texts[count];
    if (isDeleting) {
        typewriter.textContent = currentText.substring(0, index - 1);
        index--;
    } else {
        typewriter.textContent = currentText.substring(0, index + 1);
        index++;
    }

    if (!isDeleting && index === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 150);
    }
}

type();

// Scroll Animation
const sections = document.querySelectorAll('.section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Executa ao carregar a página

// Carrossel de Certificados
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Event listeners para os botões
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Mostrar a primeira imagem ao carregar
showImage(currentIndex);

// Scroll suave para links internos