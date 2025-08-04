import { useEffect, useState } from "react";
import logoLight from "./images/mania-puzzle-logo.png";
import icMenu from "./images/menu.png";

let page = [
  "About Us",
  "Our Apps",
  "Device Support",
  "Screens",
  "Feedback",
  "Contact Us",
];

export const Navbar: React.FC<{ onNavClick: (section: string) => void }> = ({
  onNavClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuItemVisible(true);
      } else {
        setIsMenuItemVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`top-0 z-20 md:px-44 py-4 md:py-8 transition-colors duration-300 w-full sticky ${
        scrolled
          ? " bg-gray-50 text-gray-600"
          : " md:absolute bg-transparent text-gray-600 md:text-gray-100 mt-4"
      }`}
    >
      <div className="md:flex justify-between items-center relative">
        <div className="px-4 flex justify-between items-center">
          <img
            src={logoLight}
            alt="Logo"
            className="object-contain cursor-pointer"
          />
          <img
            src={icMenu}
            alt="Logo"
            className="w-6 h-6 cursor-pointer md:hidden"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMenuItemVisible(!isMenuItemVisible);
            }}
          />
        </div>
        {isMenuItemVisible && (
          <ul className="absolute flex flex-col md:flex-row w-full z-10 bg-white md:bg-transparent text-md text-center justify-end items-center font-semibold">
            {page.map((item) => (
              <li
                key={item}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  scrolled
                    ? "md:hover:bg-gray-200"
                    : "md:hover:bg-[rgba(249,250,251,0.2)]"
                }`}
                onClick={() => onNavClick(item)}
              >
                <a>{item}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
