import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import MyApplication from './pages/MyApplication';
import Signup from './pages/Signup';

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="applications" element={<MyApplication />} />
      </Route>
    </Routes>
  );
}

export default App;
