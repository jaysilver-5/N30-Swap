import { FaChevronDown } from "react-icons/fa";
import UsdtIcon from "@/app/_assets/crypto/usdt.svg";
import QubicIcon from "@/app/_assets/crypto/qubic.svg";
import { Image } from "@telegram-apps/telegram-ui";

export default function Swap() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400">Swap</span>
        <button className="bg-green-400 text-black text-xs py-1 px-2 rounded">0.1 slippage</button>
      </div>

      <div className="bg-gray-700 rounded-lg p-3 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-sm">You pay</span>
          <span className="text-gray-400 text-xs">Balance: 0.000</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src={UsdtIcon.src} alt="Qubic" width={32} height={32} className="mr-2" />
            <span className="font-bold">USDT</span>
            <FaChevronDown className="w-4 h-4 ml-1" />
          </div>
          <input
            type="text"
            value="2,500"
            className="bg-transparent text-right text-xl font-bold w-24"
            readOnly
          />
        </div>
      </div>

      <div className="bg-gray-700 rounded-lg p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-sm">You get</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src={QubicIcon.src} alt="Qubic" width={32} height={32} className="mr-2" />
            <span className="font-bold">Qubic</span>
            <FaChevronDown className="w-4 h-4 ml-1" />
          </div>
          <input
            type="text"
            value="1000000000"
            className="bg-transparent text-right text-xl font-bold w-32"
            readOnly
          />
        </div>
      </div>

      <button className="w-full bg-green-400 text-black font-bold py-3 rounded-lg mt-4">
        Swap
      </button>

      <p className="text-center text-gray-500 text-xs mt-4">
        I agree to N30 Swap&apos;s Terms of Use and Privacy Policy
      </p>
    </div>
  );
}
