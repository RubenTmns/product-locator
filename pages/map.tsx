import { GetServerSideProps } from "next";
import React from "react";
import { categoryTab } from "../src/data/mag";
type Products = {
  id?: any;
  label?: string;
  url?: string;
  x?: any;
  y?: any;
};

type mapProps = {
  products: Products[];
};

const Map: React.FC<mapProps> = ({ products }) => {
  console.log(products[1]);
  return (
    <div>
      <h1>PAGE API</h1>
      <div>
        <ul>
          {products.map((product) => {
            return (
              <div>
                <li key={product.id}>{product.label}</li>
                <img width="400px" src={product.url} alt="" />
              </div>
            );
          })}
        </ul>
        {/* <input
          className="form-control me-2"
          name="searchInput"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <a className="btn btn-outline-success" href="/api/search">
          Search
        </a> */}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let queryIdProduct = [];

  let positionTab = [];

  let productsList: Products[] = [];

  const productsTab = await fetch(
    `https://api-gateway.leroymerlin.fr/api-product/v2/products?updatedSince=2021-05-27&expand=media`,
    {
      method: "GET",
      headers: {
        "X-Gateway-APIKey": `${process.env.TOKEN_API_PRODUCT}`,
      },
    }
  )
    .then((response) => response.json())
    .then((products) => {
      products.data.map((productsAll) => {
        queryIdProduct.push(productsAll.id);
        productsAll.media.data.map((mediaUrl) => {
          const product = productsList.find(
            (product) => product.id === productsAll.id
          );
          if (!product) {
            productsList.push({
              id: productsAll.id,
              label: productsAll.label,
              url: `${mediaUrl.url === undefined ? "hello" : mediaUrl.url}`,
            });
          }
        });
      });
    });

  const productsPositionTab = await fetch(
    `https://api-gateway.leroymerlin.fr/api-geoproduct/v2/stores/3/products?ids=${queryIdProduct.join(
      ","
    )}
    `,
    {
      method: "GET",
      headers: {
        "X-Gateway-APIKey": `${process.env.TOKEN_API_GEOPRODUCT}`,
      },
    }
  )
    .then((response) => response.json())
    .then((objectPosition) => {
      objectPosition.map((data) => {
        data.positions.map((position) => {
          positionTab.push({ id: data.id, x: position.x, y: position.y });
        });
      });
    });

  // let mergedArray = productsList.map((product, i) =>
  //   Object.assign({}, product, positionTab[i])
  // );

  let autre = { category: "autre" };

  let mergedArray = productsList.map((product, i) =>
    Object.assign({}, product, positionTab[i])
  );

  console.log(categoryTab);

  let mergeArrayV2 = mergedArray.map((product) => {
    categoryTab.map((category, i) => {
      if (
        category.left <= product.x &&
        product.x <= category.width &&
        category.top <= product.y &&
        product.y <= category.height
      ) {
        return Object.assign({}, product, categoryTab[i].category.name);
      } else {
        return Object.assign({}, product, autre);
      }
    });
  });
  console.log(mergeArrayV2);

  return {
    props: {
      products: mergedArray,
    },
  };
};

export default Map;
