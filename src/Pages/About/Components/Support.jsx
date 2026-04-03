import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../../assets/logo.png";

export default function SupportBar() {
  return (
    <div className="px-[75px] mb-1 bg-[#ffffff] max-[1024px]:px-6 max-[768px]:px-4 max-[413px]:px-0 max-[413px]:flex max-[413px]:justify-center">
     <div className="bg-white rounded-[14px] shadow-[0px_0px_20px_2px_#00000012] px-[75px] pt-[37px] pb-[45px] flex items-start justify-between max-[1024px]:px-6 max-[768px]:px-4 max-[413px]:px-[28px] max-[413px]:flex-col max-[413px]:gap-[20px] max-[413px]:max-w-[360px] max-[413px]:w-full">
        {/* Logo */}

        <div className="flex items-center max-[413px]:self-center">
          <img
            src={logo}
            alt="Spanglez Webx"
            className="h-[50px] w-auto object-contain max-[413px]:h-[46px]"
          />
        </div>

        {/* Divider */}
        {/* <div className="h-[60px] w-[1px] bg-gray-200"></div> */}

        {/* Call for support */}
        <div className="text-start">
          <p className="font-bold text-[14px] mb-4 leading-[15.6px] tracking-[0] align-middle uppercase text-[#34515F]">
            CALL FOR SUPPORT
          </p>
          <a
            href="tel:180012345678"
            className="block mt-1 font-montserrat font-normal text-[16px] leading-[36px] tracking-[0] align-middle uppercase text-[#EE6196] max-[413px]:text-[14px] max-[413px]:leading-[26px]"
          >
            1800 - 123 456 78
          </a>
          <a
            href="mailto:allan@spangles.com"
            className="font-montserrat font-normal text-[16px] leading-[18px] tracking-[0] 
  align-middle underline text-[#6B6A66] max-[413px]:text-[14px]"
          >
            allan@spangles.com
          </a>
        </div>

        {/* Divider */}
        <div className="h-[100px] w-[1px] bg-gray-200 max-[413px]:h-[1px] max-[413px]:w-full"></div>

        {/* Address */}
        <div>
          <p className="font-bold text-[14px] mb-4 leading-[15.6px] tracking-[0] align-middle uppercase text-[#34515F]">
            ADDRESS
          </p>
          <p className="mt-1 font-montserrat font-normal text-[16px] leading-[24px] tracking-[0] align-middle text-[#6B6A66] max-[413px]:text-[14px] max-[413px]:leading-[20px]">
            389, Joe Daniel st, Near palpannai,
            <br />
            Nagercoil, KK District - 629003
          </p>
        </div>

        {/* Divider (mobile) */}
        <div className="hidden max-[413px]:block h-[1px] w-full bg-gray-200" />

        {/* Follow */}
        <div>
          <p className="mb-4 font-bold text-[14px] leading-[15.6px] tracking-[0] align-middle uppercase text-[#34515F]">
            FOLLOW US
          </p>

          <div className="flex max-[413px]:gap-[12px] max-[413px]:justify-center">
            <div className="p-[10px] rounded-[10px] cursor-pointer max-[413px]:p-[9px]">
              <FaFacebookF
                className="text-[#345261] text-[18px] hover:text-[#345261] transition max-[413px]:text-[14px]"
              />
            </div>

            <div className="p-[10px] rounded-[10px] cursor-pointer max-[413px]:p-[9px]">
              <FaTwitter
                className="text-[#B3BDD1] text-[18px] hover:text-[#345261] transition max-[413px]:text-[14px]"
              />
            </div>

            <div className=" p-[10px] rounded-[10px] cursor-pointer max-[413px]:p-[9px]">
              <FaLinkedinIn
                className="text-[#B3BDD1] text-[18px] hover:text-[#345261] transition max-[413px]:text-[14px]"
              />
            </div>

            <div className=" p-[10px] rounded-[10px] cursor-pointer max-[413px]:p-[9px]">
              <FaInstagram
                className="text-[#B3BDD1] text-[18px] hover:text-[#345261] transition max-[413px]:text-[14px]"
              />
            </div>

            <div className=" p-[10px] rounded-[10px] cursor-pointer max-[413px]:p-[9px]">
              <FaYoutube
                className="text-[#B3BDD1] text-[18px] hover:text-[#345261] transition max-[413px]:text-[14px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
