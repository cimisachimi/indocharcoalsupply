'use client'; // This is a client component because it uses hooks

import React from 'react';
import Logo from './ui/Logo';
import NavLink from './ui/Navlink';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  // An array of nav links with updated href for scrolling
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#product', label: 'Product' },
    { href: '#our-values', label: 'Our Values' },
    { href: '#product-profile', label: 'Product Profile' },
    { href: '#packaging', label: 'Packaging' },
    { href: '#shipping', label: 'Shipping' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-12 transition-colors duration-300 ease-in-out bg-zinc-900/90 backdrop-blur-sm">
      {/* Use a relative container to position the navigation */}
      <div className="container relative mx-auto flex h-full items-center justify-between px-6">
        {/* Logo will be on the left */}
        <Logo />

        {/* Centered Desktop Navigation using absolute positioning */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
          <ul className="flex items-center space-x-8 font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button will be on the right */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white" aria-label="Toggle menu">
            {isMenuOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (no changes needed here) */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-zinc-900/95 pb-4">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;