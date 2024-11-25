let currentImageSrc = ""; // Tracks the currently displayed image
function changeImage(imageSrc, direction){
    const mainImage = document.getElementById("mainImage");
    // Avoid triggering the animation if the same image is clicked
    if (currentImageSrc === imageSrc) {
        return;
    }
    currentImageSrc = imageSrc; // Update the current image source

    // Direction of movement (left or right)
    const translateX = direction === "left" ? "-100%" : "100%";

    // Animate the image exiting
    mainImage.style.transform = `translateX(${translateX})`;
    mainImage.style.opacity = "0"; // Fade out for smoothness

    // Wait for the exit animation to finish
    setTimeout(() => {
        mainImage.src = imageSrc; // Change the image source

        // Reset the position and fade-in the new image
        mainImage.style.transition = "none"; // Temporarily disable transition
        mainImage.style.transform = direction === "left" ? "100%" : "-100%"; // Reset offscreen position
        mainImage.style.opacity = "0"; // Keep it invisible

        // Enable transition again and bring the image back smoothly
        setTimeout(() => {
            mainImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            mainImage.style.transform = "translateX(0)";
            mainImage.style.opacity = "1"; // Fade in
        }, 10); // Small delay to ensure reset applies
    }, 500); // Matches the duration of the exit animation
}

// Get all size-option buttons
const sizeButtons = document.querySelectorAll('.size-option');

// Add click event to each button to manage selection
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        // Add 'selected' class to clicked button
        button.classList.add('selected');
    });
});