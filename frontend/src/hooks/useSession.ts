import { useQuery } from '@tanstack/react-query';
import { me } from '../api/auth.api';
import { authStore } from '../store/authStore';
import { useEffect } from 'react';

export const useSession = () => {
  const setUser = authStore((state) => state.setUser);

  const { data, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: me,
    retry: false,
  });

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
  }, [data]);

  return { user: data?.user, isLoading };
};
