
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserPage from '../src/assets/pages/UserPage';
import AdminPage from '../src/assets/pages/AdminPage';
import AdminLoginPage from '../src/assets/pages/AdminLoginPage';
import DisplayPage from '../src/assets/pages/DisplayPage';
import NotFound from '../src/assets/pages/NotFound';
import { AuthProvider } from './assets/context/AuthContext';
import ProtectedRoute from './assets/components/admin/actions/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Default route redirects to user page */}
          <Route path="/" element={<Navigate to="/user" replace />} />
          
          {/* User route - for getting tickets and tracking queue */}
          <Route path="/user" element={<UserPage />} />
          
          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            } 
          />
          
          {/* Display route - for public screens in waiting areas */}
          <Route path="/display" element={<DisplayPage />} />
          
          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
