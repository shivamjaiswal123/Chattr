import { useState } from 'react';
import { signup } from '../../api/auth.api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

function Signup() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    navigate('/');
  }

  const handleSignup = async () => {
    const user = { fullname, email, password };
    try {
      const res = await signup(user);
      if (res.status) {
        navigate('/signin');
      } else {
        console.log('Something went wrong');
      }
    } catch (err) {
      console.error('Error in signup: ', err);
    }
  };

  return (
    <div className="flex h-screen">
      {/* left */}
      <div className="flex-1 text-3xl self-center text-center">Chattr</div>
      {/* right */}
      <div className="flex-1 self-center space-y-2">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-gray-600">Create a new account</p>
        <div className="flex flex-col gap-4 w-sm">
          <input
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            value={fullname}
            className="border border-gray-300 text-sm rounded-lg p-2.5"
            placeholder="Full name"
            required
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            className="border border-gray-300 text-sm rounded-lg p-2.5"
            placeholder="Email address"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            value={password}
            className="border border-gray-300 text-sm rounded-lg p-2.5"
            placeholder="Password"
            required
          />

          <button
            onClick={handleSignup}
            className="bg-indigo-500 px-3 py-1.5 rounded-md font-semibold text-white tracking-wide cursor-pointer"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
