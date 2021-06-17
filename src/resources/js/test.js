const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var url = 'https://congdat.herokuapp.com/api/products?_page=1&_limit=6';

const getProducts = async () => {
    try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        renderGridProducts(responseJSON);
        renderListProducts(responseJSON);
    } catch (error) {
        console.log('Failed to fetch products: ', error);
    }
};

// Function render Products Grid
const renderGridProducts = async (products) => {
    const listProductsBlock = $('.product-grid .row');
    const paginationBlock = $('.pagination');
    const productsList = products.body;

    const totalProducts = products.pagination._totalRow;
    const limits = products.pagination._limit;
    var paginationNumber = Math.round(totalProducts / limits);

    totalProducts % limits === 0 ? paginationNumber : paginationNumber++;

    let htmls = productsList.map((product) => {
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
                            <button class="btn btn__buy-now" id="${product.id}" onclick="handleAddToCart('${product.id}')">Mua ngay</button
                            ><a class="icon__link-search" href="products-detail.html"
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
                            <span class="product__price-sale">${product.price}.000 đ</span
                            ><span class="product__price-current">${product.price}.000 đ</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    let htmlPagination = [];
    for (let i = 1; i <= paginationNumber; i++) {
        let paginationNumber = `
        <li class="pagination-number"> 
            <button class="btn btn--paginate" id="paginate-${i}" onclick="handlePaginate('paginate-${i}')">${i}</button>
        </li>
        `;
        htmlPagination.push(paginationNumber);
    }

    paginationBlock.innerHTML = htmlPagination.join('');
    listProductsBlock.innerHTML = htmls.join('');
};

// Function render Products List
const renderListProducts = async (products) => {
    const listProductsBlock = $('.product-list .row');
    const productsList = products.body;
    let htmls = productsList.map((product) => {
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
                        <span class="product__price-sale">${product.price}.000 đ</span
                        ><span class="product__price-current">${product.price}.000 đ</span>
                    </div>
                    <div class="product__control" id="${product.id}">
                        <button class="btn btn__buy-now" id="${product.id}" onclick="handleAddToCart('${product.id}')">Mua ngay</button>
                        <a href="products-detail.html"
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

    listProductsBlock.innerHTML = htmls.join('');
};

const handlePaginate = (id) => {
    const paginateNumber = document.getElementById(id);
    const number = paginateNumber.innerText;
    url = `https://congdat.herokuapp.com/api/products?_page=${number}&_limit=6`;
    renderGridProducts(responseJSON);
};

// Start app
(() => {
    getProducts();
})();
