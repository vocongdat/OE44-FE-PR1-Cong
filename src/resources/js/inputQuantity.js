import getParent from './getParent.js';
import { $, $$ } from './variables.js';
import { getDataLocal } from './getDataLocal.js';
import { handleCart } from './handleCart.js';

const handleCash = (elementProduct, valueQuantity) => {
    const cashElement = elementProduct.querySelector('.product-cash-total');
    const priceProductElement = elementProduct.querySelector('.product-price');
    const priceProduct = priceProductElement.getAttribute('data-price');
    const cashPrice = valueQuantity.value * priceProduct;
    cashElement.textContent = `${cashPrice}.000đ`;
};

const handleDeleteProduct = (paramElement) => {
    const dataLocalString = getDataLocal('productID');
    const idProductElement = paramElement.querySelector('.product--delete');
    idProductElement.addEventListener('click', () => {
        const idProduct = idProductElement.getAttribute('data-id');
        const id = dataLocalString.filter((product) => {
            return product.id != idProduct;
        });
        localStorage.setItem('productID', JSON.stringify(id));
        handleCart();
    });
};

const handleInputQuantity = () => {
    const inputQuantityElements = $$('.quantity--input');
    const quantityDesc = $$('.quantity--desc');
    const quantityEsc = $$('.quantity--esc');

    inputQuantityElements.forEach((element) => {
        element.onblur = () => {
            console.log(element.value);
        };
        element.onchange = () => {
            console.log(element.value);
        };
    });
    quantityDesc.forEach((descBtn) => {
        const parentProduct = getParent(descBtn, 'tr');
        descBtn.addEventListener('click', () => {
            const quantityInputElement =
                parentProduct.querySelector('.quantity--input');
            quantityInputElement.value++;
            handleCash(parentProduct, quantityInputElement);
        });
        handleDeleteProduct(parentProduct);
    });
    quantityEsc.forEach((escBtn) => {
        escBtn.addEventListener('click', () => {
            const parentProduct = getParent(escBtn, 'tr');
            const quantityInputElement =
                parentProduct.querySelector('.quantity--input');
            if (quantityInputElement.value > 0) {
                quantityInputElement.value--;
            }
            handleCash(parentProduct, quantityInputElement);
        });
    });
};

export default handleInputQuantity;
