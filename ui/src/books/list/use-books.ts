import { useApi } from '../../common/use-api';
import { Book } from '../../common/Book';

const fetchBooks = () => fetch('/api/books')
  .then((res) => res.json());

export const useBooks = () => useApi<Book[]>(fetchBooks);
export default useBooks;
