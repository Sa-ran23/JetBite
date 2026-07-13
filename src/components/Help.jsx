import { useMemo, useState } from "react";
import { FaMagnifyingGlass, FaHeadset, FaCircleQuestion } from "react-icons/fa6";
import FAQItem from "./help/FAQItem";
import ContactSupportCard from "./help/ContactSupportCard";

const FAQ_DATA = [
  {
    question: "How do I place an order?",
    answer:
      "Browse restaurants on the home page, pick the dishes you'd like from a restaurant's menu, and tap \"Add\" on each item. Once you're ready, open your cart and tap \"Proceed to Checkout\" to confirm your address and payment method.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After placing an order, you'll get a live order-status screen showing each stage — order confirmed, being prepared, out for delivery, and delivered — along with an estimated arrival time.",
  },
  {
    question: "How do I cancel an order?",
    answer:
      "You can cancel an order from the order details screen as long as the restaurant hasn't started preparing it yet. Once preparation begins, cancellation may not be available, so please contact support right away if you need help.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept credit and debit cards, UPI, popular digital wallets, and cash on delivery in select areas. You can manage your saved payment methods from your account settings.",
  },
  {
    question: "How do I apply a coupon?",
    answer:
      "On the checkout page, enter your coupon code in the \"Enter coupon code\" field within the order summary and tap Apply. Valid discounts will be reflected in your total instantly.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team by phone, email, or live chat — all listed in the Contact Support section on this page. Our team is available every day to help with any order issues.",
  },
  {
    question: "What should I do if my order is delayed?",
    answer:
      "If your order is taking longer than the estimated delivery time, check the live tracking screen first for updates. If it's significantly delayed, reach out to support with your order ID and we'll look into it right away.",
  },
  {
    question: "How do refunds work?",
    answer:
      "Eligible refunds are processed back to your original payment method and typically reflect within 5–7 business days, depending on your bank. For cash-on-delivery orders, refunds are issued as account credit.",
  },
];

function Help() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return FAQ_DATA;
    return FAQ_DATA.filter(
      (faq) =>
        faq.question.toLowerCase().includes(term) ||
        faq.answer.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="bg-[#FFFBF6] !pb-20 rounded-t-[15px] !mt-[10px] ">
      {/* Header */}
      <div className="relative overflow-hidden !px-5 !ml-[2%] !pt-14 !pb-10 sm:!px-8 sm:!pt-20 sm:!pb-14 sm:!ml-[11%]">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 !px-4 !py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
            <FaCircleQuestion /> Help Center
          </span>
          <h1 className="!mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How can we help you today?
          </h1>
          <p className="!mt-3 text-sm text-slate-500 sm:text-base">
            Find quick answers below, or reach out to our support team directly.
          </p>

          {/* Search bar */}
          <div className="!mt-7 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white !px-4 !py-3.5 shadow-sm transition focus-within:border-orange-300 focus-within:ring-4 focus-within:ring-orange-100">
            <FaMagnifyingGlass className="shrink-0 text-slate-400" />
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search for a question, e.g. "refund" or "coupon"' className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" />
          </div>
        </div>
      </div>

      {/* Body: FAQ + sidebar */}
      <div className="mx-auto !m-[25px] !px-5 sm:!px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          {/* FAQ list */}
          <div>
            <h2 className="!mb-4 text-lg font-bold text-slate-900 sm:text-xl">
              Frequently Asked Questions
            </h2>

            {filteredFaqs.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white !p-10 text-center">
                <p className="text-sm font-semibold text-slate-700">No matching questions</p>
                <p className="!mt-1 text-sm text-slate-400">Try a different search term.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3.5">
                {filteredFaqs.map((faq) => {
                  const originalIndex = FAQ_DATA.indexOf(faq);
                  return (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} isOpen={openIndex === originalIndex} onToggle={() => handleToggle(originalIndex)} />
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24">
            <ContactSupportCard />
          </div>
        </div>

        {/* Still need help CTA */}
        <div className="!mt-14 flex flex-col items-center gap-5 rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 !p-8 text-center shadow-sm sm:!p-12">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-orange-500 shadow-sm">
            <FaHeadset className="text-xl" />
          </span>
          <div>
            <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
              Still need help?
            </h3>
            <p className="!mt-2 max-w-md text-sm text-slate-500 sm:text-base">
              Our support team is available every day to help sort out any issue with your order.
            </p>
          </div>
          <button type="button" className="rounded-2xl bg-orange-500 !px-8 !py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl active:translate-y-0 cursor-pointer" >
            Contact Customer Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default Help;