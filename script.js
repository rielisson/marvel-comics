let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }

    const newTransform = -currentIndex * 25; // 25% para cada slide
    document.querySelector('.carousel').style.transform = `translateX(${newTransform}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index - 1);
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);
