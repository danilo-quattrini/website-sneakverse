
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        price: params.get('price'),
        image: params.get('image'),
        brand: params.get('brand'),
        type: params.get('type')
    };
}

function updateProductDetails() {
    const { name, price, image, brand, type } = getQueryParams();

    // If all parameters are provided, update the page content
    if (name && price && image && brand) {
        document.querySelector('.product-name').textContent = name;
        document.querySelector('.product-price').textContent = price;
        // Set the product name as the page title
        document.title = name;
        // Set main product image based on brand and image name
        document.getElementById('mainImage').src = `/public/assets/img/${brand.toLowerCase()}/${image}`;
        document.getElementById('mainImage').alt = name;

        // Clear existing thumbnails
        const thumbnailContainer = document.querySelector('.thumbnail-container');
        thumbnailContainer.innerHTML = '';

        // Array of image filenames
        const imageFiles = [
            `${brand.toLowerCase()}-${type}-0.webp`,
            `${brand.toLowerCase()}-${type}-1.webp`,
            `${brand.toLowerCase()}-${type}-2.webp`,
            `${brand.toLowerCase()}-${type}-3.webp`,
            `${brand.toLowerCase()}-${type}-4.webp`
        ];

        // Dynamically generate thumbnail images (assuming 5 images per product)
        imageFiles.forEach((file, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = `/public/assets/img/${brand.toLowerCase()}/${file}`;
            thumbnail.alt = `Shoe Image ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            thumbnail.dataset.image = thumbnail.src;

            if (index === 0) {
                thumbnail.classList.add('active-thumbnail');
                document.getElementById('mainImage').src = thumbnail.src;
            }

            thumbnailContainer.appendChild(thumbnail);

            thumbnail.addEventListener('click', function () {
                changeMainImage(thumbnail.dataset.image, thumbnail);
            });
        });
    }
}
function changeMainImage(newImageSrc, thumbnail) {
    const mainImage = document.getElementById('mainImage');
    const currentImageSrc = mainImage.src;

    // Determine the direction of the animation based on the image change
    const direction = newImageSrc > currentImageSrc ? 'left' : 'right';

    // Animate main image sliding out and the new image sliding in
    animateImageSlide(mainImage, newImageSrc, direction);

    // Update the active thumbnail
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active-thumbnail'));
    thumbnail.classList.add('active-thumbnail');
}

function animateImageSlide(mainImage, newImageSrc, direction) {
    const container = mainImage.parentElement;

    // Set up initial styles for sliding animation
    container.style.position = 'relative';
    mainImage.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    mainImage.style.transform = direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
    mainImage.style.opacity = '0';
    // Wait for the sliding out animation to finish, then change the image
    setTimeout(() => {
        mainImage.src = newImageSrc;
        mainImage.style.transition = 'none';
        mainImage.style.transform = direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)';

        // Allow a brief delay to ensure image is updated before sliding in
        setTimeout(() => {
            mainImage.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            mainImage.style.transform = 'translateX(0)';
            mainImage.style.opacity = '1';
        }, 50);
    }, 500);
}
document.addEventListener('DOMContentLoaded', updateProductDetails);