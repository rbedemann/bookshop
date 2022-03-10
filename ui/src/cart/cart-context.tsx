import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Book } from '../common/Book';
import { load, persist } from './storage-utils';

type ContextProps = {
  items: Book[],
  add: (item: Book) => void
};
export const CartContext = React.createContext<ContextProps>({
  add(): void {
  },
  items: [],
});

export const CartContextProvider: React.FunctionComponent = ({ children }) => {
  const [items, setItems] = useState(load());

  const addItemToCart = useCallback((item: Book) => {
    items.push(item);
    setItems(items);
    persist(items);
  }, [items]);

  const contextValue = useMemo(() => ({
    items,
    add: addItemToCart,
  }), [items, addItemToCart]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
