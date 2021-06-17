import { getDataLocal } from './getDataLocal.js';

document.addEventListener('DOMContentLoaded', async () => {
    const e = getDataLocal('productID');
    const qtnElement = document.querySelector('.qnt');
    qtnElement.textContent = e.length;
});
