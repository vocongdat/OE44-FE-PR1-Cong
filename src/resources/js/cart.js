import { getDataLocal } from './getDataLocal.js';
import API from './variables.js';
import inputNumber from './cartAnimation.js';

document.addEventListener('DOMContentLoaded', async () => {
    const cancelCartElementBtn = document.querySelector('.btn--cancel');

    cancelCartElementBtn.addEventListener('click', () => {
        localStorage.clear();
    });

    const getProducts = (callback) => {
        fetch(API + 'products')
            .then((res) => res.json())
            .then(callback)
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    const objectProductCart = getDataLocal('productID');
    const tableCart = document.querySelector('.cart__table');
    const bodyCartTable = tableCart.querySelector('tbody');
    let html = '';
    if (objectProductCart) {
        const handleShowProductAddToCart = (products) => {
            const productsList = products.body;
            let array = [];
            for (let product of objectProductCart) {
                const itemProduct = productsList.map((element) => {
                    if (element.id === product.id) {
                        html = `
                            <tr class="cart--wrap">
                                <th class="cart__body-img" scope="col" data-label="${
                                    element.name
                                }">
                                    <a href="/products-detail.html?id=${
                                        product.id
                                    }">
                                        <img
                                            class="cart__img"
                                            src="./assets/img/product/${
                                                element.thumbnailUrl
                                            }"
                                            alt="${element.name}"
                                    /></a>
                                </th>
                                <td class="cart__name" data-label="Tên sản phẩm">
                                    <a href="/products-detail.html?id=${
                                        product.id
                                    }">${element.name}</a>
                                </td>
                                <td data-label="Đơn giá">${
                                    element.price
                                }.000 đ</td>
                                <td class="quantity" data-label="Số lượng">
                                    <span class="quantity--esc id="${
                                        product.id
                                    }"><i class="fas fa-minus"></i></span>
                                    <input class="quantity--input" type="number" min="1" max=${
                                        element.quantity
                                    } value="${product.quantity}">
                                    <span class="quantity--desc id="${
                                        product.id
                                    }"><i class="fas fa-plus"></i></span>
                                </td>
                                <td data-label="Thành tiền">${
                                    product.quantity * element.price
                                }.000 đ</td>
                                <td data-label="${
                                    product.id
                                }" class="product--delete">
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
        };
        getProducts(handleShowProductAddToCart);
    } else {
        html = 'Giỏ hàng trống';
        bodyCartTable.innerHTML = html;
    }
});
