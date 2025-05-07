const LocationSection = () => {
    return (
        <section className="py-16 bg-white" id="map">
            <div className="container mx-auto px-4 max-w-6xl ">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-8">
                    {/* Map Section */}
                    <div className="w-full lg:w-2/3 rounded-lg overflow-hidden shadow-md lg:h-[60vh]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3377929845997!2d3.3397268!3d6.6037856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922f3b4b4c3d%3A0x7a7c8d3f7c4f4f5a!2s35%20Oba%20Akran%20Ave%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1650450987654!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location Map"
                            className="w-full h-full"
                        ></iframe>
                    </div>

                    <div className="w-full lg:w-2/3 flex flex-col justify-center mb-8 lg:mb-0">
                        <div className="max-w-md">
                            <h3 className="text-sm font-medium uppercase text-[#071856] mb-2">Our Location</h3>
                            <h2 className="text-3xl font-bold text-[#071856] mb-6">Connecting Near and Far</h2>

                            <p className="text-[#071856]  text-sm ">You can Visit us at:</p>

                            <address className="not-italic text-[#071856] font-medium text-lg leading-relaxed">
                                35, Oba Akran Avenue, Empire Building,
                                <br />
                                Opposite Chicken Republic,
                                <br />
                                Ikeja Lagos
                            </address>

                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationSection
