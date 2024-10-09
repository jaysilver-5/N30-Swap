// components/History.tsx
import { useState } from 'react';
import TransactionModal from './TransactionModal';

export interface Transaction {
  id: string;
  type: string;
  amount: string;
  usd: string | null;
  time: string;
  recipient: string;
}

const transactionsData: Transaction[] = [
  {
    id: '1',
    type: 'Swap',
    amount: '+1000000000QUBIC',
    usd: '-2,500USD',
    time: '16:03',
    recipient: 'UGDJR2H9m58pBwehw3u3rQuUoVG_CV8mSZD',
  },
  {
    id: '2',
    type: 'Sent',
    amount: '-1000000000QUBIC',
    usd: null,
    time: '16:03',
    recipient: 'UGDJR2H9m58pBwehw3u3rQuUoVG_CV8mSZD',
  },
];

// Function to truncate wallet address
const truncateAddress = (address: string): string => {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

const History = () => {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="w-full bg-[#343434] max-w-[600px] rounded-lg p-4">
      <h2 className='text-[#48F366] text-[20px] font-medium'>History</h2>

      <h2 className='text-[#48F366] text-[20px] font-medium mt-[30px]'>Today</h2>
      <ul className='flex flex-col gap-y-[10px] mb-[30px]'>
        {transactionsData.map((transaction) => (
            <li key={transaction.id} className="transaction-item w-full bg-[#DAFDE0] flex items-center justify-between h-[78px] rounded-[10px] p-[10px]" onClick={() => handleTransactionClick(transaction)}>
                <div className="flex items-center space-x-4 w-full">
                    <div className="flex items-center border justify-center">
                    {transaction.type === 'Sent' ? (
                        <img src='/images/SentHis.png' width={31} height={31} />
                    ) : (
                        <img src='/images/SwapHis.png' width={31} height={31} />
                    )}
                    </div>

                    <div className="flex-grow flex flex-col justify-between">
                    <h1 className="text-[22px] font-medium text-black">{transaction.type}</h1>
                    <p className="text-[12px] text-black">{truncateAddress(transaction.recipient)}</p>
                    </div>
                </div>

                <div className="flex flex-col items-end justify-center h-full flex-grow">

                    <p className="text-black text-[16px] font-semibold">{transaction.amount}</p>
                    {transaction.usd && <p className="text-black text-[16px] font-semibold">{transaction.usd}</p>}
                    <p className='text-[#919191] text-[12px] font-semibold'>{transaction.time}</p>
                </div>
            </li>

        ))}
      </ul>
      {selectedTransaction && (
        <TransactionModal transaction={selectedTransaction} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default History;
