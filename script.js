const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

let index = 0;

// Calcula a largura total dos itens
const itemWidth = carouselItems[0].clientWidth;
const totalItems = carouselItems.length;

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = totalItems - 1; 
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (index < totalItems - 1) {
        index++;
    } else {
        index = 0; 
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -index * (itemWidth + 30);
    carousel.style.transform = `translateX(${offset}px)`;
}
