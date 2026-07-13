import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { BsSearchHeartFill } from "react-icons/bs";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../images/jetbite4.png";
import About from "./About.jsx";
import { Link } from "react-router";


function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return <div>
        <div className="sticky top-0 z-40 rounded-b-[20px] md:rounded-[20px] bg-white/95 backdrop-blur shadow-[0_4px_5px_rgba(0,_0,_0,_0.15)] ">
            <div className="flex items-center justify-between !px-3 md:!px-4 !py-1.5 md:!py-0">
                <div className="flex items-center">
                    <img src={logo} alt="jetbite logo" className="!m-0 md:!m-[14px] w-9 h-9 md:w-[49px] md:h-[49px] rounded-[50%]" />
                    {/* <h1 className="title_logo">JetBite</h1> */}
                </div>

                {/* Horizontal nav — tablet and up */}
                <div className="nav hidden md:flex items-center gap-6 lg:gap-8 !mr-[4%]">
                    <div>
                        <Link to="/" className="flex items-center gap-1.5 text-slate-600 transition hover:text-orange-500">
                            <FaHome className="text-sm" />
                            <span className="font-bold">Home</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/about" className="flex items-center gap-1.5 text-slate-600 transition hover:text-orange-500">
                            <FaBookReader className="text-sm" />
                            <span className="font-bold">About</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Help" className="flex items-center gap-1.5 text-slate-600 transition hover:text-orange-500">
                            <FaPhoneAlt className="text-sm" />
                            <span className="font-bold">Help</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/Cart" className="flex items-center gap-1.5 text-slate-600 transition hover:text-orange-500">
                            <BsSearchHeartFill className="text-sm" />
                            <span className="font-bold">Cart</span>
                        </Link>
                    </div>
                </div>

                {/* Hamburger toggle — mobile only */}
                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition hover:bg-orange-50 hover:text-orange-500 md:hidden"
                >
                    {isOpen ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            <div className={`overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out grid md:hidden ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-1 border-t border-slate-100 !px-4 !py-3">
                        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-xl !px-3 !py-2.5 text-slate-600 transition hover:bg-orange-50 hover:text-orange-500">
                            <FaHome className="text-base" />
                            <span className="font-bold">Home</span>
                        </Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-xl !px-3 !py-2.5 text-slate-600 transition hover:bg-orange-50 hover:text-orange-500">
                            <FaBookReader className="text-base" />
                            <span className="font-bold">About</span>
                        </Link>
                        <Link to="/Help" onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-xl !px-3 !py-2.5 text-slate-600 transition hover:bg-orange-50 hover:text-orange-500">
                            <FaPhoneAlt className="text-base" />
                            <span className="font-bold">Help</span>
                        </Link>
                        <Link to="/Cart" onClick={() => setIsOpen(false)} className="flex items-center gap-3 rounded-xl !px-3 !py-2.5 text-slate-600 transition hover:bg-orange-50 hover:text-orange-500">
                            <BsSearchHeartFill className="text-base" />
                            <span className="font-bold">Cart</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default Header;