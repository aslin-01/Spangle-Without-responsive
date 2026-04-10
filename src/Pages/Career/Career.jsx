import React, { useState, useEffect } from "react";
import successImg from "../../assets/Success.png"; // change to your success image
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import carrerImg from "../../assets/portfolio7.jpg"; // change to your careers image
import carrer from "../../assets/career.png"; // change to your careers image
import Support from "../About/Components/Support";

const jobs = [
  {
    id: 1,
    title: "Digital Marketing Executive",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Platform Support Specialist",
    location: "Nagpur",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Cloud Ops Administrator",
    location: "Nagpur",
    type: "Full-time",
  },
  { id: 4, title: "React JS Developer", location: "Nagpur", type: "Full-time" },
];

const inputClass = (error) =>
  `w-full h-[45px] px-3 border rounded-[10px] 
  font-[Montserrat] font-medium text-[16px] leading-[100%] tracking-[0%] text-[#345261] outline-none
  flex items-center
  ${error ? "border-red-500" : "border-[#2F2F2F]"}`;

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 flex justify-center items-start z-[1000] overflow-y-auto pt-[165px] pb-10 max-[768px]:pt-[100px] max-[413px]:pt-[20vh] max-[413px]:pb-0 max-[413px]:items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-xl w-[1200px] px-[80px] py-[100px] relative self-start max-[1201px]:w-[90%] max-[768px]:py-[60px] max-[768px]:px-[40px] max-[413px]:w-full max-[413px]:min-h-[70vh] max-[413px]:rounded-t-[24px] max-[413px]:rounded-b-[10px] max-[413px]:px-[20px] max-[413px]:py-[40px] max-[413px]:overflow-x-hidden max-[413px]:mb-0 max-[413px]:mt-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-6 right-6 text-gray-500 text-2xl hover:text-black transition-colors max-[413px]:top-[20px] max-[413px]:right-[20px] max-[413px]:text-[24px]"
            onClick={onClose}
          >
            ✕
          </button>

          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ✅ MOVE THESE HERE
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);

  useEffect(() => {
    if (showDetails || showForm || showSuccess) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDetails, showForm, showSuccess]);

  const handleKnowMore = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };

  const handleApplyNow = () => {
    setShowDetails(false);
    setShowForm(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your valid mail id";
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your mobile number";
    }

    if (!resume) {
      newErrors.resume = "Please upload your resume";
    }

    setErrors(newErrors);

    // 🚫 STOP if errors exist
    if (Object.keys(newErrors).length > 0) return;

    // ✅ Only if valid
    setShowForm(false);
    setShowSuccess(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[360px] w-full max-[413px]:h-[300px]">
        <img
          src={carrerImg} // or your careers image
          alt="careers banner"
          className="w-full h-full object-cover object-center"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* text */}
        <div
          className="absolute inset-0 flex flex-col justify-end px-[100px] pb-25 text-white 
    max-[1025px]:px-10 max-[1025px]:pb-20 
    max-[768px]:px-6 max-[768px]:pb-16 
    max-[413px]:px-4 max-[413px]:pb-10 
    min-[1025px]:max-[1200px]:px-[72px]"
        >
          <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase max-[413px]:text-[12px]">
            HOME / CAREERS
          </p>

          <h1
            className="font-[Montserrat] font-semibold text-[54px] leading-[62px] mt-2 
      max-[1025px]:text-[48px] max-[1025px]:leading-[56px] 
      max-[768px]:text-[44px] max-[768px]:leading-[52px] 
      max-[413px]:text-[28px] max-[413px]:leading-[32px]"
          >
            Careers
          </h1>
        </div>
      </div>
      {/* Intro Section */}
    <div className="bg-white flex justify-end max-[413px]:justify-center">
  <div className="w-full max-w-[1400px] grid grid-cols-[1fr_800px] max-[1201px]:grid-cols-[1fr_600px] max-[1025px]:grid-cols-[1fr_500px] max-[768px]:grid-cols-1 max-[413px]:grid-cols-1 items-center">
    
    {/* LEFT CONTENT */}
     <div className="py-16 pl-[100px] pr-10 max-[1025px]:pl-[50px] max-[768px]:pl-[30px] max-[768px]:pr-[30px] max-[413px]:px-[14px] max-[413px]:py-[40px]">
      
      <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-[#395563] mb-4 max-[413px]:text-[11px] max-[413px]:mb-3">
        OPPORTUNITIES WITH US
      </p>

      <h2
        className="font-[Montserrat] font-semibold text-[46px] leading-[52.36px] text-[#395563] mb-4 
        max-[1201px]:text-[38px] max-[1201px]:leading-[44px] 
        max-[1025px]:text-[34px] max-[1025px]:leading-[40px] 
        max-[413px]:text-[28px] max-[413px]:leading-[34px]"
      >
        Join our <br /> innovative team
      </h2>

      <p className="font-[Montserrat] font-normal text-[16px] leading-[23.65px] text-[#6B6A66] mb-7 max-[413px]:text-[14px] max-[413px]:leading-[22px] max-[413px]:mb-[30px]">
        Spangles Webx is a tech-driven company passionate about delivering
        innovative digital products. With a focus on design, usability,
        and performance, we help startups and enterprises scale with
        impactful web and mobile solutions.
      </p>

      <button className="group font-[Montserrat] font-bold text-[12px] leading-[18px] uppercase bg-[#395563] text-white px-6 py-5 rounded-lg flex items-center justify-center gap-2 text-center transition-all duration-300 max-[413px]:px-[20px] max-[413px]:py-[14px] max-[413px]:text-[11px]">
        CONTACT US NOW
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full h-full flex justify-end pt-[50px] max-[768px]:pt-[20px] max-[413px]:pt-0 max-[413px]:justify-center max-[413px]:hidden">
      <img
        src={carrer}
        alt="team"
        className="w-[800px] h-full object-cover object-right max-[1201px]:w-[600px] max-[1025px]:w-full max-[1025px]:object-left  max-[768px]:w-full max-[413px]:w-full max-[413px]:h-auto"
      />
    </div>
  </div>
</div>


      {/* Job Section */}
      <div className="bg-[#F4F7FA] pt-15 pb-[114px] px-[160px] max-[1201px]:px-[80px] max-[1025px]:px-[60px] max-[768px]:px-[30px] max-[413px]:px-[14px] max-[413px]:pt-[40px] max-[413px]:pb-[60px]">
        {/* Heading */}
        <h2 className="text-center font-[Montserrat] font-bold text-[14px] leading-[100%] tracking-[1.43px] uppercase text-[#395563] mb-2 max-[413px]:text-[12px]">
          EXPLORE
        </h2>
        <h1 className="text-center font-[Montserrat] text-[#161C2D] font-semibold text-[32px] leading-[42.3px] tracking-[-1.06px] mb-14">
          {" "}
          Current Openings at <br /> Spangles Webx{" "}
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[30px] gap-x-[36px] max-[413px]:gap-y-[20px] max-[413px]:gap-x-0">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-[12px] pt-[30px] px-6 pb-6 border border-[#EAECE9] max-[413px]:px-[20px] max-[413px]:pt-[20px] max-[413px]:pb-[24px] flex flex-col justify-between"
            >
              <div>
                {/* Top Row */}
                <div className="flex justify-between items-center mb-15 text-xs text-gray-500 max-[413px]:mb-[80px] max-[413px]:flex-row max-[413px]:justify-between">
                  {/* Type */}
                  <span className="flex items-center gap-2 rounded-[10px] border border-[#EAECE9] px-4 py-1.5 max-[413px]:px-[10px] max-[413px]:py-[4px] max-[413px]:rounded-[6px]">
                    <span className="w-1.5 h-1.5 bg-[#395563] rounded-[2px] max-[413px]:w-[4px] max-[413px]:h-[4px]"></span>
                    <span className="font-[Montserrat] font-normal text-[16px] leading-[28.8px] text-[#161C2D] max-[413px]:text-[12px] max-[413px]:leading-[18px]">
                      {job.type}
                    </span>
                  </span>

                  {/* Location */}
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[16px] h-[20px] text-[#345261] max-[413px]:w-[14px] max-[413px]:h-[16px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-[Montserrat] font-normal text-[16px] leading-[32px] text-[#161C2D] max-[413px]:text-[12px] max-[413px]:leading-[18px]">
                      {job.location}
                    </span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[Montserrat] font-semibold text-[26px] leading-[29.28px] text-[#161C2D] mb-4 max-[413px]:text-[16px] max-[413px]:leading-[22px] max-[413px]:mb-[24px]">
                  {job.title}
                </h3>
              </div>

              {/* Button */}
              <button
                onClick={() => handleKnowMore(job)}
                className="bg-[#2f4858] w-fit px-6.5 py-4.5 text-white font-[Montserrat] font-bold text-[12px] leading-[18px] uppercase text-center rounded-md flex items-center justify-center gap-2 max-[413px]:px-[16px] max-[413px]:py-[10px] max-[413px]:text-[10px]"
              >
                KNOW MORE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 max-[413px]:w-[12px] max-[413px]:h-[12px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-10 max-[413px]:mt-[30px]">
          <button className="group font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-[#395563] flex items-center gap-2 hover:opacity-80 transition max-[413px]:text-[12px]">
            SHOW ALL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>{" "}

      
      {/* Details Modal */}
      {showDetails && (
        <Modal onClose={() => setShowDetails(false)}>
          <h2 className=" w-[65%] font-[Montserrat] font-medium text-[60px] leading-[60px] tracking-[-1px] text-[#345261] mb-5 max-[1025px]:w-[80%] max-[1025px]:text-[48px] max-[768px]:w-full max-[768px]:text-[40px] max-[768px]:leading-[48px] max-[413px]:text-[20px] max-[413px]:leading-[28px] max-[413px]:tracking-[-0.02em] max-[413px]:mb-[20px] max-[413px]:pr-[30px] max-[413px]:w-full">
            {selectedJob?.title}
          </h2>
          <div className="flex gap-10 max-[768px]:flex-col max-[413px]:flex-col max-[413px]:gap-[20px]">
            {/* LEFT SECTION */}
            <div className="w-[65%] max-[768px]:w-full max-[413px]:w-full">
              <p className="font-[Montserrat] font-normal text-[18px] leading-[32px] text-[#6B6A66] align-middle mb-9 max-[413px]:text-[14px] max-[413px]:leading-[26px] max-[413px]:mb-[30px]">
                We help transform the world’s most important businesses into
                vigorous, agile organizations that anticipate the unpredictable,
                adapt rapidly to disruption and outcompete their opposition.
              </p>

              {/* Job Description */}
              <h3 className="font-[Montserrat] font-medium text-[26px] leading-[32px] tracking-[-1px] text-[#345261] align-middle mb-5 max-[413px]:text-[18px] max-[413px]:leading-[24px] max-[413px]:tracking-[-0.01em] max-[413px]:mb-[12px]">
                Job description
              </h3>
              <p className="font-[Montserrat] font-normal text-[18px] leading-[32px] text-[#6B6A66] align-middle mb-6 max-[413px]:text-[14px] max-[413px]:leading-[26px] max-[413px]:mb-[30px]">
                You’ll work closely with cross-functional teams including
                product, managers, developers, and marketing to create designs
                that align with user needs and business goals.
              </p>

              {/* Responsibilities */}
              <h3 className="font-[Montserrat] font-medium text-[26px] leading-[32px] tracking-[-1px] text-[#345261] align-middle mb-5 max-[413px]:text-[18px] max-[413px]:leading-[24px] max-[413px]:tracking-[-0.01em] max-[413px]:mb-[14px]">
                Key Responsibilities:
              </h3>
              <ul className="font-[Montserrat] text-[16px] leading-[30px] text-[#6B6A66] mb-9 list-disc pl-5 space-y-1 marker:text-[#345261] marker:text-lg max-[413px]:text-[14px] max-[413px]:leading-[26px] max-[413px]:mb-[25px] max-[413px]:pl-[14px] max-[413px]:space-y-[12px] max-[413px]:marker:text-[14px]">
                <li>Design and prototype user interfaces</li>
                <li>Conduct user research</li>
                <li>Collaborate with developers</li>
                <li>Maintain design consistency</li>
              </ul>

              {/* Requirements */}
              <h3 className="font-[Montserrat] font-medium text-[26px] leading-[32px] tracking-[-1px] text-[#345261] align-middle mb-5 max-[413px]:text-[18px] max-[413px]:leading-[24px] max-[413px]:tracking-[-0.01em] max-[413px]:mb-[14px]">
                Requirements:
              </h3>
              <ul className="font-[Montserrat] text-[16px] leading-[30px] text-[#6B6A66] mb-9 list-disc pl-5 space-y-1 marker:text-[#345261] marker:text-lg max-[413px]:text-[14px] max-[413px]:leading-[26px] max-[413px]:mb-[25px] max-[413px]:pl-[14px] max-[413px]:space-y-[12px] max-[413px]:marker:text-[14px]">
                <li>2+ years of experience</li>
                <li>Proficiency in design tools</li>
                <li>Strong communication skills</li>
              </ul>
              <p className="font-[Montserrat] font-normal text-[18px] leading-[32px] text-[#6B6A66] align-middle mb-6 max-[413px]:text-[14px] max-[413px]:leading-[26px] max-[413px]:mb-[10px]">
                If you're passionate about delivering exceptional digital
                experiences, we'd love to hear from you.
              </p>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="w-[35%] max-[768px]:w-full max-[413px]:w-full max-[413px]:mt-0">
              <div className="rounded-lg">
                <div className="space-y-4 text-[14px] text-gray-600 max-[413px]:space-y-[16px]">
                  <div className="flex items-center gap-3 font-[Montserrat] font-normal text-[17px] leading-[32px] text-[#161C2D] align-middle max-[413px]:text-[14px] max-[413px]:leading-[22px]">
                    <Calendar size={23} className="max-[413px]:w-[18px] max-[413px]:h-[18px]" />
                    <span>Full time</span>
                  </div>

                  <div className="flex items-center gap-3 font-[Montserrat] font-normal text-[17px] leading-[32px] text-[#161C2D] align-middle max-[413px]:text-[14px] max-[413px]:leading-[22px]">
                    <Clock size={23} className="max-[413px]:w-[18px] max-[413px]:h-[18px]" />
                    <span>09:00 am - 05:00 pm</span>
                  </div>

                  <div className="flex items-center gap-3 font-[Montserrat] font-normal text-[17px] leading-[32px] text-[#161C2D] align-middle max-[413px]:text-[14px] max-[413px]:leading-[22px]">
                    <MapPin size={23} className="max-[413px]:w-[18px] max-[413px]:h-[18px]" />
                    <span>{selectedJob?.location}</span>
                  </div>
                </div>

                <button
                  onClick={handleApplyNow}
                  className="mt-5 w-fit bg-[#2F4858] text-white text-[13px] font-bold px-4.5 py-4 rounded-md flex items-center justify-center gap-2 max-[768px]:w-[200px] max-[413px]:mt-[40px] max-[413px]:w-full max-[413px]:py-[14px] max-[413px]:text-[12px] max-[413px]:rounded-[8px]"
                >
                  APPLY NOW{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}


      {/* Form Modal */}
      {showForm && (
        <Modal onClose={() => setShowForm(false)}>
          <div className="md:px-6 max-[413px]:px-0">
            {/* Heading */}
            <h2 className="font-[Montserrat] font-semibold text-[36px] leading-[100%] tracking-[0%] text-[#345261] mb-7.5 max-[1201px]:text-[32px] max-[1025px]:text-[28px] max-[413px]:text-[24px] max-[413px]:leading-[32px] max-[413px]:mb-[12px] max-[413px]:tracking-[-0.01em]">
              Application for {selectedJob?.title}
            </h2>

            {/* Description */}
            <p className="font-[Montserrat] font-normal text-[18px] leading-[100%] tracking-[0%] text-[#6B6A66] mb-15 max-w-2xl max-[1025px]:text-[16px] max-[1025px]:mb-10 max-[413px]:text-[14px] max-[413px]:leading-[24px] max-[413px]:mb-8">
              Thank you for your interest in working with us. To get to know you
              better, we'd like if you could fill out some information. Once we
              receive your application, we'll be in touch if you are found
              suitable.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 max-[1025px]:space-y-4 max-[413px]:space-y-0 text-left">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-[50px] mb-[50px] max-[1201px]:gap-[30px] max-[1025px]:gap-[20px] max-[1025px]:mb-[20px] max-[413px]:gap-0 max-[413px]:mb-0 max-[413px]:flex max-[413px]:flex-col">
                <div className="max-[413px]:mb-[20px]">
                  <label className="font-[Montserrat] font-medium text-[16px] leading-[100%] tracking-[0%] text-[#161C2D] mb-6.5 block max-[1025px]:mb-4 max-[413px]:mb-[8px] max-[413px]:text-[14px]">
                    Name*
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className={inputClass(errors.name)}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-[14px] mt-1 max-[413px]:text-[12px]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="max-[413px]:mb-[20px]">
                  <label className="font-[Montserrat] font-medium text-[16px] leading-[100%] tracking-[0%] text-[#161C2D] mb-6.5 block max-[1025px]:mb-4 max-[413px]:mb-[8px] max-[413px]:text-[14px]">
                    Email*
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your mail"
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[14px] mt-1 max-[413px]:text-[12px]">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-[50px] mb-[50px] max-[1201px]:gap-[30px] max-[1025px]:gap-[20px] max-[1025px]:mb-[30px] max-[413px]:gap-0 max-[413px]:mb-[30px] max-[413px]:flex max-[413px]:flex-col">
                <div className="max-[413px]:mb-[20px]">
                  <label className="font-[Montserrat] font-medium text-[16px] leading-[100%] tracking-[0%] text-[#161C2D] mb-6.5 block max-[1025px]:mb-4 max-[413px]:mb-[8px] max-[413px]:text-[14px]">
                    Mobile Number*
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your mobile number"
                    className={inputClass(errors.phone)}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[14px] mt-1 max-[413px]:text-[12px]">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="max-[413px]:mb-[20px]">
                  {/* Label */}
                  <label className="font-[Montserrat] font-medium text-[16px] leading-[100%] tracking-[0%] text-[#161C2D] mb-6.5 block max-[1025px]:mb-4 max-[413px]:mb-[8px] max-[413px]:text-[14px]">
                    Resume*
                  </label>

                  {/* Upload Box */}
                  <label
                    className={`w-full h-[45px] border rounded-[10px] flex items-center justify-center cursor-pointer max-[413px]:h-[45px]
  ${errors.resume ? "border-red-500" : "border-[#2F2F2F]"}`}
                  >
                    <span className="font-[Montserrat] font-medium text-[14px] text-[#345261] underline text-center truncate px-2">
                      {resume ? resume.name : "Upload your Resume"}
                    </span>

                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setResume(e.target.files[0])}
                    />
                  </label>

                  {/* Error */}
                  {errors.resume && (
                    <p className="text-red-500 text-[14px] mt-1 max-[413px]:text-[12px]">
                      {errors.resume}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end max-[413px]:justify-center">
                <button
                  type="submit"
                  className="bg-[#2f4858] text-white font-[Montserrat] font-bold text-[12px] leading-[18px] tracking-[0%] uppercase text-center align-middle px-5 py-4.5 rounded-[10px] flex items-center justify-center gap-2 max-[413px]:w-full max-[413px]:py-[14px] max-[413px]:rounded-[8px]"
                >
                  APPLY NOW{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
      {/* Success Modal */}
   {showSuccess && (
  <Modal onClose={() => setShowSuccess(false)}>
    <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-[413px]:absolute max-[413px]:top-1/2 max-[413px]:left-1/2 max-[413px]:-translate-x-1/2 max-[413px]:-translate-y-1/2 max-[413px]:w-full">
      
      <img
        src={successImg}
        alt="success"
        className="
          w-full max-w-[250px] 
          sm:max-w-[300px] 
          md:max-w-[350px] 
          h-auto object-contain mb-4 max-[413px]:mx-auto
        "
      />

      <h3 className="
        font-[Montserrat] font-semibold 
        text-[18px] sm:text-[22px] md:text-[26px] 
        leading-tight 
        text-[#345261] max-[413px]:text-center max-[413px]:mx-auto max-[413px]:w-full
      ">
        Application Submitted Successfully
      </h3>

    </div>
  </Modal>
)}



      <div className="-mt-[40px] relative z-10 max-xl:-mt-9 max-lg:-mt-8 max-md:-mt-7 max-sm:-mt-6 max-[413px]:-mt-6">
        <Support />
      </div>
    </div>
  );
}
