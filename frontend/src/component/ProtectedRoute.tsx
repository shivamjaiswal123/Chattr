import type React from 'react';

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading</div>;
  }

  return <div>{isAuthenticated ? children : <Navigate to="/signin" />}</div>;
}

export default ProtectedRoute;
