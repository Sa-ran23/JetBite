import logo from "../images/jetbite4.png";
import bite_txt from "../images/bite_txt.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";


function Footer(){
    return(
        <div>
            <footer className="footer relative !mt-16 overflow-hidden rounded-t-[36px] bg-slate-900 text-slate-300">
                <div className="footer_content mx-auto max-w-7xl !px-6 !py-12 sm:!px-10 sm:!py-14 lg:!px-14">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">

                        {/* brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <div className="footer_logo_part flex items-center gap-3">
                                <img src={logo} alt="Logo" className="footer_logo h-14 w-14 rounded-full object-cover shadow-lg" />
                                <img src={bite_txt} alt="Logo_text" className="footer_logo_text h-8 w-auto" />
                            </div>
                            <p className="!mt-5 max-w-xs text-sm leading-6 text-slate-400">
                                © 2024 Food Delivery App. All rights reserved.
                            </p>
                        </div>

                        {/* Company */}
                        <div>
                            <div className="footer_title text-sm font-bold uppercase tracking-wider text-white">Company</div>
                            <div className="footer_links !mt-4 grid gap-3">
                                <Link to="/about" className="footer_link cursor-pointer text-sm text-slate-400 transition hover:text-orange-400">About Us</Link>
                                <Link to="" className="footer_link cursor-pointer text-sm text-slate-400 transition hover:text-orange-400">Careers</Link>
                                <Link to="/Help" className="footer_link cursor-pointer text-sm text-slate-400 transition hover:text-orange-400">Help</Link>
                            </div>
                        </div>

                        {/* Legal */}
                        <div>
                            <div className="footer_title text-sm font-bold uppercase tracking-wider text-white">Legal</div>
                            <div className="footer_links !mt-4 grid gap-3">
                                <a className="footer_link cursor-pointer text-sm text-slate-400 transition hover:text-orange-400">Privacy Policy</a>
                                <a className="footer_link cursor-pointer text-sm text-slate-400 transition hover:text-orange-400">Terms of Service</a>
                                <a className="footer_link cursor-pointer text-sm text-slate-400 transition hover:text-orange-400">Cookie Policy</a>
                            </div>
                        </div>

                        {/* Available in */}
                        <div>
                            <div className="footer_title text-sm font-bold uppercase tracking-wider text-white">Available In:</div>
                            <div className="footer_links !mt-4 grid gap-3">
                                <a className="footer_link cursor-pointer text-sm text-slate-400 transition hover:text-orange-400">India</a>
                                <a className="footer_link cursor-pointer text-sm text-slate-400 transition hover:text-orange-400">USA</a>
                                <a className="footer_link cursor-pointer text-sm text-slate-400 transition hover:text-orange-400">UK</a>
                            </div>
                        </div>

                        {/* Social */}
                        <div>
                            <div className="footer_title text-sm font-bold uppercase tracking-wider text-white">Social Links</div>
                            <div className="social_links !mt-4 flex flex-wrap gap-2.5">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white">
                                    <FaLinkedin className="falink cursor-pointer text-sm" />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white">
                                    <FaInstagram className="falink cursor-pointer text-sm" />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white">
                                    <FaFacebookF className="falink cursor-pointer text-sm" />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white">
                                    <FaTwitter className="falink cursor-pointer text-sm" />
                                </span>
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white">
                                    <MdEmail className="falink cursor-pointer text-sm" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* bottom bar */}
                    <div className="!mt-10 border-t border-slate-800 !pt-6 text-center text-xs text-slate-500 sm:text-left">
                        Made with care in Coimbatore, India.
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Footer;