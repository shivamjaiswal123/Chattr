import React from 'react';
import AuthProvider from './context/AuthProvider';
import UserProvider from './context/UserProvider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </div>
  );
}

export default Providers;
