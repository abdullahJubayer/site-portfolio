import React, { useEffect, useState } from "react";
import { Feedback } from "./feedback";
import { pre } from "framer-motion/client";

const feedback = [1, 2, 3, 4];

export const FeedbackCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedback.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1 className="text-2xl md:text-6xl font-bold text-gray-800">
        Customers Feedback
      </h1>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out "
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {feedback.map((index) => (
            <Feedback key={index} />
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {feedback.map((_, i) => (
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
