export default function MissionVisionSection() {
  const missionVisionServices = [
    {
      title: "Our Mission",
      description: "Our Core aim is focused on developing solutions that are the best fit for the business requirements of our clients. We are committed to delivering quality and outstanding solutions to increase our client’s business value.",
    },
    {
      title: "Our Vision",
      description: "Our Core aim is focused on developing solutions that are the best fit for the business requirements of our clients. We are committed to delivering quality and outstanding solutions to increase our client’s business value.",
    },
  ];

  return (
    <section
      className="py-16 text-white"
      style={{ background: "linear-gradient(247.14deg, #061345 0%, #071856 100%)" }}
    >
      <div className="container mx-auto px-4 w-[390px] md:w-full md:h-[492px] h-[498px] md:py-[100px] py-[56px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] justify-items-center">
          {missionVisionServices.map((service, index) => (
            <div
              key={index}
              className="relative w-[344px] md:w-[568px] md:h-[292px] h-[185px] overflow-hidden rounded-[8px] border-2 border-solid"
              style={{
                background: "rgba(88, 7, 191, 0.2)",
                borderImage: "linear-gradient(249.14deg, #5807BF 0%, #290359 50.42%) 1",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Existing Purple blur in top-left corner */}
              <div
                className="hidden absolute rounded-full blur-xl bg-purple-600 opacity-50"
                style={{
                  top: "20px",
                  left: "20px",
                  width: "64px",
                  height: "64px",
                }}
              />

              {/* New Purple blur */}
              <div
                className="absolute rounded-full blur-xl bg-purple-600 opacity-50 w-[200px] h-[200px] top-[-85px] left-[273px]"
              />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                <h3 className="text-[20px] font-[400] text-white mb-3">{service.title}</h3>
                <p className="text-[11px] font-[400] text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}