import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Card } from "../../Components/Card/Card";
import { useFetch } from "../../Components/Hooks/useFetch";

const Home = () => {
  const { data, error, loading } = useFetch(
    "https://fakestoreapi.com/products"
  );
  console.log(data);
  return (
    <Layout>
      {data &&
        data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            image={el.image}
            category={el.category}
            price={el.price}
          />
        ))}
    </Layout>
  );
};

export default Home;
