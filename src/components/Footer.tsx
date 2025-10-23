// src/components/Footer.jsx
import { NavLink } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsFacebook, BsTiktok } from 'react-icons/bs';

const Footer = () => {
  return (
    // 1. Main footer container with dark theme and padding
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 2. Responsive grid for link columns */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Menu */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/" className="hover:text-white hover:underline">Home</NavLink></li>
              <li><NavLink to="/About" className="hover:text-white hover:underline">About</NavLink></li>
              <li><NavLink to="/Programs" className="hover:text-white hover:underline">Programs</NavLink></li>
              <li><NavLink to="/Contact" className="hover:text-white hover:underline">Contact</NavLink></li>
              <li><NavLink to="/Donate" className="hover:text-white hover:underline">Donate</NavLink></li>
            </ul>
          </div>

          {/* Column 2: Services (Adjust links as needed) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/services/service-1" className="hover:text-white hover:underline">Service One</NavLink></li>
              <li><NavLink to="/services/service-2" className="hover:text-white hover:underline">Service Two</NavLink></li>
              <li><NavLink to="/services/service-3" className="hover:text-white hover:underline">Service Three</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+25575002389408" className="hover:text-white hover:underline">+255 750 023 894</a></li>
              {/* 'break-all' prevents a long email from breaking the layout */}
              <li><a href="mailto:infothesun@gmail.com" className="hover:text-white hover:underline break-all">infothesun@gmail.com</a></li>
            </ul>
          </div>

          {/* Column 4: Follow Us (Social Media) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <BsLinkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <BsInstagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <BsFacebook size={20} />
              </a>
              <a href="#" aria-label="Tiktok" className="hover:text-white">
                <BsTiktok size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* 3. Divider line */}
        <hr className="my-8 border-gray-700" />

        {/* 4. Bottom bar with Logo and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          {/* Logo - styled like your Nav */}
          <h2 className="text-xl font-bold text-white mb-4 sm:mb-0">
            <span className="text-orange-400">The</span> Sun
          </h2>
          <p>&copy; {new Date().getFullYear()} The Sun. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;