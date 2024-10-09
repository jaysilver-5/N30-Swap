'use client';
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { TbSettingsFilled } from 'react-icons/tb';
import SwapImage from '@/public/images/Swap.png';
import { FaChevronLeft } from "react-icons/fa6";
import TransparentLoader from '../Loader/TransparentLoader';

function Dropdown({
  label,
  selectedCoin,
  selectedNetwork,
  setCoin,
  setNetwork,
  options,
  isOpen,
  toggleDropdown,
}: any) {
  return (
    <div className="flex flex-col gap-y-5 w-full">
      <span className="text-black text-sm">{label}</span>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center px-1 w-fit py-1 rounded-[5px] h-[32px] bg-[#a3f9b2]"
      >
        <img
          src={`/images/${selectedCoin}.png`}
          alt={selectedCoin}
          width={24}
          height={24}
          className="mr-2"
        />
        <span className="font-bold text-black flex items-center gap-x-1">
          {selectedCoin}
          <FaChevronDown className="text-[10px]" />
        </span>
      </button>

      {isOpen && (
        <div className="dropdown-content flex flex-col gap-y-2 w-[300px] h-fit rounded-[10px] bg-[#343434] absolute z-50 mt-2 shadow-lg py-[30px] px-5">
          <input
            type="text"
            placeholder="Search by coin name or address"
            className="pl-2 w-full h-[28px] bg-[#DAFDE0] rounded-[5px] outline-none"
          />
          {options.map((option: any) => (
            <button
              key={option.coin}
              onClick={() => {
                toggleDropdown();
                setCoin(option.coin);
                setNetwork(option.network);
              }}
              className="flex items-center p-[10px] w-full"
            >
              <img
                className="w-[24px] h-[21px]"
                src={`/images/${option.coin}.png`}
              />
              <p className="text-[13px] ml-1 font-medium">{option.coin}</p>
              {option.network && (
                <div className="bg-[#247933] w-8 h-[15px] text-[8px] flex items-center justify-center rounded-[4px] text-[#fff] font-medium ml-8">
                  {option.network}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Swap() {
  const [payDetails, setPayDetails] = useState({ coin: 'USDT', network: 'BEP 20' });
  const [getDetails, setGetDetails] = useState({ coin: 'QUBIC', network: '' });
  const [isPayDropdownOpen, setIsPayDropdownOpen] = useState(false);
  const [isGetDropdownOpen, setIsGetDropdownOpen] = useState(false);
  const [payAmount, setPayAmount] = useState<number>(0);
  const [getAmount, setGetAmount] = useState<number>(0);
  const [balance, setBalance] = useState<number>(500000.00);
  const [error, setError] = useState<string | null>(null);
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const togglePayDropdown = () => setIsPayDropdownOpen(!isPayDropdownOpen);
  const toggleGetDropdown = () => setIsGetDropdownOpen(!isGetDropdownOpen);
  const [success, setSuccess] = useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const [stringAmount, setStringAmount] = useState<string>('');
  const [flow, setFlow] = useState(1);

  const coinOptions = [
    { coin: 'USDT', network: 'BEP 20', rate: 1 },
    { coin: 'USDT', network: 'ERC 20', rate: 1 },
    { coin: 'SOLANA', network: '', rate: 0.5 },
    { coin: 'QUBIC', network: '', rate: 0.8 },
    { coin: 'USDT', network: 'TON', rate: 1 },
    { coin: 'USDT', network: 'SOL', rate: 1 },
  ];

  const handleSumbitButton = () => {
    formatNumberToString(payAmount!)
    setFlow(2)
  }

  const handleCalculateAmount = () => {
    if (flow === 2) {
      setLoading(true); // Trigger loading state

      // Simulate a 3-second loading period
      setTimeout(() => {
        setLoading(false); // End loading
        // Perform additional logic after loading completes, like showing success
        console.log('Loading complete, perform success logic here.');
        setSuccess(true)
      }, 3000);
    } else {
      // Logic for flow == 1, calculating amount
      console.log('Calculate amount logic for flow == 1');
    }
  };

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const calculatePayAmountByPercentage = (percent: number) => {
    const newPayAmount = balance * percent;
    setPayAmount(newPayAmount);
    if (newPayAmount > balance) {
      setError('Pay amount exceeds available balance');
    } else {
      setError(null);
    }
  };

  const formatNumberToString = (num: number) => {
        // Convert number to string and format it with commas
        const formattedString = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        setStringAmount(formattedString);
    };

  const handlePayInputChange = (value: string) => {
    const parsedValue = parseFloat(value);
    setPayAmount(parsedValue);
    if (parsedValue > balance) {
      setError('Pay amount exceeds available balance');
    } else {
      setError(null);
    }
  };

  const calculateGetAmount = () => {
    const selectedPayCoin = coinOptions.find(
      (option) => option.coin === payDetails.coin
    );
    const selectedGetCoin = coinOptions.find(
      (option) => option.coin === getDetails.coin
    );
    if (selectedPayCoin && selectedGetCoin) {
      setGetAmount(payAmount * selectedPayCoin.rate / selectedGetCoin.rate);
    }
  };

  const switchCoins = () => {
    const tempPayDetails = payDetails;
    setPayDetails(getDetails);
    setGetDetails(tempPayDetails);
    // Reset amounts when switching coins
    setPayAmount(0);
    setGetAmount(0);
    setError(null);
  };

  useEffect(() => {
    calculateGetAmount();
  }, [payAmount, payDetails, getDetails]);

  return (
    <div className="w-full bg-[#343434] max-w-[600px] rounded-lg p-4">
      {loading && <TransparentLoader />}
      {flow == 2 && <button onClick={() => setFlow(1)} className='w-full flex items-center justify-end pt-2 pb-[30px]'>
        <FaChevronLeft className='text-[18px] text-[#48F366]'/>
      </button>}
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-[#48F366] text-[20px] font-semibold font-jersey">
          Swap
        </span>
        <button className="bg-[#48F366] flex items-center gap-x-1 h-8 w-[123px] text-black text-[14px] py-1 px-2 rounded">
          <p>0.1 slippage</p>
          <TbSettingsFilled className="text-[16px]" />
        </button>
      </div>

      {flow == 1 && (
      <div>
        <div className="bg-[#DAFDE0] rounded-lg mt-10 px-3 py-3 flex gap-y-4 w-full justify-between items-center">
          <Dropdown
            label="You pay"
            selectedCoin={payDetails.coin}
            selectedNetwork={payDetails.network}
            setCoin={(coin: string) => setPayDetails((prev) => ({ ...prev, coin }))}
            setNetwork={(network: string) =>
              setPayDetails((prev) => ({ ...prev, network }))
            }
            options={coinOptions}
            isOpen={isPayDropdownOpen}
            toggleDropdown={togglePayDropdown}
          />
          <div className="flex-col justify-end items-end flex">
            <div className="flex items-center gap-x-[5px] justify-end">
              <p className="text-black text-[8px]">Balance: {balance}</p>
              <div
                className="focus:bg-[#48F366] hover:bg-[#48F366] w-[21px] h-[15px] rounded-[3px] bg-[#919191] flex justify-center items-center text-[#c1c1c1] text-[8px]"
                onClick={() => calculatePayAmountByPercentage(0.5)}
              >
                50%
              </div>
              <div
                className="hover:bg-[#48F366] w-[25px] h-[15px] rounded-[3px] bg-[#919191] flex justify-center items-center text-[#c1c1c1] text-[8px]"
                onClick={() => calculatePayAmountByPercentage(1)}
              >
                100%
              </div>
            </div>
            <input
              value={payAmount || ''}
              onChange={(e) => handlePayInputChange(e.target.value)}
              placeholder="0.00"
              className="bg-transparent text-black w-full text-right text-xl font-bold outline-none focus:outline-none"
            />
            <p className="text-[8px] leading-3 relative -top-1 text-black">{'$' + payAmount || ''}</p>
            
          </div>
        </div>


        <button onClick={switchCoins} className="w-full flex -top-1 relative items-center justify-center">
          <div className="bg-[#48F366] w-[42px] h-[42px] border-[3px] inset-0 z-30 border-black rounded-[10px] flex items-center justify-center relative">
            <img src={SwapImage.src} />
          </div>
        </button>

        <div className="bg-[#DAFDE0] relative -top-2 flex justify-end item gap-y-[10px] rounded-lg px-5 py-3">
          <Dropdown
            label="You get"
            selectedCoin={getDetails.coin}
            selectedNetwork={getDetails.network}
            setCoin={(coin: string) => setGetDetails((prev) => ({ ...prev, coin }))}
            setNetwork={(network: string) =>
              setGetDetails((prev) => ({ ...prev, network }))
            }
            options={coinOptions}
            isOpen={isGetDropdownOpen}
            toggleDropdown={toggleGetDropdown}
          />
          <div className="flex-col justify-end items-end flex">
            <input
              value={getAmount || ''}
              disabled
              placeholder="0.00"
              className="bg-transparent text-black text-right text-xl font-bold w-32"
            />
            <p className="text-[8px] leading-3 relative -top-1 text-black">{'$' + getAmount || '$--'}</p>
          </div>
        </div>
      </div>
      )}

      {flow == 2 && (
        <div>
          <div className='bg-[#DAFDE0] w-full h-[90px] rounded-[10px] mt-[40px] flex flex-col py-3 p-4 justify-between items-center'>
            <p className='text-[12px] text-black w-full'>Swap</p>
            <div className='flex items-center justify-center gap-x-1'>
              <p className='text-[16px] font-semibold text-black'>{stringAmount + 'USD'}</p>
              <img src='/images/And.png' className='w-5 h-5'/>
              {/* Use payDetails.coin or getDetails.coin depending on your use case */}
              <p className='text-[16px] font-semibold text-black'>{getAmount + getDetails.coin}</p>
            </div>
          </div>
          <input
            type='text'
            onChange={(e: any) => setAddress(e.target.value)}
            placeholder='Enter receiving wallet address here'
            className='text-black px-5 placeholder:text-black placeholder:text-[12px] bg-[#DAFDE0] w-full h-[55px] rounded-[10px] mt-[20px]'
          />
        </div>
      )}


      {error && <div className='w-full flex m-auto items-center justify-center'><p className="text-red-500 text-xs m-auto">{error}</p></div>}

      {/* Terms and Swap Button */}
      <button
        onClick={() => {handleSumbitButton(); handleCalculateAmount()}}
        disabled={!isChecked || getAmount == 0}
        className={`w-full text-black font-bold py-3 rounded-lg mt-10
          ${flow == 1 && getAmount == 0 ? 'bg-[#247A33]' : ''}
          ${flow == 2 && address == '' ? 'bg-[#247A33]' : ''}
          ${flow == 1 && getAmount != 0 || (flow == 2 && address != '') ? 'bg-[#48F366]' : ''}
        `}
      >
        {loading ? 'Loading...' : 
          success ? 'Successful' : 
          flow === 1
            ? (getAmount === 0 ? 'Enter an amount' : 'Calculate amount')
            : 'Swap'}
      </button>

      <p className="text-center text-gray-500 mt-4 items-center justify-center flex gap-x-1 text-[9px]">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='w-[10px] h-[10px]'
        />
        I agree to N30 Swap&apos;s Terms of Use and Privacy Policy
      </p>
    </div>
  );
}
