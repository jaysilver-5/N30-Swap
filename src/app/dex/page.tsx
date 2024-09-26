"use client";

import { useState, useEffect } from "react";
import { Button, Input } from "@telegram-apps/telegram-ui";
import { FiChevronDown, FiRefreshCw, FiHelpCircle } from "react-icons/fi";

export default function DEXPage() {
  const [baseNetwork, setBaseNetwork] = useState("Ethereum");
  const [quoteNetwork, setQuoteNetwork] = useState("Bitcoin");
  const [baseToken, setBaseToken] = useState("ETH");
  const [quoteToken, setQuoteToken] = useState("BTC");
  const [baseAmount, setBaseAmount] = useState("0.01462578");
  const [quoteAmount, setQuoteAmount] = useState("0.00054618");
  const [exchangeType, setExchangeType] = useState("Best Rate");

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg animate-fade-in">
      <div className="flex space-x-2 mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-300 hover:bg-blue-600">
          Exchange
        </button>
        <button className="bg-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gray-600">
          Buy
        </button>
        <button className="bg-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gray-600">
          Sell
        </button>
        <div className="ml-auto text-sm text-gray-400 self-center">Step 1/4</div>
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          className={`${exchangeType === "Best Rate" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700 hover:bg-gray-600"} flex-grow py-2 rounded-md font-semibold transition-colors duration-300`}
          onClick={() => setExchangeType("Best Rate")}
        >
          Best Rate
        </button>
        <button
          className={`${exchangeType === "Fixed Rate" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-700 hover:bg-gray-600"} flex-grow py-2 rounded-md font-semibold transition-colors duration-300`}
          onClick={() => setExchangeType("Fixed Rate")}
        >
          Fixed Rate
        </button>
      </div>

      <div className="flex items-center mb-4 text-gray-400 hover:text-gray-300 cursor-pointer transition-colors duration-300">
        <span className="text-sm">What is Best Rate and Fixed Rate</span>
        <FiHelpCircle className="w-4 h-4 ml-1" />
      </div>

      <div className="bg-gray-800 p-4 rounded-md mb-4 shadow-inner">
        <div className="text-sm text-gray-400 mb-2">You send</div>
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={baseAmount}
            onChange={(e) => setBaseAmount(e.target.value)}
            className="bg-transparent text-xl font-semibold focus:outline-none w-2/3"
          />
          <button className="bg-gray-700 px-3 py-2 rounded flex items-center hover:bg-gray-600 transition-colors duration-300">
            {baseToken}
            <span className="text-xs ml-1 text-gray-400">ERC20</span>
            <FiChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
          <FiRefreshCw className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      <div className="bg-gray-800 p-4 rounded-md mb-6 shadow-inner">
        <div className="text-sm text-gray-400 mb-2">You get</div>
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={quoteAmount}
            onChange={(e) => setQuoteAmount(e.target.value)}
            className="bg-transparent text-xl font-semibold focus:outline-none w-2/3"
          />
          <button className="bg-gray-700 px-3 py-2 rounded flex items-center hover:bg-gray-600 transition-colors duration-300">
            {quoteToken}
            <span className="text-xs ml-1 text-gray-400">BTC</span>
            <FiChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      <button className="bg-blue-500 text-white w-full py-3 rounded-md font-semibold mb-4 hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">
        EXCHANGE
      </button>
    </div>
  );
}
