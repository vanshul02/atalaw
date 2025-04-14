import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;