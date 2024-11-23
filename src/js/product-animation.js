function changeImage(imageSrc){
    document.getElementById("mainImage").src = imageSrc;
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