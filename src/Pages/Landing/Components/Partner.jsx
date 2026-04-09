import React from "react";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon-4.png";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#Ffffff] py-[90px] relative overflow-hidden">
      {/* Dots Pattern */}
      <div className="absolute left-[0px] top-[120px] grid grid-cols-8 gap-[8px]">
        {[...Array(72)].map((_, i) => (
          <span
            key={i}
            className="w-[6px] h-[6px] bg-[#130D3A] rounded-full opacity-100"
          ></span>
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto px-6 text-center">
        {/* Top Label */}
        <p className="font-montserrat font-bold text-[14px] leading-[100%] tracking-[1.43px] uppercase text-center text-[#395563] mb-[20px]">
          WHY CHOOSE US
        </p>

        {/* Heading */}
        <h2 className="font-montserrat font-semibold text-[32px] leading-[42.3px] tracking-[-1.06px] text-center text-[#161C2D] mb-[100px]">
          Why Partner With Spangles <br />
          Webx?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[120px] gap-y-[50px] text-left">
          {/* Item 1 */}
          <div className="flex items-start gap-[26px]">
            <div className="p-[20px] bg-[#E0E7FF] rounded-[10px] flex items-center justify-center">
              <img
                src={icon3}
                alt="icon"
                className="w-[35px] h-[35px] object-contain"
              />
            </div>

            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px]">
                Expert Team of Developers & Designers
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-[26px]">
          <div className="p-[20px] bg-[#e6f4ee] rounded-[10px] flex items-center justify-center">
              <img
                src={icon4}
                alt="icon"
                className="w-[35px] h-[35px] object-contain"
              />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px]">
                Modern, Scalable Tech Stack
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-[26px]">
            <div className="p-[20px] bg-[#dee1e6] rounded-[10px] flex items-center justify-center">
              <img
                src={icon1}
                alt="icon"
                className="w-[35px] h-[35px] object-contain"
              />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px]">
                Timely Delivery & Ongoing Support
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-[26px]">
            <div className="p-[20px] bg-[#f4e6e9] rounded-[10px] flex items-center justify-center">
              <img
                src={icon2}
                alt="icon"
                className="w-[35px] h-[35px] object-contain"
              />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] mb-[6px]">
                100% Project Transparency
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#6B6A66] max-w-[300px]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] mx-[55px] mt-[100px] mb-[40px]"></div>

        {/* Bottom CTA */}
        <div className="flex flex-col mx-[55px] md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="font-montserrat font-bold text-[28px] leading-[38.78px] tracking-[-1.06px] text-[#161C2D] mb-[14px]">
              Ready to launch your next project?
            </h3>
            <p className="font-montserrat font-normal text-[18px] leading-[28.2px] tracking-[-0.18px] text-[#6B6A66] max-w-[480px]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>

          <button className="bg-[#395563] hover:bg-[#2f4650] text-white font-montserrat font-bold text-[12px] leading-[18px] tracking-[0px] uppercase text-center align-middle px-[25px] py-[17px] rounded-[10px] flex items-center justify-center gap-2 whitespace-nowrap transition">
            GET START
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 max-[413px]:w-[12px] max-[413px]:h-[12px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
