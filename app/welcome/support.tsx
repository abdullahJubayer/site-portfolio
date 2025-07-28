import type React from "react";

export const Support: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="text-gray-800 bg-gray-100 text-center px-4 md:px-28 py-16 md:py-24 mt-16 md:mt-24">
        <h1 className="text-2xl md:text-6xl font-bold">Looking For Support?</h1>
        <h4 className="text-sm text-gray-600 md:text-md mt-4">
          Got a Question? We'd love to hear from you. Send us a message and we
          will respond you as soon as possible
        </h4>
      </div>
      <form action="#" className="mx-4 md:mx-28">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          <div className="flex-1 w-full">
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

          <div className="flex-1 mt-4 md:mt-0  w-full">
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
        <div className="flex flex-col justify-end items-end w-full">
          <textarea
            rows={6}
            className="my-8 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Message..."
            required
          ></textarea>

          <button
            type="submit"
            className="max-w-48 rounded-sm bg-blue-600 px-6 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Send Message
          </button>
        </div>
        <div>
          <hr className="h-px my-8 border-0 bg-gray-300" />
          <footer className="text-center py-4 text-sm text-gray-500 flex-col md:flex justify-between">
            <div>
              © 2024 <span className="font-semibold">Mania Puzzle</span>. All
              Rights Reserved.
            </div>
            <div>Privacy Policy | Terms of Service</div>
          </footer>
        </div>
      </form>
    </div>
  );
};
