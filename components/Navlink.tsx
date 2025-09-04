import React from 'react';

// Define the types for the component's props
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <li>
    <a href={href} className="text-white/90 hover:text-white transition-colors duration-300">
      {children}
    </a>
  </li>
);

export default NavLink;