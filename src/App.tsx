import React from 'react';
import { BookList } from './list';
import { Layout } from './layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound';

const App: React.VoidFunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/books" replace />} />
        <Route path={'books'} element={<BookList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
