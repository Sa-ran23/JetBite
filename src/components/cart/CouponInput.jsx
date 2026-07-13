import { useState } from "react";
import { FaTag } from "react-icons/fa6";

function CouponInput({ onApply }) {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(null); // null | "applied" | "invalid"

  const handleApply = () => {
    if (!code.trim()) return;
    // Placeholder validation — replace with real coupon logic when available.
    const isValid = code.trim().toUpperCase() === "JETBITE50" || code.trim().toUpperCase() === "WELCOME";
    setStatus(isValid ? "applied" : "invalid");
    if (isValid && onApply) onApply(code.trim().toUpperCase());
  };

  return (
    <div>
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 !p-1.5 focus-within:border-orange-300 focus-within:ring-4 focus-within:ring-orange-100">
        <FaTag className="!ml-2 shrink-0 text-slate-400" />
        <input type="text" value={code} onChange={(e) => {   setCode(e.target.value);   setStatus(null); }} placeholder="Enter coupon code" className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
        <button type="button" onClick={handleApply} className="shrink-0 rounded-xl bg-slate-900 !px-4 !py-2 text-xs font-bold text-white transition hover:bg-slate-800 active:scale-95 cursor-pointer" >
          Apply
        </button>
      </div>

      {status === "applied" && (
        <p className="!mt-2 text-xs font-semibold text-emerald-600">
          Coupon applied! Discount added to your total.
        </p>
      )}
      {status === "invalid" && (
        <p className="!mt-2 text-xs font-semibold text-red-500">
          Invalid coupon code. Try "WELCOME".
        </p>
      )}
    </div>
  );
}

export default CouponInput;