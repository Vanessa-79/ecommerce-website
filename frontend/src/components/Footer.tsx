import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">DreamWear</h3>
            <p className="text-gray-300 mb-4">Luxury nightwear for the whole family. Quality comfort for peaceful nights.</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Size Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Adults</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Kids</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Baby</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-gray-300">+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-gray-300">support@dreamwear.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-gray-300">123 Sleep Street, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} DreamWear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;