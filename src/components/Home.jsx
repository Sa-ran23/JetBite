import { useState, useEffect, useRef } from "react";
import logo from "../images/jetbite3.png";
import bite_txt from "../images/bite_txt.png";
import { FaBowlFood } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import FoodCard from "./FoodCard";
import Shimmer from "./Shimmer";
import { resData } from "../mockData";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Home() {
  const scrollRef = useRef(null);
  let [data, setData] = useState(null);
  let [search, setsearchdata] = useState([]);
  const cartItems = useSelector((state) => state.card.Cartdata);

  useEffect(() => {
    setTimeout(() => {
      setData(resData);
      setsearchdata(resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      window.scrollTo(0, 0);
    }, 1000);
  }, []);

  let result = [];
  let card_part = [];
  if (!data) {
    return <Shimmer />;
  } else {
    result = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    card_part = data.data.cards[0].card.card.imageGridCards.info;
  }

  let alts = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto/";

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  let search_btn = () => {
    let search_input = document.getElementById("search").value;
    let search_result = result.filter((element) => {
      return element.info.name.toLowerCase().includes(search_input.toLowerCase());
    });
    setsearchdata(search_result);
  };

  return (
    <div className="bg-[#FFFBF6]">
      <section className="relative overflow-hidden !mt-[5px] rounded-[28px]">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="relative !mx-auto max-w-7xl !px-4 !pt-5 !pb-14 sm:!px-6 sm:!pt-14 lg:!px-8 lg:!pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white !px-3.5 !py-1.5 text-xs font-semibold tracking-wide text-orange-600 shadow-sm">
                <FaBowlFood className="text-sm" />
                <span>PREMIUM FOOD DELIVERY</span>
              </div>

              <h1 className="!mt-5 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Cravings, met.
                <br />
                <span className="text-orange-500">Delivered fast.</span>
              </h1>

              <img src={bite_txt} alt="Bite" className="!mt-4 h-10 w-auto sm:h-12" />
              <p className="!mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                Discover the best local restaurants, indulge in comfort food, and get it delivered right to your doorstep.
              </p>

              {/* search */}
              <div className="!mt-8 !mr-[16px] flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-2.5 rounded-2xl border border-slate-200 bg-white !px-4 !py-3.5 shadow-sm transition focus-within:border-orange-300 focus-within:ring-4 focus-within:ring-orange-100">
                  <FaSearch className="shrink-0 text-slate-400" />
                  <input type="text" placeholder="Search restaurants..." className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" id="search" onChange={search_btn} />
                </div>
                <button type="submit" className="h-[52px] shrink-0 rounded-2xl bg-orange-500 !px-8 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl active:translate-y-0 cursor-pointer" onClick={search_btn} >Search</button>
              </div>

              <div className="!mt-6 flex items-center gap-2 text-sm text-slate-400">
                <FaLocationDot className="text-orange-400" />
                Now delivering across Coimbatore
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute h-64 w-64 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] bg-gradient-to-br from-orange-200 via-amber-100 to-orange-50 sm:h-80 sm:w-80" />
              <img src={logo} alt="JetBite" className="relative h-52 w-52 rounded-[28px] object-cover shadow-[0_25px_60px_rgba(249,115,22,0.28)] sm:h-64 sm:w-64" />
              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-orange-100 bg-white !px-4 !py-2.5 shadow-lg sm:left-auto sm:right-2 sm:translate-x-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <FaClock className="text-sm" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-slate-800">~25 min</p>
                  <p className="text-[11px] text-slate-400">avg. delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Categories ---------------- */}
      <section className="!mx-auto max-w-7xl !px-4 !pb-4 sm:!px-6 lg:!px-8">
        <div className="rounded-[28px] border border-slate-100 bg-white !p-5 shadow-sm sm:!p-7">
          <div className="!mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">What are you craving today?</h2>
            <div className="flex gap-2">
              <button aria-label="Scroll left" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500" onClick={scrollLeft} >
                <FaChevronLeft className="text-xs" />
              </button>
              <button aria-label="Scroll right" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500" onClick={scrollRight}>
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>
          <div className="flex gap-5 overflow-x-auto scroll-smooth !pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" ref={scrollRef} >
            {card_part.map((item) => (
              <div className="w-24 flex-none text-center sm:w-28" key={item.id}>
                <div className="!mx-auto h-20 w-20 overflow-hidden transition hover:ring-orange-200 sm:h-24 sm:w-24">
                  <img src={alts + item.imageId} alt="Category" className="h-full w-full object-cover transition duration-300 hover:scale-110" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Restaurant grid cards ---------------- */}
      <section className="!mx-auto max-w-7xl !px-4 !pb-16 !pt-6 sm:!px-6 lg:!px-8">
        <div className="!mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Top restaurant chains in Coimbatore
          </h2>
          <p className="text-sm text-slate-400">Fresh picks for every mood</p>
        </div>
        {search.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-200 bg-white !p-12 text-center">
            <p className="text-base font-semibold text-slate-700">No restaurants match your search</p>
            <p className="!mt-1 text-sm text-slate-400">Try a different name or clear the search box.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {search.map((item, index) => (
              <FoodCard item={item} key={index} alts={alts} />
            ))}
          </div>
        )}
      </section>
      {new Set(cartItems.map(item => item.card.info.id)).size > 0 && (
        <Link to="/Cart" className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-slate-900 !px-5 !py-3 shadow-2xl">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
            {new Set(cartItems.map(item => item.card.info.id)).size}
          </div>
          <div className="text-sm font-bold tracking-wide text-white">
            Items Added
          </div>
        </Link>
      )}
    </div>
  );
  
}

export default Home;
