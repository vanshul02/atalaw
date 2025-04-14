import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-900">Get in Touch</h2>
        <p className="mb-8 text-lg text-gray-700">
          Reach out to ATA Law Partners & Associates to protect your intellectual assets with trusted legal counsel.
        </p>
        <form className="grid gap-4 max-w-xl mx-auto">
          <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-xl p-4 text-lg" />
          <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-xl p-4 text-lg" />
          <textarea placeholder="Your Message" rows="4" className="border border-gray-300 rounded-xl p-4 text-lg"></textarea>
          <button type="submit" className="text-lg px-6 py-3 rounded-2xl shadow-md bg-blue-700 hover:bg-blue-800 text-white w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;