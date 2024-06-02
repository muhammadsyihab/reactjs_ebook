import { atom, selector } from 'recoil';
import { 
    getCategory 
} from './api';

///Atom State

export const kategori = atom({
  key: 'kategori',
  default: [],
});

export const kategoriSelector = selector({
    key: 'kategoriSelector',
    get: ({ get }) => {
      const books = get(kategori);
      return books.length > 0 ? books[0] : null;
    },
    set: ({ set }, newValue) => {
      set(kategori, [newValue]);
    },
  });

export const subKategoriSelector = selector({
    key: 'subKategoriSelector',
    get: ({ get }) => {
      const books = get(kategori);
      return books.length > 0 ? books[0] : null;
    },
    set: ({ set }, newValue) => {
      set(kategori, [newValue]);
    },
  });


export const fetchKategori = async () => {
    const books = await getCategory();
    return books;
};
export const fetchSubKategor = async () => {
    const books = await getCategory();
    return books;
};