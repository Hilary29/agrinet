import React, { useState, useRef } from "react";
import { GlobeIcon } from "lucide-react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("fr");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang: React.SetStateAction<string>) => {
    setLanguage(lang);
    setDropdownOpen(false);
    console.log("Langue sélectionnée :", lang);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center bg-transparent text-black-50 hover:bg-[#0000001b] border  p-2 rounded-md cursor-pointer"
      >
        <GlobeIcon className="h-6 w-5 mr-2" />
        {language.toUpperCase()}
      </button>

      {dropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute top-full mt-2 left-0 text-black-50 bg-[#ffffff60] backdrop-blur-md border border-white rounded-md "
        >
          <li
            onClick={() => handleLanguageChange("fr")}
            className="cursor-pointer px-5 py-1 hover:bg-[#0000004c]  transition"
          >
            FR
          </li>
          <li
            onClick={() => handleLanguageChange("en")}
            className="cursor-pointer px-5 py-1  hover:bg-[#0000004c]  transition"
          >
            EN
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
