import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const register = async (name, email, password, role) => {
    try {
      setError(null);
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: name,
          email: email,
          password: password,
          role: role,
        }
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      return false;
    }
  };


  
  // Set token in header
  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('token');
    }
  };

  return (
    <AuthContext.Provider value={{ register, loading, error, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
