import React, { useState } from 'react';
import { MdSettings } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { PiSlidersHorizontalLight } from "react-icons/pi";

const Profile = () => {
  const [activeButton, setActiveButton] = useState<string | null>('settings');

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const isActive = (button: string) => activeButton === button;

  return (
    <div className="w-full flex flex-col bg-[#343434] max-w-[600px] rounded-lg py-[30px] px-[10px]">
      <h1 className='text-[20px] font-semibold text-[#48F366]'>Profile</h1>
      <div className='flex mt-[50px] mb-[50px] flex-col items-start gap-y-6'>
        
        <button 
          className='flex items-center justify-center gap-x-4'
          onClick={() => handleButtonClick('settings')}
        >
          <MdSettings className={`text-[24px] ${isActive('settings') ? 'text-[#48F366]' : 'text-[#919191]'}`} />
          <p className={`${isActive('settings') ? 'text-[#48F366]' : 'text-[#919191]'} text-[14px]`}>User setting</p>
        </button>
        
        <button 
          className='flex items-center justify-center gap-x-4'
          onClick={() => handleButtonClick('preferences')}
        >
          <PiSlidersHorizontalLight className={`text-[24px] ${isActive('preferences') ? 'text-[#48F366]' : 'text-[#919191]'}`} />
          <p className={`${isActive('preferences') ? 'text-[#48F366]' : 'text-[#919191]'} text-[14px]`}>Preferences</p>
        </button>
        
        <button 
          className='flex items-center justify-center gap-x-4'
          onClick={() => handleButtonClick('wallet')}
        >
          <FaWallet className={`text-[20px] ${isActive('wallet') ? 'text-[#48F366]' : 'text-[#919191]'}`} />
          <p className={`${isActive('wallet') ? 'text-[#48F366]' : 'text-[#919191]'} text-[14px]`}>Wallet</p>
        </button>

      </div>
    </div>
  );
};

export default Profile;
