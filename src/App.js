import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Login from './Pages/Login/Login';
import Update from './Pages/Update';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="update" element={<Update></Update>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
