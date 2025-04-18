
import { Outlet, ScrollRestoration } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";  // Correct path
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <ScrollRestoration />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>

  );
}

export default App;
