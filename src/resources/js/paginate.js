import { handleShowProduct } from './showProducts.js';

export const handlePagination = async (paginate) => {
    const paginationBlock = document.querySelector('.pagination');
    const totalProducts = paginate._totalRow;
    const limits = paginate._limit;
    var paginationNumber = Math.round(totalProducts / limits);

    totalProducts % limits === 0 ? paginationNumber : paginationNumber++;

    let htmlPagination = [];
    for (let i = 1; i <= paginationNumber; i++) {
        let paginationNumber = `
                <li class="pagination-number">
                    <button class="btn btn--paginate">${i}</button>
                </li>
            `;
        htmlPagination.push(paginationNumber);
    }

    paginationBlock.innerHTML = htmlPagination.join('');
};

export const renderPagination = () => {
    const paginationBlock = document.querySelectorAll('.pagination-number');
    if (paginationBlock) {
        paginationBlock.forEach((item) => {
            item.addEventListener('click', () => {
                const pageNumber = Number(item.textContent);
                handleShowProduct(pageNumber);
            });
        });
    }
};
