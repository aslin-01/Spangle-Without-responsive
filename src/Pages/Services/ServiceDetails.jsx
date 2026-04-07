import React from "react";

import { useLocation } from "react-router-dom";
import Support from "../About/Components/Support";
import { services } from "./Services";
import { useRef, useEffect } from "react";
import Serviceicon from "../../assets/service-icon.png"; // ✅ ADD THIS
// fallback images (reuse yours)
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import { useNavigate } from "react-router-dom";
const ServiceDetails = () => {
  const location = useLocation();

  const [service, setService] = React.useState(
    location.state || {
      title: "Cyber Security",
      image: img1,
      description: "Web designing in a powerful way...",
      gallery: [img1, img2, img3],
    },
  );

  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;

    const interval = setInterval(() => {
      if (!slider) return;

      const cardWidth = slider.children[0].offsetWidth + 24; // gap-6

      slider.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });

      // 🔁 seamless loop (no jump visible)
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 3000);


    

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
  if (location.state) {
    setService(location.state);
  }
}, [location.state]);
  
  return (
    <div className="w-full text-gray-700">
      {/* HERO SECTION */}
      <div className="relative h-[360px] w-full max-[413px]:h-[300px]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div
          className="absolute inset-0 flex flex-col justify-end px-[100px] pb-25 text-white 
    max-[1024px]:px-10 max-[1024px]:pb-20 
    max-[768px]:px-6 max-[768px]:pb-16 
    max-[413px]:px-4 max-[413px]:pb-10 
    min-[1024px]:max-[1200px]:px-[72px]"
        >
          {/* breadcrumb */}
          <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-white max-[413px]:text-[12px]">
            Home / Services
          </p>

          {/* heading */}
          <h1
            className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2 
      max-[1024px]:text-[48px] max-[1024px]:leading-[56px] 
      max-[768px]:text-[44px] max-[768px]:leading-[52px] 
      max-[413px]:text-[28px] max-[413px]:leading-[32px]"
          >
            {service.title}
          </h1>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="px-[100px] py-[100px] max-md:px-6">
        <div className="flex gap-[30px] max-md:flex-col">
          {/* LEFT COLUMN */}
          <div className="flex-[1.2]">
            {/* Paragraph */}
            <p className="font-[Montserrat] font-normal text-[16px] leading-[32px] text-[#6B6A66] mb-6">
              Life is busy, and your time is precious. Let us take care of the
              cleaning so you can enjoy a fresh, spotless living space without
              the hassle. Our residential cleaning services are tailored to fit
              your unique needs, delivering the highest standards of cleanliness
              and care.
            </p>

            {/* Heading */}
            <h2 className="font-[Montserrat] font-semibold text-[26px] leading-[26px] text-[#345261] mb-5">
              Advantages of Service
            </h2>

            <ul className="space-y-3 font-[Montserrat] font-normal text-[16px] leading-[32px] text-[#6B6A66]">
              {service.advantages?.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Tick */}
                  <span className="text-[#345261] text-[14px]">✔</span>

                  {/* Text */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN CARD */}
          <div className="flex-1">
            <div className="bg-[#F4F7FA4D] border border-[#EAECE9] rounded-xl px-[35px] py-[45px]">
              <h3 className="font-[Montserrat] font-semibold text-[24px] leading-[36.6px] text-[#345261] mb-4">
                Why Choose Our {service.title} Services?
              </h3>

              <ol className="space-y-2.5 text-[14px] text-[#6B6A66] leading-[22px]">
                {service.whyChoose?.map((item, i) => (
                  <li
                    key={i}
                    className="font-[Montserrat] font-normal text-[16px] leading-[30.03px] text-[#6B6A66]"
                  >
                    <span className="font-bold text-[#345261]">
                      {i + 1}. {item.title}:
                    </span>{" "}
                    {item.desc}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* VIEW ALL SERVICES SLIDER */}
      <div className="pl-[100px] pt-[65px] pb-[140px] bg-[#F7F9FB] max-md:px-6">
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-[40px]">
          <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] text-[#345261] uppercase">
            View All Services
          </p>

          <button className="group bg-[#345261] text-white px-[25px] py-[16px] rounded-[10px] text-[12px] leading-[18px] font-bold uppercase flex items-center gap-2 mr-[100px]">
            All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </button>
        </div>

        {/* SLIDER */}
        {/* SLIDER WRAPPER */}
        <div className="relative">
          {/* ✅ RIGHT SIDE BLUR (AFTER ARROW) */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-[60px] 
  bg-gradient-to-l from-[#F7F9FB] to-transparent z-20"
          />

          <button
            onClick={() => scroll("left")}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 
  w-[61px] h-[61px] bg-white border border-[#E5E5E5] 
  rounded-[10px] flex items-center justify-center shadow-sm z-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#345261] rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </button>
          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-[15px] top-1/2 -translate-y-1/2 
  w-[61px] h-[61px] 
  bg-white border border-[#E5E5E5] 
  rounded-[10px] 
  flex items-center justify-center 
  shadow-sm z-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#345261]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </button>

          {/* ✅ SLIDER */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pr-[60px]"
          >
            {[...services, ...services].map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setService({
                    ...item,
                    gallery: [item.image],
                  });

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="relative group cursor-pointer rounded-xl overflow-hidden 
    min-w-[calc((100%-48px)/3)] h-[432px] 
    shadow-[0px_0px_19.22px_0px_#00000012]"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* GRADIENT */}
                <div
                  className="absolute inset-0 
      bg-[linear-gradient(0deg,_#395563_0%,_rgba(20,34,92,0)_100%)]
      transition-all duration-500 ease-in-out 
      group-hover:opacity-0"
                />

                {/* DEFAULT CONTENT */}
                <div
                  className="absolute bottom-14 left-6 right-6 text-white 
    transition-all duration-500 group-hover:opacity-0"
                >
                  <div
                    className="w-12 h-12 mb-4 bg-white"
                    style={{
                      WebkitMaskImage: `url(${Serviceicon})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskImage: `url(${Serviceicon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />

                  <h3 className="font-[Montserrat] font-medium text-[20px] leading-[23px] text-white">
                    {item.title}
                  </h3>
                </div>

                {/* ✅ HOVER WHITE CARD (EXACT MATCH) */}
                <div
                  className="absolute bottom-6 left-6 right-6 
      bg-white rounded-xl px-5 pt-5 pb-6  
      opacity-0 translate-y-6 
      group-hover:opacity-100 group-hover:translate-y-0 
      transition-all duration-500 ease-in-out z-20"
                >
                  {/* ICON */}
                  <div
                    className="w-12 h-12 mb-4 bg-[#395563]"
                    style={{
                      WebkitMaskImage: `url(${Serviceicon})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskImage: `url(${Serviceicon})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />

                  {/* TITLE */}
                  <h3 className="mb-5 font-[Montserrat] font-medium text-[20px] leading-[23px] text-[#395563]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="font-normal text-[16px] leading-[23px] text-[#3955638F]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUPPORT */}
      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
};

export default ServiceDetails;
