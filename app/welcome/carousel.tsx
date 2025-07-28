import React, { useEffect, useRef, useState } from "react";

import image1 from "./images/bestApp.png";
import image2 from "./images/bestApp.png";
import image3 from "./images/bestApp.png";
import image4 from "./images/bestApp.png";

const logos = [
  {
    src: image1,
    alt: "Facebook",
  },
  {
    src: image2,
    alt: "Disney",
  },
  {
    src: image3,
    alt: "Airbnb",
  },
  {
    src: image4,
    alt: "Apple",
  },
];

const scrollAnimation = `
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

const Carousel: React.FC = () => {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const clone = logosRef.current.cloneNode(true) as HTMLUListElement;
      clone.setAttribute("aria-hidden", "true");
      logosRef.current.parentNode?.appendChild(clone);
    }
  }, []);

  return (
    <div className="py-8 md:py-16">
      {/* Inject local animation */}
      <style>{scrollAnimation}</style>
      <h1 className="text-2xl md:text-6xl font-bold mt-4 text-gray-800 text-center">
        Awesome Screenshots
      </h1>
      <div className="w-full inline-flex flex-nowrap mt-8 md:mt-24">
        <ul
          ref={logosRef}
          className="flex gap-x-4 md:gap-x-16 items-center justify-center md:justify-start [&_img]:max-w-none animate-[scroll_30s_linear_infinite]"
        >
          {logos.map((logo, idx) => (
            <li key={idx}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-auto max-h-40 md:max-h-80"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
