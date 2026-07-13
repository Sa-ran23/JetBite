import { useEffect } from "react";


function Shimmer() {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="px-3">

      {/* top hero */}
      <div className="flex justify-between items-start !mb-6 pt-3">
        <div className="flex flex-col gap-3 !ml-[19%] !mt-[11%]">
          <div className="sh rounded-[10px] w-[260px] h-[52px]"></div>
          <div className="sh w-[180px] h-[28px]"></div>
          <div className="sh w-[100px] h-[20px]"></div>
        </div>
        <div className="sh rounded-xl w-[21%] h-[253px] !mr-[141px] !mt-[36px]"></div>
      </div>

      {/* search */}
      <div className="flex justify-end gap-2 !mb-6 !mr-[1%]">
        <div className="sh rounded-[20px] w-[180px] h-[34px]"></div>
        <div className="sh rounded-[10px] w-[80px] h-[34px] !mr-[45px]"></div>
      </div>

      {/* category */}
      <div className="w-[1157px] !m-auto !p-[20px]">
        <div className="flex justify-between items-center !mb-3">
          <div className="sh w-[180px] h-[22px]"></div>
          <div className="flex gap-2">
            <div className="sh rounded-full w-[36px] h-[36px]"></div>
            <div className="sh rounded-full w-[36px] h-[36px]"></div>
          </div>
        </div>
        <div className="flex overflow-hidden !mb-6 gap-[93px] !pt-[10px] !pr-[10px]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="sh flex-none rounded-[10px] w-[140px] h-[130px]" key={i}></div>
          ))}
        </div>
      </div>

      {/* section title */}
      <div className="sh w-[280px] h-[24px] !m-[16px_0px_20px_111px]"></div>

      {/* cards grid */}
      <div className="flex flex-wrap gap-[16px] !mb-[12px] !ml-[112px]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="overflow-hidden w-[21%] rounded-[23px] !mb-[45px]" key={i}>
            <div className="sh w-full h-[190px] rounded-[0]"></div>
            <div className="!p-[10px_12px_14px] bg-[#f78e2e1a]">
              <div className="sh w-[70%] h-[16px] !mb-[8px]"></div>
              <div className="sh w-[90%] h-[13px] !mb-[20px]"></div>
              <div className="flex justify-between">
                <div className="sh w-[64px] h-[26px] rounded-[999px]"></div>
                <div className="sh w-[50px] h-[16px]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Shimmer;