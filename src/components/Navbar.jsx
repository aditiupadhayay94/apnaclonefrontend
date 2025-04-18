import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <Link to="/" className="text-2xl font-bold">Apna</Link>
      <div className="space-x-4">
        {!user && (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
        {user && (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/jobs" className="hover:underline">Jobs</Link>
            <Link to="/applications" className="hover:underline">Applications</Link>
            <button onClick={logout} className="hover:underline">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
