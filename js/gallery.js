document.addEventListener('DOMContentLoaded', () => {
    const sliderImage = document.getElementById('slider-image');
    const slideInfo = document.getElementById('slide-info');
    const slideDescription = document.getElementById('slide-description');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const images = [
        'images/sekiro1.jpg',
        'images/sekiro2.jpg',
        'images/sekiro3.jpg',
        'images/sekiro4.jpg',
        'images/sekiro5.jpg'
    ];

    const descriptions = [
        "крутой ниндзя",
        "крутой ниндзя и горящий замок",
        "как на гифке",
        "Секиро и Филин",
        "крутой ниндзя 911"
    ];

    let currentIndex = 0;

    function updateSlider() {
        sliderImage.classList.add('fade-out');
        setTimeout(() => {
            sliderImage.src = images[currentIndex];
            slideDescription.textContent = descriptions[currentIndex];
            sliderImage.classList.remove('fade-out');
            sliderImage.classList.add('fade-in');
            setTimeout(() => {
                sliderImage.classList.remove('fade-in');
            }, 500);
            slideInfo.textContent = `${currentIndex + 1} слайд из ${images.length}`;
        }, 500);
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    updateSlider();
})