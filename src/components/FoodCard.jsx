import { FcRating } from "react-icons/fc";
import { Link } from "react-router";

function FoodCard({ item, alts }) {
  return (
    <Link
      to={'resturant/' + item.info.id}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative w-full overflow-hidden">
        <div className="!m-[11px]">
        <img src={alts + item.info.cloudinaryImageId} alt="Restaurant Image" className="h-44 w-full object-fill transition duration-500 ease-out group-hover:scale-105 sm:h-36 rounded-t-[20px]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col !p-4">
        <h3 className="truncate text-base font-bold text-slate-900">{item.info.name}</h3>
        <p className="!mt-1 truncate text-sm text-slate-500">{item.info.locality}</p>
        <p className="truncate text-sm text-slate-400">{item.info.areaName}</p>

        <div className="!mt-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 !px-2.5 !py-1 text-xs font-bold text-emerald-700">
            <FcRating className="text-sm" /> {item.info.avgRatingString}
          </span>
          <span className="text-sm font-bold text-slate-700">{item.info.costForTwo}</span>
        </div>
      </div>
    </Link>
  );
}

export default FoodCard;