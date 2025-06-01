import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LiveClasses from './pages/LiveClasses';
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard\" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="live-classes" element={<LiveClasses />} />
            {/* Add more routes here */}
          </Route>
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/dashboard\" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;