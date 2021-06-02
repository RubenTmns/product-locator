import { GetServerSideProps } from "next";
import React from "react";

type Products = {
  id: string;
  label: string;
};

type mapProps = {
  products: Products[];
};

type tabOfProductsType = [
  {
    nameOfProduct: string;
    x: number;
    y: number;
  }
];

const tabOfProducts: tabOfProductsType = [
  {
    nameOfProduct: "Parquet",
    x: 90,
    y: 551,
  },
  {
    nameOfProduct: "Plan de travail",
    x: 1320,
    y: 336,
  },
  {
    nameOfProduct: "Vitrocéramique",
    x: 856,
    y: 312,
  },
  {
    nameOfProduct: "Perceuse",
    x: 1334,
    y: 1318,
  },
];

const Map: React.FC<mapProps> = ({ products }) => {
  console.log(products[1]);
  return (
    <div>
      <h1>PAGE API</h1>
      <div>
        <ul>
          {products.map((product) => {
            return <li>{product.label}</li>;
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

  const product = products.data.map((singleProduct) => {
    const identifiant =
      singleProduct.id === undefined ? "NOTHING HERE" : singleProduct.id;
    const labels =
      singleProduct.label === undefined ? "NOTHING HERE" : singleProduct.label;

    return {
      id: identifiant,
      label: labels,
    };
  });

  const imagesTab = await fetch(
    `https://api-gateway.leroymerlin.fr/api-product/v2/products/11782415/media`,
    {
      method: "GET",
      headers: {
        "X-Gateway-APIKey": `${process.env.TOKEN_API_PRODUCT}`,
      },
    }
  );

  const images = await imagesTab.json();
  console.log(images);

  return {
    props: {
      products: product,
    },
  };
};

export default Map;
