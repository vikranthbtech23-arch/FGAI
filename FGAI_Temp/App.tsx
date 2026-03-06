import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import CustomerDetails from './pages/CustomerDetails';
import Feedback from './pages/Feedback';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { User } from './types';

interface ProtectedRouteProps {
  user: User | null;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('restaurant_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('restaurant_user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('restaurant_user');
  };

  return (
    <Router>
      <Layout user={user} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={
            user ? <Navigate to="/home" replace /> : <Login onLogin={handleLogin} />
          } />
          
          <Route path="/home" element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          } />
          
          <Route path="/reservation" element={
            <ProtectedRoute user={user}>
              <Reservation />
            </ProtectedRoute>
          } />
          
          <Route path="/customer-details" element={
            <ProtectedRoute user={user}>
              <CustomerDetails />
            </ProtectedRoute>
          } />
          
          <Route path="/feedback" element={
            <ProtectedRoute user={user}>
              <Feedback />
            </ProtectedRoute>
          } />
          
          <Route path="/menu" element={
            <ProtectedRoute user={user}>
              <Menu />
            </ProtectedRoute>
          } />
          
          <Route path="/about" element={
            <ProtectedRoute user={user}>
              <About />
            </ProtectedRoute>
          } />
          
          <Route path="/contact" element={
            <ProtectedRoute user={user}>
              <Contact />
            </ProtectedRoute>
          } />

          {/* Catch all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
