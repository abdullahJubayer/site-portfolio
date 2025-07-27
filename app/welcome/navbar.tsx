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

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuItemVisible, setIsMenuItemVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`md:px-44 py-4 md:py-8 transition-colors duration-300${
        scrolled ? "bg-gray-50  text-gray-500" : "bg-transparent  text-gray-100"
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
          <ul className="absolute md:fixed bg-white md:bg-transparent w-full z-10 flex-1 flex-col md:flex text-md text-center justify-end items-center font-semibold text-gray-600 md:text-gray-100">
            {page.map((item) => (
              <li
                key={item}
                className="hover:bg-[rgba(249,250,251,0.2)] px-4 py-2 rounded-l-sm cursor-pointer"
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
