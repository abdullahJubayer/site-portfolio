import background from "./images/bestApp.png";

export const BestApp: React.FC = () => {
  return (
    <div className="flex justify-between gap-24 items-center text-white px-28 py-36">
      <img src={background} alt="Logo" className="object-contain" />
      <div className="">
        <h1 className="text-6xl font-bold">Stay Organized Effortlessly</h1>
        <h4 className="text-md mt-4">
          Orci nullam tempor sapien donec enim ipsum integer at porta justo odio
          vitae auctor vitae integer congue magna lacus odio ac risus auctor
          tempus magna
        </h4>
      </div>
    </div>
  );
};
