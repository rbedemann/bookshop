import React from 'react';
import { BookList } from './list';
import { Layout } from './layout';

const App: React.VoidFunctionComponent = () => {
  return (
    <Layout>
      <BookList />
    </Layout>
  );
};

export default App;
