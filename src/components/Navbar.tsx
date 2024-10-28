"use client";
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
  return (
    <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/"
             className="text-white font-bold text-xl">MyPortfolio
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/"
             className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home
            </Link>
            <Link href="/about"
               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About
            </Link>
            <Link href="/projects"
               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects
            </Link>
            <Link href="/services"
               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services
            </Link>
            <Link href="/contact"
               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            className="bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/"
             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home
          </Link>
          <Link href="/about"
             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About
          </Link>
          <Link href="/projects"
             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects
          </Link>
          <Link href="/services"
             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services
          </Link>
          <Link href="/contact"
             className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact
          </Link>
        </div>
      </div>
    )}
  </nav>
  )
}

export default Navbar