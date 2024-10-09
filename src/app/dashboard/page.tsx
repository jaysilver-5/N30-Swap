'use client'
import React, {useState} from 'react'
import { Root } from "@/components/Root/Root";
import { Navbar } from "@/components/Navbar/Navbar";
import { Header } from "@/components/Header/Header";
import Swap from "@/components/Swap/Swap";
import History from "@/components/History";
import Profile from "@/components/Profile";

function Dashboard() {
  const [tab, setTab] = useState<string>('Swap')
  return (
    <Root>
      <div className="flex bg-[#1A1A1A] flex-col justify-between h-screen p-5">
        {/* Header at the top with padding */}
        <Header />

        {/* Middle content centered within the padding */}
        <div className="flex-grow flex items-center justify-center">
          {tab == 'Profile' && <Profile />}
          {tab == 'History' && <History />}
          {tab == 'Swap' && <Swap />}
        </div>

        {/* Navbar at the bottom, but fixed */}
        <Navbar
          onSwapClick={() => setTab('Swap')}
          onHistoryClick={() => setTab('History')}
          onProfileClick={() => setTab('Profile')}
        />
      </div>
    </Root>
  );
}

export default Dashboard;
