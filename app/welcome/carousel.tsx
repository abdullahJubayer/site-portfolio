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
    <div className="relative font-inter antialiased">
      {/* Inject local animation */}
      <style>{scrollAnimation}</style>
      <main className="relative min-h-screen flex flex-col justify-center">
        <div className="text-center">
          <div className="w-full inline-flex flex-nowrap">
            <ul
              ref={logosRef}
              className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-[scroll_30s_linear_infinite]"
            >
              {logos.map((logo, idx) => (
                <li key={idx}>
                  <img src={logo.src} alt={logo.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carousel;
