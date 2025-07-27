import React, { useEffect, useState } from "react";
import { Feedback } from "./feedback";

const feedback = [1, 2, 3, 4, 5];

export const FeedbackCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedback.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-16">
      <h1 className="text-2xl md:text-6xl font-bold text-gray-800">
        Customers Feedback
      </h1>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {feedback.map((index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <Feedback />
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {feedback.map((i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === current ? "bg-gray-400" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
