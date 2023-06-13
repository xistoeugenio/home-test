import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useUsers = (query?: string) => {
  const { data, error, isLoading, mutate } = useSWR(`http://localhost:8800/api/users?q=${query || ''}`, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useUsers;