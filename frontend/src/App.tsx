import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Signin from './component/auth/Signin';
import Signup from './component/auth/Signup';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element=<ProtectedRoute>
          <Homepage />
        </ProtectedRoute>
      />
      <Route path="/signin" element=<Signin /> />
      <Route path="/signup" element=<Signup /> />
    </Routes>
  );
}

export default App;
