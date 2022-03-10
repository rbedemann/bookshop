import React, {
  useCallback, useContext, useMemo, useState,
} from 'react';
import { Alert, Snackbar } from '@mui/material';
import { Book } from '../common/Book';
import { load, clear, persist } from './storage-utils';
import { CartItem } from './CartItem';

type ContextProps = {
  items: CartItem[],
  itemCount: number,
  add: (item: Book) => void
  clear: () => void
};
export const CartContext = React.createContext<ContextProps>({
  add(): void {
  },
  clear(): void {
  },
  items: [],
  itemCount: 0,
});
export const addOrMergeItem = (existingItems: CartItem[], book: Book) => {
  const bookAlreadyAdded = existingItems.find((existingItem) => existingItem.book.id === book.id);

  if (bookAlreadyAdded) {
    bookAlreadyAdded.quantity += 1;
  } else {
    existingItems.push({ quantity: 1, book });
  }
  return [...existingItems];
};

export const CartContextProvider: React.FunctionComponent = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(load());
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const addItemToCart = useCallback((item: Book) => {
    const newItems = addOrMergeItem(items, item);
    setItems(newItems);
    persist(newItems);
    setShowSuccessMessage(true);
  }, [items]);

  const clearCart = () => {
    setItems([]);
    clear();
  };

  const contextValue = useMemo(() => ({
    items,
    clear: clearCart,
    itemCount: items
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0),
    add: addItemToCart,
  }), [items, addItemToCart]);

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };
  return (
    <CartContext.Provider value={contextValue}>
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={4000}
        onClose={handleCloseSuccessMessage}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Alert onClose={handleCloseSuccessMessage} severity="success" sx={{ width: '100%' }}>
          Book has been added to your cart!
        </Alert>
      </Snackbar>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
