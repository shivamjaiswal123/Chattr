import axiosConfig from '../lib/axiosConfig';
import type { Response } from '../types';

export const getAllUsers = async (): Promise<Response> => {
  const result = await axiosConfig('/api/v1/user');

  return result.data;
};
