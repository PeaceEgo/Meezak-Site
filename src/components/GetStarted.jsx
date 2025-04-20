import getbg from '../assets/images/getbg.jpg';

function GetStarted() {
  // Helper function to split a word into individual letters with stroke styling
  const renderStyledWord = (word) => {
    return word.split('').map((letter, index) => (
      <span
        key={index}
        className="text-white"
        style={{
          WebkitTextStroke: '2px rgba(7,24,86,1)',
          textStroke: '2px rgba(7,24,86,1)', // Fallback for non-Webkit browsers
        }}
      >
        {letter}
      </span>
    ));
  };

  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-start"
      style={{
        backgroundImage: `url(${getbg})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Card */}
      <div className="relative z-10 w-full md:max-w-[650px] bg-white rounded-[8px] shadow-lg p-8 md:p-12 mx-4 md:ml-12 md:mr-0 h-[450px] md:h-[522px] flex flex-col items-start justify-center ">
        {/* Tagline */}
        <p className="text-[10px] md:text-[16px] font-[500] text-[rgba(7,24,86,1)] mb-4">
          Ready to Bring Your Vision to Life?
        </p>

        {/* Headline */}
        <h2 className="text-[31px] md:text-[60px] leading-tight mb-6 ">
          <span className="font-[900] text-[rgba(7,24,86,1)]">
            {renderStyledWord("LET’S")} START
          </span>{' '}
          <span className="font-[900] text-[rgba(7,24,86,1)]">
            {renderStyledWord("YOUR")} BUSINESS
          </span>
        </h2>

        {/* Subtext */}
        <p
          className=" text-[rgba(7,24,86,0.7)] mb-8 font-outfit font-medium text-[12px] leading-[22px] tracking-[0%]"
        >
          Ready to take your business to the next level? Partner with Meezak Technology, and let’s build a strategy that will drive your brand to unprecedented heights.
        </p>

        {/* Button */}
        <button className="border-2 border-[rgba(204,90,113,1)] text-white md:text-[rgba(204,90,113,1)] md:bg-transparent bg-[rgba(204,90,113,1)] px-[16px] py-[10px] md:px-[16px] md:py-[10px] w-[140px] md:w-[200px] h-[48px] md:h-[48px] rounded-md text-[14px] font-semibold hover:bg-white hover:text-[rgba(7,24,86,1)] transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default GetStarted;