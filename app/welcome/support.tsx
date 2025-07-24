import type React from "react";

export const Support: React.FC = () => {
  return (
    <div className="bg-gray-100 px-44 py-16">
      <div className="text-gray-700 text-center">
        <h1 className="text-5xl font-bold">Looking For Support?</h1>
        <h4 className="text-xl mt-4">
          Got a Question? We'd love to hear from you. Send us a message and we
          will respond you as soon as possible
        </h4>
      </div>
      <form action="#" className="my-8">
        <div className="rounded-md flex items-center justify-center gap-16 w-full">
          <div className="flex-1">
            <label
              htmlFor="your_name"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Your Name*
            </label>
            <input
              type="text"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="your_email"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              type="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
              placeholder="name@gmail.com"
            />
          </div>
        </div>
        <div>
          <textarea
            rows={6}
            className="my-8 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Message..."
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
};
