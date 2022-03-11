import { Route, Routes, useLocation } from 'react-router-dom';
import React from 'react';
import { BookList } from './list';
import { DetailModal } from './detail';
import { DetailPage } from './detail/DetailPage';

export const Books: React.VoidFunctionComponent = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route index element={<BookList />} />
        <Route path=":bookId" element={<DetailPage />} />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path=":bookId" element={<DetailModal />} />
        </Routes>
      )}
    </>
  );
};
