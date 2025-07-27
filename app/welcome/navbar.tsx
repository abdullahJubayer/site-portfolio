import { useEffect, useState } from "react";
import logoLight from "./images/mania-puzzle-logo.png";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`md:px-44 md:py-8 fixed top-0 left-0 right-0 transition-colors duration-300 ${
        scrolled ? "bg-gray-50  text-gray-500" : "bg-transparent  text-gray-100"
      }`}
    >
      <div className="flex justify-between items-center">
        <img
          src={logoLight}
          alt="Logo"
          className="object-contain cursor-pointer"
        />
        <ul className="flex-1 flex text-md text-center justify-end items-center">
          {page.map((item) => (
            <li
              key={item}
              className="hover:bg-[rgba(249,250,251,0.2)] px-4 py-2 rounded-l-sm cursor-pointer"
            >
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
