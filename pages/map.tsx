import { GetServerSideProps } from "next";
import React, { useContext } from "react";
import search from "./api/search";

type Products = {
  id?: any;
  label?: string;
  url?: string;
  x?: any;
  y?: any;
  category?: any;
};

type mapProps = {
  products: Products[];
  search: any;
};

const Map: React.FC<mapProps> = ({ products, search }) => {
  const [productName, setProductsName] = React.useState();
  const [productMedia, setProductsMedia] = React.useState();
  const [oneProduct, setOneProduct] = React.useState<boolean>();

  const [searchedProduct, setSearchedProduct] = React.useState("");

  const userAction = async () => {
    await fetch(`http://localhost:3000/api/search`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((responseApi) => responseApi.json());
  };

  return (
    <div>
      <nav>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          name="searchInput"
          aria-label="Search"
          onChange={(e) => setSearchedProduct(e.target.value)}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={() => userAction()}
        >
          Search
        </button>
      </nav>

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

  let mergedArray = productsList.map((product, i) =>
    Object.assign({}, product, positionTab[i])
  );

  return {
    props: {
      products: mergedArray,
    },
  };
};

export default Map;
