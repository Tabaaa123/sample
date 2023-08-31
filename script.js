onst carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".carousel-slide");

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100; // 100% per slide
    carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 5000); // Change slide every 3 seconds