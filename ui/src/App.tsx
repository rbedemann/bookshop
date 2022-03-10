import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BookList } from './list';
import { Layout } from './layout';
import NotFound from './NotFound';
import { BookDetail } from './detail';
import { Cart } from './cart/Cart';
import { CartContextProvider } from './cart/cart-context';

const App: React.VoidFunctionComponent = () => (
  <CartContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/books" replace />} />
        <Route path="books" element={<BookList />} />
        <Route path="books/:bookId" element={<BookDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </CartContextProvider>
);

export default App;
