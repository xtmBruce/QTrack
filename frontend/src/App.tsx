
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserPage from '../src/assets/pages/UserPage';
import AdminPage from '../src/assets/pages/AdminPage';
import DisplayPage from '../src/assets/pages/DisplayPage';
import NotFound from '../src/assets/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to user page */}
        <Route path="/" element={<Navigate to="/user" replace />} />
        
        {/* User route - for getting tickets and tracking queue */}
        <Route path="/user" element={<UserPage />} />
        
        {/* Admin route - for managing queue */}
        <Route path="/admin" element={<AdminPage />} />
        
        {/* Display route - for public screens in waiting areas */}
        <Route path="/display" element={<DisplayPage />} />
        
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
