import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
// import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="layout">
        <header className="header">
          <div className="header-overlay">
            <h1>Source Flooring LTD</h1>
            <nav className="nav-buttons">
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
              <NavLink to="/Services" className={({ isActive }) => (isActive ? "active" : "")}>
                Services
              </NavLink>
              {/* <NavLink to="/Gallery" className={({ isActive }) => (isActive ? "active" : "")}>
                Gallery
              </NavLink> */}
              <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact Us
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            {/* <NavLink to="/gallery">Gallery</NavLink> */}
            <NavLink to="/contact-us">Contact Us</NavLink>
          </div>
          <div className="footer-copyright">
            © 2024 Source Flooring LTD. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
