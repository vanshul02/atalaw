import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      <p className="text-sm">© {new Date().getFullYear()} ATA Law Partners & Associates. All rights reserved.</p>
    </footer>
  );
}

export default Footer;