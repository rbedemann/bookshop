import { useEffect, useState } from 'react';
import { Book } from '../common/Book';

export const useBooks = (): { books: Book[] } => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    function fetchBooks() {
      fetch('/api/books')
        .then(res => res.json())
        .then(books => setBooks(books));
    }

    fetchBooks();
  }, []);

  return { books };
};
