import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
    </Router>
  );
}
export default App;
