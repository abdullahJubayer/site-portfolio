import image from "./images/bestApp.png";

export const Feedback: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-black">
      <img
        src={image}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover"
      />
      <h1 className="text-xl font-bold mt-4">Michail David</h1>
      <h4 className="text-sm text-gray-400 italic mt-4">
        Orci nullam tempor sapien donec enim ipsum integer at porta justo odio
        vitae auctor vitae integer congue magna lacus odio ac risus auctor
        tempus magna
      </h4>
    </div>
  );
};
