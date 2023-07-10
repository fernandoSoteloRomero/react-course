import React, { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { ShoppingCartContext } from "../../Context/Context";
export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      }  flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button
          className="h-6 w-6 text-black-500"
          onClick={() => context.closeProductDetail()}
        >
          <CiCircleRemove size={"1.5rem"} />
        </button>
      </div>

      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg "
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-1md">
          {context.productToShow.title}
        </span>
        <span className="font-medium text-s">
          {context.productToShow.category}
        </span>
      </p>
    </aside>
  );
};
