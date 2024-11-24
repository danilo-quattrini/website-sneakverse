// Array of product objects with details like name, price, image, and category
const products = [
    { name: "Nike Air Max Tuned 1", price: "199,99€", images: "shoe1.webp", catogories: "populars" },
    { name: "Adidas Campus 00s", price: "120€", images: "shoe2.webp", catogories: "offerts" },
    { name: "Nike Air Force 1 Low", price: "99,99€", images: "ariForce1.webp", catogories: "news" },
    { name: "Adidas Samba OG", price: "90€", images: "adidasSamba.webp", catogories: "populars" },
    { name: "Nike Dunk Low", price: "95€", images: "shoe5.webp", catogories: "news" },
    { name: "Nike Dunk Low", price: "120€", images: "shoe6.webp", catogories: "offerts" },
    { name: "Nike Air Force 1 Low", price: "95€", images: "shoe9.webp", catogories: "offerts" },
    { name: "Nike Air Max Tuned 1", price: "179,99€", images: "shoe7.webp", catogories: "populars" },
    { name: "New Balance 530", price: "119,99€", images: "shoe8.webp", catogories: "news" },
    { name: "Nike Air Max Tuned 1 Utility", price: "199,99€", images: "shoe10.webp", catogories: "populars" },
];

// Function to display products on the index page
function showProducts() {
    // Get the containers for different product categories
    const PopularContent = document.getElementById('popular-products');
    const OffertContent = document.getElementById('sale-products');
    const NewsContent = document.getElementById('new-products');

    // Loop through each product and create a card for it
    products.forEach(products => {
        // HTML structure for a product card
        const card = `
            <div class="products-card">
                  <img src="assets/img/${products.images}" alt="${products.name}" class="products-images">
                  <h3>${products.name}</h3>
                  <p>${products.price}</p>
            </div>
        `;

        // Append the card to the appropriate container based on the product category
        if (products.catogories === "populars") {
            PopularContent.innerHTML += card;
        } else if (products.catogories === "offerts") {
            OffertContent.innerHTML += card;
        } else if (products.catogories === "news") {
            NewsContent.innerHTML += card;
        }
    });

    function openModal() {
        document.getElementById("shoeModal").style.display = "block";
    }
    
    function closeModal() {
        document.getElementById("shoeModal").style.display = "none";
    }
    
    function goToProduct() {
        // Aquí puedes redirigir a la página de la zapatilla
        alert("Redirecting to product page...");
    }
    
    // Agregar evento de clic a las zapatillas
    document.querySelectorAll('.producto-card').forEach(card => {
        card.addEventListener('click', openModal);
    });
    
}

// Call the function to display products when the page loads
showProducts();