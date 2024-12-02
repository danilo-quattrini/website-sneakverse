function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        price: params.get('price'),
        image: params.get('image'),
        brand: params.get('brand')
    };
}
export { getQueryParams };