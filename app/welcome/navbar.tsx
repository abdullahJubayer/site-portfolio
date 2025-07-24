import logoLight from "./images/mania-puzzle-logo.png";

let page = [
  "About",
  "Our Apps",
  "Device Support",
  "Screens",
  "Feedback",
  "Contact Us",
];

export const Navbar: React.FC = () => {
  return (
    <nav className=" px-28 py-6">
      <div className="flex justify-between items-center">
        <img src={logoLight} alt="Logo" className="object-contain" />
        <ul className="flex-1 flex text-xl text-center justify-end items-center text-gray-100">
          {page.map((item) => (
            <li key={item} className="mx-6">
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
