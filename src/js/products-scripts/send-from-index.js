function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        price: params.get('price'),
        image: params.get('image'),
        brand: params.get('brand')
    };
}

function updateProductDetails() {
    const { name, price, image, brand } = getQueryParams();

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
            `${brand.toLowerCase()}-0.webp`,
            `${brand.toLowerCase()}-1.webp`,
            `${brand.toLowerCase()}-2.webp`,
            `${brand.toLowerCase()}-3.webp`,
            `${brand.toLowerCase()}-4.webp`
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
                document.getElementById('mainImage').src = thumbnail.dataset.image;
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active-thumbnail'));
                thumbnail.classList.add('active-thumbnail');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', updateProductDetails);