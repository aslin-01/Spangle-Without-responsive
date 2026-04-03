import { useEffect, useState } from "react";

export default function MissionVision() {
  const missionCount = useCounter(2.5);
  const visionCount = useCounter(10000);
  const valuesCount = useCounter(85);

  function useCounter(end, duration = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  }
  return (
    <div className="bg-[#ffffff]">
      <div className="bg-[#e9eff2] mx-10 px-[85px] py-[75px] rounded-[20px] max-[1024px]:mx-6 max-[1024px]:px-[60px] max-[768px]:mx-0 max-[768px]:px-4 max-[768px]:py-[55px] max-[413px]:py-[45px]">
        {/* Row 1 - Mission */}
        <div className="grid grid-cols-[auto_450px_auto] items-start mb-[40px] max-[768px]:grid-cols-1 max-[768px]:gap-[20px] max-[413px]:mb-[25px]">
          {/* Text */}
          <div className="pr-20 max-[768px]:pr-0">
            <h2 className="text-[28px] text-[#395563] font-semibold mb-5 max-[768px]:text-[24px] max-[413px]:text-[22px]">
              Our Mission
            </h2>
            <p className="text-gray-400 text-[18px] text-[#6B6A66] leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
              className="rounded-[14px] w-full max-w-[450px] h-[290px] object-cover max-[768px]:max-w-full max-[768px]:h-[220px]"
            />
          </div>

          {/* Stat Box */}
          <div className="text-left pl-20 max-[768px]:pl-0">
            <div className="border border-green-300 w-[70px] h-[70px] rounded-[10px] flex items-center justify-center mb-3">
              📊
            </div>
            <p className="text-gray-400 text-[18px] text-[#6B6A66] mb-5 leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px]">
              Our Growth, Compare to Last Financial Year
            </p>
            <h3 className="font-medium text-[54px] leading-[64px] text-[#182F27] max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[32px] max-[413px]:leading-[38px]">
              {missionCount.toFixed(1)}X
            </h3>
          </div>
        </div>

       <div className="grid grid-cols-[250px_450px_auto] items-start mb-[40px] 
max-[768px]:grid-cols-1 max-[768px]:gap-[20px] max-[413px]:mb-[25px]">
  
  {/* Stat Box */}
  <div className="pr-7 max-[768px]:pr-0 max-[413px]:order-4">
    <div className="border border-green-300 w-[70px] h-[70px] rounded-[10px] flex items-center justify-center mb-3">
      👤
    </div>
    <p className="text-gray-400 text-[18px] text-[#6B6A66] mb-5 leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px]">
      Our Growth, Compare to Last Financial Year
    </p>
    <h3 className="font-medium text-[54px] leading-[64px] text-[#182F27] max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[32px] max-[413px]:leading-[38px]">
      {Math.floor(visionCount / 1000)}K
    </h3>
  </div>

  {/* Image */}
  <div className="flex justify-center max-[413px]:order-3">
    <img
      src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
      className="rounded-[14px] w-[450px] h-[290px] object-cover max-[768px]:w-full max-[768px]:h-[220px]"
    />
  </div>

  {/* Text */}
  <div className="pl-10 pr-[100px] max-[768px]:pl-0 max-[768px]:pr-0 max-[413px]:order-1">
    <h2 className="text-[28px] text-[#395563] font-semibold mb-5 max-[768px]:text-[24px] max-[413px]:text-[22px]">
      Our Vision
    </h2>
    <p className="text-gray-400 text-[18px] text-[#6B6A66] leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit
      tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </p>
  </div>

</div>

        {/* Row 3 - Core Values */}
        <div className="grid grid-cols-[auto_450px_auto] items-start max-[768px]:grid-cols-1 max-[768px]:gap-[20px]">
          {/* Text */}
          <div className="pr-20 max-[768px]:pr-0">
            <h2 className="text-[28px] text-[#395563] font-semibold mb-4 max-[768px]:text-[24px] max-[413px]:text-[22px]">
              Our Core Values
            </h2>
            <p className="text-gray-400 text-[18px] text-[#6B6A66] leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-[14px] w-[450px] h-[290px] object-cover max-[768px]:w-full max-[768px]:h-[220px]"
            />
          </div>

          {/* Stat Box */}
          <div className="pl-20 max-[768px]:pl-0">
            <div className="border border-green-300 w-[70px] h-[70px] rounded-[10px] flex items-center justify-center mb-3">
              💡
            </div>
            <p className="text-gray-400 text-[18px] text-[#6B6A66] mb-5 leading-[26px] max-[768px]:text-[14px] max-[768px]:leading-[22px]">
              High Retention Reflects our Commitment to Success.
            </p>
            <h3 className="font-medium text-[54px] leading-[64px] text-[#182F27] max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[32px] max-[413px]:leading-[38px]">
              {Math.floor(valuesCount)}%
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
