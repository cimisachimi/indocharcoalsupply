'use client';

import React from 'react';
import Logo from './ui/Logo';
import NavLink from './ui/Navlink';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';
import ReactCountryFlag from 'react-country-flag';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [isLangOpen, setIsLangOpen] = React.useState<boolean>(false);
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

  // Locale -> Flag map
  const localeFlags: Record<string, string> = {
    en: 'US',
    de: 'DE',
    ar: 'SA',
    nl: 'NL',
    zh: 'CN',
    fr: 'FR',
    ja: 'JP',
  };

  // Extract current locale from pathname
  const currentLocale =
    routing.locales.find((loc) => pathname.startsWith(`/${loc}`)) ||
    routing.defaultLocale;

  const changeLocale = (locale: string) => {
    const pathWithoutLocale = pathname.replace(
      new RegExp(`^/(${routing.locales.join('|')})`),
      ''
    );
    router.push(`/${locale}${pathWithoutLocale}`);
    setIsLangOpen(false);
  };

  // Language Switcher Component (reusable for desktop & mobile)
  const LanguageSwitcher = () => (
    <div className="relative">
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center gap-2 bg-zinc-800 px-2 py-1 rounded-md text-sm text-white border border-zinc-600 hover:bg-zinc-700"
        aria-label="Select language"
      >
        <ReactCountryFlag
          countryCode={localeFlags[currentLocale] || 'US'}
          svg
          style={{ width: '1.25em', height: '1.25em' }}
        />
        <span className="uppercase">{currentLocale}</span>
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${isLangOpen ? 'rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isLangOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md bg-zinc-800 shadow-lg border border-zinc-600">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => changeLocale(loc)}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-white hover:bg-zinc-700"
            >
              <ReactCountryFlag
                countryCode={localeFlags[loc] || 'US'}
                svg
                style={{ width: '1.25em', height: '1.25em' }}
              />
              <span className="uppercase">{loc}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

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

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />

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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
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

          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
