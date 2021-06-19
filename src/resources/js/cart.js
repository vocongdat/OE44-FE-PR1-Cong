import { getDataLocal } from './getDataLocal.js';
import inputNumber from './inputQuantity.js';
import { getAllProducts } from './API/productsApi.js';

document.addEventListener('DOMContentLoaded', async () => {
    const dataProducts = await getAllProducts();
    const productsList = dataProducts.body;
    const objectProductCart = getDataLocal('productID');

    const cancelCartElementBtn = document.querySelector('.btn--cancel');
    const tableCart = document.querySelector('.cart__table');
    const bodyCartTable = tableCart.querySelector('tbody');
    let html = '';

    cancelCartElementBtn.addEventListener('click', () => {
        localStorage.clear();
    });

    if (objectProductCart) {
        let array = [];
        for (let product of objectProductCart) {
            const itemProduct = productsList.map((element) => {
                if (element.id === product.id) {
                    const totalCash = product.quantity * element.price;
                    console.log(String(totalCash).split(''));
                    html = `
                        <tr class="cart--wrap">
                            <th class="cart__body-img" scope="col" data-label="${element.name}">
                                <a href="/products-detail.html?id=${product.id}">
                                    <img
                                        class="cart__img"
                                        src="./assets/img/product/${element.thumbnailUrl}"
                                        alt="${element.name}"
                                /></a>
                            </th>
                            <td class="cart__name" data-label="Tên sản phẩm">
                                <a href="/products-detail.html?id=${product.id}">${element.name}</a>
                            </td>
                            <td data-label="Đơn giá">${element.price}.000 đ</td>
                            <td class="quantity" data-label="Số lượng">
                                <span class="quantity--esc id="${product.id}"><i class="fas fa-minus"></i></span>
                                <input class="quantity--input" type="number" min="1" max=${element.quantity} value="${product.quantity}">
                                <span class="quantity--desc id="${product.id}"><i class="fas fa-plus"></i></span>
                            </td>
                            <td data-label="Thành tiền">${totalCash}.000 đ</td>
                            <td data-label="${product.id}" class="product--delete">
                                <i class="fas fa-trash-alt cart__icon--trash"></i>
                            </td>
                        </tr>
                        `;
                    array.push(html);
                }
            });
            bodyCartTable.innerHTML = array.join('');
            inputNumber();
        }
    } else {
        html = 'Giỏ hàng trống';
        bodyCartTable.innerHTML = html;
    }
});
