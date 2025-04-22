import { useState, useEffect, useRef } from 'react';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import taglineIcon from '../assets/icons/star.png';
import blurCircle from '../assets/images/blur-circle.svg'; // Import the SVG
import StatCounter from './StatCounter';

function Hero() {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect(); // Stop observing once the animation starts
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the stats section is visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section
      className="w-[100vw] h-[1200px] md:h-[1050.46px] pl-[70px] pr-[70px] text-white overflow-hidden flex items-center justify-center relative"
      style={{ background: "linear-gradient(247.14deg, #061345 0%, #071856 100%)" }}
    >
      <div className="mx-auto px-4 text-center h-[100%] flex flex-col items-center justify-center md:w-[100%]">
        {/* Wrapper for Tagline, Headline, Subtext, and CTA */}
        <div className="container w-[100vw] h-[338px] md:w-[100%] md:h-[336.31px] flex flex-col justify-center items-center gap-6 mx-auto">
          {/* Tagline with Icon */}
          <div className="w-[266px] h-[26px] md:w-[311.81px] md:h-[36.31px] bg-[rgba(204,90,113,1)] py[6.08px] px[12.77px] md:py-[9.52px] md:px-5 gap-[9.52px] rounded-[4.06px] md:rounded-[6.35px] flex items-center justify-center">
            <img src={taglineIcon} alt="Tagline Icon" className="w-[12px] h-[14.5px] md:w-[14.29px] md:h-[17.26px]" />
            <span className="text-white text-[10px] md:text-[10.3px] md:w-[258px] font-[600]">
              WE ARE KNOWN TO BE A SOLUTION PROVIDER
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[32px] md:text-5xl font-[700] text-white md:w-[751px] z-[30]">
            Empowering Your Business with Cutting-Edge{" "}
            <span className="text-[rgba(204,90,113,1)]"> Digital Solutions</span>
          </h1>

          {/* Subtext */}
          <p className="text-[14px] md:text-base text-blue font-[200] max-w-2xl z-[30]">
            Transform your brand with modern web design, UI/UX, mobile apps, and IT consulting – crafted to drive growth and success
          </p>

          {/* CTA Button */}
          <button className="bg-[rgba(204,90,113,1)] md:bg-white border border-[rgba(204,90,113,1)] md:text-[rgba(204,90,113,1)] px-14 py-2 rounded-md text-sm font-[600] hover:bg-white hover:text-blue-900">
            Get Started
          </button>
        </div>

        {/* Image Section Wrapper */}
        <div className="mt-12 w-full md:w-[100%] h-[372px] md:h-[300px] mx-auto relative flex items-center justify-center">
          {/* Blurred Container (Background Only) */}
          <div
            className="container md:w-[100%] w-[342px] h-[347px] md:h-[340px] bg-gray-200/30 opacity-30 rounded-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ backdropFilter: 'blur(50px)' }}
          ></div>

          {/* Images - 2x2 grid on mobile, row with overlaps on desktop */}
          <div className="flex flex-col md:flex-row items-center justify-center z-[30] gap-2 md:gap-4">
            {/* Top Row on Mobile */}
            <div className="flex flex-row items-center justify-center">
              <img
                src={image1}
                alt="Tech Visual 1"
                className="w-[160px] h-[170px] md:w-[300px] md:h-[320px] md:rounded-[40px] rounded-[20px] border-2 md:border-4 border-white object-cover z-0 md:rotate-[-8deg] md:mt-[-80px] rotate-[-8deg]"
              />
              <img
                src={image2}
                alt="Tech Visual 2"
                className="w-[160px] h-[170px] md:w-[300px] md:h-[320px] md:rounded-[40px] rounded-[20px] border-2 md:border-4 border-white object-cover md:rotate-[4deg] rotate-[4deg] mt-2"
              />
            </div>
            {/* Bottom Row on Mobile */}
            <div className="flex flex-row items-center justify-center">
              <img
                src={image3}
                alt="Tech Visual 3"
                className="w-[160px] h-[170px] md:w-[300px] md:h-[320px] md:rounded-[40px] rounded-[20px] border-2 md:border-4 border-white object-cover md:rotate-[-4deg] rotate-[-8deg]"
              />
              <img
                src={image4}
                alt="Tech Visual 4"
                className="w-[160px] h-[170px] md:w-[300px] md:h-[320px] md:rounded-[40px] rounded-[20px] border-2 md:border-4 border-white object-cover z-20 md:rotate-[8deg] md:mt-[-80px] rotate-[4deg] mt-2"
              />
            </div>
          </div>
        </div>

        {/* Stats - 2x2 grid on mobile, row on desktop */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 md:gap-[150px] gap-6 mt-12 text-white z-[30]"
        >
          <StatCounter target="3M+" label="Satisfied Customers" startAnimation={isStatsVisible} />
          <StatCounter target="19K" label="Projects Completed" startAnimation={isStatsVisible} />
          <StatCounter target="09+" label="Years of Experience" startAnimation={isStatsVisible} />
          <StatCounter target="5K" label="Satisfied Partners" startAnimation={isStatsVisible} />
        </div>
      </div>

      {/* Background Blurred SVG Circles */}
      <img
        src={blurCircle}
        alt="Blur Circle"
        className="absolute w-[290px] h-[290px] top-[30px] left-[880px] z-[10]"
        style={{ filter: 'blur(10px)' }}
      />
      <img
        src={blurCircle}
        alt="Blur Circle"
        className="absolute w-[290px] h-[290px] top-[80px] md:top-[100px] left-[-150px] md:left-[30px] z-[10]"
        style={{ filter: 'blur(8px)' }}
      />
      <img
        src={blurCircle}
        alt="Blur Circle"
        className="absolute w-[290px] h-[290px] bottom-[100px] left-[450px] z-[10]"
        style={{ filter: 'blur(5px)' }}
      />
      <img
        src={blurCircle}
        alt="Blur Circle"
        className="absolute w-[290px] h-[290px] bottom-[650px] right-[-110px] md:bottom-[150px] md:right-[-50px] z-[10]"
        style={{ filter: 'blur(10px)' }}
      />
      <img
        src={blurCircle}
        alt="Blur Circle"
        className="absolute w-[290px] h-[290px] bottom-[250px] left-[-180px] md:bottom-[-40px] md:left-[-140px] z-[10]"
        style={{ filter: 'blur(10px)' }}
      />
    </section>
  );
}

export default Hero;