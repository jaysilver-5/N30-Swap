import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Splash() {
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade out
    }, 2000); // Delay before fade-out (e.g., 2 seconds)

    const redirectTimer = setTimeout(() => {
      router.push('/dashboard'); // Redirect after fade-out
    }, 3000); // Adjust to allow time for fade-out animation

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div
      className={`bg-[#1A1A1A] w-full h-screen flex flex-1 items-center justify-center text-green-400 p-4 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-full h-screen flex flex-col flex-1 items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-2">N3O<br /> Swap</h1>
        <p className="text-sm">Swap crypto at the best rates</p>
      </div>
    </div>
  );
}
