import type React from 'react';
import { useSession } from '../hooks/useSession';
import { Navigate } from 'react-router-dom';
import Spinner from './Spinner';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useSession();

  if (isLoading) return <Spinner />;

  return <div>{user ? children : <Navigate to="/signin" />}</div>;
}

export default ProtectedRoute;
