"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import siteConfig from "@/lib/siteConfig";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center ">
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span
                  className="ml-3 text-xl font-bold"
                  style={{
                    color: siteConfig.primaryColor,
                    fontFamily: siteConfig.fontFamily,
                  }}
                >
                  {siteConfig.name}
                </span>
              </Link>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-md text-white transition-colors duration-200"
                style={{ backgroundColor: siteConfig.primaryColor }}
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* MObile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white rounded-md mt-4"
                style={{ backgroundColor: siteConfig.primaryColor }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
