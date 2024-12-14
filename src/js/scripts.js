const products = [
    { name: "Nike Air Max Tuned 1", price: "199,99€", image: "nike-airmaxtuned1-0.webp", category: "populars", video: "shoevideo1.mp4" },
    { name: "Adidas Campus 00s", price: "120€", image: "adidas-campus00s-0.webp", category: "sales", video: "shoevideo2.mp4" },
    { name: "Nike Air Force 1 Low", price: "99,99€", image: "shoe3.webp", category: "news", video: "shoevideo3.mp4" },
    { name: "Adidas Samba OG", price: "90€", image: "adidas-sambaog-0.webp", category: "populars", video: "shoevideo4.mp4" },
    { name: "Nike Dunk Low", price: "95€", image: "nike-dunklow-0.webp", category: "news", video: "shoevideo5.mp4" },
    { name: "Nike Dunk Low", price: "120€", image: "nike-dunklowchild-0.webp", category: "sales", video: "shoevideo6.mp4" },
    { name: "Nike Air Force 1 Low", price: "95€", image: "shoe9.webp", category: "sales", video: "shoevideo7.mp4" },
    { name: "Nike Air Max Tuned 1", price: "179,99€", image: "shoe7.webp", category: "populars", video: "shoevideo8.mp4" },
    { name: "New Balance 530", price: "119,99€", image: "shoe8.webp", category: "news", video: "shoevideo9.mp4" },
    { name: "Nike Air Max Tuned 1 Utility", price: "199,99€", image: "shoe10.webp", category: "populars", video: "shoevideo10.mp4" },
];

function showProducts() {
    const containerPopular = document.getElementById('popular-products');
    const containerSales = document.getElementById('sale-products');
    const containerNews = document.getElementById('new-products');

    products.forEach(product => {
        const card = `
            <div class="products-card" data-video="${product.video}">
                <img src="assets/img/${product.image}" alt="${product.name}" class="products-images">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;

        if (product.category === "populars") {
            containerPopular.innerHTML += card;
        } else if (product.category === "sales") {
            containerSales.innerHTML += card;
        } else if (product.category === "news") {
            containerNews.innerHTML += card;
        }
    });

    function openModal(event) {
        const videoSource = event.currentTarget.getAttribute('data-video');
        const modalVideo = document.querySelector('.modal-video source');
        modalVideo.src = `assets/img/${videoSource}`;
        document.getElementById("shoeModal").style.display = "block";
        document.querySelector('.modal-video').load(); // Cargar el nuevo video
    }

    function closeModal() {
        document.getElementById("shoeModal").style.display = "none";
    }
    
    function goToProduct() {
        alert("Redirecting to product page...");
    }

    document.querySelectorAll('.products-card').forEach(card => {
        card.addEventListener('click', openModal);
    });
}

showProducts();