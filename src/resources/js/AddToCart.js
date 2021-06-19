const addToCart = (id) => {
    const dataLocal = localStorage.getItem('productID');
    const productID = JSON.parse(dataLocal) || [];
    const isHasID = productID.find((idProduct) => idProduct.id === id);
    const quantityElement = document.querySelector('.quantity--input');

    if (!isHasID) {
        productID.push({ id: id, quantity: 1 });
    } else {
        if (quantityElement) {
            isHasID.quantity =
                Number(isHasID.quantity) + Number(quantityElement.value);
            location.assign('./cart.html');
        } else {
            isHasID.quantity = isHasID.quantity + 1;
        }
    }
    localStorage.setItem('productID', JSON.stringify(productID));
};
