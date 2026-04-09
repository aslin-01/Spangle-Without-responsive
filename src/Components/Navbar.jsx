import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/Webx-nav-Logo_03.jpg"; // Make sure to have this image in your assets folder

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
          to === "/portfolio" && location.pathname.startsWith("/portfolio");

        const isServiceActive =
          to === "/services" && location.pathname.startsWith("/service");

        const trulyActive = isActive || isPortfolioActive || isServiceActive;

        return [
          linkBase,
          "after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-[#345261] after:transition-all after:duration-300",
          trulyActive ? "after:w-full" : "after:w-0",
        ].join(" ");
      },
    [linkBase, location.pathname],
  );

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white">
      {/* Navbar */}
      <div className="w-full border-b-1 border-[#ebebeb]">
       <div className="max-w-[1440px] px-[25px] h-[90px] grid grid-cols-[1fr_2fr_1fr] items-end">
          {/* Logo */}
          <NavLink to="/" className="leading-none mb-6 flex items-center justify-self-start">
            <img
              src={logo}
              alt="Spangles Webx"
              className="w-[200px] h-auto object-contain"
            />
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex items-end justify-center gap-[40px] justify-self-center">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    navLinkClass({ isActive, to: l.to })
                  }
                >
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
            className="hidden md:inline-flex items-center mb-4 justify-center gap-3 rounded-[8px] bg-[#345261] pl-[26px] pr-[26px] py-[18px] text-[12px] leading-[18px] font-bold uppercase text-white font-montserrat justify-self-end"
          >
            CONTACT US
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
