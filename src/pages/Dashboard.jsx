import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Hello, {user?.name}</h1>
      <p className="mt-2 text-gray-600">You're logged in as <span className="font-medium">{user?.role}</span>.</p>
    </div>
  );
}
