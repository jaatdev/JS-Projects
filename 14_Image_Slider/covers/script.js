
    let currentSlide = 1;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderImage = document.getElementById('sliderImage');

    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));

    function changeSlide(direction) {
        currentSlide += direction;

        // Ensure the slide number is within the range of available images
        if (currentSlide < 1) {
            currentSlide = 10;
        } else if (currentSlide > 10) {
            currentSlide = 1;
        }

        // Update the image source
        sliderImage.src = `./${currentSlide}.jpg`;
    }
