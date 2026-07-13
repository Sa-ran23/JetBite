import ramen from "../images/ramen.png";
import biriyani from "../images/biriyani.png";
import mint from "../images/mint.png";
import tomato_of from "../images/tomato_of.png";
import onion from "../images/onion.png";
import idli from "../images/idli.png";
import { FaLocationDot } from "react-icons/fa6";


function About(){
    return <div>
            <div className="bg-[#FFFBF6]">
 
            {/* Self-contained keyframes (prefixed ab- to avoid clashing with any
                same-named keyframes already defined in About.css) */}
            <style>{`
                @keyframes ab-fromLeft { from { transform: translateX(-400px) rotate(-15deg); opacity: 0; } to { transform: translateX(0) rotate(-8deg); opacity: 1; } }
                @keyframes ab-fromRight { from { transform: translateX(400px) rotate(10deg); opacity: 0; } to { transform: translateX(0) rotate(12deg); opacity: 1; } }
                @keyframes ab-fromTopRight { from { transform: translate(300px, -200px); opacity: 0; } to { transform: translate(0, 0) rotate(5deg); opacity: 1; } }
                @keyframes ab-fromTop { from { transform: translateY(-200px); opacity: 0; } to { transform: translateY(0) rotate(-5deg); opacity: 1; } }
                @keyframes ab-fromBottomLeft { from { transform: translate(-200px, 150px); opacity: 0; } to { transform: translate(0, 0); opacity: 1; } }
                @keyframes ab-fromBottomRight { from { transform: translate(200px, 150px); opacity: 0; } to { transform: translate(0, 0); opacity: 1; } }
                @keyframes ab-fadeUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            `}</style>
 
            <div className="ab-page relative overflow-hidden !pt-16 !px-5 !pb-16 sm:!pt-20 sm:!pb-24 lg:flex lg:min-h-[620px] lg:flex-col lg:items-center lg:justify-center lg:!py-0">
 
                {/* decorative swirl circles */}
                <div className="ab-swirl ab-swirl-1 pointer-events-none absolute -top-24 -left-28 hidden h-[380px] w-[380px] rounded-full border border-orange-100 sm:block lg:h-[500px] lg:w-[500px]"></div>
                <div className="ab-swirl ab-swirl-2 pointer-events-none absolute top-20 -right-20 hidden h-[240px] w-[240px] rounded-full border border-orange-100 sm:block lg:h-[320px] lg:w-[320px]"></div>
                <div className="ab-swirl ab-swirl-3 pointer-events-none absolute bottom-16 left-20 hidden h-[160px] w-[160px] rounded-full border border-orange-100 sm:block lg:h-[220px] lg:w-[220px]"></div>
 
                {/* floating food images — hidden on small screens to avoid overlap/overflow, animate in on tablet+ */}
                <div className="ab-food ab-burger pointer-events-none absolute top-[160px] left-[6%] hidden w-[140px] [animation:ab-fromLeft_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_both] lg:block lg:w-[190px]">
                    <img src={ramen} alt="ramen image" className="w-full drop-shadow-xl" />
                </div>
                <div className="ab-food ab-dumpling pointer-events-none absolute top-[30px] right-[8%] hidden w-[120px] [animation:ab-fromTopRight_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both] lg:block lg:w-[165px]">
                    <img src={biriyani} alt="biriyani image" className="w-full drop-shadow-xl" />
                </div>
                <div className="ab-food ab-pizza pointer-events-none absolute top-[270px] right-[3%] hidden w-[135px] [animation:ab-fromRight_0.9s_cubic-bezier(0.22,1,0.36,1)_0.15s_both] lg:block lg:w-[180px]">
                    <img src={idli} alt="idli image" className="w-full drop-shadow-xl" />
                </div>
                <div className="ab-food ab-leaf pointer-events-none absolute top-[36px] left-[47%] hidden w-[36px] [animation:ab-fromTop_0.9s_cubic-bezier(0.22,1,0.36,1)_0.3s_both] md:block">
                    <img src={tomato_of} alt="tomato image" className="w-full drop-shadow-md" />
                </div>
                <div className="ab-food ab-tomato-bl pointer-events-none absolute bottom-[170px] left-[16%] hidden w-[40px] [animation:ab-fromBottomLeft_0.9s_cubic-bezier(0.22,1,0.36,1)_0.35s_both] md:block">
                    <img src={onion} alt="onion image" className="w-full drop-shadow-md" />
                </div>
                <div className="ab-food ab-tomato-tr pointer-events-none absolute top-[190px] right-[22%] hidden w-[32px] [animation:ab-fromBottomRight_0.9s_cubic-bezier(0.22,1,0.36,1)_0.4s_both] lg:block">
                    <img src={mint} alt="mint image" className="w-full drop-shadow-md" />
                </div>
 
                {/* center text */}
                <div className="ab-center relative z-[2] mx-auto max-w-lg !pt-6 text-center">
                    <h1 className="ab-heading text-4xl font-extrabold leading-tight text-[#e8364a] opacity-0 [animation:ab-fadeUp_0.6s_0.5s_cubic-bezier(0.22,1,0.36,1)_both] sm:text-5xl">
                        Better food for<br/>more people
                    </h1>
                    <p className="ab-sub !mt-4 text-base leading-7 text-[#6b7280] opacity-0 [animation:ab-fadeUp_0.6s_0.65s_cubic-bezier(0.22,1,0.36,1)_both]">
                        For over a decade, we've enabled our customers to
                        discover new tastes, delivered right to their doorstep
                    </p>
                </div>
 
                {/* stats bar */}
                <div className="ab-stats relative z-[2] !mx-auto !mt-10 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-[#e5e7eb] bg-[#e5e7eb] opacity-0 [animation:ab-fadeUp_0.6s_0.8s_cubic-bezier(0.22,1,0.36,1)_both] sm:grid-cols-3">
                    <div className="ab-stat flex items-center gap-3.5 bg-white !px-6 !py-5 text-left">
                        <div className="ab-stat-icon h-[52px] w-[52px] shrink-0">
                            <img src="/images/icon-restaurant.png" alt="" className="w-full"/>
                        </div>
                        <div>
                            <div className="ab-stat-num text-xl font-bold text-[#111827]">3,00,000+</div>
                            <div className="ab-stat-label !mt-0.5 text-xs text-[#9ca3af]">restaurants</div>
                        </div>
                    </div>
                    <div className="ab-stat flex items-center gap-3.5 bg-white !px-6 !py-5 text-left">
                        <div className="ab-stat-icon h-[52px] w-[52px] shrink-0">
                            <img src="/images/icon-location.png" alt="" className="w-full"/>
                        </div>
                        <div>
                            <div className="ab-stat-num text-xl font-bold text-[#111827]">800+</div>
                            <div className="ab-stat-label !mt-0.5 text-xs text-[#9ca3af]">cities</div>
                        </div>
                    </div>
                    <div className="ab-stat flex items-center gap-3.5 bg-white !px-6 !py-5 text-left">
                        <div className="ab-stat-icon h-[52px] w-[52px] shrink-0">
                            <img src="/images/icon-order.png" alt="" className="w-full"/>
                        </div>
                        <div>
                            <div className="ab-stat-num text-xl font-bold text-[#111827]">3 billion+</div>
                            <div className="ab-stat-label !mt-0.5 text-xs text-[#9ca3af]">orders delivered</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
            <section className="!px-5 !pb-20 sm:!px-8 lg:!px-16">
                <div className="mx-auto grid gap-10 rounded-[32px] border border-slate-100 bg-white !p-6 shadow-sm sm:!p-10 lg:grid-cols-2 lg:items-center lg:gap-14">
 
                    {/* left: company description */}
                    <div>
                        <span className="inline-block rounded-full bg-orange-50 !px-4 !py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                            Our story
                        </span>
                        <h2 className="!mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                            About Our Company
                        </h2>
                        <p className="!mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                            JetBite started with a simple idea: getting great food from your favourite local
                            restaurants shouldn't be complicated. What began as a small team has grown into a
                            platform connecting hundreds of thousands of restaurants with hungry customers
                            across the country.
                        </p>
                        <p className="!mt-3 text-sm leading-7 text-slate-500 sm:text-base">
                            We're obsessed with speed, reliability, and the little details that make ordering
                            in feel as good as eating out — from real-time tracking to a menu experience that
                            actually makes your mouth water.
                        </p>
 
                        <div className="!mt-6 flex items-center gap-2 text-sm font-semibold text-slate-600">
                            <FaLocationDot className="text-orange-400" />
                            Head Office — Coimbatore, Tamil Nadu, India
                        </div>
                    </div>
 
                    {/* right: map preview */}
                    <div className="overflow-hidden rounded-[24px] border border-slate-100 shadow-sm">
                        <iframe
                            title="JetBite Head Office Location"
                            src="https://maps.google.com/maps?q=Coimbatore%2C%20Tamil%20Nadu%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                            className="h-64 w-full border-0 sm:h-80 lg:h-96"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
    </div>
}

export default About;

