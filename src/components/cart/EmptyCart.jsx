import { Link } from "react-router";
import { FaBasketShopping } from "react-icons/fa6";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center rounded-[28px] border border-slate-100 bg-white !px-6 !py-16 text-center shadow-sm sm:!py-24">
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-orange-50 sm:h-32 sm:w-32">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-200" />
        <FaBasketShopping className="text-4xl text-orange-400 sm:text-5xl" />
      </div>

      <h2 className="!mt-6 text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
        Your cart is empty
      </h2>
      <p className="!mt-2 max-w-xs text-sm text-slate-500 sm:text-base">
        Looks like you haven't added any delicious food yet.
      </p>

      <Link to="/" className="!mt-8 inline-flex items-center justify-center rounded-2xl bg-orange-500 !px-8 !py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl active:translate-y-0"
      >
        Browse Menu
      </Link>
    </div>
  );
}

export default EmptyCart;