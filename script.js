document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.gallery-category');
    
    categories.forEach(category => {
        const slider = category.querySelector('.slider');
        const slides = category.querySelectorAll('.slide');
        let currentSlide = 0;

        const prevButton = category.querySelector('.prev');
        const nextButton = category.querySelector('.next');

        const updateButtons = () => {
            prevButton.style.display = slides.length > 1 ? 'block' : 'none';
            nextButton.style.display = slides.length > 1 ? 'block' : 'none';
        };

        prevButton.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
            } else {
                currentSlide = slides.length - 1;
            }
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateButtons();
        });

        nextButton.addEventListener('click', () => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateButtons();
        });

        updateButtons();
    });
});

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
