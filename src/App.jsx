
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {AuthProvider} from "./context/AuthContext"

function App() {
  return (
    <>
    <AuthProvider> 
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      </AuthProvider>
    </>

  );
}

export default App;
