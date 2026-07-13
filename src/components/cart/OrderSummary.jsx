import { useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import CouponInput from "./CouponInput";

const DISCOUNT_AMOUNT = 50;

function Row({ label, value, muted }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className={muted ? "text-slate-400" : "text-slate-600"}>{label}</span>
      <span className={`inline-flex items-center gap-0.5 font-semibold ${muted ? "text-slate-400" : "text-slate-800"}`}>
        <FaIndianRupeeSign className="text-[11px]" />
        {value.toFixed(2)}
      </span>
    </div>
  );
}

function OrderSummary({ totalItems, subtotal, deliveryFee, platformFee, taxes, onCheckout }) {
  const [discount, setDiscount] = useState(0);

  const grandTotal = Math.max(subtotal + deliveryFee + platformFee + taxes - discount, 0);

  return (
    <div className="rounded-[28px] border border-slate-100 bg-white !p-5 shadow-sm lg:sticky lg:top-24 sm:!p-6">
      <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>

      <div className="!mt-5 flex flex-col gap-3">
        <Row label={`Total Items (${totalItems})`} value={subtotal} />
        <Row label="Subtotal" value={subtotal} />
        <Row label="Delivery Fee" value={deliveryFee} />
        <Row label="Platform Fee" value={platformFee} />
        <Row label="Taxes" value={taxes} />
        {discount > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-emerald-600">Coupon discount</span>
            <span className="font-semibold text-emerald-600">- ₹{discount.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="!my-5 border-t border-dashed border-slate-200" />

      <div className="!mb-5">
        <CouponInput onApply={() => setDiscount(DISCOUNT_AMOUNT)} />
      </div>

      <div className="!mb-6 flex items-center justify-between">
        <span className="text-base font-bold text-slate-900">Grand Total</span>
        <span className="inline-flex items-center gap-0.5 text-xl font-black text-slate-900">
          <FaIndianRupeeSign className="text-base" />
          {grandTotal.toFixed(2)}
        </span>
      </div>

      <button type="button" onClick={onCheckout} className="w-full rounded-2xl bg-orange-500 !py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl active:translate-y-0 cursor-pointer">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default OrderSummary;