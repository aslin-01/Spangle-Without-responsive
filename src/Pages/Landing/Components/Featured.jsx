import React from "react";  
import img1 from "../../../assets/portfolio1.jpg";
import img2 from "../../../assets/portfolio2.jpg";
import img3 from "../../../assets/portfolio3.jpg";
const projects = [
  {
    title: "Elon Date App",
    desc: "See the power of data in action as we break down how analytics driven decisions led to a surge in campaign",
    img: img1,
  },
  {
    title: "Renewable Energy Landing Page",
    desc: "See the power of data in action as we break down how analytics driven decisions led to a surge in campaign",
    img: img2,
  },
  {
    title: "Management Software",
    desc: "See the power of data in action as we break down how analytics driven decisions led to a surge in campaign",
    img: img3,
  },
];

export default function FeaturedWorkStack() {
  return (
    <div className="relative bg-[#395563] [clip-path:inset(0_0_0_0)] [-webkit-clip-path:inset(0_0_0_0)]">
      {/* Internal wrapper for relative stickiness tracking */}
      <div className="relative z-[1]">
        {/* HEADER WRAPPER - Limits sticky duration so the header scrolls away exactly when the last card arrives */}
        <div className="absolute top-0 left-0 right-0 h-[calc(100%-300px)] pointer-events-none">
          <div className="sticky top-0 z-[5] bg-transparent text-center pt-[80px] px-[20px] pb-[40px] pointer-events-auto">
            {/* BACKGROUND ARC FOR HEADER (Placed identically inside the header so it scrolls synchronously!) */}
            <div className="absolute -top-[450px] -left-[700px] w-[900px] h-[1000px] rounded-full border-[140px] border-[rgba(0,0,0,0.08)] pointer-events-none z-0">
              
            </div>

            {/* Foreground content needs relative zIndex so the arc stays behind */}
            <div className="relative z-[1]">
              <p className="font-montserrat font-bold text-[14px] leading-[100%] tracking-[1.43px] text-center uppercase text-[#FFFFFFB2]">
                OUR RECENT PROJECTS
              </p>

              <h2 className="font-montserrat font-semibold text-[32px] leading-[42.3px] tracking-[-1.06px] text-center text-white my-[10px]">
                Featured Work
              </h2>

              <p className="font-montserrat font-normal text-[16px] leading-[24.88px] tracking-[0px] text-center text-[#c6d7dc] max-w-[600px] mx-auto">
                Browse through some of our latest digital success stories — from
                web platforms to mobile apps and branding overhauls.
              </p>
            </div>
          </div>
        </div>

        {/* STACK SECTION */}
        {/* We use a flex-column with gap to explicitly create the scroll track without tricky margin collapsing */}
        <div className="pt-[250px] flex flex-col gap-[100vh] pb-0">
          {projects.map((item, index) => (
            <div
              key={index}
              className="sticky top-[280px] transform-gpu will-change-transform"
              style={{ zIndex: 10 + index }}
            >
              <div className="mx-[90px] flex justify-between items-center gap-[40px] bg-[#4c6571] rounded-[16px] p-[45px] border border-[rgba(255,255,255,0.1)] min-h-[280px]">
                {/* LEFT */}
                <div className="flex-1">
                  <h3 className="font-montserrat font-bold text-[24px] leading-[29.28px] tracking-[0px] text-white mb-[15px]">
                    {item.title}
                  </h3>
                  <p className="font-montserrat font-medium text-[16px] leading-[24.29px] tracking-[0px] text-[#A7A7A7] mb-[25px]">
                    {item.desc}
                  </p>

                  <div className="flex gap-[20px] text-white font-montserrat font-semibold  text-[18px] leading-[27.32px] tracking-[0px]">
                    <span>✔ 900% increase in ROI</span>
                    <span>✔ 40% decrease in CAC</span>
                  </div>

                  <button className="font-montserrat font-bold text-[16px] leading-[24.29px] tracking-[0px] mt-[20px] bg-[#395563] text-white py-[15px] px-[20px] rounded-[10px] border-none">
                    Read Full Case Study
                  </button>
                </div>

                {/* RIGHT */}
                <div className="flex-1">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[220px] object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* This maintains the 100px of visual blue space at the bottom entirely outside of the sticky track so it scrolls freely! */}
      <div className="h-[100px]"></div>
    </div>
  );
}
