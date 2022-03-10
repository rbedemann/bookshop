import { Book } from '../common/Book';

const LOCAL_STORAGE_KEY = 'cart';

export const load = (): Book[] => {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storage ? JSON.parse(storage) : [];
};

export const persist = (items: Book[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
};
