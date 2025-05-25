import {Routes, Route} from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import "./index.css";
import { Login } from "./pages/Login";

function App() {
  

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  )
}

export default App
