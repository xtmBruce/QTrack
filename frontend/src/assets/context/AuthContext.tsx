
import React, { useState } from 'react';
import { AuthContext } from './useAuth';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!sessionStorage.getItem('admin_auth');
  });
  
  const [user, setUser] = useState<{ username: string } | null>(() => {
    const storedAuth = sessionStorage.getItem('admin_auth');
    return storedAuth ? JSON.parse(storedAuth).user : null;
    
  });

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simple credential check (in production, this would be an API call)
    if (username === 'admin' && password === 'pass123') {
      const authData = { user: { username } };
      sessionStorage.setItem('admin_auth', JSON.stringify(authData));
      setIsAuthenticated(true);
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
