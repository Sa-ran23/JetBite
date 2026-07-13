import { FaChevronDown } from "react-icons/fa6";

/**
 * Reusable accordion item. Fully controlled — `isOpen` and `onToggle` are
 * passed down so the parent decides whether one-at-a-time or multi-open
 * behavior is used.
 */
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
      <button type="button" onClick={onToggle} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 !px-5 !py-4 text-left sm:!px-6 sm:!py-5 cursor-pointer" >
        <span className="text-sm font-bold text-slate-900 sm:text-base">{question}</span>
        <FaChevronDown className={`shrink-0 text-slate-400 transition-transform duration-300 ${   isOpen ? "rotate-180 text-orange-500" : "rotate-0"  }`} />
      </button>

      {/* grid-rows trick: animates from 0fr -> 1fr so height animates
          smoothly without needing to know the content's height in advance */}
      <div className="grid transition-[grid-template-rows] duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }} >
        <div className="overflow-hidden">
          <p className="!px-5 !pb-5 text-sm leading-6 text-slate-500 sm:!px-6 sm:!pb-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;