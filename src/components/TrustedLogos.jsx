import twilioLogo from '../assets/images/twilio-logo.svg';
import mailchimpLogo from '../assets/images/mailchimp-logo.svg';
import basecampLogo from '../assets/images/basecamp-logo.svg';
import webflowLogo from '../assets/images/stripe-logo.svg';
import herokuLogo from '../assets/images/shopify-logo.svg';
import googleLogo from '../assets/images/google-logo.svg';

function TrustedLogos() {
  const logos = [
    twilioLogo,
    mailchimpLogo,
    basecampLogo,
    webflowLogo,
    herokuLogo,
    googleLogo,
  ];

  return (
    <section className="py-12 border-t border-gray-300">
      {/* Heading */}
      <h2 className="text-center text-[12px] md:text-[16px] font-[600] text-[ rgba(7, 24, 86, 1);
] mb-8">
        Trusted by Forward-Thinking Business
      </h2>

      {/* Logos Container */}
      <div className="overflow-hidden md:w-[1000px] flex items-center justify-center mx-auto">
        {/* Desktop: Moving Logos */}
        <div className="hidden md:block">
          <div className="flex w-[300%] animate-marquee ">
            {logos.concat(logos).concat(logos).concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Trusted Logo ${index + 1}`}
                className="md:w-[200px] md:h-[50px] mx-6 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Mobile: Stacked Logos (3 left, 3 right) */}
        <div className="md:hidden flex flex-wrap justify-center gap-6">
          {/* Left Column */}
          <div className="flex flex-col items-center gap-6">
            {logos.slice(0, 3).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Trusted Logo ${index + 1}`}
                className="h-[40px] w-[160px] "
              />
            ))}
          </div>
          {/* Right Column */}
          <div className="flex flex-col items-center gap-6">
            {logos.slice(3, 6).map((logo, index) => (
              <img
                key={index + 3}
                src={logo}
                alt={`Trusted Logo ${index + 4}`}
                className="h-10 "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedLogos;