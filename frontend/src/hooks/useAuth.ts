import { useMutation } from '@tanstack/react-query';
import { signin } from '../api/auth.api';
import { isAxiosError } from 'axios';
import { authStore } from '../store/authStore';

export const useAuth = () => {
  const setUser = authStore((state) => state.setUser);

  const { mutateAsync: signIn } = useMutation({
    mutationFn: signin,
    onSuccess: async (data) => {
      setUser(data?.user!);
      return data;
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        console.error(error.response?.data.message);
      }
    },
  });

  return { signIn };
};
