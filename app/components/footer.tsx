import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#28082c] text-[#f3e4f0] w-full py-10">
      <div className="flex flex-col items-center justify-center space-y-6">
        
        {/* Brand/Logo (Optional - remove if not needed) */}
        {/* <h3 className="text-2xl font-bold tracking-wider">CREATIVE EMMY</h3> */}

        {/* Social Icons with border circle effect */}
        <div className="flex space-x-4">
          {[<FaInstagram />, <FaTwitter />, <FaLinkedin />, <FaDribbble />].map((icon, index) => (
            <a 
              key={index} 
              href="#" 
              className="p-3 border border-[#f3e4f0]/30 rounded-full hover:bg-[#f3e4f0] hover:text-[#28082c] transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-24 h-[1px] bg-[#f3e4f0] opacity-30"></div>

        {/* Copyright */}
        <p className="text-xs font-light tracking-wide opacity-75">
          &copy; 2025 Creative Emmy. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;