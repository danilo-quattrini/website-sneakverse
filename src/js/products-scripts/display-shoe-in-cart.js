function displayShoeInCart(){
    const img = document.getElementById('mainImage').src;
    const name = document.querySelector('.product-name').textContent;
    const price = document.querySelector('.product-price').textContent;

    // Save values to localStorage
    localStorage.setItem('cartImage', img);
    localStorage.setItem('cartName', name);
    localStorage.setItem('cartPrice', price);

    // Redirect to cart.html
    window.location.href = "cart.html";
}