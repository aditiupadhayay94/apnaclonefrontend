import React from 'react'
import axios from '../axios';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { fetchUser } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/auth/login', form);
    await fetchUser();
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" onChange={handleChange} placeholder="Email" type="email" className="w-full border p-2" required />
        <input name="password" onChange={handleChange} placeholder="Password" type="password" className="w-full border p-2" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
}