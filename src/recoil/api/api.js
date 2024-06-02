import axios from 'axios';

const BaseURL= 'https://back-end-ebook-qxd1.vercel.app'

const api = axios.create({
  baseURL: 'https://back-end-ebook-qxd1.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;

//Get

export const getBook = async (id) => {
  try {
    const response = await axios.get(`${BaseURL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching book:', error);
    throw error;
  }
};

export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${BaseURL}/books/10`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching all books:', error);
    throw error;
  }
};

export const getDetailBuku = async (bookId) => {
  try {
    const response = await axios.get(`${BaseURL}/books/10/${bookId}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching all books:', error);
    throw error;
  }
};
export const getBukuTerpopuler = async () => {
  try {
    const response = await axios.get(`${BaseURL}/books/8`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching all books:', error);
    throw error;
  }
};
export const getBukuTerbaik = async () => {
  try {
    const response = await axios.get(`${BaseURL}/books/7`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching all books:', error);
    throw error;
  }
};
export const getBukuTerbaru = async () => {
  try {
    const response = await axios.get(`${BaseURL}/books/3`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching all books:', error);
    throw error;
  }
};

export const getKategoriDashboard = async () => {
  try {
    const response = await axios.get(`${BaseURL}/books/8`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching all books:', error);
    throw error;
  }
};

export const getCategory = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error while fetching all books:', error);
    throw error;
  }
};

export const getSubCategory = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error while fetching all books:', error);
    throw error;
  }
};
