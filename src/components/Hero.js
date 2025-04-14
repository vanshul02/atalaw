import React from "react";

function Hero() {
  return (
    <section className="text-center py-24 bg-gray-100 px-4">
      <h1 className="text-5xl font-bold mb-6 text-blue-900">ATA Law Partners & Associates</h1>
      <p className="text-xl max-w-2xl mx-auto text-gray-700 mb-8">
        Specialists in Trademark, Copyright & Intellectual Property Rights Law
      </p>
      <a href="#contact" className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-xl text-lg shadow-md">
        Contact Us
      </a>
    </section>
  );
}

export default Hero;