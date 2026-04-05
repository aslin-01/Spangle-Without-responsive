import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Support from "../About/Components/Support";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.jpg";
import img6 from "../../assets/portfolio6.jpg";
import img7 from "../../assets/portfolio7.jpg";
import img8 from "../../assets/portfolio8.jpg";

const allProjects = [
  {
    id: 1,
    title: "Elon Date App",
    image: img1,
    desc: "Analytics-driven dating experience with smart matching.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "AI-powered compatibility matching",
        description:
          "Matches users based on deep behavioral analysis and preferences.",
      },
      {
        title: "Real-time analytics dashboard",
        description: "Provides insights into user activity and engagement.",
      },
      {
        title: "Secure messaging",
        description: "End-to-end encrypted communication for privacy.",
      },
      {
        title: "Dynamic profiling",
        description: "Continuously adapts user profiles based on interactions.",
      },
      {
        title: "Event scheduling",
        description: "Helps users plan and manage meetings efficiently.",
      },
    ],
  },

  {
    id: 2,
    title: "Waltur Website",
    image: img2,
    desc: "Modern business website with performance optimization.",
    fullDesc: "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Lightweight architecture",
        description: "Ensures fast loading and optimal performance.",
      },
      {
        title: "SEO-friendly structure",
        description: "Improves search engine visibility and ranking.",
      },
      {
        title: "Interactive modules",
        description: "Engaging service showcase components.",
      },
      {
        title: "CMS integration",
        description: "Easy content updates with custom management tools.",
      },
      {
        title: "Responsive design",
        description: "Optimized for all screen sizes and devices.",
      },
    ],
  },

  {
    id: 3,
    title: "AI Project",
    image: img3,
    desc: "AI-powered insights for smarter decision making.",
    fullDesc: "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Real-time processing",
        description: "Handles large datasets instantly.",
      },
      {
        title: "Predictive analytics",
        description: "Identifies future trends and patterns.",
      },
      {
        title: "Automated reports",
        description: "Generates and distributes reports efficiently.",
      },
      {
        title: "Custom alerts",
        description: "Notifies users about key data changes.",
      },
      {
        title: "Scalable ingestion",
        description: "Supports high-volume data input.",
      },
    ],
  },

  {
    id: 4,
    title: "Hyper Design",
    image: img4,
    desc: "Minimal UI with futuristic interaction design.",
    fullDesc: "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Micro-interactions",
        description: "Smooth and engaging UI animations.",
      },
      {
        title: "Minimal design",
        description: "Clean and distraction-free interface.",
      },
      {
        title: "Dynamic transitions",
        description: "Fluid layout and page changes.",
      },
      {
        title: "Vector graphics",
        description: "Optimized scalable visuals.",
      },
      {
        title: "Accessibility-first",
        description: "Designed for all users inclusively.",
      },
    ],
  },

  {
    id: 5,
    title: "Laptop UI",
    image: img5,
    desc: "Clean dashboard interface for productivity tools.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Modular widgets",
        description: "Customizable dashboard components.",
      },
      {
        title: "Task management",
        description: "Drag-and-drop workflow organization.",
      },
      {
        title: "Productivity metrics",
        description: "Track efficiency and performance.",
      },
      {
        title: "Notification center",
        description: "Unified alerts and updates.",
      },
      {
        title: "Collaboration tools",
        description: "Supports team-based work.",
      },
    ],
  },

  {
    id: 6,
    title: "Fashion Mockup",
    image: img6,
    desc: "Trendy fashion showcase with modern layout.",
    fullDesc:
      "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Interactive lookbook",
        description: "Showcases fashion collections beautifully.",
      },
      {
        title: "Image optimization",
        description: "High-quality visuals with fast loading.",
      },
      {
        title: "Typography layout",
        description: "Elegant and stylish text presentation.",
      },
      {
        title: "Social integration",
        description: "Connects with social media platforms.",
      },
      {
        title: "Checkout flow",
        description: "Simple and user-friendly purchasing.",
      },
    ],
  },

  {
    id: 7,
    title: "Creative Studio",
    image: img7,
    desc: "Creative branding and digital experience design.",
    fullDesc: "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "Project categories",
        description: "Organized creative work sections.",
      },
      {
        title: "Case studies",
        description: "Detailed project breakdowns.",
      },
      {
        title: "Process layout",
        description: "Step-by-step design storytelling.",
      },
      {
        title: "Custom animations",
        description: "Smooth page transitions.",
      },
      {
        title: "Blog integration",
        description: "Professional content publishing.",
      },
    ],
  },

  {
    id: 8,
    title: "Mobile UI Kit",
    image: img8,
    desc: "Modern mobile UI components and interactions.",
    fullDesc: "Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions. we help startups and ",
    functionalities: [
      {
        title: "UI components",
        description: "50+ reusable mobile elements.",
      },
      {
        title: "Native interactions",
        description: "Smooth mobile experience.",
      },
      {
        title: "Icon library",
        description: "Wide range of icons and fonts.",
      },
      {
        title: "Templates",
        description: "Pre-built app screens.",
      },
      {
        title: "Theme system",
        description: "Highly customizable design options.",
      },
    ],
  },
];

const PortfolioDetails = () => {
  const location = useLocation();

  // Find the initial project from allProjects based on the state passed from Portfolio.jsx
  const initialProject =
    allProjects.find((p) => p.id === location.state?.id) || allProjects[0];
  const [currentProject, setCurrentProject] = useState(initialProject);

  // slider state
  const [index, setIndex] = useState(0);

  // Filter out the current project from the slider
  const remainingProjects = allProjects.filter(
    (item) => item.id !== currentProject.id,
  );

  // duplicate projects for infinite effect
  const sliderItems = [...remainingProjects, ...remainingProjects];

  const handleProjectClick = (project) => {
    setCurrentProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (index >= remainingProjects.length) {
      const timeout = setTimeout(() => {
        setIndex(0);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [index, remainingProjects.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-gray-700">
      {/* HERO SECTION */}
      <div className="relative h-[360px] w-full">
        <img
          src={currentProject.image}
          alt={currentProject.title}
          className="w-full h-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div className="absolute inset-0 flex flex-col justify-end px-[100px] pb-[100px] text-white">
          <p className="font-montserrat font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-white">
            Home / Portfolio
          </p>

          <h1 className="font-montserrat font-semibold text-[54px] leading-[62px] text-white mt-2">
            {currentProject.title}
          </h1>
        </div>
      </div>

      {/* SLIDER SECTION */}
      {/* SLIDER SECTION */}
      <div className="pl-[100px] pb-[60px]">
        <div className="overflow-hidden w-full pt-[60px]">
          <div
            className={`flex ${index === 0 ? "" : "transition-transform duration-700 ease-in-out"}`}
            style={{
              transform: `translateX(calc(-${index * (460 + 30)}px))`, // 460 width + 30px gap
            }}
          >
            {sliderItems.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 cursor-pointer group"
                style={{ width: "460px", height: "380px", marginRight: "30px" }}
                onClick={() => handleProjectClick(item)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    style={{ borderRadius: 0 }} // removes border radius
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-semibold text-lg">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex gap-[120px] px-[100px] pb-[120px] border-b border-[#E5E5E5]">
        {/* LEFT SIDE */}
        <div className="flex-[2]">
          <h3 className="mb-5 font-montserrat font-semibold text-[38px] leading-[52px] tracking-[0%] text-[#345261] align-middle">
            Description
          </h3>

          <p className="font-montserrat font-normal text-[18px] leading-[28px] tracking-[0%] text-[#6B6A66] text-justify align-middle pb-6">
            {currentProject.fullDesc}
          </p>
          <h4 className="mb-5 font-montserrat font-semibold text-[38px] leading-[52px] tracking-[0%] text-[#345261] align-middle">
            The key functionalities include:
          </h4>

          <ul className="mt-4 space-y-3 pl-5 list-disc">
            {currentProject.functionalities.map((func, idx) => (
              <li key={idx} className="leading-[28px] text-[18px] align-middle">
                {/* Title (SemiBold) */}
                <span className="font-semibold text-[#161C2D]">
                  {func.title}:
                </span>{" "}
                {/* Description (Regular) */}
                <span className="font-normal text-[#6B6A66]">
                  {func.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex-1">
          <h4 className="mb-9 font-montserrat font-semibold text-[24px] leading-[32px] tracking-[0%] text-[#345261] align-middle">
            Get A Quote
          </h4>
          <div className="flex-1 p-[30px] rounded-md bg-white shadow h-fit">
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-[30px] mb-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-1 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter name here"
                    className="w-[156px] border border-gray-300 px-4.5 py-4 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="w-[156px] border border-gray-300 px-4.5 py-4 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px]"
                  />
                </div>
              </div>

              <div className="flex gap-[30px] mb-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27]"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Your phone number"
                    className="w-[156px] border border-gray-300 px-4.5 py-4 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="company"
                    className="mb-2 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27]"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="w-[156px] border border-gray-300 px-4.5 py-4 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px]"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-5 font-montserrat font-medium text-[14px] uppercase leading-[14px] text-[#182F27]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message goes here..."
                  className="w-full border mb-5 border-gray-300 px-3 py-4 text-[12px] font-montserrat font-medium placeholder-[#34526166] leading-[12px] rounded-[10px] h-[80px]"
                ></textarea>
              </div>

              <button
                type="submit"
                className=" px-[26px] py-[15px] bg-[#345261] text-white text-[18px] leading-[100%] tracking-[0%] text-center align-middle font-bold font-[Montserrat] rounded-[10px] hover:bg-[#1f2a30]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Support Section */}
      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
};

export default PortfolioDetails;
