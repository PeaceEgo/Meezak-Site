import { useState, useEffect } from "react";

// Import images
import eCommerceImage1 from "../assets/images/project-image.jpg";
import eCommerceImage2 from "../assets/images/image4.png";
import fintechImage1 from "../assets/images/image3.png";
import fintechImage2 from "../assets/images/image2.png";
import portfolioImage1 from "../assets/images/image1.png";
import portfolioImage2 from "../assets/images/project-image.jpg";

// Project data for each category
const eCommerceProjects = [
  {
    id: 1,
    title: "TradeFlair Limited",
    description: "e-Commerce Website Development for a product and service rendering company in Lagos State, Nigeria.",
    tags: ["Visit Website", "UI/UX Design", "SEO"],
    image: eCommerceImage1,
  },
  {
    id: 2,
    title: "TradeFlair Limited",
    description: "e-Commerce Website Development for a product and service rendering company in Lagos State, Nigeria.",
    tags: ["Visit Website", "UI/UX Design", "SEO"],
    image: eCommerceImage2,
  },
];

const fintechProjects = [
  {
    id: 3,
    title: "Fintech Solution Co.",
    description: "Fintech platform development for a financial services company in Lagos State, Nigeria.",
    tags: ["Visit Website", "UI/UX Design", "SEO"],
    image: fintechImage1,
  },
  {
    id: 4,
    title: "Fintech Solution Co.",
    description: "Fintech platform development for a financial services company in Lagos State, Nigeria.",
    tags: ["Visit Website", "UI/UX Design", "SEO"],
    image: fintechImage2,
  },
];

const portfolioProjects = [
  {
    id: 5,
    title: "Portfolio Showcase",
    description: "Portfolio website for a creative agency in Lagos State, Nigeria.",
    tags: ["Visit Website", "UI/UX Design", "SEO"],
    image: portfolioImage1,
  },
  {
    id: 6,
    title: "Portfolio Showcase",
    description: "Portfolio website for a creative agency in Lagos State, Nigeria.",
    tags: ["Visit Website", "UI/UX Design", "SEO"],
    image: portfolioImage2,
  },
];

export default function PortfolioSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");

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

  // Combine all projects for the ALL tab
  const allProjects = [...eCommerceProjects, ...fintechProjects, ...portfolioProjects];

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "ALL"
      ? allProjects
      : activeFilter === "eCommerce"
      ? eCommerceProjects
      : activeFilter === "Fintech"
      ? fintechProjects
      : portfolioProjects;

  // On mobile, show only the first project of each category for ALL tab
  const mobileProjects = isMobile && activeFilter === "ALL"
    ? [
        eCommerceProjects[0],
        fintechProjects[0],
        portfolioProjects[0],
      ].filter(Boolean)
    : filteredProjects;

  return (
    <section
      className="bg-white py-16"
      style={{ borderTop: "1px solid rgba(7, 24, 86, 1)" }}
    >
      {/* Filter Buttons Section */}
      <div
        className={
          isMobile
            ? "max-w-[342px] mx-auto"
            : "max-w-[1216px] mx-auto"
        }
      >
        <div
          className={
            isMobile
              ? "max-w-[341px] h-[90px] flex flex-wrap gap-2 justify-start"
              : "max-w-[618px] h-[52px] flex gap-6 justify-start"
          }
        >
          {["ALL", "eCommerce", "Fintech", "Portfolio"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                isMobile
                  ? `w-[${filter === "ALL" ? "79px" : filter === "eCommerce" ? "130px" : filter === "Fintech" ? "104px" : "111px"}] h-[37px] rounded-lg py-3 px-8 font-outfit font-medium text-[12px] leading-[100%] tracking-[0%]`
                  : `w-[${filter === "ALL" ? "100px" : filter === "eCommerce" ? "168px" : filter === "Fintech" ? "134px" : "144px"}] h-[52px] rounded-lg py-4 px-10 font-outfit font-semibold text-[16px] leading-[100%] tracking-[0%]`
              }
              style={
                activeFilter === filter
                  ? { backgroundColor: "rgba(7, 24, 86, 1)", color: "rgba(250, 250, 253, 1)" }
                  : { backgroundColor: "rgba(250, 250, 253, 1)", color: "rgba(7, 24, 86, 1)" }
              }
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div
        className={
          isMobile
            ? "max-w-[342px] min-h-[650.3479px] mx-auto flex flex-col gap-[65px] mt-8"
            : "max-w-[1216px] h-[1709px] mx-auto flex flex-col gap-16 mt-8 "
        }
      >
        {/* Sub-Containers (Rows) */}
        {isMobile
          ? mobileProjects.map((project) => (
              <div
                key={`${activeFilter}-${project.id}`}
                className="w-[342px] h-[304.4493px] flex flex-col animate-slide-in "
              >
                {/* Project Card */}
                <div className="w-[342px] h-[340 .4493px] flex flex-col bg-[#0718560D] rounded-[12px] ">
                  {/* Image */}
                  <div className="w-[342px] h-[174px] rounded-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  {/* Text Container */}
                  <div className="w-[330px] h-[157px] flex justify-center flex-col gap-4 mt-4 px-4 whitespace-normal">
                    <h3 className="font-outfit font-semibold text-[20px] leading-[100%] tracking-[0%] ">
                      {project.title}
                    </h3>
                    <div className="w-[342px] min-h-[44px] ">
                      <p className="font-outfit font-normal text-[16px] leading-[22px] tracking-[0%] w-[320px] ">
                        {project.description}
                      </p>
                    </div>
                    {/* Button Container */}
                    <div className={isMobile ? "w-[265px] h-[24px] flex gap-2 flex-wrap " : "w-[408px] h-[42px] flex gap-3 "}>
                            {project.tags.map((tag, index) => (
                              <button
                                key={index}
                                className={
                                  isMobile
                                    ? index === 0
                                      ? "w-[140px] h-[24px] rounded py-[5.78px] px-[6.93px] font-outfit font-semibold text-[9px] leading-[12px] tracking-[0%] whitespace-nowrap"
                                      : index === 1
                                      ? "w-[68.86px] h-[24.55px] rounded border-none py-[5.78px] px-[6.36px] font-outfit font-semibold text-[9px] leading-[12px] tracking-[0%] whitespace-nowrap"
                                      : "w-[31.86px] h-[24.55px] rounded py-[5.78px] px-[6.93px] font-outfit font-semibold text-[9px] leading-[12px] tracking-[0%] whitespace-nowrap"
                                    : index === 0
                                    ? "w-[260px] h-[42px] rounded border-none py-[10px] px-3 font-outfit font-semibold text-[14px] leading-[22px] tracking-[0%] whitespace-nowrap"
                                    : index === 1
                                    ? "w-[130px] h-[42px] rounded border-none py-[10px] px-3 font-outfit font-semibold text-[14px] leading-[22px] tracking-[0%] whitespace-nowrap"
                                    : "w-[60px] h-[42px] rounded border-none py-[10px] px-3 font-outfit font-semibold text-[14px] leading-[22px] tracking-[0%] whitespace-nowrap"
                                }
                                style={{
                                  backgroundColor: "rgba(204, 90, 113, 1)",
                                  color: "rgba(255, 255, 255, 1)",
                                }}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                  </div>
                </div>
              </div>
            ))
          : [0, 1, 2].map((rowIndex) => (
              <div
                key={rowIndex}
                className="w-[1216px] h-[527px] flex gap-8"
              >
                {/* Two Project Cards per Row */}
                {filteredProjects
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((project) => (
                    <div
                      key={`${activeFilter}-${project.id}`}
                      className="w-[592px] h-[527px] flex justify-center items-center flex-col animate-slide-in bg-[#0718560D] rounded-[12px]
]"
                    >
                      {/* Inner Container (Image + Text) */}
                      <div className="w-[560px] h-[480px] flex flex-col">
                        {/* Image */}
                        <div className="w-[560px] h-[300px] rounded-lg">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        {/* Text Container */}
                        <div className="w-[560px] h-[157px] flex flex-col gap-6 mt-4  ">
                          <h3 className="font-outfit font-semibold text-[20px] leading-[100%] tracking-[0%] ">
                            {project.title}
                          </h3>
                          <div className="w-[479px] h-[44px]">
                            <p className="font-outfit font-normal text-[16px] leading-[22px] tracking-[0%]">
                              {project.description}
                            </p>
                          </div>
                          {/* Button Container */}
                          <div className="w-[450px] h-[42px] flex gap-3">
                            {project.tags.map((tag, index) => (
                              <button
                                key={index}
                                className={
                                  index === 0
                                    ? "w-[310px] h-[42px] rounded border-none py-[10px] px-2 font-outfit font-semibold text-[14px] leading-[22px] tracking-[0%]"
                                    : index === 1
                                    ? "w-[150px] h-[42px] rounded border-none py-[10px] px-3 font-outfit font-semibold text-[14px] leading-[22px] tracking-[0%]"
                                    : "w-[52px] h-[42px] rounded border-none py-[10px] px-3 font-outfit font-semibold text-[14px] leading-[22px] tracking-[0%]"
                                }
                                style={{
                                  backgroundColor: "rgba(204, 90, 113, 1)",
                                  color: "rgba(255, 255, 255, 1)",
                                }}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
      </div>

      {/* Animation CSS */}
      <style>
        {`
          .animate-slide-in {
            animation: slideIn 0.5s ease-in-out forwards;
            opacity: 0;
          }

          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateX(20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </section>
  );
}