import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  return (
    <div className="w-full h-screen items-center justify-center flex bg-[#1A1A1A]">


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

export default Loader;
