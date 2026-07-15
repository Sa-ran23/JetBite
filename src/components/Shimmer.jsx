import { useEffect } from "react";


function Shimmer() {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sh = "sh bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 bg-[length:600px_100%] [animation:shimmer_wave_1.4s_infinite_linear] rounded-lg block";

  return (
    <div className="!px-4 sm:!px-6 lg:!px-8 !py-6">
      <style>{`
        @keyframes shimmer_wave {
          0%   { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
      `}</style>
      <div className="!mx-auto flex max-w-7xl flex-col items-center gap-8 !mb-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="flex w-full flex-col items-center gap-3 sm:items-start lg:w-1/2">
          <div className={`${sh} w-[80%] max-w-[260px] h-[44px] sm:h-[52px]`}></div>
          <div className={`${sh} w-[60%] max-w-[180px] h-[24px] sm:h-[28px]`}></div>
          <div className={`${sh} w-[40%] max-w-[140px] h-[18px] sm:h-[20px]`}></div>
        </div>
        <div className={`${sh} w-52 h-52 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[220px]`}></div>
      </div>
      <div className="!mx-auto flex max-w-7xl flex-col gap-2 !mb-8 sm:flex-row sm:justify-end">
        <div className={`${sh} w-full sm:w-[220px] h-[46px]`}></div>
        <div className={`${sh} w-full sm:w-[110px] h-[46px]`}></div>
      </div>
      <div className="!mx-auto max-w-7xl rounded-[28px] border border-slate-100 !p-5 sm:!p-7 !mb-6">
        <div className="flex justify-between items-center !mb-4">
          <div className={`${sh} w-[140px] sm:w-[180px] h-[20px] sm:h-[22px]`}></div>
          <div className="flex gap-2">
            <div className={`${sh} rounded-full w-9 h-9`}></div>
            <div className={`${sh} rounded-full w-9 h-9`}></div>
          </div>
        </div>
        <div className="flex overflow-x-auto !mb-2 gap-4 sm:gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className={`${sh} flex-none w-20 h-20 sm:w-24 sm:h-24 rounded-full`} key={i}></div>
          ))}
        </div>
      </div>
      <div className="!mx-auto max-w-7xl">
        <div className={`${sh} w-[200px] sm:w-[280px] h-[22px] sm:h-[24px] !mb-6`}></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 !mb-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="overflow-hidden rounded-[24px] border border-slate-100" key={i}>
              <div className={`${sh} w-full h-44 sm:h-48 !rounded-none`}></div>
              <div className="!p-4">
                <div className={`${sh} w-[70%] h-4 !mb-2`}></div>
                <div className={`${sh} w-[90%] h-3 !mb-1`}></div>
                <div className={`${sh} w-[60%] h-3 !mb-4`}></div>
                <div className="flex justify-between">
                  <div className={`${sh} w-16 h-6 rounded-full`}></div>
                  <div className={`${sh} w-12 h-4`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
