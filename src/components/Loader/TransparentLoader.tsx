import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

function TransparentLoader() {
  return (
    <div className="w-full h-screen opacity-70 fixed items-center justify-center flex bg-[#1A1A1A] inset-0">
      <HashLoader
        color='#48F366'
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default TransparentLoader;
