var categoryAPI = 'https://congdat.herokuapp.com/api/categories';

const getCategory = (callback) => {
    fetch(categoryAPI)
        .then((res) => res.json())
        .then(callback)
        .catch((error) => {
            console.error('Error:', error);
        });
};

// Function render Products Grid
const renderCategories = async (item) => {
    const listCategoriesBlock = $('.product-list .category__list');
    const categoriesList = item.body;
    let htmls = categoriesList.map((item) => {
        return `
            <li class="category__item">
                <input
                    id="${item.id}"
                    type="radio"
                    name="product-category"
                    value="${item.id}"
                />
                <label onclick="handleFilterCategory('${item.id}')" class="category__item-title" for="${item.id}"
                    ><i class="fas fa-angle-right"></i
                    ><span class="category__item-name">${item.name}</span
                    ><span class="category__item-qnt">( 10 )</span></label
                >
            </li>
        `;
    });

    listCategoriesBlock.innerHTML = htmls.join('');
};

const handleFilterCategory = async (id) => {
    const categoriesElement = $$('.product-list .category__item');

    for (let itemCategory of categoriesElement) {
        itemCategory.onclick = () => {
            categoryAPI = `https://congdat.herokuapp.com/api/products?categoryId=${id}&_page=1&_limit=6`;
            getCategory(renderGridProducts);
            getCategory(renderListProducts);
            getProducts(renderPagination);
        };
    }
};

const handleFilterColor = async (color_id) => {
    const colorElement = $$('.color-list .category__item');
    for (let itemColor of colorElement) {
        itemColor.onclick = () => {
            categoryAPI = `https://congdat.herokuapp.com/api/products?color=${color_id}`;
            getCategory(renderGridProducts);
            getCategory(renderListProducts);
        };
    }
};

const handleFilterPrice = async (price_id) => {
    const priceElement = $$('.price-list .category__item');
    for (let itemColor of colorElement) {
        itemColor.onclick = () => {
            categoryAPI = `https://congdat.herokuapp.com/api/products?color=${color_id}`;
            getCategory(renderGridProducts);
            getCategory(renderListProducts);
        };
    }
};

// Start app
(() => {
    getCategory(renderCategories);
    handleFilterCategory();
    handleFilterColor();
})();
