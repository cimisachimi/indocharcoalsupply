import React from 'react';
import Logo from './ui/Logo';

const Footer: React.FC = () => {
  // You can reuse the navLinks from your Navbar component or define them here
  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#product', label: 'Product' },
    { href: '#our-values', label: 'Our Values' },
    { href: '#product-profile', label: 'Product Profile' },
    { href: '#packaging', label: 'Packaging' },
    { href: '#shipping', label: 'Shipping' },
  ];

  return (
    <footer id="contact" className="bg-zinc-900 text-white/70">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-4 md:text-left">
          {/* Column 1: Logo and About */}
          <div className="md:col-span-1">
            <div className="flex justify-center md:justify-start mb-4">
              <Logo />
            </div>
            <p className="text-sm">
              Established in 2021 with a strong commitment to providing the best, fastest, and most reliable services in the charcoal briquette industry.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {/* TODO: Replace with your address */}
              <li>123 Charcoal Street, Yogyakarta, Indonesia</li>
              {/* TODO: Replace with your email */}
              <li><a href="mailto:contact@indocharcoalsupply.com" className="hover:text-white">contact@indocharcoalsupply.com</a></li>
              {/* TODO: Replace with your phone number */}
              <li><a href="tel:+621234567890" className="hover:text-white">+62 123 4567 890</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* TODO: Replace '#' with your actual social media links */}
              <a href="#" aria-label="Facebook" className="hover:text-white"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><LinkedInIcon /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Indo Charcoal Supply. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

// Social Media SVG Icons
const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
);
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" /></svg>
);
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.499 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
);

export default Footer;