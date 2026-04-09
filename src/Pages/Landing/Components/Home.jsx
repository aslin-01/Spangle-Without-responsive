import React from "react";
import spiralBg from "../../../assets/Spiral.png"; // Make sure to have this image in your assets folder
import scurve from "../../../assets/s-shape3.png"; // Make sure to have this image in your assets folder
import imgvibe from "../../../assets/imgvibe.jpg"; // Make sure to have this image in your assets folder



export default function HeroSection() {
  return (
    <div className="overflow-x-clip">
      <section className="relative bg-[#ffffff] pt-10 pb-60">
        {/* TOP LEFT THICK ARC */}
      <div className="absolute -top-[250px] -left-[250px] w-[500px] h-[500px] border-[60px] border-gray-50 rounded-full z-0"></div>

        {/* THIN GREY LINE (LARGE CIRCLE) */}
        <svg
          className="absolute top-[250px] left-0 w-[600px] md:w-[600px] h-[600px] md:h-[650px] z-1 pointer-events-none opacity-60"
          viewBox="0 0 1000 1000"
          fill="none"
        >
          <path
          d="M 0 0 Q 550 100, 650 700"
            stroke="#D1D5DB"
            strokeWidth="4"
            fill="none"
          />
        </svg>

        {/* RIGHT SPIRAL / WAVE BACKGROUND */}
        <div className="absolute top-[-10%] right-0 w-[100%] md:w-[85%] h-[120%] z-0 opacity-80 pointer-events-none">
          <img
            src={spiralBg}
            alt=""
            className="w-full h-full object-contain object-right-top md:object-right"
            style={{ transform: "scale(1.2) translateX(-5%)" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 text-center">
          {/* BADGE */}
          <div className="inline-block font-montserrat text-[14px] font-bold leading-[18px] text-[#395563] bg-gray-200 px-2.5 py-2.5 rounded-[10px] mb-6 text-center capitalize">  Best Marketing Agency
          </div>

          {/* HEADING */}
          <h1 className="text-[48px] font-semibold text-[#395563] leading-[61.5px] text-center mb-7.5">
            Empowering Businesses with <br className="hidden md:block" />
            Cutting-Edge Digital Solutions
          </h1>

          {/* DESCRIPTION */}
          <p className="font-montserrat text-[16px] font-normal leading-[22.5px] text-[#6B6A66] text-center max-w-[500px] mx-auto mb-7.5">
            Spangles Webx Private Limited offers tailored solutions in Web
            Development, UI/UX Design, Mobile Apps, and Branding to help your
            business thrive in the digital world.
          </p>

          {/* BUTTON */}
          <button className="font-montserrat text-[14px] font-semibold leading-[100%] text-white text-center px-[15px] py-[12px] rounded-[10px] border-[0.75px] border-transparent bg-[#395563] hover:bg-[#2f4650] transition">
  Explore Services
</button>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="relative z-20 pb-16 bg-transparent -mt-32">
        {/* CURVE IMAGE (BACKGROUND) - moved to section level for full width relative positioning */}
      <img
  src={scurve}
  alt=""
  className="absolute -top-[60px] left-0 w-[70%] object-cover object-right h-auto pointer-events-none z-0 opacity-80"
  style={{
    filter: "invert(21%) sepia(94%) saturate(2793%) hue-rotate(247deg) brightness(95%) contrast(95%)"
  }}
/>

        <div className="max-w-6xl mx-auto px-6">
          <div className="relative flex justify-center">
            {/* MAIN IMAGE CARD */}
            <div className="relative z-10 w-full max-w-4xl rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <img
                src={imgvibe}
                alt="Preview"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}