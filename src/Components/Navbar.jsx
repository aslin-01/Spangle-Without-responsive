import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/Webx-nav-Logo_03.jpg"; // Make sure to have this image in your assets folder

import { services } from "../Pages/Services/Services";

const LINKS = [
  { to: "/", label: "HOME", end: true },
  { to: "/about", label: "ABOUT US" },
  {
    to: "/services",
    label: "SERVICES",
    hasDropdown: true,
    dropdown: services.map((s) => ({
      to: "/service-details",
      state: { ...s, gallery: [s.image] },
      label: s.title,
    })),
  },
  { to: "/portfolio", label: "PORTFOLIO" },
  { to: "/career", label: "CAREER" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpenMobile, setServiceOpenMobile] = useState(false);
  const location = useLocation();

  const linkBase =
    "relative inline-flex items-center gap-1 text-[13px] font-bold tracking-[0.08em] text-[#212529D4] hover:text-[#212529] pb-7 min-[1025px]:max-[1025px]:text-[12px] min-[1025px]:max-[1025px]:tracking-[0.05em] min-[1025px]:max-[1025px]:pb-6";

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
        <div className="max-w-[1440px] px-[25px] h-[80px] grid grid-cols-[1fr_2fr_1fr] items-end min-[1025px]:max-[1025px]:grid-cols-[180px_1fr_180px] min-[1025px]:max-[1025px]:px-[20px] max-[1025px]:h-[80px] max-[1025px]:grid-cols-[1fr_auto] max-[1025px]:items-center max-[1025px]:px-[20px] max-[413px]:h-[72px] max-[413px]:grid-cols-[1fr_auto] max-[413px]:items-center max-[413px]:px-[16px]">
          {/* Logo */}
          <NavLink
            to="/"
            className="leading-none mb-6 flex items-center justify-self-start min-[1025px]:max-[1025px]:mb-5 max-[1025px]:mb-0"
          >
            <img
              src={logo}
              alt="Spangles Webx"
              className="w-[200px] h-auto object-contain min-[1025px]:max-[1025px]:w-[170px] max-[1025px]:w-[170px] max-[413px]:w-[150px]"
            />
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden min-[1026px]:flex items-end justify-center gap-[40px] justify-self-center">
            {LINKS.map((l) => (
              <li key={l.to} className={l.hasDropdown ? "group relative" : ""}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    navLinkClass({ isActive, to: l.to })
                  }
                >
                  {l.label}
                  {l.hasDropdown ? <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" /> : null}
                </NavLink>

                {l.hasDropdown && l.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-[240px] bg-white shadow-lg border border-gray-100 rounded-md py-4 z-50">
                    <ul className="flex flex-col gap-2">
                      {l.dropdown.map((sub) => (
                        <li key={sub.label}>
                          <NavLink
                            to={sub.to}
                            state={sub.state}
                            className="block px-6 py-2 text-[14px] font-medium text-[#212529D4] hover:text-[#345261] hover:bg-gray-50 transition-colors"
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className="hidden min-[1026px]:inline-flex items-center mb-4 justify-center gap-3 rounded-[8px] bg-[#345261] pl-[26px] pr-[26px] py-[18px] text-[12px] leading-[18px] font-bold uppercase text-white font-montserrat justify-self-end"
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
            className="hidden max-[1025px]:inline-flex items-center justify-center p-2 text-[#212529D4]"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* 25px space */}
      <div className="h-[17px] max-[413px]:h-[13px]"></div>

      {/* Mobile menu */}
      {open && (
        <div className="min-[1026px]:hidden bg-white border-t max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="px-4 py-4">
            <ul className="flex flex-col gap-6">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <div
                    className="flex items-center justify-between"
                    onClick={() => {
                      if (l.hasDropdown) {
                        setServiceOpenMobile(!serviceOpenMobile);
                      } else {
                        setOpen(false);
                      }
                    }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.end}
                      onClick={(e) => {
                        if (l.hasDropdown) {
                          e.preventDefault();
                          setServiceOpenMobile(!serviceOpenMobile);
                        } else {
                          setOpen(false);
                        }
                      }}
                      className={({ isActive }) =>
                        [
                          "inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.08em] text-[#212529D4]",
                          isActive ? "text-[#212529]" : "",
                        ].join(" ")
                      }
                    >
                      {l.label}
                      {l.hasDropdown ? (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            serviceOpenMobile ? "rotate-180" : ""
                          }`}
                        />
                      ) : null}
                    </NavLink>
                  </div>

                  {l.hasDropdown && l.dropdown && serviceOpenMobile && (
                    <ul className="flex flex-col gap-4 pl-4 pt-4">
                      {l.dropdown.map((sub) => (
                        <li key={sub.label}>
                          <NavLink
                            to={sub.to}
                            state={sub.state}
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center text-[14px] text-[#6b6b6b] hover:text-[#212529]"
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#345261] px-[22px] py-[12px] text-[11px] font-bold tracking-[0.08em] text-white"
            >
              CONTACT US <span className="text-[14px] leading-none">→</span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
