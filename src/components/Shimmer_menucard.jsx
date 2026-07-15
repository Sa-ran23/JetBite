import { useEffect } from "react";


function Shimmer_menucard(){

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sh = `
  bg-gradient-to-r from-[#fdf0e0] via-[#f5e0c4] to-[#fdf0e0]
  bg-[length:600px_100%] [animation:shimmer_wave_1.5s_infinite_linear] rounded-lg block
`;

    return(<div>
        <style>{`
            @keyframes shimmer_wave {
                0%   { background-position: -600px 0; }
                100% { background-position: 600px 0; }
            }
        `}</style>
        <div className="flex flex-col gap-6 !p-4 sm:!p-6 lg:flex-row lg:gap-5 lg:!p-[22px] lg:!m-[20px]">
      <div className="flex flex-col gap-3.5 lg:flex-[1.1]">
        <div className="flex gap-1.5 items-center">
          <div className={`${sh} w-[50px] h-[13px]`} />
          <div className={`${sh} w-1.5 h-[13px] rounded-sm`} />
          <div className={`${sh} w-[50px] h-[13px]`} />
        </div>
        <div className={`${sh} w-40 sm:w-56 h-8 rounded-md`} />
        <div className="border border-[#e8d8c4] rounded-2xl !p-4 flex flex-col gap-2.5 max-w-md">
          <div className={`${sh} w-[55%] h-3.5`} />
          <div className={`${sh} w-[40%] h-3`} />
          <div className="flex gap-2 items-center">
            <div className={`${sh} w-4 h-4 rounded-full shrink-0`} />
            <div className={`${sh} w-[40%] h-3`} />
          </div>
          <div className="flex gap-2 items-center">
            <div className={`${sh} w-4 h-4 rounded-full shrink-0`} />
            <div className={`${sh} w-[28%] h-3`} />
          </div>
          <div className={`${sh} w-[28%] h-3`} />
        </div>
        <div className="flex items-center gap-2.5 !py-1">
          <div className={`${sh} flex-1 h-px !rounded-none`} />
          <div className={`${sh} w-[110px] h-3.5`} />
          <div className={`${sh} flex-1 h-px !rounded-none`} />
        </div>
        <div className="flex gap-2 justify-end">
          <div className={`${sh} w-[30px] h-[30px] rounded-full`} />
          <div className={`${sh} w-[30px] h-[30px] rounded-full`} />
        </div>
        <div className="flex gap-2.5 overflow-x-auto">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 min-w-[150px] border-[1.5px] border-dashed border-[#e0c9ae] rounded-xl !p-3 flex flex-col gap-2">
              <div className={`${sh} w-9 h-9 rounded-lg`} />
              <div className={`${sh} w-[55%] h-3.5`} />
              <div className={`${sh} w-[40%] h-3`} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-[1.6]">
        <div className="border border-[#e0cdb8] rounded-xl !px-4 !py-3 !mb-3.5">
          <div className={`${sh} w-[55%] h-4 !mx-auto`} />
        </div>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex justify-between items-start !py-4 border-b border-[#f0e8dc] last:border-b-0 gap-3 sm:!mt-[8px] lg:!mt-[22px]">
            <div className="flex-1 flex flex-col gap-2 min-w-0">
              <div className={`${sh} w-4 h-4 rounded-[3px]`} />
              <div className={`${sh} w-[55%] h-3.5`} />
              <div className={`${sh} w-[28%] h-3`} />
              <div className="flex gap-2 items-center">
                <div className={`${sh} w-4 h-4 rounded-full shrink-0`} />
                <div className={`${sh} w-[40%] h-3`} />
              </div>
              <div className={`${sh} w-[90%] h-[11px]`} />
              <div className={`${sh} w-[55%] h-3.5`} />
            </div>
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className={`${sh} w-20 h-16 sm:w-24 sm:h-20 lg:w-[90px] lg:h-20 rounded-xl`} />
              <div className={`${sh} w-16 sm:w-20 h-7 rounded-md`} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>)
}

export default Shimmer_menucard;
