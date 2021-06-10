import React from "react";
import { GetServerSideProps } from "next";
import { categoryTab, sections, categoryObject } from "../src/data/mag";
import Link from "next/link";
import { useRouter } from "next/router";
type Products = {
  id?: any;
  label?: string;
  url?: string;
  x?: any;
  y?: any;
  category?: any;
  bgColor?: string;
  img?: any;
  price?: number;
};

type mapProps = {
  products: Products[];
  search: any;
};

const HomePage: React.FC<mapProps> = ({ search }) => {
  //const [resolvedProduct, setResolvedProduct] = React.useState<Products[]>([]);

  const [data, setData] = React.useState(categoryObject);

  const [searchedProduct, setSearchedProduct] = React.useState(search);

  const [changeColor, setChangeColor] = React.useState("red");

  const [idProduct, setIdProduct] = React.useState("");

  const router = useRouter();

  const userAction = async (input: any) => {
    await fetch(`/api/search?q=${input}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((responseApi) => responseApi.json())
      .then((result) => {
        result.positionTab.map(({ x, y, label }) => {
          sections.map((category) => {
            if (
              category.left <= x &&
              x <= category.width &&
              category.top <= y &&
              y <= category.height
            ) {
              setData({
                ...categoryObject,
                [category.name]: {
                  ...categoryObject[category.name],
                  products: result,
                },
              });
            }
          });
        });
      });
  };

  const [deleteColor, setDeleteColor] = React.useState("block");

  const dotStyle = (x: number, y: number) => {
    return {
      top: y,
      left: x,
      width: 30,
      height: 30,
      color: "red",
      display: deleteColor,
      "background-color": "red",
      "border-radius": 25,
      animation: "Test 1s infinite",
    };
  };
  const dotStyleOneProduct = (x: number, y: number) => {
    return {
      top: y,
      left: x,
      width: 30,
      height: 30,
      color: "#78BE20",
      "background-color": "#78BE20",
      "border-radius": 25,
      animation: "Test 1s infinite",
    };
  };

  React.useEffect(() => {
    let change = search;
    if (searchedProduct === change) {
      userAction(search);
    }
    if (searchedProduct !== change) {
      change = searchedProduct;
      router.push(`/${change}`);
    }
    setDeleteColor("block");
  }, [searchedProduct]);

  const [point, setPoint] = React.useState(false);

  return (
    <>
      <nav className="notreNav navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Product Locator
          </a>
          <div className=" mabar d-flex">
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
        {/* </div> */}
      </nav>
      {/* Login page */}

      <div className="all container-fluid">
        <div className="row">
          <div className="sidebar col-3">
            <div style={{ height: 1950, width: 400 }}>
              <div>
                <div style={{ width: 16, height: 27 }}>
                  {sections.map(({ name }) => {
                    return data[name].products?.positionTab?.map(
                      (product, index) => {
                        return (
                          <>
                            <div
                              className="card d-flex justify-content-evenly"
                              style={{ width: 330, height: 290 }}
                              key={index}
                            >
                              <div className="card-body">
                                <br />
                                <h4 className="mytitle  card-title">
                                  {product.label}
                                </h4>
                                <br />
                                <div
                                  className="d-flex"
                                  style={{
                                    textAlign: "center",
                                    alignContent: "center",
                                  }}
                                >
                                  <img
                                    src={product.img}
                                    className="card-img-top"
                                    alt="my Image"
                                    style={{ width: 120, height: 100 }}
                                  />
                                  <h5 className="mx-4">
                                    Prix: {product.price + "0"} €
                                  </h5>
                                </div>
                                <br />
                                <div className="d-flex flex-row">
                                  <div>
                                    <a
                                      className="sidebtn btn btn-secondary"
                                      style={{ padding: "0.9rem" }}
                                      href={`https://www.leroymerlin.fr/v3/search/search.do?keyword=${product.id}`}
                                      target="_blank"
                                    >
                                      Voir le produit
                                    </a>
                                  </div>
                                  <div className="mx-3">
                                    <button
                                      onClick={() => {
                                        if (!point) {
                                          {
                                            setPoint(!false);
                                            setIdProduct(product.id);

                                            setDeleteColor("none");
                                          }
                                        } else {
                                          {
                                            setPoint(false);
                                            setIdProduct("");
                                            setDeleteColor("block");
                                          }
                                        }
                                      }}
                                      className="fas fa-crosshairs rounded border border-light"
                                      style={{
                                        padding: "1.2rem",
                                        background: "#78be20",
                                        color: "white",
                                      }}
                                    ></button>
                                  </div>
                                </div>

                                <br />
                              </div>
                              <br />
                            </div>
                          </>
                        );
                      }
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="map col-9">
            <div className="image" style={{ transform: `scale(0.41)` }}>
              <img
                src="https://m1.lmcdn.fr/media/18/5d0901067eb45f348d8a8c9f/1798045962/map-png-store-3.png"
                alt=""
              />
              {sections.map(({ name }) => {
                return data[name].products?.positionTab?.map(
                  (product, index) => {
                    return (
                      <>
                        {product.id === idProduct ? (
                          <div
                            key={index}
                            className={name}
                            style={dotStyleOneProduct(product.x, product.y)}
                          ></div>
                        ) : (
                          <div
                            key={index}
                            className={name}
                            style={dotStyle(product.x, product.y)}
                          ></div>
                        )}
                      </>
                    );
                  }
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      search: context.params.search,
    },
  };
};
