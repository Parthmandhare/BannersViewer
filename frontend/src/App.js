import './App.css';
import DisplayBanner from './Components/DisplayBanner';
import Navbar from './Components/Navbar';
import Dashboard from "./Components/Dashboard"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <>
  

      <Router>

      <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/" element={<Home/>} />
            </Routes>

      </Router>
    </>
  );
}

export default App;
