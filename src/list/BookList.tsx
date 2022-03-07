import { Book } from '../common/Book';
import React from 'react';
import { BookCard } from './card/BookCard';

export type BookListProps = {
  books: Book[];
};
export const BookList: React.VoidFunctionComponent<BookListProps> = ({
  books,
}) => {
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
