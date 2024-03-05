import "./App.css";
import { BrowserRouter, Routs, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/cart";
import { Routes } from "react-router-dom";
import Profile from "./components/profile";
import pg404 from "./components/pg404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart " element={<Cart />} />
        <Route exact path="/userprofile" element={<Profile />} />
        <Route path="*" element={<pg404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
