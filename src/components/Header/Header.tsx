import { jersey25 } from "@/theme/font";
import { FaChevronDown, FaGlobe, FaWallet, FaClock } from "react-icons/fa";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className={`${jersey25.className} text-green-400 text-xl font-bold`}>N3OSwap</h1>
      <button className="flex items-center text-sm text-gray-400">
        <FaGlobe className="w-4 h-4 mr-1" />
        English
        <FaChevronDown className="w-4 h-4 ml-1" />
      </button>
    </header>
  );
}
