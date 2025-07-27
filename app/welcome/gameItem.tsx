import React from "react";

import qr_code from "./images/qr_code.png";
import ic_play_store from "./images/apple_play_store.png";

export const GameItem: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center text-gray-500 text-center rounded-md px-2 py-8 bg-white hover:shadow-lg hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer border border-gray-200"
      onClick={() => {}}
    >
      <img
        className="bg-gray-100 rounded-full"
        src={qr_code}
        alt="product-img"
      />
      <h1 className="text-xl font-bold mt-6">Scan Barcode - QR Code Reader</h1>
      <h4 className="text-sm text-gray-400 mt-6">
        Get more information, including search results from well-known websites
        like Amazon, eBay, and Google, by scanning any QR code or barcode for
        100% free!
      </h4>
      <img src={ic_play_store} alt="product-img" className="mt-8 max-w-40" />
    </div>
  );
};
