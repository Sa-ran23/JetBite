import { useParams } from 'react-router';
import { resMockdata } from '../resMockData';
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { MdStars } from "react-icons/md";
import { FaChevronLeft, FaChevronRight, FaLocationDot, FaClock } from "react-icons/fa6";
import Shimmer_menucard from './Shimmer_menucard';
import Menucard from './Menucards';

function MenucardDetails(){
    const scrollRef = useRef(null);
    let { id } = useParams();

    let [menuData, setMenuData] = useState(null);
    let [titleCard, setTitleCard] = useState([]);
    let [discountData, setdiscountData] = useState(null);

    let result = resMockdata.filter((element, index )=>{
        return ( id === element.data.cards[2].card.card.info.id);
    })
//    console.log(menuData);
    useEffect(() =>{
        setTimeout(()=>{
            setMenuData(result[0]);
            let ans = result[0].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((val)=>{
                return val.card.card.title;
            })
            setTitleCard(ans);
            let disc = result[0].data.cards[3].card.card.gridElements.infoWithStyle.offers;
            setdiscountData(disc);
            window.scrollTo(0, 0);
        },1000);
    },[])
    console.log(discountData);
    
    if(!menuData){
        return (<Shimmer_menucard />)
    }

     let altrs = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto/";
    

    const scrollLeftoffer = () => {
        scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    };
 
    const scrollRightoffer = () => {
        scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    };

    const info = menuData.data.cards[2].card.card.info;

    return(
        <div className="min-h-screen bg-[#FFFBF6] !mt-[5px] rounded-t-[10px]">
            <div className="menu_main_box mx-auto flex max-w-[1440px] flex-col lg:h-screen lg:flex-row">

                {/* ---------------- Left panel ---------------- */}
                <div className="left_main_box w-full shrink-0 border-b border-slate-100 lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-slate-100">
                    <div className="!p-5 sm:!p-8 lg:!p-10">

                        {/* breadcrumb */}
                        <div className="path_name flex items-center gap-1.5 text-sm text-slate-400">
                            <Link to="../" className="font-medium text-slate-500 transition hover:text-orange-500">Home</Link>
                            <span>/</span>
                            <span className="truncate text-slate-400">{info.name}</span>
                        </div>

                        {/* title */}
                        <h1 className="menu_title !mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            {info.name}
                        </h1>

                        {/* info card */}
                        <div className="menu_dtls !mt-6 max-w-md rounded-3xl border border-slate-100 bg-white !p-6 shadow-sm">
                            <div className="dtls flex flex-wrap items-center gap-1.5 text-sm font-semibold text-slate-700">
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 !px-2 !py-0.5 text-emerald-700">
                                    <MdStars className="rating_icon text-sm text-emerald-600" />
                                    {info.avgRating}
                                </span>
                                <span className="text-slate-400">({info.totalRatingsString})</span>
                                <span className="text-slate-300">•</span>
                                <span className="text-slate-500">{info.costForTwoMessage}</span>
                            </div>

                            <div className="nm !mt-2 inline-block rounded-full bg-orange-50 !px-3 !py-1 text-xs font-bold text-orange-600">
                                {info.cuisines[0]}
                            </div>

                            <div className="!mt-5 flex gap-3">
                                <div className="timeline flex flex-col items-center !pt-1">
                                    <div className="flNkDi h-1.5 w-1.5 rounded-full bg-slate-300" />
                                    <div className="fYAGvW !mt-0.5 h-6 w-px bg-slate-200" />
                                    <div className="flNkDi h-1.5 w-1.5 rounded-full bg-orange-400" />
                                </div>
                                <div className="dist flex flex-col gap-3">
                                    <div className="dtls text-sm">
                                        <span className="font-bold text-slate-800">Outlet</span>{" "}
                                        <span className="lite text-slate-400">{info.areaName}</span>
                                    </div>
                                    <div className="dtls flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                                        <FaClock className="text-xs text-orange-400" />
                                        {info.sla.slaString}
                                    </div>
                                </div>
                            </div>

                            <div className="dtls !mt-4 flex items-center gap-1.5 border-t border-dashed border-slate-100 !pt-4 text-xs text-slate-400">
                                <FaLocationDot className="text-orange-300" />
                                {info.sla.lastMileTravelString}
                            </div>
                        </div>

                        {/* offers heading */}
                        <div className="offer_head !mt-10 flex items-center gap-3">
                            <div className="offer_line h-px flex-1 bg-slate-200" />
                            <span className="offer_name shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                Offers for you
                            </span>
                            <div className="offer_line h-px flex-1 bg-slate-200" />
                        </div>

                        {/* offers carousel */}
                        <div className="category_section_offer !mt-4">
                            <div className="category_header_offer !mb-3 flex justify-end gap-2">
                                <button className="arrow_btn_offer flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500 cursor-pointer"
                                    onClick={scrollLeftoffer} >
                                    <FaChevronLeft className="text-xs" />
                                </button>
                                <button className="arrow_btn_offer flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500 cursor-pointer" onClick={scrollRightoffer} >
                                    <FaChevronRight className="text-xs" />
                                </button>
                            </div>

                            <div className="scroll_container_offer flex gap-4 overflow-x-auto scroll-smooth !pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" ref={scrollRef} >
                                {discountData.map((val, index) => (
                                    <div  key={index}  className="offer_box flex min-h-[80px] w-[210px] shrink-0 items-center gap-3 rounded-2xl border border-dashed border-slate-200 bg-white !p-3 shadow-sm transition hover:border-orange-200 hover:shadow-md" >
                                        <div>
                                            {val.info.logoBottom ? (
                                                <img src={altrs + val.info.logoBottom} alt="offer logo" className="offer_logo h-12 w-12 object-contain" />
                                            ) : (
                                                <div className="logo_style flex h-12 w-14 items-center justify-center rounded-lg bg-slate-100 text-center text-xs font-bold"  style={{ color: val.info.offerTagColor }} >
                                                    {val.info.offerTag}
                                                </div>
                                            )}
                                        </div>
                                        <div className="offer_side_dtls min-w-0">
                                            <div className="offer_text truncate text-sm font-bold text-slate-800">{val.info.header}</div>
                                            <div className="offer_des truncate text-[11px] text-slate-400">{val.info.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------- Right panel ---------------- */}
                <div className="Right_main_box w-full lg:h-screen lg:w-1/2 lg:overflow-y-auto">
                    <div className="!p-4 sm:!p-6 lg:!p-8">
                        {titleCard.map((elements, index) => (
                            <Menucard elements={elements} key={index} altrs={altrs} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenucardDetails;