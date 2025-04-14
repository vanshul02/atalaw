import React from "react";

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">About Us</h2>
          <p className="text-lg text-gray-700">
            ATA Law Partners & Associates is a boutique law firm committed to delivering top-tier legal services in the field of Intellectual Property Rights (IPR), with a focus on Trademarks, Copyrights, and Patents.
          </p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/bookcase.jpg`} alt="Law Library" className="w-full h-auto rounded-xl shadow-lg" />
      </div>
    </section>
  );
}

export default About;