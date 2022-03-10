import { useCallback } from 'react';
import { useApi } from '../common/use-api';

const fetchBook = (id: string) => fetch(`/api/books/${id}`)
  .then((res) => res.json());

export const useBook = (id: string) => useApi(useCallback(() => fetchBook(id), [id]));
export default useBook;
