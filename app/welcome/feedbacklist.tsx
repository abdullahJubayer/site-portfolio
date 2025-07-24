import { Feedback } from "./feedback";

export const FeedbackList: React.FC = () => {
  return (
    <div className="px-28 py-8 my-16 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mt-4 text-black">Customers Feedback</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-4 md:mx-16 my-8 md:my-16">
        {[1, 2, 3].map((item) => (
          <li key={item} className="mx-6">
            <a>
              <Feedback />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
