// import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

// const team = [
//   {
//     name: "Hal Drummond",
//     role: "Sales Manager",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Devon Lane",
//     role: "Web Designer",
//     img: "https://randomuser.me/api/portraits/men/45.jpg",
//   },
//   {
//     name: "Darlene Robertson",
//     role: "Nursing Assistant",
//     img: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     name: "Darrell Steward",
//     role: "Dog Trainer",
//     img: "https://randomuser.me/api/portraits/men/12.jpg",
//   },
//   {
//     name: "Ralph Edwards",
//     role: "Medical Assistant",
//     img: "https://randomuser.me/api/portraits/men/55.jpg",
//   },
//   {
//     name: "Savannah Nguyen",
//     role: "Web Designer",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
// ];

// export default function Team() {
//   return (
//     <div className="px-[130px] py-[80px] bg-white">
//       <h2 className="text-center text-[28px] font-semibold mb-[50px]">
//         The Team Behind Impactful Digital Experiences
//       </h2>

//       <div className="grid md:grid-cols-3 gap-[30px]">
//         {team.map((member, index) => (
//           <div
//             key={index}
//             className="bg-[#f5f5f5] rounded-[18px] p-[15px] text-center"
//           >
//             {/* Image Container */}
//             <div className="relative group">
//               <img
//                 src={member.img}
//                 className="rounded-[14px] w-full h-[230px] object-cover"
//               />

//               {/* Icons Overlay */}
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4 rounded-[14px]">
//                 <div className="bg-white p-2 rounded-full cursor-pointer">
//                   <FaLinkedinIn size={14} />
//                 </div>
//                 <div className="bg-white p-2 rounded-full cursor-pointer">
//                   <FaTwitter size={14} />
//                 </div>
//               </div>
//             </div>

//             {/* Name */}
//             <h3 className="mt-[15px] font-semibold text-[16px]">
//               {member.name}
//             </h3>

//             {/* Role */}
//             <p className="text-gray-500 text-[14px]">
//               {member.role}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import team1 from "../../../assets/Team1.jpg";
import team2 from "../../../assets/Team2.jpg";
import team3 from "../../../assets/Team3.jpg";

const team = [
  {
    name: "Hal Drummond",
    role: "Sales Manager",
    desc: "Driving sales growth and building strong client relationships.",
    img: team1,
  },
  {
    name: "Devon Lane",
    role: "Web Designer",
    desc: "Driving sales growth and building strong client relationships.",
    img: team2,
  },
  {
    name: "Darlene Robertson",
    role: "Nursing Assistant",
    desc: "Driving sales growth and building strong client relationships.",
    img: team3,
  },
];

export default function Team() {
  return (
    <div className="px-[100px] py-[80px] bg-[#ffffff] max-[1024px]:px-[60px] max-[768px]:px-6 max-[413px]:px-4 max-[768px]:py-[55px] max-[413px]:py-[45px]">
      {/* Top Title */}
      <p className=" font-bold text-[14px] leading-[100%] mb-5 text-[#395563] tracking-[1.43px] text-center uppercase max-[768px]:text-[13px] max-[413px]:text-[12px]">
        OUR TEAM
      </p>

      <h2 className="mb-15 font-semibold text-[32px] leading-[42.3px] tracking-[-1.06px] text-center text-[#161C2D] max-[768px]:text-[28px] max-[768px]:leading-[36px] max-[413px]:text-[24px] max-[413px]:leading-[32px]">
        The Team Behind Impactful <br /> Digital Experiences
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-3 max-[1201px]:grid-cols-2 max-[768px]:grid-cols-1 gap-[50px] max-[1024px]:gap-[40px] max-[768px]:gap-[30px] max-[413px]:gap-[25px]">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-[18px] p-[10px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          >
            {/* Image */}
            <div className="w-full h-[350px] max-[1201px]:h-[300px] max-[768px]:h-[400px] max-[413px]:h-[250px] mx-auto mb-5 overflow-hidden rounded-[14px]">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Name */}
            <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0] mb-4 text-center align-middle text-[#395563] max-[768px]:text-[20px] max-[768px]:leading-[28px] max-[413px]:text-[18px] max-[413px]:leading-[24px]">
              {member.name}
            </h3>

            {/* Role Badge */}
            <div
              className="inline-block px-4 py-2 rounded-[10px] bg-gray-100 
  font-normal text-[18px] leading-[28px] tracking-[0] 
 text-center text-[#182F27] mb-4 max-[768px]:text-[16px] max-[768px]:leading-[24px] max-[413px]:px-3 max-[413px]:py-1 max-[413px]:text-[14px] max-[413px]:leading-[22px]"
            >
              {member.role}
            </div>

            <p
              className="mb-5 px-3 
 font-montserrat font-normal text-[18px] leading-[28px] tracking-[0] 
 text-center align-middle text-[#6B6A66] max-[768px]:text-[16px] max-[768px]:leading-[24px] max-[413px]:text-[14px] max-[413px]:leading-[22px]"
            >
              {member.desc}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 mb-2.5">
              <div className="bg-gray-100 p-3 rounded-[10px] cursor-pointer">
                <FaFacebookF size={16} />
              </div>

              <div className="bg-gray-100 p-3 rounded-[10px] cursor-pointer">
                <FaTwitter size={16} />
              </div>

              <div className="bg-gray-100 p-3 rounded-[10px] cursor-pointer">
                <FaLinkedinIn size={16} />
              </div>

              <div className="bg-gray-100 p-3 rounded-[10px] cursor-pointer">
                <FaInstagram size={16} />
              </div>

              {/* YouTube Icon */}
              <div className="bg-gray-100 p-3 rounded-[10px] cursor-pointer">
                <FaYoutube size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
