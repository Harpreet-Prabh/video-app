import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold text-teal-500">
          <Link href="/">MySite</Link>
        </div>

        {/* Nav Links */}
        <div className="space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-teal-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/videos"
            className="text-gray-700 hover:text-teal-500 transition-colors duration-300"
          >
            Videos
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-teal-500 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-teal-500 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
