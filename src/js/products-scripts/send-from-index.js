
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        price: params.get('price'),
        image: params.get('image'),
        brand: params.get('brand'),
        type: params.get('type'),
        oldPrice: params.get('oldPrice')
    };
}

function updateProductDetails() {
    const { name, price, image, brand, type, oldPrice } = getQueryParams();

    // If all parameters are provided, update the page content
    if (name && price && image && brand) {
        document.querySelector('.product-name').textContent = name;

        // Check if oldPrice exists to show discounted price
        const priceElement = document.querySelector('.product-price');
        if (oldPrice) {
            priceElement.innerHTML = `
                <span class="old-price" style="color: #999; text-decoration: line-through;">${oldPrice}</span>
                <span class="new-price" style="font-size: 2rem; margin-left: 0.5rem; color: #ff9900; font-weight: bold;">${price}</span>
            `;
        } else {
            priceElement.textContent = price;
        }

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

// Function to navigate to the next or previous image with the buttons
function navigateMainImage(direction) {
    const activeThumbnail = document.querySelector('.thumbnail.active-thumbnail');
    const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
    const activeIndex = thumbnails.indexOf(activeThumbnail);
    let newIndex;

    if (direction === 'left') {
        newIndex = activeIndex === 0 ? thumbnails.length - 1 : activeIndex - 1; // Loop to last image
    } else if (direction === 'right') {
        newIndex = activeIndex === thumbnails.length - 1 ? 0 : activeIndex + 1; // Loop to first image
    }

    const newThumbnail = thumbnails[newIndex];
    const newImageSrc = newThumbnail.dataset.image;

    changeMainImage(newImageSrc, newThumbnail);
}

document.addEventListener('DOMContentLoaded', () => {
    updateProductDetails();
    // Add event listeners for navigation buttons
    document.querySelector('.prev-btn').addEventListener('click', () => navigateMainImage('left'));
    document.querySelector('.next-btn').addEventListener('click', () => navigateMainImage('right'));

});
