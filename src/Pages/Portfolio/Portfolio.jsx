import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.jpg";
import img6 from "../../assets/portfolio6.jpg";
import img7 from "../../assets/portfolio7.jpg";
import img8 from "../../assets/portfolio8.jpg";
import Support from "../About/Components/Support";
// 👉 add your background image
import bannerImg from "../../assets/portfolio-banner.jpg";

export default function Portfolio() {
  const navigate = useNavigate();
const [showAll, setShowAll] = useState(false);
const portfolio = [
  {
    id: 1,
    title: "Elon Date App",
    image: img1,
    desc: "Analytics-driven dating experience with smart matching.",
  },
  {
    id: 2,
    title: "Waltur Website",
    image: img2,
    desc: "Modern business website with performance optimization.",
  },
  {
    id: 3,
    title: "AI Project",
    image: img3,
    desc: "AI-powered insights for smarter decision making.",
  },
  {
    id: 4,
    title: "Hyper Design",
    image: img4,
    desc: "Minimal UI with futuristic interaction design.",
  },
  {
    id: 5,
    title: "Laptop UI",
    image: img5,
    desc: "Clean dashboard interface for productivity tools.",
  },
  {
    id: 6,
    title: "Fashion Mockup",
    image: img6,
    desc: "Trendy fashion showcase with modern layout.",
  },

  // 👉 NEW CARDS
  {
    id: 7,
    title: "Creative Studio",
    image: img7,
    desc: "Creative branding and digital experience design.",
  },
  {
    id: 8,
    title: "Mobile UI Kit",
    image: img8,
    desc: "Modern mobile UI components and interactions.",
  },
];

  const goToDetails = (item) => {
    navigate("/portfolio-details", { state: item });
  };


  
  return (
    <div>
      {/* ✅ NEW BANNER SECTION (like your image) */}
      <div className="relative h-[360px] w-full">
        <img
          src={bannerImg}
          alt="banner"
          className="w-full h-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div className="absolute inset-0 flex flex-col justify-end px-[100px] pb-25 text-white">
          <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-white">
            Home / Portfolio
          </p>
          <h1 className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2">
            Featured Work
          </h1>
        </div>
      </div>

      {/* ✅ YOUR ORIGINAL SECTION (UNCHANGED) */}
     <div className="bg-white pt-[60px] pb-[80px] border-b border-[#E5E5E5] px-[160px]">
        <div className="grid md:grid-cols-2 gap-15 mb-8.5">
       {(showAll ? portfolio : portfolio.slice(0, 6)).map((item) => (
            <div
              key={item.id}
              onClick={() => goToDetails(item)}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[280px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-montserrat font-bold pb-1 text-[26px] leading-[29.28px] text-white">
                  {item.title}
                </h3>

                <p className="font-montserrat font-medium text-[14px] leading-[24.29px] text-[#E2E2E2]">
                  {item.desc}
                </p>
              </div>

              {/* Arrow */}
              {/* Arrow Button */}
              <div className="absolute top-5.5 right-5.5 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#345261] group-hover:scale-110">
                <ArrowRight
                  size={25}
                  className="text-[#345261] transform rotate-[315deg] group-hover:rotate-[360deg] group-hover:text-white transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center ">
         {/* <button
  onClick={() => setShowAll(true)}
  className="font-montserrat font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-[#395563] flex items-center gap-2 mx-auto"
>
  SHOW ALL <ArrowRight size={14} />
</button> */}


<button
  onClick={() => setShowAll(!showAll)}
  className="font-montserrat font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-[#395563] flex items-center gap-2 mx-auto"
>
  {showAll ? "SHOW LESS" : "SHOW ALL"} <ArrowRight size={14} />
</button>
        </div>
      </div>

      <div className="-mt-[40px] relative z-10">
              <Support />
            </div>
    </div>
  );
}
