import { customFetch } from './fetchClient.js';
import { API } from '../variables.js';

const getAllProducts = async () => customFetch(API + 'products');
const getProducts = async (page = 1, limit = 6) =>
    customFetch(`${API}products?_page=${page}&_limit=${limit}`);

const getOneProduct = async (id) => customFetch(`${API}products?id=${id}`);

const getSliceProduct = async (start = 1, end = 7) =>
    customFetch(`${API}products?_start=${start}&_end=${end}`);

export { getAllProducts, getProducts, getOneProduct, getSliceProduct };
