import React from "react";

export const Card = ({ title, image, category, price }) => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 m-2 truncate">
          {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt=""
        />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 shadow-md">
          +
        </button>
        <div className="flex justify-between bg-gray-200 rounded-lg">
          <span className="text-sm my-auto truncate">{title}</span>
          <span className="text-lg font-medium">${price}</span>
        </div>
      </figure>
    </div>
  );
};
