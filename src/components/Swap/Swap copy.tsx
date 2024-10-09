'use client'
import React, {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import UsdtIcon from "@/app/_assets/crypto/usdt.svg";
import QubicIcon from "@/app/_assets/crypto/qubic.svg";
import { Image } from "@telegram-apps/telegram-ui";
import { TbSettingsFilled } from "react-icons/tb";
import SwapImage from '@/public/images/Swap.png'
import { BackButton } from "@telegram-apps/sdk-react";

export default function Swap() {
  const [isGetDropdownOpen, setGetIsDropdownOpen] = useState(false);
  const [isPayDropdownOpen, setIsPayDropdownOpen] = useState(false);
  const [getCoin, setGetCoin ] = useState('USDT');
  const [payCoin, setPayCoin ] = useState('USDT');
  const [payNetwork, setPayNetwork] = useState('')
  const [getNetwork, setGetNetwork] = useState('')

  const togglePayDropdown = () => {
    setIsPayDropdownOpen((prev: any) => !prev);
  };

  const toggleGetDropdown = () => {
    setGetIsDropdownOpen((prev: any) => !prev);
  };

  return (
    <div className="w-full bg-[#343434] max-w-[600px] rounded-lg p-4">
      <div className="flex justify-between items-center">
        <span className="text-[#48F366] text-[20px] font-semibold font-jersey">Swap</span>
        <button className="bg-[#48F366] flex items-center justify-center gap-x-1 h-8 w-[123px] text-black text-[14px] py-1 px-2 rounded"><p>0.1 slippage</p><TbSettingsFilled className="text-[16px] text-black" /></button>
      </div>

      <div className="bg-[#DAFDE0] rounded-lg mt-10 px-5 py-3 flex w-full items-center justify-between">
        <div className="flex flex-1 w-full flex-col gap-y-5 justify-between relative items-start">
          <span className="text-black text-sm">You pay</span>
          <button
            onClick={togglePayDropdown}
            className="flex items-center justify-center  px-3 py-1 rounded-[5px] h-[32px] bg-[#a3f9b2]"
          >
            <img
              src={`/images/${payCoin}.png`}
              alt="Qubic"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="font-bold flex items-center justify-center gap-x-1 text-black">{payCoin}<FaChevronDown className="text-[10px] text-black self-center" /></span>
            <FaChevronDown className="text-[10px] text-black self-center" />
          </button>

          {isPayDropdownOpen && (
            <div className="flex flex-col gap-y-2 inset-0 px-5 items-center justify-between w-[300px] h-fit rounded-[10px] bg-[#343434] absolute top-full left-[1px] z-50 mt-2 shadow-lg py-[30px] shadow-lg">
              <input type="text" placeholder='Search by coin name or address' className='pl-2 outline-none focus:outline-none w-full h-[28px] bg-[#DAFDE0] rounded-[5px]' />
              <button onClick={() => {
                togglePayDropdown();
                setPayCoin('USDT');
                setPayNetwork('BEP 20')
              }} className="p-[10px] w-full flex items-center"><img className="w-[24px] h-[21px]" src="/images/USDT.png" /><p className="text-[13px] ml-1 font-medium">USDT</p><div className="bg-[#247933] w-8 h-[15px] text-[8px] flex items-center justify-center rounded-[4px] text-[#fff] font-medium ml-8">BEP 20</div></button>
              <button onClick={() => {
                togglePayDropdown();
                setPayCoin('USDT');
                setPayNetwork('BEP 20')
              }} className="p-[10px] w-full flex items-center"><img className="w-[24px] h-[21px]" src="/images/USDT.png" /><p className="text-[13px] ml-1 font-medium">USDT</p><div className="bg-[#247933] w-8 h-[15px] text-[8px] flex items-center justify-center rounded-[4px] text-[#fff] font-medium ml-8">ERC 20</div></button>
              <button onClick={() => {
                togglePayDropdown();
                setPayCoin('SOLANA');
              }} className="p-[10px] w-full flex items-center"><img className="w-[24px] h-[24px]" src="/images/SOLANA.png" /><p className="text-[13px] ml-1 font-medium">SOLANA</p></button>
              <button onClick={() => {
                togglePayDropdown();
                setPayCoin('QUBIC');
              }} className="p-[10px] w-full flex items-center"><img className="w-[26px] h-[25px]" src="/images/QUBIC.png" /><p className="text-[13px] ml-1 font-medium">QUBIC</p></button>
              <button onClick={() => {
                togglePayDropdown();
                setPayCoin('USDT');
                setPayNetwork('TON');
              }} className="p-[10px] w-full flex items-center"><img className="w-[24px] h-[21px]" src="/images/USDT.png" /><p className="text-[13px] ml-1 font-medium">USDT</p><div className="bg-[#247933] w-[24px] h-[15px] text-[8px] flex items-center justify-center rounded-[4px] text-[#fff] font-medium ml-8">TON</div></button>
              <button onClick={() => {
                togglePayDropdown();
                setPayCoin('USDT');
                setPayNetwork('SOL');
              }} className="p-[10px] w-full flex items-center"><img className="w-[24px] h-[21px]" src="/images/USDT.png" /><p className="text-[13px] ml-1 font-medium">USDT</p><div className="bg-[#247933]  w-[24px] h-[15px] text-[8px] flex items-center justify-center rounded-[4px] text-[#fff] font-medium ml-8">SOL</div></button>
            </div>)
          }
        </div>
        {/*  */}
        <div className="flex flex-grow flex-col gap-y-4 w-full justify-center items-end">
          <span className="text-black text-xs">Balance: 0.000</span>
          <div className="flex-col justify-center items-end flex">
            <input
                type="number"
                // value={2500}
                placeholder="0.00"
                className="bg-transparent text-black w-full focus:outline-none leading-3 outline-none text-right text-xl font-bold"
            />
            <p className="text-[8px] leading-3 relative -top-1 text-black">$2,500</p>
          </div>
        </div>
      </div>

      <button className="w-full flex items-center justify-center">
        <div className="bg-[#48F366] w-[42px] h-[42px] border-[3px] inset-0 z-30 border-black rounded-[10px] relative -top-1 flex items-center justify-center">
            <img src={SwapImage.src} />
        </div>
      </button>

      <div className="bg-[#DAFDE0] relative -top-2 flex flex-col gap-y-[10px] rounded-lg px-5 py-3">
        <div className="flex gap-y-5 justify-between items-center">
          <span className="text-black text-sm">You get</span>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={toggleGetDropdown}
            className="flex items-center justify-center  px-3 py-1 rounded-[5px] h-[32px] bg-[#a3f9b2]"
          >
            <img
              src={`/images/${getCoin}.png`}
              alt="Qubic"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="font-bold flex items-center justify-center gap-x-1 text-black">{getCoin}<FaChevronDown className="text-[10px] text-black self-center" /></span>
          </button>

          {isGetDropdownOpen && (
            <div className="flex flex-col gap-y-2 inset-0 px-5 items-center justify-between w-[300px] h-fit rounded-[10px] bg-[#343434] absolute botto-full left-[1px] z-50 mt-2 py-[30px] shadow-lg">
              <input type="text" placeholder='Search by coin name or address' className='pl-2 outline-none focus:outline-none w-full h-[28px] bg-[#DAFDE0] rounded-[5px]' />
              <button onClick={() => {
                toggleGetDropdown();
                setGetCoin('USDT');
                setGetNetwork('BEP 20')
              }} className="p-[10px] w-full flex items-center"><img className="w-[24px] h-[21px]" src="/images/USDT.png" /><p className="text-[13px] ml-1 font-medium">USDT</p><div className="bg-[#247933] w-8 h-[15px] text-[8px] flex items-center justify-center rounded-[4px] text-[#fff] font-medium ml-8">BEP 20</div></button>
              <button onClick={() => {
                toggleGetDropdown();
                setGetCoin('USDT');
                setGetNetwork('BEP 20')
              }} className="p-[10px] w-full flex items-center"><img className="w-[24px] h-[21px]" src="/images/USDT.png" /><p className="text-[13px] ml-1 font-medium">USDT</p><div className="bg-[#247933] w-8 h-[15px] text-[8px] flex items-center justify-center rounded-[4px] text-[#fff] font-medium ml-8">ERC 20</div></button>
              <button onClick={() => {
                toggleGetDropdown();
                setGetCoin('SOLANA');
              }} className="p-[10px] w-full flex items-center"><img className="w-[24px] h-[24px]" src="/images/SOLANA.png" /><p className="text-[13px] ml-1 font-medium">SOLANA</p></button>
              <button onClick={() => {
                toggleGetDropdown();
                setGetCoin('QUBIC');
              }} className="p-[10px] w-full flex items-center"><img className="w-[26px] h-[25px]" src="/images/QUBIC.png" /><p className="text-[13px] ml-1 font-medium">QUBIC</p></button>
              <button onClick={() => {
                toggleGetDropdown();
                setGetCoin('USDT');
                setGetNetwork('TON');
              }} className="p-[10px] w-full flex items-center"><img className="w-[24px] h-[21px]" src="/images/USDT.png" /><p className="text-[13px] ml-1 font-medium">USDT</p><div className="bg-[#247933] w-[24px] h-[15px] text-[8px] flex items-center justify-center rounded-[4px] text-[#fff] font-medium ml-8">TON</div></button>
              <button onClick={() => {
                toggleGetDropdown();
                setGetCoin('USDT');
                setGetNetwork('SOL');
              }} className="p-[10px] w-full flex items-center"><img className="w-[24px] h-[21px]" src="/images/USDT.png" /><p className="text-[13px] ml-1 font-medium">USDT</p><div className="bg-[#247933]  w-[24px] h-[15px] text-[8px] flex items-center justify-center rounded-[4px] text-[#fff] font-medium ml-8">SOL</div></button>
            </div>)
          }
          <div className="flex-col justify-center items-end flex">
            <input
                type="text"
                // value="1000000000"
                value={100000000}
                className="bg-transparent text-black focus:outline-none outline-none text-right text-xl font-bold w-32"
            />
            <p className="text-[8px] leading-3 relative -top-1 text-black">$2,500</p>
          </div>
        </div>
      </div>

      <button className="w-full bg-green-400 text-black font-bold py-3 rounded-lg mt-10">
        Swap
      </button>

      <p className="text-center flex items-center justify-center gap-x-2 text-gray-500 text-xs mt-4">
        <input type="checkbox" />I agree to N30 Swap&apos;s Terms of Use and Privacy Policy
      </p>
    </div>
  );
}
