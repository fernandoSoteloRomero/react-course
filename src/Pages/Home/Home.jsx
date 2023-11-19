import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Card } from "../../Components/Card/Card";
import { useFetch } from "../../Components/Hooks/useFetch";
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";

const Home = () => {
  const { data, error, loading } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 w-full max-w-screen-lg justify-items-center">
        {data &&
          data.map((el, index) => (
            <Card
              key={index}
              title={el.title}
              image={el.image}
              category={el.category}
              price={el.price}
              id={el.id}
            />
          ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
