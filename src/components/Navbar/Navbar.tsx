"use client";

import React, { useState } from "react";
import Image from "next/image";

// Import highlighted and non-highlighted images
import ProfileHighlight from '@/public/images/ProfileHighlighted.png';
import HistoryHighlight from '@/public/images/HistoryHighlighted.png';
import SwapHighlight from '@/public/images/SwapHighlighted.png';

import ProfileIcon from '@/public/images/ProfileIcon.png';
import HistoryIcon from '@/public/images/HistoryIcon.png';
import SwapIcon from '@/public/images/SwapIcon.png';

interface NavbarProps {
  onSwapClick: () => void;
  onHistoryClick: () => void;
  onProfileClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSwapClick,
  onHistoryClick,
  onProfileClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize on Swap

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (index === 0) {
      onSwapClick();
    } else if (index === 1) {
      onHistoryClick();
    } else if (index === 2) {
      onProfileClick();
    }
  };

  return (
    <div className="fixed left-0 bottom-0 w-full mx-auto h-[60px] flex justify-between p-[5px] gap-1.5 z-20 bg-[#32363C] backdrop-blur-sm">
      {/* Swap Tab */}
      <div
        onClick={() => handleClick(0)}
        className="flex flex-col flex-1 justify-center items-center cursor-pointer transition-all"
      >
        <Image
          src={activeIndex === 0 ? SwapHighlight : SwapIcon} // Use valid image source
          alt="Swap"
          width={14}
          height={14}
        />
        <span
          className={`text-[12px] font-semibold ${
            activeIndex === 0 ? "text-[#48F366]" : "text-[#54575C]"
          }`}
        >
          Swap
        </span>
      </div>

      {/* Profile Tab */}
      <div
        onClick={() => handleClick(2)}
        className="flex flex-col flex-1 justify-center items-center cursor-pointer transition-all"
      >
        <Image
          src={activeIndex === 2 ? ProfileHighlight : ProfileIcon} // Use valid image source
          alt="Profile"
          width={14}
          height={14}
        />
        <span
          className={`text-[12px] font-semibold ${
            activeIndex === 2 ? "text-[#48F366]" : "text-[#54575C]"
          }`}
        >
          Profile
        </span>
      </div>

      {/* History Tab */}
      <div
        onClick={() => handleClick(1)}
        className="flex flex-col flex-1 justify-center items-center cursor-pointer transition-all"
      >
        <Image
          src={activeIndex === 1 ? HistoryHighlight : HistoryIcon} // Use valid image source
          alt="History"
          width={14}
          height={14}
        />
        <span
          className={`text-[12px] font-semibold ${
            activeIndex === 1 ? "text-[#48F366]" : "text-[#54575C]"
          }`}
        >
          History
        </span>
      </div>
    </div>
  );
};
