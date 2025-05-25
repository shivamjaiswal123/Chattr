interface Response {
  status: boolean;
  message: string;
}

export const signin = async (user: {
  email: string;
  password: string;
}): Promise<Response> => {
  const result = await fetch('http://localhost:3000/api/v1/auth/signin', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return result.json();
};

export const signup = async (user: {
  email: string;
  password: string;
}): Promise<Response> => {
  const result = await fetch('http://localhost:3000/api/v1/auth/signup', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return result.json();
};

export const session = async () => {
  const result = await fetch('http://localhost:3000/api/v1/auth/me', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return result.json();
};
