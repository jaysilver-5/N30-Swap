import { jersey25 } from "@/theme/font";

export default function Splash() {
  return (
    <div className="flex-1 items-center justify-center text-green-400 p-4">
      <div className="text-center">
        <h1 className={`text-4xl font-bold mb-2 ${jersey25.className}`}>N3O Swap</h1>
        <p className="text-sm">Swap crypto at the best rates</p>
      </div>
    </div>
  );
}
