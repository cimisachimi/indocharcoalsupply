'use client';

import React from 'react';
import Logo from './ui/Logo';
import NavLink from './ui/Navlink';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#product', label: 'Product' },
    { href: '#our-values', label: 'Our Values' },
    { href: '#packaging', label: 'Packaging' },
    { href: '#shipping', label: 'Shipping' },
    { href: '#our-team', label: 'Our Team' },
    { href: '#contact', label: 'Contact' },
  ];

  // Extract current locale from pathname (/en, /nl, etc.)
  const currentLocale =
    routing.locales.find((loc) => pathname.startsWith(`/${loc}`)) ||
    routing.defaultLocale;

  const changeLocale = (locale: string) => {
    const pathWithoutLocale = pathname.replace(
      new RegExp(`^/(${routing.locales.join('|')})`),
      ''
    );
    router.push(`/${locale}${pathWithoutLocale}`);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-12 transition-colors duration-300 ease-in-out bg-zinc-900/90 backdrop-blur-sm">
      <div className="container relative mx-auto flex h-full items-center justify-between px-6">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
          <ul className="flex items-center space-x-8 font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Right side: Language Switcher */}
        <div className="flex items-center space-x-4">
          <select
            value={currentLocale}
            onChange={(e) => changeLocale(e.target.value)}
            className="bg-zinc-800 text-white rounded-md px-2 py-1 text-sm border border-zinc-600"
            aria-label="Select language"
          >
            {routing.locales.map((loc) => (
              <option key={loc} value={loc}>
                {loc.toUpperCase()}
              </option>
            ))}
          </select>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-zinc-900/95 pb-4">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}

            {/* Language switcher also in mobile */}
            <li>
              <select
                value={currentLocale}
                onChange={(e) => changeLocale(e.target.value)}
                className="bg-zinc-800 text-white rounded-md px-2 py-1 text-sm border border-zinc-600"
                aria-label="Select language"
              >
                {routing.locales.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc.toUpperCase()}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;