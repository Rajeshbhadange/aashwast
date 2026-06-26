import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="logo-link logo-container logo-hover-scale logo-glow logo-animation mb-6 inline-flex">
              <img
                src="https://horizons-cdn.hostinger.com/9f69b16c-5d81-4987-8690-e98de4801667/419d213ed223bb0eba9c636a1a6502fe.png"
                alt="AASHWAST Enterprises Private Limited - Blue shield with hands holding globe icon"
                className="logo-image h-[40px]"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transforming visions into impactful realities through strategic thinking and flawless execution.
            </p>
            <div className="flex gap-4">
              <FaLinkedinIn className="w-5 h-5 text-[#0D9488] hover:text-white transition-colors" />

              <FaXTwitter className="w-5 h-5 text-[#0D9488] hover:text-white transition-colors" />

              <FaFacebookF className="w-5 h-5 text-[#0D9488] hover:text-white transition-colors" />

              <FaInstagram className="w-5 h-5 text-[#0D9488] hover:text-white transition-colors" />
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block text-white">Quick Links</span>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#2563EB] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block text-white">Our Services</span>
            <ul className="space-y-3">
              <li className="text-gray-300">Media Monitoring</li>
              <li className="text-gray-300">Event Management</li>
              <li className="text-gray-300">Media Consultancy</li>
              <li className="text-gray-300">Business Strategy</li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block text-white">Contact Info</span>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0D9488] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">+91 90498 24666</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0D9488] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">aashwastepl@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0D9488] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Abhalmaya, Behind Godvari Chakki,Vyanktesh colony, Yashwant Nagar,
                  Jalgaon, Maharashtra 425002
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 AASHWAST. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#2563EB] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#2563EB] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;