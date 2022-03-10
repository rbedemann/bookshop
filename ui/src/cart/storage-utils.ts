import { CartItem } from './CartItem';

const LOCAL_STORAGE_KEY = 'cart';

export const load = (): CartItem[] => {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storage ? JSON.parse(storage) : [];
};
export const clear = () => localStorage.removeItem(LOCAL_STORAGE_KEY);
export const persist = (items: CartItem[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
};
