import { useEffect, useState } from 'react';
import { Book } from '../common/Book';

export const useBooks = (): { books: Book[] } => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    function fetchBooks() {
      fetch('/api/books')
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }

    fetchBooks();
  }, []);

  return { books };
};

export default useBooks;
