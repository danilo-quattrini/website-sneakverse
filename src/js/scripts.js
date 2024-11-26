const products = [
    { name: "Nike Air Max Tuned 1", price: "199,99€", image: "shoe1.webp", catogory: "populars" },
    { name: "Adidas Campus 00s", price: "120€", image: "shoe2.webp", catogory: "sales" },
    { name: "Nike Air Force 1 Low", price: "99,99€", image: "shoe3.webp", catogory: "news" },
    { name: "Adidas Samba OG", price: "90€", image: "shoe4.webp", catogory: "populars" },
    { name: "Nike Dunk Low", price: "95€", image: "shoe5.webp", catogory: "news" },
    { name: "Nike Dunk Low", price: "120€", image: "shoe6.webp", catogory: "sales" },
    { name: "Nike Air Force 1 Low", price: "95€", image: "shoe9.webp", catogory: "sales" },
    { name: "Nike Air Max Tuned 1", price: "179,99€", image: "shoe7.webp", catogory: "populars" },
    { name: "New Balance 530", price: "119,99€", image: "shoe8.webp", catogory: "news" },
    { name: "Nike Air Max Tuned 1 Utility", price: "199,99€", image: "shoe10.webp", catogory: "populars" },
];

function showProducts() {
    const containerPopular = document.getElementById('popular-products');
    const containerSales = document.getElementById('sale-products');
    const containserNews = document.getElementById('new-products');

    products.forEach(product => {
        const card = `
            <div class="products-card">
                <img src="assets/img//${product.image}" alt="${product.name}" class="products-images">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;

        if (product.catogory === "populars") {
            containerPopular.innerHTML += card;
        } else if (product.catogory === "sales") {
            containerSales.innerHTML += card;
        } else if (product.catogory === "news") {
            containserNews.innerHTML += card;
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
