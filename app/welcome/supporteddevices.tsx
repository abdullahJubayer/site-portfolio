import image from "./images/bestApp.png";

export const SupportedDevices: React.FC = () => {
  return (
    <div className="flex justify-between gap-24 items-center bg-gray-200 text-black px-28 py-6 my-24">
      <div className="">
        <h1 className="text-xl font-bold">Available on all your devices</h1>
        <h4 className="text-md mt-4">
          An orci nullam tempor sapien, eget gravida integer donec ipsum porta
          justo at odio integer congue magna undo auctor gravida velna magna
          orci lacus odio ac risus auctor faucibus orci ligula massa luctus et
          ultrices posuere cubilia
        </h4>
      </div>

      <img src={image} alt="Logo" className="object-contain" />
    </div>
  );
};
