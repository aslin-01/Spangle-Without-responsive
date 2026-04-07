import React, { useState } from "react";
import successImg from "../../assets/success.png"; // change to your success image
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

const Modal = ({ children, onClose }) => (
  <AnimatePresence>
    <motion.div
 className="absolute top-0 left-0 w-full bg-black/50 flex justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
      className="bg-white rounded-2xl mt-[600px] shadow-xl w-[1200px] px-[80px] py-[70px] relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={onClose}
        >
          ✕
        </button>

        {children}
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

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

const handleKnowMore = (job) => {
  setSelectedJob(job);
  setShowDetails(true);

  window.scrollTo({
    top: 0,
    behavior: "smooth", // optional (use "auto" if you want instant)
  });
};

const handleApplyNow = () => {
  setShowDetails(false);
  setShowForm(true);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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

useEffect(() => {
  if (showDetails) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [showDetails]);

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
    max-[1024px]:px-10 max-[1024px]:pb-20 
    max-[768px]:px-6 max-[768px]:pb-16 
    max-[413px]:px-4 max-[413px]:pb-10 
    min-[1024px]:max-[1200px]:px-[72px]"
        >
          <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase max-[413px]:text-[12px]">
            HOME / CAREERS
          </p>

          <h1
            className="font-[Montserrat] font-semibold text-[54px] leading-[62px] mt-2 
      max-[1024px]:text-[48px] max-[1024px]:leading-[56px] 
      max-[768px]:text-[44px] max-[768px]:leading-[52px] 
      max-[413px]:text-[28px] max-[413px]:leading-[32px]"
          >
            Careers
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-white flex justify-end">
        <div className="w-full max-w-[1400px] grid grid-cols-[1fr_800px] items-center">
          {/* LEFT CONTENT */}
          <div className="py-16 pl-[100px] pr-10">
            <p className="font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-[#395563] mb-4">
              OPPORTUNITIES WITH US
            </p>

            <h2 className="font-[Montserrat] font-semibold text-[46px] leading-[52.36px] text-[#395563] mb-4">
              Join our <br /> innovative team
            </h2>

            <p className="font-[Montserrat] font-normal text-[16px] leading-[23.65px] text-[#6B6A66] mb-7">
              Spangles Webx is a tech-driven company passionate about delivering
              innovative digital products. With a focus on design, usability,
              and performance, we help startups and enterprises scale with
              impactful web and mobile solutions.
            </p>

            <button className="group font-[Montserrat] font-bold text-[12px] leading-[18px] uppercase bg-[#395563] text-white px-6 py-5 rounded-lg flex items-center justify-center gap-2 text-center transition-all duration-300">
              CONTACT US NOW
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

          {/* RIGHT IMAGE */}
          <div className="w-full h-full flex justify-end pt-[50px]">
            <img
              src={carrer}
              alt="team"
              className="w-[800px] h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Job Section */}
      <div className="bg-[#F4F7FA] pt-15 pb-[114px] px-[160px]">
        {/* Heading */}
        <h2 className="text-center font-[Montserrat] font-bold text-[14px] leading-[100%] tracking-[1.43px] uppercase text-[#395563] mb-2">
          EXPLORE
        </h2>

        <h1 className="text-center font-[Montserrat] text-[#161C2D] font-semibold text-[32px] leading-[42.3px] tracking-[-1.06px] mb-10">
          Current Openings at <br /> Spangles Webx
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[30px] gap-x-[36px]">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl pt-[30px] px-6 pb-6 border border-gray-100"
            >
              {/* Top Row */}
              <div className="flex justify-between items-center mb-15 text-xs text-gray-500">
                <span className="flex items-center gap-2 rounded-[10px] border border-[#EAECE9] px-4 py-1.5">
                  <span className="w-1.5 h-1.5 bg-[#395563] rounded-sm"></span>

                  <span className="font-[Montserrat] font-normal text-[16px] leading-[28.8px] text-[#161C2D]">
                    {job.type}
                  </span>
                </span>

                <span className="flex items-center gap-2">
                  {/* Map Icon */}

                  {/* Map Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[16px] h-[20px] text-[#345261]"
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

                  {/* Location Text */}
                  <span className="font-[Montserrat] font-normal text-[16px] leading-[32px] text-[#161C2D]">
                    {job.location}
                  </span>
                </span>
              </div>

              {/* Title */}
              <h3 className="font-[Montserrat] font-semibold text-[26px] leading-[29.28px] text-[#161C2D] mb-4">
                {job.title}
              </h3>

              {/* Button */}
              <button
                onClick={() => handleKnowMore(job)}
                className="bg-[#2f4858] px-5.5 py-4.5 text-white font-[Montserrat] font-bold text-[12px] leading-[18px] uppercase text-center px-4 py-2 rounded-md flex items-center gap-2"
              >
                KNOW MORE{" "}
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
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-10">
          <button className="group font-[Montserrat] font-bold text-[14px] leading-[21px] tracking-[2.24px] uppercase text-[#395563] flex items-center gap-2 hover:opacity-80 transition">
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
      </div>

      {/* Details Modal */}

 
      {showDetails && (
        <Modal onClose={() => setShowDetails(false)}>
   
          <h2 className=" w-[65%] font-[Montserrat] font-medium text-[60px] leading-[60px] tracking-[-1px] text-[#345261] mb-5">
  {selectedJob?.title}
</h2>
          <div className="flex gap-10">
            {/* LEFT SECTION */}
            <div className="w-[65%]">
             

              <p className="font-[Montserrat] font-normal text-[20px] leading-[32px] text-[#6B6A66] align-middle mb-9">
                We help transform the world’s most important businesses into
                vigorous, agile organizations that anticipate the unpredictable,
                adapt rapidly to disruption and outcompete their opposition.
              </p>

              {/* Job Description */}
              <h3 className="font-[Montserrat] font-medium text-[26px] leading-[32px] tracking-[-1px] text-[#345261] align-middle mb-5">
                Job description
              </h3>
              <p className="font-[Montserrat] font-normal text-[20px] leading-[32px] text-[#6B6A66] align-middle mb-6">
                You’ll work closely with cross-functional teams including
                product, managers, developers, and marketing to create designs
                that align with user needs and business goals.
              </p>

              {/* Responsibilities */}
              <h3 className="font-[Montserrat] font-medium text-[26px] leading-[32px] tracking-[-1px] text-[#345261] align-middle mb-5">
                Key Responsibilities:
              </h3>
              <ul className="font-[Montserrat] text-[16px] leading-[30px] text-[#6B6A66] mb-9 list-disc pl-5 space-y-1 marker:text-[#345261] marker:text-lg">
                <li>Design and prototype user interfaces</li>
                <li>Conduct user research</li>
                <li>Collaborate with developers</li>
                <li>Maintain design consistency</li>
              </ul>

              {/* Requirements */}
              <h3 className="font-[Montserrat] font-medium text-[26px] leading-[32px] tracking-[-1px] text-[#345261] align-middle mb-5">
                Requirements:
              </h3>
              <ul className="font-[Montserrat] text-[16px] leading-[30px] text-[#6B6A66] mb-9 list-disc pl-5 space-y-1 marker:text-[#345261] marker:text-lg">
                <li>2+ years of experience</li>
                <li>Proficiency in design tools</li>
                <li>Strong communication skills</li>
              </ul>
              <p className="font-[Montserrat] font-normal text-[20px] leading-[32px] text-[#6B6A66] align-middle mb-6">
                If you're passionate about delivering exceptional digital
                experiences, we'd love to hear from you.
              </p>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="w-[35%]">
             <div className="rounded-lg">
  <div className="space-y-4 text-[14px] text-gray-600">
    <div className="flex items-center gap-3 font-[Montserrat] font-normal text-[20px] leading-[32px] text-[#161C2D] align-middle">
  <Calendar size={26} />
  <span>Full time</span>
</div>

    <div className="flex items-center gap-3 font-[Montserrat] font-normal text-[20px] leading-[32px] text-[#161C2D] align-middle">
      <Clock size={26} />
      <span>09:00 am - 05:00 pm</span>
    </div>

    <div className="flex items-center gap-3 font-[Montserrat] font-normal text-[20px] leading-[32px] text-[#161C2D] align-middle">
      <MapPin size={26} />
      <span>{selectedJob?.location}</span>
    </div>
  </div>

  <button
    onClick={handleApplyNow}
    className="mt-5 w-[50%] bg-[#2F4858] text-white text-[13px] font-bold px-4.5 py-4 rounded-md flex items-center justify-center gap-2"
  >
    APPLY NOW   <svg
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
          <div className="px-2 md:px-6 py-4">
            {/* Heading */}
            <h2 className="text-[22px] font-semibold text-[#2c3e50] mb-3">
              Application for {selectedJob?.title}
            </h2>

            {/* Description */}
            <p className="text-[13px] text-gray-500 leading-[20px] mb-8 max-w-2xl">
              Thank you for your interest in working with us. To get to know you
              better, we'd like if you could fill out some information. Once we
              receive your application, we'll be in touch if you are found
              suitable.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[12px] text-gray-700 mb-1 block">
                    Name*
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className={`w-full h-[42px] px-3 border rounded-md text-sm outline-none 
  ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-[12px] text-gray-700 mb-1 block">
                    Email*
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your mail"
                    className={`w-full h-[42px] px-3 border rounded-md text-sm outline-none 
  ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[12px] text-gray-700 mb-1 block">
                    Mobile Number*
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your mobile number"
                    className={`w-full h-[42px] px-3 border rounded-md text-sm outline-none 
  ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  {/* Label */}
                  <label className="text-[12px] text-gray-700 mb-1 block">
                    Resume*
                  </label>

                  {/* Upload Box */}
                  <label
                    className={`w-full h-[42px] border rounded-md flex items-center justify-between px-3 text-[12px] cursor-pointer
    ${errors.resume ? "border-red-500 text-red-500" : "border-gray-300 text-gray-500"}`}
                  >
                    {/* File name or placeholder */}
                    <span>{resume ? resume.name : "Upload your Resume"}</span>

                    {/* Icon (optional) */}
                    <span>📎</span>

                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setResume(e.target.files[0])}
                    />
                  </label>

                  {/* Error */}
                  {errors.resume && (
                    <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-[#2f4858] text-white text-[12px] px-6 py-2 rounded-md flex items-center gap-2"
                >
                  SUBMIT →
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <Modal onClose={() => setShowSuccess(false)}>
          <div className="flex flex-col items-center justify-center text-center py-10">
            <img
              src={successImg}
              alt="success"
              className="w-[350px] h-[350px] object-contain mb-4"
            />

            <h3 className="text-lg font-semibold">
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
