import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { BookList } from './list';
import { BookDetail } from './detail';

export const Books: React.VoidFunctionComponent = () => (
  <Routes>
    <Route index element={<BookList />} />
    <Route path=":bookId" element={<BookDetail />} />
  </Routes>
);
