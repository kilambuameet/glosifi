import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-Black text-2xl font-bold">
              Glosifi
              <sup class="uppercase text-xs text-brown-200 ms-1 ">beta version</sup>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-black hover:text-gray-200 px-3 py-2 rounded-md text-md font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-200 px-3 py-2 rounded-md text-md font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-200 px-3 py-2 rounded-md text-md font-medium"
            >
              Contact Us
            </a>
            <button className="px-3 py-2 capitalize text-md font-medium text-black border-brown-500 hover:text-gray-200 hover:bg-black rounded-full border-2">
              Login | Signup
            </button>
            <button className="bg-brown-300 px-3 py-2 capitalize text-md font-medium text-white hover:text-gray-200 rounded-full border-2">
              Grow My Business
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <a
          href="#"
          className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium"
        >
          Home
        </a>
        <a
          href="#"
          className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium"
        >
          About
        </a>
        <a
          href="#"
          className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium"
        >
          Services
        </a>
        <a
          href="#"
          className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
