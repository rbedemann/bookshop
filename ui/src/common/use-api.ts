import { useEffect, useState } from 'react';

type ServiceFunction<T> = () => Promise<T>;

export const useApi = <T>(serviceFunction: ServiceFunction<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    serviceFunction()
      .then((result) => {
        setData(result);
      })
      .catch((e) => {
        setError(e);
      });
  }, [serviceFunction]);

  return { data, error };
};
