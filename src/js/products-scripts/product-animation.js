let currentImageSrc = "assets/img/shoe1.webp"; // Track currently displayed image

function changeImage(imageSrc, direction) {
    if (currentImageSrc === imageSrc) return; // Prevent redundant clicks

    const mainImage = document.getElementById("mainImage");
    const imageSlider = mainImage.parentElement;

    // Clone the current image for smooth transition
    const newImage = mainImage.cloneNode(true);
    newImage.src = imageSrc;

    // Insert the new image based on the direction
    if (direction === "left") {
        imageSlider.insertBefore(newImage, mainImage); // Insert before for left transition
        imageSlider.style.transform = "translateX(-100%)"; // Slide left
    } else {
        imageSlider.appendChild(newImage); // Insert after for right transition
        imageSlider.style.transform = "translateX(100%)"; // Slide right
    }

    setTimeout(() => {
        imageSlider.style.transition = "transform 0.5s ease-in-out";
        imageSlider.style.transform = "translateX(0)"; // Slide into view
    }, 10);

    // Update the current image source and remove the old image after transition
    setTimeout(() => {
        currentImageSrc = imageSrc;
        mainImage.remove(); // Remove old image
        imageSlider.style.transition = "none"; // Reset transition
    }, 500);
}

// Handle thumbnail clicks and highlight selected one
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        const imageSrc = thumbnail.getAttribute('data-image');

        // Determine slide direction based on the index
        const currentIndex = Array.from(thumbnails).findIndex(el => el.classList.contains('selected'));
        const direction = index < currentIndex ? "left" : "right";

        // Change the main image
        changeImage(imageSrc, direction);

        // Update the selected thumbnail
        thumbnails.forEach(tn => tn.classList.remove('selected'));
        thumbnail.classList.add('selected');
    });
});