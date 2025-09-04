import React from 'react';
import Logo from './ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-900 text-white">
      <div className="container mx-auto py-16 px-6 text-center flex flex-col items-center">
        <div className="mb-6">
          <Logo />
        </div>
        <h2 className="text-3xl font-extrabold mb-4">Contact Us</h2>
        <p className="max-w-xl mx-auto text-white/80 mb-8">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
        <a
          href="mailto:your-email@example.com" // Remember to change this email
          className="bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-opacity duration-300"
        >
          Email Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;