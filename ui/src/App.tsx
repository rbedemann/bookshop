import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { Layout } from './layout';
import NotFound from './NotFound';
import { CartContextProvider } from './cart/cart-context';

const Books = React.lazy(() => import('./books'));
const Cart = React.lazy(() => import('./cart'));

const LoadingSpinner: React.FunctionComponent = ({ children }) => (
  <React.Suspense
    fallback={<CircularProgress />}
  >
    {children}
  </React.Suspense>
);

const App: React.VoidFunctionComponent = () => (
  <CartContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/books" replace />} />
        <Route path="books/*" element={<LoadingSpinner><Books /></LoadingSpinner>} />
        <Route path="cart" element={<LoadingSpinner><Cart /></LoadingSpinner>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </CartContextProvider>
);

export default App;
