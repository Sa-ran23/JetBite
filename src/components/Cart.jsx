import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
import { addItem, removeItem } from "../constant/CartSlice";
import CartItem from "./cart/CartItem";
import OrderSummary from "./cart/OrderSummary";
import EmptyCart from "./cart/EmptyCart";

const IMAGE_BASE = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto/";
const DELIVERY_FEE = 40;
const PLATFORM_FEE = 6;
const TAX_RATE = 0.05;

function getUnitPrice(info) {
  const paise = info.price ?? info.defaultPrice ?? 0;
  return paise / 100;
}

function CartSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="rounded-[28px] border border-slate-100 bg-white !p-5 shadow-sm sm:!p-6">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex gap-4 border-b border-slate-100 !py-5 last:border-b-0 sm:gap-5">
            <div className="h-20 w-20 shrink-0 animate-pulse rounded-2xl bg-slate-100 sm:h-24 sm:w-24" />
            <div className="flex flex-1 flex-col gap-3">
              <div className="h-4 w-1/2 animate-pulse rounded-full bg-slate-100" />
              <div className="h-3 w-1/3 animate-pulse rounded-full bg-slate-100" />
              <div className="!mt-2 h-8 w-28 animate-pulse rounded-xl bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
      <div className="h-80 animate-pulse rounded-[28px] border border-slate-100 bg-white shadow-sm" />
    </div>
  );
}

function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.card.Cartdata);

  const [loading, setLoading] = useState(true);
  const [confirmTarget, setConfirmTarget] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  // Group the flat Cartdata array (one entry per unit) into { item, quantity } lines.
  const grouped = Object.values(
    cartData.reduce((acc, curr) => {
      const id = curr.card.info.id;
      if (!acc[id]) acc[id] = { item: curr, quantity: 0 };
      acc[id].quantity += 1;
      return acc;
    }, {})
  );

  const totalItems = cartData.length;
  const subtotal = grouped.reduce(
    (sum, g) => sum + getUnitPrice(g.item.card.info) * g.quantity,
    0
  );
  const deliveryFee = totalItems > 0 ? DELIVERY_FEE : 0;
  const platformFee = totalItems > 0 ? PLATFORM_FEE : 0;
  const taxes = subtotal * TAX_RATE;

  const handleIncrease = (group) => {
    dispatch(addItem(group.item));
    setToast(`${group.item.card.info.name} added to cart`);
  };

  const handleDecrease = (group) => {
    const id = group.item.card.info.id;
    dispatch(removeItem(id));
    if (group.quantity === 1) {
      setToast(`${group.item.card.info.name} removed from cart`);
    }
  };

  const requestRemove = (group) => setConfirmTarget(group);

  const confirmRemove = () => {
    if (!confirmTarget) return;
    const { item, quantity } = confirmTarget;
    const id = item.card.info.id;
    for (let i = 0; i < quantity; i++) {
      dispatch(removeItem(id));
    }
    setToast(`${item.card.info.name} removed from cart`);
    setConfirmTarget(null);
  };

  const handleCheckout = () => {
    setToast("Proceeding to checkout...");
  };

  return (
    <div className="!pb-16">
      {/* Header */}
      <div className="!mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 !m-[13px]">Your basket</p>
          <div className="!mt-1 flex items-center gap-3 !ml-[12px]">
            <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Cart</h1>
            {!loading && totalItems > 0 && (
              <span className="rounded-full bg-orange-100 !px-3 !py-1 text-xs font-bold text-orange-600">
                {totalItems} item{totalItems === 1 ? "" : "s"}
              </span>
            )}
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 self-start rounded-2xl border border-slate-200 !px-5 !py-2.5 text-sm font-semibold text-slate-600 transition hover:border-orange-300 hover:text-orange-600 sm:self-auto"
        >
          <FaArrowLeft className="text-xs" /> Continue Shopping
        </Link>
      </div>

      {loading ? (
        <CartSkeleton />
      ) : grouped.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start !m-[7px]">
          {/* Cart items */}
          <div className="rounded-[28px] border border-slate-100 bg-white !p-5 shadow-sm sm:!p-6">
            {grouped.map((group) => (
              <CartItem
                key={group.item.card.info.id}
                item={group.item}
                quantity={group.quantity}
                unitPrice={getUnitPrice(group.item.card.info)}
                alts={IMAGE_BASE}
                onIncrease={() => handleIncrease(group)}
                onDecrease={() => handleDecrease(group)}
                onRemove={() => requestRemove(group)}
              />
            ))}
          </div>

          {/* Order summary */}
          <OrderSummary
            totalItems={totalItems}
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            platformFee={platformFee}
            taxes={taxes}
            onCheckout={handleCheckout}
          />
        </div>
      )}

      {/* Remove confirmation dialog */}
      {confirmTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 !px-4">
          <div className="w-full max-w-sm rounded-3xl bg-white !p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900">Remove item?</h3>
            <p className="!mt-2 text-sm text-slate-500">
              Remove "{confirmTarget.item.card.info.name}" from your cart?
            </p>
            <div className="!mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setConfirmTarget(null)}
                className="flex-1 rounded-xl border border-slate-200 !py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmRemove}
                className="flex-1 rounded-xl bg-red-500 !py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-slate-900 !px-5 !py-3 text-sm font-medium text-white shadow-xl">
          <FaCircleCheck className="text-emerald-400" />
          {toast}
        </div>
      )}
    </div>
  );
}

export default Cart;