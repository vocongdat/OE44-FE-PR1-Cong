const quantityElement = $('.added');

const buyNowButtonElement = $('.btn__buy-now');

buyNowButtonElement.onclick = () => {
    const quantityProduct = quantityElement.textContent;
    localStorage.setItem('qnt', quantityProduct);
};

const productID = [];

const handleAddToCart = (id) => {
    const isHasID = productID.find((idProduct) => idProduct.id === id);
    if (!isHasID) {
        productID.push({ id: id, quantity: 1 });
    } else {
        isHasID.quantity = isHasID.quantity + 1;
    }
    alert('Bạn đã thêm sản phẩm vào giỏ hàng');
    localStorage.setItem('productID', JSON.stringify(productID));
};
