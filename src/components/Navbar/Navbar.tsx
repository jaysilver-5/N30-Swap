"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { SwapIcon, HistoryIcon, ProfileIcon } from "@/components/Icons";

interface Route {
  path: string;
  title?: string;
  icon: React.ComponentType<{ color: string }>;
}

export const route: Route[] = [
  {
    path: "/swap",
    title: "Swap",
    icon: SwapIcon
  },
  {
    path: "/history",
    title: "History",
    icon: HistoryIcon
  },
  {
    path: "/profile",
    title: "Profile",
    icon: ProfileIcon
  }
];

export const Navbar = () => {
  const [active, setActive] = useState(-1);

  const router = useRouter();
  const pathname = usePathname();

  const updateActiveState = useCallback(() => {
    switch (pathname) {
      case "/swap":
        setActive(0);
        break;
      case "/history":
        setActive(1);
        break;
      case "/profile":
        setActive(2);
        break;
      default:
        setActive(-1);
    }
  }, [pathname]);

  useEffect(() => {
    updateActiveState();
  }, [pathname, updateActiveState]);

  return (
    <div className="fixed bottom-0 w-full mx-auto h-[60px] flex justify-between p-[5px] gap-1.5 z-20 bg-[#32363C] backdrop-blur-sm">
      {route.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            onClick={() => {
              router.push(item.path);
            }}
            className={`flex flex-col flex-1 justify-center items-center gap-[2px] rounded-xl cursor-pointer transition-all ${
              active === index ? "bg-[#212429] text-white" : "bg-transparent text-[#54575C]"
            }`}
          >
            <IconComponent color={active === index ? "#FFF" : "#54575C"} />
            <span className="text-[10.5px] font-semibold">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};
