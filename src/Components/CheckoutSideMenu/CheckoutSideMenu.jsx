import React, { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { ShoppingCartContext } from "../../Context/Context";
import OrderCard from "../OrderCard/OrderCard";
export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } overflow-scroll flex-col overflow-x-hidden fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button
          className="h-6 w-6 text-black-500"
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <CiCircleRemove size={"1.5rem"} />
        </button>
      </div>
      <div className="px-6">
        {context.cartProducts.map((product, index) => (
          <OrderCard
            key={index}
            title={product.title}
            image={product.image}
            category={product.category}
            price={product.price}
            id={product.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </aside>
  );
};
