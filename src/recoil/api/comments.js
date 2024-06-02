import { atom, selector } from 'recoil';
import api2 from './apicomments';

export const commentsState = atom({
  key: 'commentsState',
  default: null,
});

export const fetchComments = async (bookId) => {
  try {
    const response = await api2.get(`/comments?postId=${bookId}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching book details:', error);
    throw error;
  }
};

export const commentsSelector = selector({
  key: 'commentsSelector',
  get: async ({ get }) => {
    const bookId = get(commentsState);
    if (bookId) {
      return await fetchComments(bookId);
    }
    return null;
  },
});
