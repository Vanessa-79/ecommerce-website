import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const categories = [
    { name: "Women's Nightwear", href: "/category/womens-nightwear" },
    { name: "Women's Gymwear", href: "/category/womens-gymwear" },
    { name: "Children's Clothing", href: "/category/childrens-clothing" },
    { name: "Sale", href: "/category/sale" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  const support = [
    { name: "Shipping Information", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "FAQ", href: "/faq" },
  ];

  const legal = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-navy-900 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-4xl text-yellow-500 font-bold">
              DreamWear
            </Link>
            <p className="mt-4 text-white max-w-md">
              Your destination for premium nightwear, gymwear, and children's
              clothing. Quality comfort that doesn't compromise on style.
            </p>
            <div className="mt-6 flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase hover:text-yellow-500 transition">
              Categories
            </h3>
            <ul className="mt-4 space-y-4">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase hover:text-yellow-500 transition">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase hover:text-yellow-500 transition">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              {support.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase hover:text-yellow-500 transition">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span className="text-white">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span className="text-white">support@dreamwear.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-500 mr-2 mt-1" />
                <span className="text-white">
                  123 Fashion St.
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} DreamWear. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-white hover:text-yellow-500 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
