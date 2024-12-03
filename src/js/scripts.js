const products = [
    { name: "Nike Air Max Tuned 1", price: "199,99$", image: "nike-airmaxtuned1-0.webp", category: "populars", brand: "Nike", type: "airmaxtuned1" },
    { name: "Adidas Campus 00s", price: "120$", image: "adidas-campus00s-0.webp", category: "sales", brand: "Adidas", type: "campus00s" },
    { name: "Nike Air Force 1 Low", price: "99,99$", image: "shoe3.webp", category: "news", brand: "Nike" },
    { name: "Adidas Samba OG", price: "90$", image: "adidas-sambaog-0.webp", category: "populars", brand: "Adidas", type: "sambaog" },
    { name: "Nike Dunk Low", price: "95$", image: "nike-dunklowchild-0.webp", category: "news", brand: "Nike", type: "dunklowchild" },
    { name: "Nike Dunk Low", price: "120$", image: "nike-dunklow-0.webp", category: "sales", brand: "Nike", type: "dunklow" },
    { name: "Nike Air Force 1 Low", price: "95$", image: "shoe9.webp", category: "sales", brand: "Nike" },
    { name: "Nike Air Max Tuned 1", price: "179,99$", image: "shoe7.webp", category: "populars", brand: "Nike" },
    { name: "New Balance 530", price: "119,99$", image: "shoe8.webp", category: "news", brand: "New Balance" },
    { name: "Nike Air Max Tuned 1 Utility", price: "199,99$", image: "shoe10.webp", category: "populars", brand: "Nike" },
];

function showProducts() {
    const containerPopular = document.getElementById('popular-products');
    const containerSales = document.getElementById('sale-products');
    const containerNews = document.getElementById('new-products');

    products.forEach(product => {
        // Created the link to connect the product card to the product view page with brand
        const card = `
            <div class="products-card">
                <a href="/src/pages/prodoucts-view.html?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&brand=${encodeURIComponent(product.brand)}&type=${encodeURIComponent(product.type)}" class="link-shoes">
                    <img src="/public/assets/img/${product.image}" alt="${product.name}" class="products-images">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </a>
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

    function openModal() {
        document.getElementById("shoeModal").style.display = "block";
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