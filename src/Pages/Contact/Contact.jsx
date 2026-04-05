import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import phoneIcon from "../../assets/Phone.png";
import mailIcon from "../../assets/Mail.png";
import chatIcon from "../../assets/Chat.png";
import Support from "../About/Components/Support";

export default function Contact() {
  const inputStyle = `w-full h-[48.6px] px-5 rounded-[10px]
border border-[#E8ECEF] bg-white outline-none
font-montserrat text-[14px] leading-[100%]
placeholder:text-[#34526180]
focus:border-[#2f4858]`;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Please enter your name.";
    if (!form.phone) newErrors.phone = "Enter a valid phone number.";
    if (!form.email) newErrors.email = "Email address is required.";
    if (!form.message) newErrors.message = "Message field cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      {/* Contact Cards Section */}
      <div className="mx-[20px] sm:mx-[40px] md:mx-[67px] xl:mx-[67px] max-w-[1306px] pt-25 pb-20 text-center bg-[#ffffff] 
      max-[768px]:pt-12 max-[768px]:pb-10 max-[413px]:pt-10 max-[413px]:pb-5 max-[413px]:mx-4">
        <div className="w-[520px] mx-auto text-center max-[768px]:w-full">
          <p className="text-[14px] font-bold tracking-[1.43px] leading-[100%] text-[#395563] uppercase text-center mb-2 max-[768px]:text-[13px] max-[413px]:text-[12px]">
            CONTACT US
          </p>
          <h2 className="font-montserrat text-[32px] leading-[42.3px] tracking-[-1.06px] text-[#161C2D] font-semibold max-w-[460px] mx-auto text-center mb-4 
          max-[768px]:text-[28px] max-[768px]:leading-[36px] max-[413px]:text-[24px] max-[413px]:leading-[32px] max-[413px]:max-w-full">
            Have questions or need support?
          </h2>

          <p className="font-montserrat text-[16px] leading-[22.5px] text-[#6B6A66] mb-20 max-w-[520px] mx-auto 
          max-[768px]:mb-12 max-[768px]:text-[15px] max-[413px]:mb-10 max-[413px]:text-[14px] max-[413px]:leading-[20px]">
            Spangles Webx Private Limited offers tailored solutions in Web
            Development, UI/UX Design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {/* Card */}
          <div className="group bg-white px-7 py-5 rounded-xl border border-gray-200  transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left">
          <div className="w-[76px] h-[76px] mb-6.5 flex items-center justify-center 
rounded-lg bg-gray-100 group-hover:bg-[#2f4858] transition-all duration-300">
  
<img
  src={phoneIcon}
  alt="phone"
  className="w-[36px] h-[36px] object-contain 
  transition-all duration-300
  [filter:brightness(0)_saturate(100%)_invert(27%)_sepia(17%)_saturate(748%)_hue-rotate(155deg)_brightness(94%)_contrast(90%)]
  group-hover:brightness-0 group-hover:invert"
/>
</div>

            <h3 className=" font-montserrat text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] font-bold">
              Call us
            </h3>

            <p className="mt-2 font-montserrat text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#161C2D]">
              Call us 91 8292829299 for any support and enquiries.
            </p>
          </div>

          {/* Card */}
          <div className="group bg-white px-7 py-5 rounded-xl border border-gray-200  transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-[76px] h-[76px] mb-6.5  flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#2f4858] group-hover:text-white transition-all duration-300">
              <img
  src={mailIcon}
  alt="email"
  className="w-[36px] h-[36px] object-contain 
  transition-all duration-300
  [filter:brightness(0)_saturate(100%)_invert(27%)_sepia(17%)_saturate(748%)_hue-rotate(155deg)_brightness(94%)_contrast(90%)]
  group-hover:brightness-0 group-hover:invert"
/>
            </div>

            <h3 className=" font-montserrat text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] font-bold">
              Email us
            </h3>

            <p className="mt-2 font-montserrat text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#161C2D]">
              Send your email to allanspangles@gmail.com
            </p>
          </div>

          {/* Card */}
          <div className="group bg-white px-7 py-5 rounded-xl border border-gray-200  transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-[76px] h-[76px] mb-6.5  flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 group-hover:bg-[#2f4858] group-hover:text-white transition-all duration-300">
             <img
   src={chatIcon}
  alt="chat"
className="w-[36px] h-[36px] object-contain 
  transition-all duration-300
  [filter:brightness(0)_saturate(100%)_invert(27%)_sepia(17%)_saturate(748%)_hue-rotate(155deg)_brightness(94%)_contrast(90%)]
  group-hover:brightness-0 group-hover:invert"
/>
            </div>

            <h3 className=" font-montserrat text-[18px] leading-[28.2px] tracking-[-0.44px] text-[#161C2D] font-bold">
              Chat with us
            </h3>

            <p className="mt-2 font-montserrat text-[14px] leading-[25.56px] tracking-[-0.18px] text-[#161C2D]">
              Chat with us for quick support and queries.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form + Map */}
      {/* Contact Form + Map */}
      <div className="bg-[#F4F7FA] py-[100px] px-[75px] max-[768px]:py-[60px] max-[768px]:px-[30px] max-[413px]:px-4 max-[413px]:py-[50px]">
        <div className="w-full grid md:grid-cols-2 gap-[60px] items-stretch max-[768px]:gap-10">
          {/* Left Section - Form */}
          <div className="w-full">
            <h2 className="font-montserrat text-[46px] leading-[55.2px] text-[#345261] pb-6 font-semibold mb-3 max-[768px]:text-[36px] max-[768px]:leading-[44px] max-[413px]:text-[28px] max-[413px]:leading-[34px] max-[413px]:pb-4">
              Ready to Get Started?
            </h2>

            <p className="font-montserrat text-[16px] leading-[24px] text-[#6B6A66] mb-9 max-[413px]:text-[14px] max-[413px]:mb-6">
              You may simply complete the form below and click ‘send’ to submit
              an enquiry. Our customer service team will get in touch.
            </p>

            <div className="grid grid-cols-2 gap-x-[30px] gap-y-[44px] max-[768px]:gap-y-6 max-[413px]:grid-cols-1 max-[413px]:gap-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className={`${inputStyle} ${errors.name ? "border-red-500" : ""}`}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className={`${inputStyle} ${errors.phone ? "border-red-500" : ""}`}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  className={`${inputStyle} ${errors.email ? "border-red-500" : ""}`}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className={inputStyle}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-9 max-[413px]:mb-6">
              <textarea
                placeholder="Message *"
                className={`${inputStyle} h-[120px] pt-4 mt-[44px] max-[768px]:mt-6 max-[413px]:mt-4 ${
                  errors.message ? "border-red-500" : ""
                }`}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              onClick={validate}
              className="group bg-[#395563] border border-[#5E6FB5]
  px-[35px] py-[20px] rounded-[10px]
  text-white uppercase
  font-montserrat font-bold text-[12px] leading-[18px]
  flex items-center justify-center gap-2 max-[413px]:w-full max-[413px]:py-4"
            >
              SEND MESSAGE
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Right Section - Map */}
          <div className="w-full h-full max-[768px]:h-[350px] max-[413px]:h-[250px]">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=London&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full rounded-lg "
            />
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="-mt-[40px] relative z-10">
        <Support />
      </div>
    </div>
  );
}
