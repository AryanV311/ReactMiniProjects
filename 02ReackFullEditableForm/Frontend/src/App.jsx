import {Routes, Route} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import "./index.css";
import { Login } from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import { Profile } from "./pages/profile";

function App() {
  

  return (
    <div>
      <ToastContainer />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/my-profile" element={<Profile />} />
    </Routes>
    </div>
  )
}

export default App
