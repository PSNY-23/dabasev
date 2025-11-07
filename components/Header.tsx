'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navData = ['Home', 'About', 'Services', 'Partner with us', 'Contact'];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-bg-4 text-white bg-black backdrop-blur-md z-50 shadow-md border-b">
      {/* Top bar */}
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16 h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image/logo.png"
            alt="DabasEV Logo"
            width={120}
            height={60} 
            className="object-contain mt-4"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navData.map(item => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
              className="text-figma-md font-medium font-inter text-text-white-soft hover:text-bright-red transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-text-white-soft p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-black border-t transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-4 space-y-2">
          {navData.map(item => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
              className="text-base font-medium font-inter text-text-white-soft hover:text-primary-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
