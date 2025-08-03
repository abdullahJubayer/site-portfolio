import background from "./images/bestApp.png";

export const BestApp: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between items-center text-center text-gray-800 md:text-white px-4 md:px-44 md:py-36">
        <img
          src={background}
          alt="Logo"
          className="object-contain px-4 py-4 md:px-4 md:py-4"
        />
        <div className="">
          <h1 className="text-2xl md:text-6xl font-bold">
            Stay Organized Effortlessly
          </h1>
          <h4 className="text-sm text-gray-400 md:text-gray-200 md:text-md mt-4">
            Orci nullam tempor sapien donec enim ipsum integer at porta justo
            odio vitae auctor vitae integer congue magna lacus odio ac risus
            auctor tempus magna
          </h4>
        </div>
      </div>
    </div>
  );
};
