import { FaIndianRupeeSign, FaTrashCan } from "react-icons/fa6";
import { LuSquareDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import QuantityButton from "./QuantityButton";

function CartItem({ item, quantity, unitPrice, alts, onIncrease, onDecrease, onRemove }) {
  const info = item.card.info;
  const isVeg = info.itemAttribute?.vegClassifier === "VEG";

  return (
    <div className="flex gap-4 border-b border-slate-100 !py-5 last:border-b-0 sm:gap-5">
      {/* image */}
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-24 sm:w-24">
        {info.imageId ? (
          <img src={alts + info.imageId} alt={info.name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">No image</div>
        )}
      </div>

      {/* details */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border ${isVeg ? "border-emerald-600" : "border-red-500"}`}>
                <GoDotFill className={`text-[8px] ${isVeg ? "text-emerald-600" : "text-red-500"}`} />
              </span>
              <h3 className="truncate text-sm font-bold text-slate-900 sm:text-base">{info.name}</h3>
            </div>
            <p className="!mt-1 truncate text-xs text-slate-400 sm:text-sm">
              {info.restaurantName || "JetBite Kitchen"}
            </p>
          </div>

          <button type="button" aria-label="Remove item" onClick={onRemove} className="shrink-0 rounded-full !p-2 text-slate-300 transition hover:bg-red-50 hover:text-red-500 cursor-pointer">
            <FaTrashCan className="text-sm" />
          </button>
        </div>

        <div className="!mt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 text-sm font-semibold text-slate-600">
            <FaIndianRupeeSign className="text-xs" />
            {unitPrice.toFixed(2)}
            <span className="text-xs font-normal text-slate-400">/ item</span>
          </div>

          <QuantityButton quantity={quantity} onIncrease={onIncrease} onDecrease={onDecrease} />
        </div>

        <div className="!mt-2 flex items-center justify-between text-xs text-slate-400 sm:hidden">
          <span>Subtotal</span>
          <span className="inline-flex items-center gap-0.5 font-bold text-slate-800">
            <FaIndianRupeeSign className="text-[10px]" />
            {(unitPrice * quantity).toFixed(2)}
          </span>
        </div>
      </div>

      {/* subtotal — visible on wider rows */}
      <div className="hidden shrink-0 flex-col items-end justify-center sm:flex">
        <span className="text-[11px] uppercase tracking-wide text-slate-400">Subtotal</span>
        <span className="inline-flex items-center gap-0.5 text-base font-bold text-slate-900">
          <FaIndianRupeeSign className="text-xs" />
          {(unitPrice * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default CartItem;