import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from "../public/images/logo.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-28 px-6 sm:px-24 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-28">
          <div className="mb-14 lg:mb-0">
            <div className="flex items-center mb-6">
            <Link className="flex items-center gap-2" href={"/"}>
            <Image src={logo} alt="Agrinet logo" className="w-10 h-[36px]" />
            <p className="font-poppins text-heading-desktop-h4 font-semibold text-left text-secondary-700">
              AgriNet
            </p>
          </Link>           </div>
            <div className="text-[#626362] mb-14">
              <p>contact@agrinet.com</p>
              <p>Yaoundé, Cameroon</p>
            </div>
            <div className="flex space-x-6">
              <FaFacebook className="w-5 h-5 text-[#626362]" />
              <FaTwitter className="w-5 h-5 text-[#626362]" />
              <FaInstagram className="w-5 h-5 text-[#626362]" />
              <FaLinkedin className="w-5 h-5 text-[#626362]" />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-32">
            <div>
              <h3 className="text-[#072B1C] font-medium mb-7">Company</h3>
              <ul className="space-y-6">
                <li><Link href="/" className="text-[#4B4B4B]">Home</Link></li>
                <li><Link href="/about" className="text-[#4B4B4B]">About Us</Link></li>
                <li><Link href="/pricing" className="text-[#4B4B4B]">Pricing</Link></li>
                <li><Link href="/how-it-works" className="text-[#4B4B4B]">How it Works</Link></li>
                <li><Link href="/marketplace" className="text-[#4B4B4B]">Marketplace</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#072B1C] font-medium mb-7">Resources</h3>
              <ul className="space-y-6">
                <li><Link href="/blog" className="text-[#4B4B4B]">Blog</Link></li>
                <li><Link href="/podcasts" className="text-[#4B4B4B]">Podcasts</Link></li>
                <li><Link href="/educational-hub" className="text-[#4B4B4B]">Educational Hub</Link></li>
                <li><Link href="/case-studies" className="text-[#4B4B4B]">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#072B1C] font-medium mb-7">Support</h3>
              <ul className="space-y-6">
                <li><Link href="/contact" className="text-[#4B4B4B]">Contact Us</Link></li>
                <li><Link href="/faq" className="text-[#4B4B4B]">FAQ</Link></li>
                <li><Link href="/help-center" className="text-[#4B4B4B]">Help Center</Link></li>
                <li><Link href="/user-guides" className="text-[#4B4B4B]">User Guides</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#072B1C] font-medium mb-7">Legal</h3>
              <ul className="space-y-6">
                <li><Link href="/privacy-policy" className="text-[#4B4B4B]">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-[#4B4B4B]">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="text-[#4B4B4B]">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#E1E1E1] pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-[#626362] mb-4 sm:mb-0">© 2024 AgriNet Inc. All Rights Reserved.</p>
            <div className="flex items-center space-x-6">
              <Link href="/terms" className="text-[#626362]">Terms & Conditions</Link>
              <span className="text-[#626362]">•</span>
              <Link href="/privacy" className="text-[#626362]">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

