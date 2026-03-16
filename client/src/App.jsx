import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from "./Pages/Register"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProtectedRoute from './components/ProtectionRoute';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
              <Dashboard /> 
          </ProtectedRoute>
            } />
        
        {/* 404 Not Found Catch-all */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;