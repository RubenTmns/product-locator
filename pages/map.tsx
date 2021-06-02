import { GetServerSideProps } from "next";
import React from "react";

type Products = {
  id: string;
  label: string;
};

type mapProps = {
  products: Products[];
};

const Map: React.FC<mapProps> = ({ products }) => {
  return (
    <div>
      <h1>PAGE API</h1>
      <div>
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.label}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const productsTab = await fetch(
    `https://api-gateway.leroymerlin.fr/api-product/v2/products?updatedSince=2021-05-27`,
    {
      method: "GET",
      headers: {
        "X-Gateway-APIKey": `${process.env.TOKEN_API_PRODUCT}`,
      },
    }
  );

  const products = await productsTab.json();

  let tabIdProduct = [];

  const product = products.data.map((singleProduct) => {
    const identifiant =
      singleProduct.id === undefined ? "NOTHING HERE" : singleProduct.id;
    const labels =
      singleProduct.label === undefined ? "NOTHING HERE" : singleProduct.label;
    tabIdProduct.push(singleProduct.id === "" ? undefined : singleProduct.id);

    return {
      id: identifiant,
      label: labels,
    };
  });

  let positionTab = [];

  const productsPositionTab = await fetch(
    `https://api-gateway.leroymerlin.fr/api-geoproduct/v2/stores/3/products?ids=${tabIdProduct.join(
      ","
    )}`,
    {
      method: "GET",
      headers: {
        "X-Gateway-APIKey": `${process.env.TOKEN_API_GEOPRODUCT}`,
      },
    }
  )
    .then((response) => response.json())
    .then((coordonne) => {
      coordonne.map((info) => {
        info.positions.map((position) => {
          positionTab.push({ id: info.id, x: position.x, y: position.y });
        });
      });
    });

  return {
    props: {
      products: product,
    },
  };
};

export default Map;
