import { FaMinus, FaPlus } from "react-icons/fa6";

/**
 * Reusable quantity stepper.
 * onIncrease / onDecrease are provided by the parent so this component
 * stays purely presentational and reusable elsewhere (menu pages etc.)
 */
function QuantityButton({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-xl border border-orange-200 bg-orange-50">
      <button type="button" aria-label="Decrease quantity" onClick={onDecrease} className="flex h-8 w-8 items-center justify-center text-orange-600 transition hover:bg-orange-100 active:scale-90 sm:h-9 sm:w-9 cursor-pointer">
        <FaMinus className="text-[11px]" />
      </button>

      <span key={quantity} className="w-7 text-center text-sm font-bold text-slate-800 sm:w-8 [animation:pop_0.18s_ease-out]">
        {quantity}
      </span>

      <button type="button" aria-label="Increase quantity"
     onClick={onIncrease} className="flex h-8 w-8 items-center justify-center text-orange-600 transition hover:bg-orange-100 active:scale-90 sm:h-9 sm:w-9 cursor-pointer">
        <FaPlus className="text-[11px]" />
      </button>

      <style>{` @keyframes pop {   0% { transform: scale(1.35); opacity: 0.4; }   100% { transform: scale(1); opacity: 1; } } `}</style>
    </div>
  );
}

export default QuantityButton;