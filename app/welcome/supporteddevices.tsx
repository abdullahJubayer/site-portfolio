import image from "./images/bestApp.png";

export const SupportedDevices: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16 text-gray-800 bg-gray-100 text-center px-4 md:px-28 py-16 md:py-24 mt-16 md:mt-24">
      <div className="">
        <h1 className="text-2xl md:text-6xl font-bold">
          Available on all your devices
        </h1>
        <h4 className="text-sm text-gray-400 md:text-md mt-4">
          An orci nullam tempor sapien, eget gravida integer donec ipsum porta
          justo at odio integer congue magna undo auctor gravida velna magna
          orci lacus odio ac risus auctor faucibus orci ligula massa luctus et
          ultrices posuere cubilia
        </h4>
      </div>
      <img
        src={image}
        alt="Logo"
        className="object-contain px-4 py-8 md:px-4 md:py-4"
      />
    </div>
  );
};
