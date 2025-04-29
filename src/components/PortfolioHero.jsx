import { useState, useEffect } from "react";
import CTAButton from "./ctaButton"
import worksImage from '../assets/images/works-image.jpg';

export default function OurWorks() {
  const [isMobile, setIsMobile] = useState(false);

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
    <section className="bg-white py-16 md:pt-30 pt-32">
      {/* Entire Container */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

      <div
        className={
          isMobile
            ? "max-w-[342px] h-[484px] mx-auto flex flex-col gap-6"
            : "max-w-[1216px] h-[484px] mx-auto flex flex-col gap-6"
        }
      >
        {/* Image */}
        <div
          className={
            isMobile
              ? "w-full h-[174px] rounded-[8px]"
              : "w-[1216px] h-[218px] rounded-[8px]"
          }
        >
          <img
            src={worksImage || "/placeholder.svg"}
            alt="Our Works"
            className="w-full h-full object-cover  rounded-[8px] object-top-center"
          />
        </div>

        {/* Bottom Container (Text + Button) */}
        <div
          className={
            isMobile
              ? "max-w-[342px] h-[286px] flex flex-col gap-6"
              : "max-w-[882px] h-[296px] flex flex-col gap-[50px] mt-4"
          }
        >
          {/* Text Container (Title + Subtext) */}
          <div
            className={
              isMobile
                ? "max-w-[342px] h-[214px] flex flex-col gap-3"
                : "max-w-[713px] h-[154px] flex flex-col gap-3"
            }
          >
            {/* Title */}
            <h2
              className={
                isMobile
                  ? "font-bold text-[32px] leading-[70px] tracking-[0%]"
                  : "font-bold text-[40px] leading-[70px] tracking-[0%]"
              }
            >
              <span style={{ color: "rgba(204, 90, 113, 1)" }}>Our</span>{" "}
              <span style={{ color: "rgba(7, 24, 86, 1)" }}>Works</span>
            </h2>

            {/* Subtext */}
            <p
              className={
                isMobile
                  ? "font-normal text-[14px] leading-6 tracking-[0%]"
                  : "font-medium text-[16px] leading-6 tracking-[0%]"
              }
              style={{ color: "rgba(7, 24, 86, 1)" }}
            >
              We’re a team of passionate storytellers, tech wizards, and marketing alchemists who transform brands and businesses into digital sensations. We don’t just create websites and campaigns, we craft experiences that captivate, connect, and convert. Scroll down to explore a few of our success stories.
            </p>
          </div>

          {/* Button */}
         
          <div>
                        
                        <CTAButton to="/contact" text="Work With Us" />

                    </div>
        </div>
      </div>
      </div>
    </section>
  );
}