import image from "./images/bestApp.png";

export const Feedback: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center text-gray-800 text-center px-4 md:px-28 py-8 md:py-16">
      <img
        src={image}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover"
      />
      <h1 className="text-lg md:text-2xl font-bold mt-4">Michail David</h1>
      <h4 className="text-sm italic text-gray-400 mt-4">
        Orci nullam tempor sapien donec enim ipsum integer at porta justo odio
        vitae auctor vitae integer congue magna lacus odio ac risus auctor
        tempus magna
      </h4>
    </div>
  );
};
