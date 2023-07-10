import React from "react";
import { CiCircleRemove } from "react-icons/ci";

const OrderCard = ({ title, image, category, price, id, handleDelete }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
          <p className="text-sm font-light truncate mb-6">{title}</p>
        </figure>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-bold">${price}</p>
        <CiCircleRemove size={"1.5rem"} onClick={() => handleDelete(id)} />
      </div>
    </div>
  );
};

export default OrderCard;
