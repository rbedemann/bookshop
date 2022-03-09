import { useEffect, useState } from 'react';

type ServiceFunction<T> = () => Promise<T>;

export const useApi = <T>(serviceFunction: ServiceFunction<T>) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    serviceFunction().then((result) => {
      setData(result);
    });
  }, [serviceFunction]);

  return { data };
};
