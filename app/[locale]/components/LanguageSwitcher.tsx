"use client";

import React, { useState, useRef } from "react";
import { useLocale } from "next-intl";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";

const LanguageSwitcher = () => {
  const locale = useLocale(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang: string) => {
    setDropdownOpen(false);
    window.location.href = `/${lang}`; 
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center bg-transparent hover:bg-[#00000011] border p-2 rounded-md text-black-50 cursor-pointer transition duration-300"
      >
        <GlobeIcon className="h-6 w-5 mr-1" />
        {locale.toUpperCase()} 
      </button>

      {dropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute top-full mt-2 left-0 bg-[#00000011]  backdrop-blur-md border border-black-500 rounded-md"
        >
          <li
            onClick={() => handleLanguageChange("fr")}
            className="cursor-pointer px-5 py-1 hover:bg-[#00000011] transition"
          >
            <Link href="/" locale="fr">
              FR
            </Link>
          </li>
          <li
            onClick={() => handleLanguageChange("en")}
            className="cursor-pointer px-5 py-1 hover:bg-[#00000011] transition"
          >
            <Link href="/" locale="en">
              EN
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
