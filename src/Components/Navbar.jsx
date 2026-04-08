// import { useMemo, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";

// const LINKS = [
//   { to: "/", label: "HOME", end: true },
//   { to: "/about", label: "ABOUT US" },
//   { to: "/services", label: "SERVICES", hasDropdown: true },
//   { to: "/portfolio", label: "PORTFOLIO" },
//   { to: "/career", label: "CAREER" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const linkBase =
//     "relative inline-flex items-center gap-1 text-[11px] font-montserrat font-bold tracking-[0.08em] text-[#212529D4] hover:text-[#212529] pb-[6px]";

//   const navLinkClass = useMemo(
//     () =>
//       ({ isActive }) =>
//         [
//           linkBase,
//           isActive
//             ? "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-[54px] after:bg-[#345261]"
//             : "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-[0px] after:bg-transparent",
//         ].join(" "),
//     [linkBase],
//   );

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm mb-[25px]">
//       <nav className="mx-auto flex items-center justify-between px-[60px] pt-[18px]">
//         {/* Logo */}
//         <NavLink to="/" className="leading-none">
//           <div className="font-montserrat font-bold tracking-[0.18em] text-[#212529D4] text-[12px]">
//             SPANGLEZ WEBX
//           </div>
//           <div className="mt-[6px] text-[9px] tracking-[0.42em] text-[#21252980] uppercase">
//             Private Limited
//           </div>
//         </NavLink>

//         {/* Desktop links */}
//         <ul className="hidden md:flex flex-1 items-end justify-center gap-[34px]">
//           {LINKS.map((l) => (
//             <li key={l.to} className="mb-[25px]">
//               <NavLink to={l.to} end={l.end} className={navLinkClass}>
//                 {l.label}
//                 {l.hasDropdown ? <ChevronDown className="h-3 w-3" /> : null}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop CTA */}
//         <NavLink
//           to="/contact"
//           className="hidden md:inline-flex items-center gap-2 rounded-[8px] bg-[#345261] px-[22px] py-[12px] text-[11px] font-montserrat font-bold tracking-[0.08em] text-white"
//         >
//           CONTACT US <span className="text-[14px] leading-none">→</span>
//         </NavLink>

//         {/* Mobile toggle */}
//         <button
//           type="button"
//           className="md:hidden inline-flex items-center justify-center p-2 text-[#212529D4]"
//           aria-label="Toggle menu"
//           onClick={() => setOpen((v) => !v)}
//         >
//           {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </nav>

//       {/* Bottom border line */}
//       <div className="h-px w-full bg-[#E9EFF2]" />

//       {/* Mobile menu */}
//       {open ? (
//         <div className="md:hidden bg-white">
//           <div className="px-4 py-4">
//             <ul className="flex flex-col gap-4">
//               {LINKS.map((l) => (
//                 <li key={l.to}>
//                   <NavLink
//                     to={l.to}
//                     end={l.end}
//                     onClick={() => setOpen(false)}
//                     className={({ isActive }) =>
//                       [
//                         "inline-flex items-center gap-2 text-[12px] font-montserrat font-bold tracking-[0.08em] text-[#212529D4]",
//                         isActive ? "text-[#212529]" : "",
//                       ].join(" ")
//                     }
//                   >
//                     {l.label}
//                     {l.hasDropdown ? <ChevronDown className="h-4 w-4" /> : null}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             <NavLink
//               to="/contact"
//               onClick={() => setOpen(false)}
//               className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#345261] px-[22px] py-[12px] text-[11px] font-montserrat font-bold tracking-[0.08em] text-white"
//             >
//               CONTACT US <span className="text-[14px] leading-none">→</span>
//             </NavLink>
//           </div>
//         </div>
//       ) : null}
//     </header>
//   );
// }

// import { NavLink } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";

// export default function Navbar() {
//   const navLink =
//     "text-[13px] tracking-wider text-gray-700 hover:text-black pb-4";

//   const activeLink =
//     "border-b-2 border-[#2F4858] text-black pb-4";

//   return (
//     <div className="sticky top-0 z-50 bg-[#F4F4F4] h-[107px]">
      
//       {/* Navbar */}
//       <div className="w-full border-b-2 border-gray-300">
//         <div className="max-w-[1200px] mx-auto flex items-end justify-between h-[82px] px-4">
          
//           {/* Logo */}
//           <div className="flex flex-col leading-tight mb-2">
//             <h1 className="text-[14px] tracking-[3px] font-semibold text-gray-700">
//               SPAGLIA WEBX
//             </h1>
//             <span className="text-[9px] tracking-[2px] text-gray-400">
//               Private Limited
//             </span>
//           </div>

//           {/* Menu */}
//           <div className="flex items-end gap-10">
//             <NavLink to="/" className={({ isActive }) => isActive ? activeLink : navLink}>
//               HOME
//             </NavLink>

//             <NavLink to="/about" className={({ isActive }) => isActive ? activeLink : navLink}>
//               ABOUT US
//             </NavLink>

//             <div className="flex items-center gap-1 cursor-pointer pb-4 text-[13px] tracking-wider text-gray-700">
//               SERVICES
//               <FaChevronDown className="text-[10px] mb-[2px]" />
//             </div>

//             <NavLink to="/portfolio" className={({ isActive }) => isActive ? activeLink : navLink}>
//               PORTFOLIO
//             </NavLink>

//             <NavLink to="/career" className={({ isActive }) => isActive ? activeLink : navLink}>
//               CAREER
//             </NavLink>
//           </div>

//           {/* Contact Button */}
//           <button className="bg-[#2F4858] text-white px-6 py-2 rounded-md text-[13px] mb-2">
//             CONTACT US →
//           </button>

//         </div>
//       </div>

//       {/* 25px space */}
//       <div className="h-[25px]"></div>

//     </div>
//   );
// }

import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "HOME", end: true },
  { to: "/about", label: "ABOUT US" },
  { to: "/services", label: "SERVICES", hasDropdown: true },
  { to: "/portfolio", label: "PORTFOLIO" },
  { to: "/career", label: "CAREER" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const linkBase =
    "relative inline-flex items-center gap-1 text-[13px] font-bold tracking-[0.08em] text-[#212529D4] hover:text-[#212529] pb-7";

const navLinkClass = useMemo(
  () =>
    ({ isActive, to }) => {
      const isPortfolioActive =
        to === "/portfolio" &&
        location.pathname.startsWith("/portfolio");

      const isServiceActive =
        to === "/services" &&
        location.pathname.startsWith("/service");

      const trulyActive = isActive || isPortfolioActive || isServiceActive;

      return [
        linkBase,
        "after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-[#345261] after:transition-all after:duration-300",
        trulyActive ? "after:w-full" : "after:w-0",
      ].join(" ");
    },
  [linkBase, location.pathname]
);

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white">
      
      {/* Navbar */}
      <div className="w-full border-b-1 border-[#ebebeb]">
        <div className="max-w-[1200px] mx-auto flex items-end justify-between h-[90px] px-4">
          
          {/* Logo */}
          <NavLink to="/" className="leading-none mb-6">
            <div className="font-bold tracking-[0.18em] text-[#212529D4] text-[12px]">
              SPAGLIA WEBX
            </div>
            <div className="mt-[6px] text-[9px] tracking-[0.42em] text-[#21252980] uppercase">
              Private Limited
            </div>
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex items-end justify-center gap-[40px]">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={({ isActive }) => navLinkClass({ isActive, to: l.to })}>
                  {l.label}
                  {l.hasDropdown ? <ChevronDown className="h-3 w-3" /> : null}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          {/* <NavLink
            to="/contact"
          className="hidden md:inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#345261] px-[26px]  py-[18px] text-[12px] leading-[18px] font-bold tracking-normal uppercase text-white "
          >
            CONTACT US <span className="text-[14px] leading-none">→</span>
          </NavLink> */}

          <NavLink
  to="/contact"
  className="hidden md:inline-flex items-center mb-4 justify-center gap-3 rounded-[8px] bg-[#345261] pl-[26px] pr-[26px] py-[18px] text-[12px] leading-[18px] font-bold uppercase text-white font-montserrat"
>
  CONTACT US
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M2 7H11M11 7L7 3M11 7L7 11"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</NavLink>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 text-[#212529D4]"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* 25px space */}
      <div className="h-[25px]"></div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4">
            <ul className="flex flex-col gap-4">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        "inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#212529D4]",
                        isActive ? "text-[#212529]" : "",
                      ].join(" ")
                    }
                  >
                    {l.label}
                    {l.hasDropdown ? <ChevronDown className="h-4 w-4" /> : null}
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#345261] px-[22px] py-[12px] text-[11px] font-bold tracking-[0.08em] text-white"
            >
              CONTACT US <span className="text-[14px] leading-none">→</span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}