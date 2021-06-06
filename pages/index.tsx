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

const HomePage: React.FC<mapProps> = () => {
  const [productName, setProductsName] = React.useState();
  const [productMedia, setProductsMedia] = React.useState();
  const [resolvedProduct, setResolvedProduct] = React.useState<Products[]>([]);
  const [pointeurX, setPointeurX] = React.useState([]);
  const [pointeurY, setPointeurY] = React.useState([]);

  const [searchedProduct, setSearchedProduct] = React.useState("");

  React.useEffect(() => {}, []);

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
        result.positionTab.forEach(({ id, label, x, y }) => {
          return arrayOfProduct.push({ id: id, label: label, x: x, y: y });
        });
        setResolvedProduct(arrayOfProduct);
      });
  };

  resolvedProduct.forEach((product) => {
    sections.map((category) => {
      if (
        category.left <= product.x &&
        product.x <= category.width &&
        category.top <= product.y &&
        product.y <= category.height
      ) {
        categoryObject[`${category.name}`].products.push({
          label: product.label,
          x: product.x,
          y: product.y,
        });
      }
    });
  });
  //console.log(categoryObject);

  const dotStyle = (x: number, y: number) => {
    return {
      top: y,
      left: x,
      width: 30,
      height: 30,
      color: "red",
      "background-color": "#ff0000",
      "border-radius": 25,
      animation: "Test 1s infinite",
    };
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <div className="d-flex">
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
          </div>
        </div>
      </nav>

      <div className="image">
        <img
          src="https://m1.lmcdn.fr/media/18/5d0901067eb45f348d8a8c9f/1798045962/map-png-store-3.png"
          alt=""
        />
        {categoryObject["Sol"].products.map((product, index) => {
          return (
            <div
              key={product.id}
              className="sol"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Rangement"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="rangement"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Menuiserie"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="menuiserie1"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["MenuiserieDeux"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="menuiserie2"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Decoration"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="decoration"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Peinture"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="peinture1"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["PeintureDeux"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="peinture2"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["SalleDeBains"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="sdb"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Chauffage"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="chauffage"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Electricite"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="electricite"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Plomberie"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="plomberie"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Quincaillerie"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="quincaillerie1"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["QuincaillerieDeux"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="quincaillerie2"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}

        {categoryObject["Outillage"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="outillage"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Eclairage"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="eclairage"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Jardin"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="jardin1"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
        {categoryObject["Jardin2"].products.map((product) => {
          return (
            <div
              key={product.id}
              className="jardin2"
              style={dotStyle(product.x, product.y)}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
