import React from 'react';
import { BookCard } from './card/BookCard';
import { useBooks } from './use-books';

export const BookList: React.VoidFunctionComponent = () => {
  const { books } = useBooks();

  return (
    <>
      {books.map(book => (
        <BookCard
          book={book}
          key={`${book.Publisher}${book.Author}${book.Title}`}
        />
      ))}
    </>
  );
};
