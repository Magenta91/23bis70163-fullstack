/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext(null);

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('user'); // 'admin' or 'user'
  const [token, setToken] = useState('');

  const login = (username, userRole = 'user') => {
    setIsLoggedIn(true);
    setUserName(username);
    setRole(userRole);
    // Generate a mock token
    setToken(`token_${Date.now()}_${username}`);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setRole('user');
    setToken('');
  };

  const value = {
    isLoggedIn,
    userName,
    role,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
