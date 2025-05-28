import type { Response } from '../types';

export const getAllUsers = async (): Promise<Response> => {
  const result = await fetch('http://localhost:3000/api/v1/user', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return result.json();
};
