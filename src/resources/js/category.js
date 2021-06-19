import { getCategory } from './API/categoryApi.js';
import { handleShowProduct } from './showProducts.js';

const renderCategories = async () => {
    const listCategoriesBlock = document.querySelector(
        '.product-list .category__list'
    );
    const dataCategories = await getCategory();
    const categoriesList = dataCategories.body;
    let htmls = categoriesList.map((item) => {
        return `
            <li class="category__item">
                <input
                    id="${item.id}"
                    type="radio"
                    name="product-category"
                    value="${item.id}"
                />
                <label class="category__item-title" for="${item.id}"
                    ><i class="fas fa-angle-right"></i
                    ><span class="category__item-name">${item.name}</span
                    ><span class="category__item-qnt">( 10 )</span></label
                >
            </li>
        `;
    });

    listCategoriesBlock.innerHTML = htmls.join('');
};

const handleFilterCategory = async () => {
    const categoriesElement = document.querySelectorAll(
        '.product-list .category__item'
    );
    console.log(categoriesElement);
    for (let itemCategory of categoriesElement) {
        itemCategory.onclick = () => {
            console.log(123);
        };
    }
};

const handleFilterColor = async (color_id) => {
    const colorElement = document.querySelectorAll(
        '.color-list .category__item'
    );
    for (let itemColor of colorElement) {
        itemColor.onclick = () => {
            categoryAPI = `https://congdat.herokuapp.com/api/products?color=${color_id}`;
        };
    }
};

const handleFilterPrice = async (price_id) => {
    const priceElement = document.querySelectorAll(
        '.price-list .category__item'
    );
    for (let itemColor of colorElement) {
        itemColor.onclick = () => {
            categoryAPI = `https://congdat.herokuapp.com/api/products?color=${color_id}`;
        };
    }
};

export {
    renderCategories,
    handleFilterCategory,
    handleFilterColor,
    handleFilterPrice,
};
