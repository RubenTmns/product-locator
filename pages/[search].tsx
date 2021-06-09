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
  bgColor?: string;
};

type mapProps = {
  products: Products[];
  search: any;
};

const HomePage: React.FC<mapProps> = ({ search }) => {
  const [resolvedProduct, setResolvedProduct] = React.useState<Products[]>([]);
  console.log(search.search);

  const [data, setData] = React.useState(categoryObject);

  const [searchedProduct, setSearchedProduct] = React.useState(search.search);

  const [changeColor, setChangeColor] = React.useState("red");

  const [idProduct, setIdProduct] = React.useState("");

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

  const dotStyle = (x: number, y: number) => {
    return {
      top: y,
      left: x,
      width: 30,
      height: 30,
      color: "red",
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
      color: "blue",
      "background-color": "blue",
      "border-radius": 25,
      animation: "Test 1s infinite",
    };
  };
  const imageScale = () => {
    return {
      transform: "scale(1.0056646525679758)",
    };
  };
  return (
    <>
      <nav className="notreNav navbar navbar-expand-lg navbar-light  h-4 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Product Locator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <div className="d-flex ">
              <input
                className="form-control me-2 "
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
        </div>
      </nav>
      <div className="py-3 mb-3 border-bottom">
        <div className="container-fluid d-grid gap-3 align-items-center">
          <div className="d-flex align-items-center">
            <form className="w-100 me-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Fin login page */}

      <div className="image" style={{ transform: `scale(0.5438066465256798)` }}>
        <img
          src="https://m1.lmcdn.fr/media/18/5d0901067eb45f348d8a8c9f/1798045962/map-png-store-3.png"
          alt=""
        />
        {sections.map(({ name }) => {
          return data[name].products?.positionTab?.map((product, index) => {
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
          });
        })}

        <div className="liste">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <h4>PRODUCTS</h4>
          </button>
          <div
            className="offcanvas offcanvas-start"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
            style={{ height: 1950, width: 600 }}
          >
            <div className="offcanvas-header">
              <h3 className="offcanvas-title" id="offcanvasExampleLabel">
                Product Locator
              </h3>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="col-xl-auto">
                <div className="col-xl-auto" style={{ width: 16, height: 27 }}>
                  {sections.map(({ name }) => {
                    return data[name].products?.positionTab?.map(
                      (product, index) => {
                        return (
                          <>
                            <div
                              className="card d-flex justify-content-evenly"
                              style={{ width: 500, height: 270 }}
                              key={index}
                            >
                              <div className="card-body">
                                <br />
                                <h4 className="card-title">{product.label}</h4>
                                <br />
                                <img
                                  src={product.img}
                                  className="card-img-top"
                                  alt="my Image"
                                  style={{ width: 120, height: 100 }}
                                />
                                <br />
                                <h5 className="card-title">
                                  {product.price + "0"} €
                                </h5>
                                <button
                                  className="btn btn-primary"
                                  onClick={(e) => setIdProduct(product.id)}
                                  value={product.id}
                                >
                                  Afficher ce produit sur la carte
                                </button>

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
        </div>
      </div>
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  /////////////////////////////////////////////////////////////////////
  //                            GET ALL STORES                       //
  ////////////////////////////////////////////////////////////////////
  await fetch(`https://api-gateway.leroymerlin.fr/api-stock/v1/stores/all`, {
    method: "GET",
    headers: {
      "X-Gateway-APIKey": `${process.env.TOKEN_API_STOCK}`,
    },
  })
    .then((response) => response.json())
    .then((stores) => {
      //console.log(stores);
    });

  ///////////////////////////////////////////////////////////////////////
  //        GET PRODUCTS LOCALISATION IN STORE                      //
  ///////////////////////////////////////////////////////////////////

  await fetch(` https://api-gateway.leroymerlin.fr/api-geoproduct/v2/stores/`, {
    method: "GET",
    headers: {
      "X-Gateway-APIKey": `${process.env.TOKEN_API_GEOPRODUCT}`,
    },
  })
    .then((response) => response.json())
    .then((stores) => {
      // console.log(stores);
    });
  console.log(context.params);

  return {
    props: {
      search: context.params,
    },
  };
};
