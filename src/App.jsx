import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0f172a] text-white">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;