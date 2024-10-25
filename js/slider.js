let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function prevSlide() {
    slideIndex -= 2; // Move back 2 steps to show the previous image
    if (slideIndex < 0) slideIndex = 0;
    showSlides();
}

function nextSlide() {
    showSlides(); // Move to the next image
}

window.onload = showSlides;
