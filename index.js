document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById('carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function moveSlide(direction) {
        if (!carousel) return;
        const scrollAmount = 220; // Adjust scroll amount
        carousel.scrollLeft += direction * scrollAmount;
        updateButtons();
    }

    function updateButtons() {
        if (!prevButton || !nextButton || !carousel) return;

        prevButton.style.display = carousel.scrollLeft > 0 ? 'block' : 'none';
        nextButton.style.display = carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth ? 'block' : 'none';
    }

    updateButtons();
    carousel.addEventListener('scroll', updateButtons);

    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));
});