// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const setAuthToken =(token)=>{
    if(token){
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
      localStorage.setItem("token",token)
    }else{
      delete axios.defaults.headers.common["Authorization"]
      localStorage.removeItem("token")
    }
  }

  const register = async(form)=>{
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register",form)
      let {token} = res.data
      setAuthToken(token)
      setCurrentUser(res.data.user)
      return res.data
    } catch (err) {
      console.log(`${err} - error from AuthContext -signup`)
      return false;
    }
  }

  const login = async (form) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      let {token} = res.data
      setAuthToken(token)
      fetchUser(); // Get user data after login
    } catch (err) {
      console.log(`${err} - error from AuthContext`)
      return false;
    }
  };

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const res = await axios.get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCurrentUser(res.data.user);
    } catch (err) {
      localStorage.removeItem("token");
      console.log(`${err} - error from AuthContext-fetchuser`)
      setCurrentUser(null);
      return false;
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


  const logout = () => {
    try {
      localStorage.removeItem("token");
      setCurrentUser(null);
      delete axios.defaults.headers.common["Authorization"]
    } catch (err) {
      console.log(`${err} - error from AuthContext-logout`)
      return false
    }
  };

  
  return (
    <AuthContext.Provider value={{register, currentUser, login, logout, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ EXPORT useAuth HOOK
export const useAuth = () => useContext(AuthContext);
