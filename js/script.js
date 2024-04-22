/* Hiển thị hình ảnh khi chuột vào khu vực */
const mouseArea = document.getElementById('mouseArea');
const followImage = document.getElementById('followImage');
mouseArea.addEventListener('mouseenter', function () {
    followImage.style.display = 'block';
    followImage.style.transform = 'scale(1.1)'; // Hiệu ứng lắc qua lắc lại
    followImage.style.opacity = '1'; // Làm hình ảnh trở nên rõ hơn
});

mouseArea.addEventListener('mousemove', function (e) {
    followImage.style.left = e.clientX + 'px';
    followImage.style.top = e.clientY + 'px';
});

mouseArea.addEventListener('mouseleave', function () {
    followImage.style.transform = 'scale(1)'; // Khôi phục kích thước ban đầu
    followImage.style.opacity = '0.5'; // Làm mờ hình ảnh lại
    setTimeout(() => {
        followImage.style.display = 'none'; // Ẩn hình ảnh sau khi hoàn thành transition
    }, 1000);
});

/*Image slider */
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const originalSlides = document.querySelectorAll('.slider img');
    const totalWidth = originalSlides[0].clientWidth * originalSlides.length;
    let offset = 0;

    // Clone all slides and append them to the slider to create an infinite loop effect
    originalSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
    });

    const allSlides = document.querySelectorAll('.slider img'); // Re-select to include clones

    function moveSlides() {
        offset -= 2; // Change the speed of the slider here
        if (offset < -totalWidth) {
            // When the end of the original set is reached, reset to the beginning
            offset = 0;
            slider.style.transition = 'none'; // Disable the transition to avoid a visible jump
            slider.style.transform = `translateX(${offset}px)`;

            // Use a timeout to allow the transition to be re-enabled after the transform has taken place
            setTimeout(() => {
                slider.style.transition = 'transform 0s ease'; // Re-enable the transition
            }, 50);
        } else {
            slider.style.transform = `translateX(${offset}px)`;
        }
        requestAnimationFrame(moveSlides); // Continuously call moveSlides to keep sliding
    }

    moveSlides();
});