import React from 'react'
import { Separator } from './ui/separator'
import Image from "next/image"
import logo from "../public/images/logo.png"


const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center px-[98px] py-[110px] gap-[10px] w-full bg-white">
      <div className="flex flex-col items-center justify-between gap-[112px] w-[1184px]">
        {/* Contact Section */}
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col items-start gap-[54px]">
            {/* Logo and Name */}
            <div className="flex flex-col gap-[24px]">
            <div className="flex items-center gap-2">     
            <Image 
              src={logo}
              width={164}
              height={44}
              alt="Agrinet logo"
              className=" w-10 h-[36px]"
            /> 
            <p className=" font-poppins text-heading-desktop-h4 font-semibold text-left text-secondary-600 ">
              AgriNet
            </p>                   
        </div>
              {/* Contact Information */}
              <div className="flex flex-col gap-[16px]">
                <p className="text-[16px] text-link leading-[24px]">
                  contact@agrinet.com
                </p>
                <p className="text-[16px] text-link leading-[24px]">
                  Yaoundé, Cameroon
                </p>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-[23.98px]">
              <div className="w-[19.18px] h-[19.18px] bg-link rounded-full"></div>
              <div className="w-[19.18px] h-[19.18px] bg-link rounded-full"></div>
              <div className="w-[19.18px] h-[19.18px] bg-link rounded-full"></div>
              <div className="w-[19.18px] h-[19.18px] bg-link rounded-full"></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-between gap-16">
            {/* Company Section */}
            <div className="flex flex-col gap-[28.78px]">
              <h4 className="text-[16px] font-medium text-secondary-700">Company</h4>
              <ul className="flex flex-col gap-[23.98px] text-[16px] text-black-400 leading-[24px]">
                <li>Home</li>
                <li>About Us</li>
                <li>Pricing</li>
                <li>How it Works</li>
                <li>Marketplace</li>
              </ul>
            </div>
            {/* Resources Section */}
            <div className="flex flex-col gap-[28.78px]">
              <h4 className="text-[16px] font-medium text-secondary-700">Resources</h4>
              <ul className="flex flex-col gap-[23.98px] text-[16px] text-black-400 leading-[24px]">
                <li>Blog</li>
                <li>Podcasts</li>
                <li>Educational Hub</li>
                <li>Case Studies</li>
              </ul>
            </div>
           
            {/* Support Section */}
            <div className="flex flex-col gap-[28.78px]">
              <h4 className="text-[16px] font-medium text-secondary-700">Support</h4>
              <ul className="flex flex-col gap-[23.98px] text-[16px] text-black-400 leading-[24px]">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Help Center</li>
                <li>User Guides</li>
              </ul>

              {/* Legal Section */}
           
            
            
          </div>
          <div className="flex flex-col gap-[28.78px]">
              <h4 className="text-[16px] font-medium text-secondary-700">Legal</h4>
              <ul className="flex flex-col gap-[23.98px] text-[16px] text-black-400 leading-[24px]">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
              
            </div>
          
        </div>
        </div><Separator className="my-4" />
        
      </div>
    </footer>
  )
}

export default Footer
