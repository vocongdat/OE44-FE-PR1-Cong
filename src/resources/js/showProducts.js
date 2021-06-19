import { getProducts } from './API/productsApi.js';
import { handleLayOutButton } from './handleCSS.js';
import { renderCategories, handleFilterCategory } from './category.js';
import { handlePagination, renderPagination } from './paginate.js';
import { renderGridProducts, renderListProducts } from './renderLayout.js';

export const handleShowProduct = async (page = 1, limit = 6) => {
    const dataProduct = await getProducts(page, limit);
    const productsList = dataProduct.body;
    const paginateProduct = dataProduct.pagination;
    renderGridProducts(productsList);
    renderListProducts(productsList);

    (() => {
        handleLayOutButton();
        renderCategories();
        handlePagination(paginateProduct);
        renderPagination();
        handleFilterCategory();
    })();
};

(() => {
    handleShowProduct();
})();
