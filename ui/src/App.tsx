import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import NotFound from './NotFound';
import { Cart } from './cart/Cart';
import { CartContextProvider } from './cart/cart-context';
import { Books } from './books';

const App: React.VoidFunctionComponent = () => (
  <CartContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/books" replace />} />
        <Route path="books/*" element={<Books />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </CartContextProvider>
);

export default App;
