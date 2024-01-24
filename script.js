function login() {
    window.location.href = "login.html";
}
function homePage() {
    window.location.href = "homepage.html";
}
const carouselInner = document.querySelector('.carousel-inner');
const carouselSlides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        index = carouselSlides.length - 1;
    } else if (index >= carouselSlides.length) {
        index = 0;
    }

    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

setInterval(nextSlide, 3000);

showSlide(currentIndex);
