import getParent from './getParent.js';

const inputNumber = () => {
    const inputQuantityElements = document.querySelectorAll('.quantity--input');
    const quantityDesc = document.querySelectorAll('.quantity--desc');
    const quantityEsc = document.querySelectorAll('.quantity--esc');

    inputQuantityElements.forEach((element) => {
        element.onblur = () => {
            console.log(element.value);
        };
        element.addEventListener('change', () => {
            console.log(element.value);
        });
    });
    quantityDesc.forEach((descBtn) => {
        descBtn.addEventListener('click', () => {
            const parentProduct = getParent(descBtn, 'tr');
            const quantityInputElement =
                parentProduct.querySelector('.quantity--input');
            quantityInputElement.value++;
        });
    });
    quantityEsc.forEach((descBtn) => {
        descBtn.addEventListener('click', () => {
            const parentProduct = getParent(descBtn, 'tr');
            const quantityInputElement =
                parentProduct.querySelector('.quantity--input');
            if (quantityInputElement.value > 0) {
                quantityInputElement.value--;
            }
        });
    });
};

export default inputNumber;
