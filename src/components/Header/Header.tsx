'use client'
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLangauge ] = useState('English')

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center relative">
      <h1 className="font-jersey text-green-400 text-xl font-bold">N3OSwap</h1>

      <div className="relative">
        <button 
          onClick={toggleDropdown}
          className="flex items-center justify-center text-sm text-white">
          <img src={`/images/${language}.png`} className="w-[22px] h-[22px] mr-[10px]" />
            {language}
          <FaCaretDown className="text-[12px]" />
        </button>

        {isDropdownOpen && (
          <div className="flex flex-col px-5 py-[10px] items-center justify-between w-28 h-40 rounded-[10px] bg-[#343434] absolute top-full right-[1px] z-50 mt-2 shadow-lg">
            <button 
              onClick={() => {
                toggleDropdown();
                setLangauge('English')
              }}
              className="flex items-center justify-between text-sm text-white">
              <img src='/images/English.png' className="w-[22px] h-[22px] mr-[10px]" />
                English
              <FaCaretDown className="text-[12px]" />
            </button>

            <button 
              onClick={() => {
                toggleDropdown();
                setLangauge('French')
              }}
              className="flex items-center justify-between text-sm text-white">
              <img src='/images/French.png' className="w-[22px] h-[22px] mr-[10px]" />
                French
              <FaCaretDown className="text-[12px]" />
            </button>

            <button 
              onClick={() => {
                toggleDropdown();
                setLangauge('Dutch')
              }}
              className="flex items-center w-full justify-between text-sm text-white">
              <img src='/images/Dutch.png' className="w-[22px] h-[22px] mr-[10px]" />
                Dutch
              <FaCaretDown className="text-[12px]" />
            </button>

            <button 
              onClick={() => {
                toggleDropdown();
                setLangauge('Chinese')
              }}
              className="flex items-center justify-between text-sm text-white">
              <img src='/images/Chinese.png' className="w-[22px] h-[22px] mr-[10px]" />
                Chinese
              <FaCaretDown className="text-[12px]" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
