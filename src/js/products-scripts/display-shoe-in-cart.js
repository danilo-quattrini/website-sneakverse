function displayShoeInCart(){
    const img = document.getElementById('mainImage').src;
    const name = document.querySelector('.product-name').textContent;
    const priceElement = document.querySelector('.new-price') || document.querySelector('.product-price');
    const price = priceElement.textContent

    // Save values to localStorage
    localStorage.setItem('cartImage', img);
    localStorage.setItem('cartName', name);
    localStorage.setItem('cartPrice', price);
    // Redirect to cart.html
    window.location.href = "cart.html";
}