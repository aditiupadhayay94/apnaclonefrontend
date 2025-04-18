import { useState,useEffect } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'jobseeker' });
  const navigate = useNavigate();
  const { fetchUser,register,currentUser } = useAuth();

useEffect(()=>{
  if(currentUser){
    navigate("/dashboard")
  }
},[currentUser,navigate])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form)
    // await fetchUser();
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" onChange={handleChange} placeholder="Name" className="w-full border p-2" required />
        <input name="email" onChange={handleChange} placeholder="Email" type="email" className="w-full border p-2" required />
        <input name="password" onChange={handleChange} placeholder="Password" type="password" className="w-full border p-2" required />
        <select name="role" onChange={handleChange} className="w-full border p-2">
          <option value="jobseeker">Job Seeker</option>
          <option value="employer">Employer</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Register</button>
      </form>
    </div>
  );
}
