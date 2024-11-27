import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-6 text-gray-600 text-sm">
          <a href="#about" className="hover:text-green-500">
            About Us
          </a>
          <a href="#contact" className="hover:text-green-500">
            Contact
          </a>
          <a href="#privacy" className="hover:text-green-500">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-green-500">
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 mt-4 md:mt-0 text-sm">
          &copy; {new Date().getFullYear()} AgriNet. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
