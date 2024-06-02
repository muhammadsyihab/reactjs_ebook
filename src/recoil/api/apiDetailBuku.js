import { atom, selector } from 'recoil';
import api from './api';

export const detailBukuState = atom({
  key: 'detailBukuState',
  default: null,
});

export const fetchDetailBuku = async (bookId) => {
  try {
    const response = await api.get(`/books/id/${bookId}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching book details:', error);
    throw error;
  }
};

export const detailSelector = selector({
  key: 'detailSelector',
  get: async ({ get }) => {
    const bookId = get(detailBukuState);
    if (bookId) {
      return await fetchDetailBuku(bookId);
    }
    return null;
  },
});
