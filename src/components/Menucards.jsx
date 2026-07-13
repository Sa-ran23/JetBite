import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuSquareDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { MdStars } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from "../constant/CartSlice";

function Menucards( { elements, altrs }){

    const [expanded, setExpanded] = useState({});
    // const additemsCard = useDispatch();

    // function additemsInCard(item){
    //     // additemsCard(addItem(item));
    // }

    // function addItemCount(id){
    //     let count =document.getElementById('CountNum'+id);
    //     count.value = Number(count.value) +1;
    // }
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.card.Cartdata);


    return(
        <div className="main_food_top !mt-3">
            {new Set(cartItems.map(item => item.card.info.id)).size != 0 ?
           <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-slate-900 !px-5 !py-3 shadow-2xl">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                    {new Set(cartItems.map(item => item.card.info.id)).size}
                </div>
                <div className="text-sm font-bold tracking-wide text-white">
                    Items Added
                </div>
            </div>:""}

            <div className="food_head !mb-2 flex items-center justify-between rounded-2xl border border-slate-100 bg-white !px-5 !py-3.5 shadow-sm">
                <span className="text-base font-bold text-slate-900 sm:text-lg">{elements.card.card.title}</span>
                <span className="shrink-0 rounded-full bg-orange-50 !px-3 !py-1 text-xs font-bold text-orange-600">
                    {elements.card.card.itemCards ? elements.card.card.itemCards?.length + " Items" : elements.card.card.categories?.length + " Items"}
                </span>
            </div>

            {elements.card.card.itemCards ? elements.card.card.itemCards.map((val, index)=>{
                                return (
                                <div key={index} className="rounded-2xl border-b border-slate-100 bg-white transition hover:bg-slate-50/60 last:border-b-0">
                                    <div className="food_dtls flex items-start justify-between gap-4 !p-5">
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-2">
                                                <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
                                                    <LuSquareDot className={`text-base ${val.card.info.itemAttribute?.vegClassifier === 'VEG' ? 'text-emerald-600' : 'text-red-500'}`} />
                                                    <GoDotFill className={`dot absolute text-[7px] ${val.card.info.itemAttribute?.vegClassifier === 'VEG' ? 'text-emerald-600' : 'text-red-500'}`} />
                                                </span>
                                                <div className="food_name truncate text-base font-bold text-slate-900">{val.card.info.name}</div>
                                            </div>

                                            <div className="food_right_dtls !mt-2 flex items-center gap-1 text-sm font-bold text-slate-700">
                                                <FaIndianRupeeSign className="rupees text-xs" /> {val.card.info.price ? Math.trunc(val.card.info.price/100) : Math.trunc(val.card.info.defaultPrice/100)}
                                            </div>

                                            <div className="food_right_dtls1 !mt-1.5 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                                                <MdStars className="rating_icon text-sm text-emerald-600"/>
                                                {val.card.info.ratings.aggregatedRating.rating?(<span>{val.card.info.ratings.aggregatedRating.rating}</span>):"0"}
                                                <span className="font-normal text-slate-400">({val.card.info.ratings.aggregatedRating.ratingCount?(<span>{val.card.info.ratings.aggregatedRating.ratingCount}</span>):"0"})</span>
                                            </div>

                                            <p className="!mt-2 text-sm leading-relaxed text-slate-500">
                                            {expanded[val.card.info.id]
                                                            ? val.card.info.description
                                                            : val.card.info.description?.slice(0, 100)}

                                                        {val.card.info.description?.length > 100 && (
                                                            <span onClick={() =>
                                                                    setExpanded({
                                                                        ...expanded,
                                                                        [val.card.info.id]: !expanded[val.card.info.id]
                                                                    })
                                                                } className="readMore !ml-1 cursor-pointer font-semibold text-orange-500 hover:text-orange-600"
                                                            >
                                                                {expanded[val.card.info.id]
                                                                    ? " Read Less"
                                                                    : " Read More"}
                                                            </span>
                                                        )}</p>
                                        </div>

                                        <div className="relative w-28 shrink-0 sm:w-36">
                                            <img src={altrs + val.card.info.imageId} alt="category_image"
                                                className="food_img h-24 w-full rounded-2xl object-cover shadow-sm sm:h-32" />

                                            <div className="absolute inset-x-0 -bottom-3 flex justify-center">
                                            {cartItems.filter(item => item.card.info.id === val.card.info.id).length === 0 ? (
                                                <button className="h-9 w-20 rounded-xl border border-orange-500 bg-white text-sm font-bold text-orange-600 shadow-md transition hover:bg-orange-50 active:scale-95 cursor-pointer"
                                                    onClick={() => dispatch(addItem(val))}>
                                                    ADD
                                                </button>
                                            ) : (
                                                <div className="flex h-9 w-24 items-center overflow-hidden rounded-xl border border-orange-500 bg-white shadow-md">
                                                    <button className="flex h-full flex-1 items-center justify-center font-bold text-orange-600 transition hover:bg-orange-50 active:scale-90 cursor-pointer"
                                                        onClick={() => dispatch(removeItem(val.card.info.id))}>
                                                        -
                                                    </button>
                                                    <span className="flex h-full w-7 items-center justify-center text-sm font-bold text-slate-800">
                                                        {cartItems.filter(item => item.card.info.id === val.card.info.id).length}
                                                    </span>
                                                    <button className="flex h-full flex-1 items-center justify-center font-bold text-orange-600 transition hover:bg-orange-50 active:scale-90 cursor-pointer" onClick={() => dispatch(addItem(val))}>
                                                        +
                                                    </button>
                                                </div>
                                            )}
                                            </div>
                                        </div>
                                    </div>
                                    </div>)
                            })
                            :
                            // categorys
                    elements.card.card.categories.map((val, index)=>{
                        return (<div key={index}>
                                    <div className="!mt-4">
                                        <div className="food_cato_head !mb-2 flex items-center justify-between rounded-2xl border border-slate-100 bg-white !px-5 !py-3.5 shadow-sm">
                                            <span className="text-base font-bold text-slate-900 sm:text-lg">{val.title}</span>
                                            <span className="shrink-0 rounded-full bg-orange-50 !px-3 !py-1 text-xs font-bold text-orange-600">{val.itemCards?.length + " Items"}</span>
                                        </div>

                                        {val.itemCards.map((cart, index)=>{
                                            return (<div key={index} className="rounded-2xl border-b border-slate-100 bg-white transition hover:bg-slate-50/60 last:border-b-0">
                                                <div className="food_dtls flex items-start justify-between gap-4 !p-5">
                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
                                                                <LuSquareDot className={`text-base ${cart.card.info.itemAttribute?.vegClassifier === 'VEG' ? 'text-emerald-600' : 'text-red-500'}`} />
                                                                <GoDotFill className={`dots absolute text-[7px] ${cart.card.info.itemAttribute?.vegClassifier === 'VEG' ? 'text-emerald-600' : 'text-red-500'}`} />
                                                            </span>
                                                            <div className="food_name truncate text-base font-bold text-slate-900">{cart.card.info.name}</div>
                                                        </div>

                                                        <div className="food_right_dtls !mt-2 flex items-center gap-1 text-sm font-bold text-slate-700">
                                                            <FaIndianRupeeSign className="rupees text-xs" /> {cart.card.info.price ? Math.trunc(cart.card.info.price/100) : Math.trunc(cart.card.info.defaultPrice/100)}
                                                        </div>

                                                        <div className="food_right_dtls1 !mt-1.5 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                                                            <MdStars className="rating_icon text-sm text-emerald-600"/>
                                                            {cart.card.info.ratings.aggregatedRating.rating?(<span>{cart.card.info.ratings.aggregatedRating.rating}</span>):"0"}
                                                            <span className="font-normal text-slate-400">({cart.card.info.ratings.aggregatedRating.ratingCount?(<span>{cart.card.info.ratings.aggregatedRating.ratingCount}</span>):"0"})</span>
                                                        </div>

                                                        <p className="!mt-2 text-sm leading-relaxed text-slate-500">
                                                        {expanded[cart.card.info.id]
                                                                        ? cart.card.info.description
                                                                        : cart.card.info.description?.slice(0, 100)}

                                                                    {cart.card.info.description?.length > 100 && (
                                                                        <span
                                                                            onClick={() =>
                                                                                setExpanded({
                                                                                    ...expanded,
                                                                                    [cart.card.info.id]: !expanded[cart.card.info.id]
                                                                                })
                                                                            }
                                                                            className="readMore !ml-1 cursor-pointer font-semibold text-orange-500 hover:text-orange-600"
                                                                        >
                                                                            {expanded[cart.card.info.id]
                                                                                ? " Read Less"
                                                                                : " Read More"}
                                                                        </span>
                                                                    )}</p>
                                                    </div>

                                                    <div className="relative w-28 shrink-0 sm:w-36">
                                                        <img src={altrs + cart.card.info.imageId} alt="category_image"
                                                            className="food_img h-24 w-full rounded-2xl object-cover shadow-sm sm:h-32" />

                                                        <div className="absolute inset-x-0 -bottom-3 flex justify-center">
                                                        {cartItems.filter(item => item.card.info.id === cart.card.info.id).length === 0 ? (
                                                            <button className="h-9 w-20 rounded-xl border border-orange-500 bg-white text-sm font-bold text-orange-600 shadow-md transition hover:bg-orange-50 active:scale-95 cursor-pointer"
                                                                onClick={() => dispatch(addItem(cart))}>
                                                                ADD
                                                            </button>
                                                        ) : (
                                                            <div className="flex h-9 w-24 items-center overflow-hidden rounded-xl border border-orange-500 bg-white shadow-md">
                                                                <button className="flex h-full flex-1 items-center justify-center font-bold text-orange-600 transition hover:bg-orange-50 active:scale-90 cursor-pointer"
                                                                    onClick={() => dispatch(removeItem(cart.card.info.id))}>
                                                                    -
                                                                </button>
                                                                <span
                                                                    className="flex h-full w-7 items-center justify-center text-sm font-bold text-slate-800">
                                                                    {cartItems.filter(item => item.card.info.id === cart.card.info.id).length}
                                                                </span>
                                                                <button className="flex h-full flex-1 items-center justify-center font-bold text-orange-600 transition hover:bg-orange-50 active:scale-90 cursor-pointer"
                                                                    onClick={() => dispatch(addItem(cart))}>
                                                                    +
                                                                </button>
                                                            </div>
                                                        )}
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>)
                                        })}
                                    </div>
                            </div>)
                    })
                            }
                </div>
    )
}

export default Menucards;