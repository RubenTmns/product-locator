import React from "react";
import { GetServerSideProps } from "next";
import { categoryTab, sections, categoryObject } from "../src/data/mag";
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

const HomePage: React.FC<mapProps> = ({ products, search }) => {
  const [productName, setProductsName] = React.useState();
  const [productMedia, setProductsMedia] = React.useState();
  const [resolvedProduct, setResolvedProduct] = React.useState<Products[]>([]);
  const [pointeurX, setPointeurX] = React.useState([]);
  const [pointeurY, setPointeurY] = React.useState([]);

  //let Sol: Products = [];
  const [searchedProduct, setSearchedProduct] = React.useState("");

  const userAction = async (input: any) => {
    await fetch(`/api/search?q=${input}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((responseApi) => responseApi.json())
      .then((result) => {
        let arrayOfProduct = [];
        result.mergedArray.forEach(({ id, label, x, y }) => {
          return arrayOfProduct.push({ id: id, label: label, x: x, y: y });
        });
        setResolvedProduct(arrayOfProduct);
      });
  };

  resolvedProduct.forEach((product) => {
    if (
      905 <= product.x &&
      product.x <= 1555 &&
      645 <= product.y &&
      product.y <= 1015
    ) {
      console.log("JESUISLALALALALANLJND?LJN?JLDNLJDN");

      Object.assign(categoryObject["SalleDeBains"], {
        products: { label: product.label, x: product?.x, y: product?.y },
      });
    }
  });

  const dotStyle = (x: number, y: number) => {
    return {
      top: y,
      left: x,
      width: 30,
      height: 30,
      color: "red",
      "background-color": "#ff0000",
      "border-radius": 25,
    };
  };
  return (
    <>
      {console.log(categoryObject)}
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
          onClick={() => userAction(searchedProduct)}
        >
          Search
        </button>
      </nav>

      <div className="image">
        <img
          src="https://m1.lmcdn.fr/media/18/5d0901067eb45f348d8a8c9f/1798045962/map-png-store-3.png"
          alt=""
        />

        <div className="rangement"></div>
        <div className="menuiserie1"></div>
        <div className="decoration"></div>
        <div className="peinture1"></div>
        <div className="sdb"></div>
        <div className="chauffage"></div>
        <div className="menuiserie2"></div>
        <div className="electricite"></div>
        <div className="plomberie"></div>
        <div className="peinture2"></div>
        <div className="quincaillerie1"></div>
        <div className="outillage"></div>
        <div className="eclairage"></div>
        <div className="quincaillerie2"></div>
        <div className="jardin1"></div>
        <div className="jardin2"></div>
      </div>
    </>
  );
};

export default HomePage;

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
