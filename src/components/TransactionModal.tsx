// components/TransactionModal.tsx
import { Transaction } from './History';
import { IoClose } from "react-icons/io5";

interface TransactionModalProps {
  transaction: Transaction;
  onClose: () => void;
}

const TransactionModal = ({ transaction, onClose }: TransactionModalProps) => {
  return (
    <div className="w-full h-screen bg-opacity-90 fixed items-center justify-center flex bg-[#1A1A1A] inset-0 p-4 ">
      <div className="flex flex-col gap-y-[10px] w-full opacity-100 bg-[#343434] max-w-[600px] rounded-[20px] py-10 px-[10px]">
        <div className='flex items-center justify-end w-full'>
            <button onClick={onClose} className='w-5 h-5 rounded-full bg-[#48F366]  flex items-center justify-center '><IoClose className='text-black font-semibold'/></button>
        </div>
        <div className='mt-6w-full p-[10px] flex flex-col justify-between items-center bg-[#DAFDE0] h-[150px] rounded-[10px]'>
            <h1 className='text-[1px] font-semibold text-black'>Details</h1>
            {transaction.type == 'Swap' ? <div className='flex items-center justify-center gap-x-1'>
              <p className='text-[16px] font-semibold text-black'>{transaction.usd + 'USD'}</p>
              <img src='/images/And.png' className='w-5 h-5'/>
              {/* Use payDetails.coin or getDetails.coin depending on your use case */}
              <p className='text-[16px] font-semibold text-black'>{transaction.amount}</p>
            </div> : 
            <div className='flex w-full gap-x-1 items-center justify-center'>
                <img src='/images/Up.png'/> 
                <p className='text-[16px] font-semibold text-black'>{transaction.amount}</p>
            </div>
            }
            <div className='w-full px-[12px] py-[5px] rounded-[10px] bg-[#343434] flex items-center flex-col justify-between'>
                <p className='text-[#48F366] text-[10px]'>Recipient address</p>
                <p className='text-[#fff] text-center text-[10px]'>UQDJR2H90m5j8dBqzwoNdx3u-QaLOvG_CVBms3ZD</p>
                <p className='text-[#fff] text-[8px]'>Swapped on 3 Oct, {transaction.time}</p>
            </div>
        </div>
        {/* <h3>Transaction Details</h3>
        <p>Amount: {transaction.amount}</p>
        {transaction.usd && <p>USD Equivalent: {transaction.usd}</p>}
        <p>Recipient Address: {transaction.recipient}</p>
        <button onClick={onClose}>Close</button> */}

        <button className='mt-6 rounded-[10px] text-black font-semibold w-full h-[46px] bg-[#48F366]'>View Details</button>
      </div>
    </div>
  );
};

export default TransactionModal;
