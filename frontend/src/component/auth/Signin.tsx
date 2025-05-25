import { useState } from 'react';
import { signin } from '../../api/auth.api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate('/');
  }

  const handleSignin = async () => {
    const user = { email, password };
    try {
      const res = await signin(user);
      if (res.status) {
        setIsAuthenticated(true);
        navigate('/');
      }
    } catch (err) {
      console.error('Error in sign in: ', err);
    }
  };

  return (
    <div className="flex h-screen">
      {/* left */}
      <div className="flex-1 text-3xl self-center text-center">Chattr</div>
      {/* right */}
      <div className="flex-1 self-center space-y-2">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-gray-600">Sign in to continue to your account</p>
        <div className="flex flex-col gap-4 w-sm">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-300 text-sm rounded-lg p-2.5"
            placeholder="Email address"
            required
          />

          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300 text-sm rounded-lg p-2.5"
            placeholder="password"
            required
          />

          <button
            onClick={handleSignin}
            className="bg-indigo-500 px-3 py-1.5 rounded-md font-semibold text-white tracking-wide cursor-pointer"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
