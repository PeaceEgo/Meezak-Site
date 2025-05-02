import { useState, useEffect } from "react";
import teamMember1 from '../assets/images/team-member-1.jpg';
import teamMember2 from '../assets/images/lead-dev.jpeg';
import teamMember3 from '../assets/images/hr.jpeg';
import teamMember4 from '../assets/images/socials.jpeg';
import teamMember5 from '../assets/images/writer.jpeg';

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false);

  const teamMembers = [
    {
      name: "Kazeem Olawale",
      role: "C.E.O",
      image: teamMember1,
      bgColor: "rgba(204,90,113,1)",
    },
    {
      name: "Damilare Ayodele",
      role: "Head Of Development",
      image: teamMember2,
      bgColor: "rgba(7,24,86,1)", 
    },
    {
      name: "Amaku Oluchi",
      role: "HR Admin Officer",
      image: teamMember3,
      bgColor: "rgba(0,128,0,1)", 
    },
    {
      name: "Morris Ndeobi",
      role: "Head Of Socials",
      image: teamMember4,
      bgColor: "rgba(7,24,86,1)", 
    },
    {
      name: "Florence Okafor",
      role: "Media Specialist",
      image: teamMember5,
      bgColor: "rgba(0,128,128,1)", 
    },
  ];

  // Check screen size for mobile responsiveness
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <section className="bg-white py-10 ">
      <div className="w-[390px] md:w-full mx-auto px-4">``
        {/* Small Container with "TEAM MEMBERS" */}
        <div className="text-center mb-4">
          <span
            className="inline-block w-[108px] md:w-[125px] px-3 py-1 md:text-[12px] md:font-[600] text-[10px] font-[500] rounded-full"
            style={{
              backgroundColor: "#0718561A",
              color: "rgba(7,24,86,1)",
            }}
          >
            TEAM MEMBERS
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[20px] font-[700] md:text-[29.9px] md:font-[700] text-[rgba(7,24,86,1)] md:w-[592px] w-[308px] mx-auto">
            MIGHTY HANDS BEHIND THE BUSINESS
          </h2>
        </div>

        {/* Team Members Container */}
        <div
          className={
            isMobile
              ? "grid grid-cols-2 gap-2 justify-items-center w-[340px]" // Mobile: 2-2-1 layout with 8px gap
              : "flex justify-center gap-0" // Desktop: Side by side with no gap
          }
        >
          
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={
                isMobile
                  ? index === 4
                    ? "col-span-2 w-[160px] h-[253px] overflow-hidden rounded-t-[16px]" 
                    : "w-[160px] h-[253px] overflow-hidden rounded-t-[16px]" 
                  : "w-[240px] h-[380px] overflow-hidden rounded-t-[16px]" 
              }
            >

              {/* Image */}
              <div className={isMobile ? "w-full h-[179px]" : "w-full h-[290px]"}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Bottom Section */}
              <div
                className="h-[74px] flex flex-col justify-center items-center text-white"
                style={{ backgroundColor: member.bgColor }}
              >
                <h3 className="text-[18px] font-[700]">{member.name}</h3>
                <p className="text-[12px] font-[400]">{member.role}</p>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}