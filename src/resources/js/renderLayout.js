import { $ } from './variables.js';

export const renderGridProducts = async (productsList) => {
    const listProductsBlock = $('.product-grid .row');
    let htmlProducts = productsList.map((product) => {
        const priceCurrent = Math.floor(
            product.price - (product.price * product.priceSale) / 100
        );

        return `
        <div class="col l-4 m-6 c-12">
            <div class="product">
                <div class="product__header">
                    <div class="product__header-img">
                        <img
                            src="./assets/img/product/${product.thumbnailUrl}"
                            alt="${product.name}"
                        />
                    </div>
                    <span style="background-color: #d64146">- ${product.priceSale}%</span>
                    <div class="form__control">
                        <button class="btn btn__buy-now" id="${product.id}" onclick="addToCart('${product.id}')">Mua ngay</button
                        ><a class="icon__link-search" href="/products-detail.html?id=${product.id}"
                            ><i class="fas fa-search icon icon--detail"></i
                        ></a>
                    </div>
                </div>
                <div class="product__body">
                    <p class="product__name">${product.name}</p>
                    <span class="product__star"
                        ><i class="fas fa-star"></i><i class="fas fa-star"></i
                    ></span>
                    <p class="product__dsc"></p>
                    <div class="product__price">
                        <span class="product__price-sale">${priceCurrent}.000 đ</span
                        ><span class="product__price-current">${product.price}.000 đ</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    });

    listProductsBlock.innerHTML = htmlProducts.join('');
};

export const renderListProducts = async (productsList) => {
    const listProductsBlock = $('.product-list .row');
    let htmlProducts = productsList.map((product) => {
        const priceCurrent = Math.floor(
            product.price - (product.price * product.priceSale) / 100
        );

        return `
    <div class="col l-12 m-12 c-12">
        <div class="product">
            <div class="product__header">
                <div class="product__header-img">
                    <img
                        src="./assets/img/product/${product.thumbnailUrl}"
                        alt="${product.name}"
                    />
                </div>
                <span style="background-color: #d64146">- 25%</span>
            </div>
            <div class="product__body">
                <p class="product__name">${product.name}</p>
                <span class="product__star"
                    ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ></span>
                <p class="product__dsc">${product.description}</p>
                <div class="product__price">
                    <span class="product__price-sale">${priceCurrent}.000 đ</span
                    ><span class="product__price-current">${product.price}.000 đ</span>
                </div>
                <div class="product__control" id="${product.id}">
                    <button class="btn btn__buy-now" id="${product.id}" onclick="addToCart('${product.id}')">Mua ngay</button>
                    <a href="/products-detail.html?id=${product.id}"
                        ><i
                            class="fas fa-search icon icon--detail icon--border"
                        ></i
                    ></a>
                    <input id="1" type="checkbox" name="${product.name}" />
                    <label class="item__heart-label" for="1"
                        ><i class="fas fa-heart icon icon--border"></i
                    ></label>
                </div>
            </div>
        </div>
    </div>
    `;
    });

    listProductsBlock.innerHTML = htmlProducts.join('');
};
