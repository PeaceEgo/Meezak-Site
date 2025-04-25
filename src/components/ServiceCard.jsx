export default function ServiceCard({ service }) {
    return (
      <div
        className="relative overflow-hidden"
        style={{
          width: "392px",
          height: "242px",
          borderRadius: "8px",
          border: "2px solid transparent",
          backgroundClip: "padding-box",
          backgroundImage: "linear-gradient(to bottom, rgba(88, 7, 191, 0.2), rgba(41, 3, 89, 0.2))",
        }}
      >
        {/* Border gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            padding: "2px",
            borderRadius: "10px",
            background: "linear-gradient(249.14deg, #5807BF 0%, #290359 50.42%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
          }}
        />
        
  
        {/* Left purple blur */}
        <div
          className="absolute rounded-full blur-xl bg-purple-600 opacity-100"
          style={{
            top: "30px",
            left: "30px",
            width: "50px",
            height: "50px",
          }}
        />
  
        {/* Right gradient */}
        <div
          className="absolute z-0"
          style={{
            bottom: "100px",
            right: "-100px",
            width: "250px",
            height: "250px",
            background: "linear-gradient(135deg, rgba(88, 7, 191, 0.7), rgba(41, 3, 89, 0.7))",
            filter: "blur(40px)",
            opacity: "1",
          }}
        />
  
        <div className="relative z-10 p-6 h-full flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-3 relative z-10 text-white">{service.title}</h3>
          <p className="text-gray-300">{service.description}</p>
        </div>
      </div>
    );
  }