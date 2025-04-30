import officeImage from '../assets/middle.jpeg'; 
import arrowIcon from '../assets/icons/arrow-up.svg'; 

function AboutUsHero() {
  return (
    <section className=" bg-white py-16 md:pt-40 pt-32">
      <div className="w-[390px] md:w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center ">
        {/* Heading and Paragraph */}
        <div className="text-center mb-12 md:w-[882px] w-[314px] mx-auto">
  <h1 className="text-[32px] md:text-[40px] font-[700] mb-4">
    <span style={{ color: "rgba(204, 90, 113, 1)" }}>Welcome to</span>{" "}
    <span style={{ color: "rgba(7, 24, 86, 1)" }}>Meezak Technologies</span>
  </h1>
  <p
    className="text-[14px] w-[310px] md:w-full md:text-[14px] md:font-[400] max-w-3xl mx-auto"
    style={{ color: "rgba(7, 24, 86, 1)" }}
  >
    Meezak Technologies is a registered startup IT Consulting Company registered in Nigeria, West Africa but operating globally with the majority of our clients located in Europe, the United States, Australia, and the United Kingdom. Our Core aim is focused on developing solutions that are the best fit for the business requirements of our clients. We are committed to delivering quality and outstanding solutions to increase our client’s business value.
  </p>
</div>

        {/* Image and Card Section */}
        <div className=" mx-auto flex w-[314px] md:w-full flex-col-reverse md:flex-row gap-4 items-center">
          {/* Image */}
          <div className="order-2 md:order-1  md:w-[760px] md:h-[433px]  w-[342px]">
            <img
              src={officeImage}
              alt="Meezak Technologies Office"
              className="w-full md:h-[433px] rounded-[40px] object-cover"
            />
          </div>

          {/* Card */}
          <div
            className="order-1 md:order-2 w-[390px] md:w-[440px] md:h-[433px] text-white p-8 md:rounded-[40px] flex flex-col justify-between"
            style={{ background: "linear-gradient(247.14deg, #061345 0%, #071856 100%)" }}
          >
            <div className='w-[314px] '>
              <h2 className="text-[24px] md:text-3xl font-semibold mb-4">
                We have started our journey since 2018 and we ensure quality
              </h2>
           
            </div>

            <div>
            <p className="text-[14px] font-[400] md:text-base text-gray-300">
                Our Core aim is focused on developing solutions that are the best fit for the business requirements of our clients. We are committed to delivering quality and outstanding solutions to increase our client’s business value.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsHero;
