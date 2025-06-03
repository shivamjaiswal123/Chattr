import axiosConfig from '../lib/axiosConfig';
import type { Response } from '../types';

export const signin = async (user: {
  email: string;
  password: string;
}): Promise<Response> => {
  const result = await axiosConfig.post('/api/v1/auth/signin', user);

  return result.data;
};

export const signup = async (user: {
  fullname: string;
  email: string;
  password: string;
}): Promise<Response> => {
  const result = await axiosConfig.post('/api/v1/auth/signup', user);

  return result.data;
};

export const me = async (): Promise<Response> => {
  const result = await axiosConfig('/api/v1/auth/me');

  return result.data;
};
