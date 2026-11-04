"use client";

import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full max-w-[512px] mx-auto px-4 pt-0 pb-12 mt-6 text-center">
      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-1.5 mb-2">
          <a 
            href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.facebook.com/p/Tractor-Supply-Co-100064849474574/&ved=2ahUKEwjbibKbh--XAxU2mq8BHV3MBO8QFnoECB0QAQ&usg=AOvVaw1XmWqq4yO4SirhUjQqFQri" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#cc0000] hover:bg-[#cc0000] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-3.5 h-3.5 fill-current" />
          </a>
          <a 
            href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.instagram.com/tractorsupply/%3Fhl%3Den&ved=2ahUKEwig3MrIh--XAxWbT_UHHSqZOc8QFnoECBoQAQ&usg=AOvVaw3KKOyw9xfO5qCSs4JSLgIp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#cc0000] hover:bg-[#cc0000] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a 
            href="https://www.linkedin.com/company/target" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#cc0000] hover:bg-[#cc0000] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5 fill-current" />
          </a>
      </div>

   {/* Copyright */}
      <p className="text-[#182C54]/60 text-[10px] font-bold mb-4 tracking-tight italic">
        © 2026 All rights reserved.
      </p>
      
    </footer>
  );
};

export default Footer;


