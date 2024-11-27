"use client"

import * as React from "react"

import logo from "../public/images/Agrinet.png"


import Image from "next/image"


export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full  z-50">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image 
            src={logo}
            width={164}
            height={44}
            alt="Picture of the author"
            className=" w-32 h-8"
          />
        </div>
        {/* Navigation */}
        <nav className="hidden lg:flex gap-6 ">
          <a href="#login" className="text-black-100 font-medium hover:text-green-500">
            Login
          </a>
          <a href="#features" className="text-black-100 font-medium hover:text-green-500">
            Features
          </a>
          <a href="#solutions" className="text-black-100 font-medium hover:text-green-500">
            Solutions
          </a>
          <a href="#marketplace" className="text-black-100 font-medium hover:text-green-500">
            Marketplace
          </a>
          <a href="#pricing" className="text-black-100 font-medium hover:text-green-500">
            Pricing
          </a>
        </nav>
        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a href="#login" className="text-black-100 font-medium hover:text-green-500">
            Login
          </a>
          <a href="#login" className="text-black-100 font-medium hover:text-green-500">
            Login
          </a>
          <a href="#login" className="text-black-100 font-medium hover:text-green-500">
            Login
          </a>
          <button className="bg-green-600 text-white-50 px-6 py-2 rounded-md font-medium hover:bg-green-700">
            Create a Free Account
          </button>
        </div>
      </div>
   </header>

  )
}

