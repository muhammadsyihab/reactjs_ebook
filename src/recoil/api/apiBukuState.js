import { atom, selector } from 'recoil';
import { 
  getAllBooks, getBukuTerbaik, getBukuTerbaru, getKategoriDashboard, getBukuTerpopuler  
} from './api';

///Atom State

export const bookState = atom({
  key: 'bookState',
  default: [],
});


//Selector

export const bookSelector = selector({
  key: 'bookSelector',
  get: ({ get }) => {
    const books = get(bookState);
    return books.length > 0 ? books[0] : null;
  },
  set: ({ set }, newValue) => {
    set(bookState, [newValue]);
  },
});
export const BukuTerpopulerSelector = selector({
  key: 'BukuTerpopulerSelector',
  get: ({ get }) => {
    const books = get(bookState);
    return books.length > 0 ? books[0] : null;
  },
  set: ({ set }, newValue) => {
    set(bookState, [newValue]);
  },
});

export const BukuTerbaikSelector = selector({
  key: 'BukuTerbaikSelector',
  get: ({ get }) => {
    const books = get(bookState);
    return books.length > 0 ? books[0] : null;
  },
  set: ({ set }, newValue) => {
    set(bookState, [newValue]);
  },
});

export const BukuTerbaruSelector = selector({
  key: 'BukuTerbaruSelector',
  get: ({ get }) => {
    const books = get(bookState);
    return books.length > 0 ? books[0] : null;
  },
  set: ({ set }, newValue) => {
    set(bookState, [newValue]);
  },
});

export const KategoriDashboardSelector = selector({
  key: 'KategoriDashboardSelector',
  get: ({ get }) => {
    const books = get(bookState);
    return books.length > 0 ? books[0] : null;
  },
  set: ({ set }, newValue) => {
    set(bookState, [newValue]);
  },
});

export const AllBooksSelector = selector({
  key: 'AllBooksSelector',
  get: ({ get }) => {
    const books = get(bookState);
    return books.length > 0 ? books[0] : null;
  },
  set: ({ set }, newValue) => {
    set(bookState, [newValue]);
  },
});

///Fetch

export const fetchBooks = async () => {
  const books = await getAllBooks();
  return books;
};

export const fetchBukuTerpopuler = async () => {
  const books = await getBukuTerpopuler();
  return books;
};

export const fetchBukuTerbaik = async () => {
  const books = await getBukuTerbaik();
  return books;
};

export const fetchBukuTerbaru = async () => {
  const books = await getBukuTerbaru();
  return books;
};

export const fetchkategoriDashboard = async () => {
  const books = await getKategoriDashboard();
  return books;
};

