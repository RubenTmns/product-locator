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

type ProductTest = {
  id?: any;
  label?: string;
  url?: string;
  price?: number;
};
const testab: ProductTest[] = [
  {
    id: 1,
    label: "marteau piqueur",
    url: "noImage.png",
    price: 2299,
  },
  {
    id: 2,
    label: "marteau à clous",
    url: "noImage.png",
    price: 1199,
  },
  {
    id: 3,
    label: "marteau sauvage",
    url: "noImage.png",
    price: 899,
  },
  {
    id: 4,
    label: "marteau marteau",
    url: "noImage.png",
    price: 9799,
  },
  {
    id: 5,
    label: "marteau vert",
    url: "noImage.png",
    price: 9499,
  },
  {
    id: 6,
    label: "marteau de Thor",
    url: "noImage.png",
    price: 9999,
  },
  {
    id: 7,
    label: "marteau de Thor",
    url: "noImage.png",
    price: 9999,
  },
  {
    id: 8,
    label: "marteau de Thor",
    url: "noImage.png",
    price: 9999,
  },
  {
    id: 9,
    label: "marteau de Thor",
    url: "noImage.png",
    price: 9999,
  },
];

const HomePage: React.FC<mapProps> = () => {
  const [productName, setProductsName] = React.useState();
  const [productMedia, setProductsMedia] = React.useState();
  const [resolvedProduct, setResolvedProduct] = React.useState<Products[]>([]);
  const [pointeurX, setPointeurX] = React.useState([]);
  const [pointeurY, setPointeurY] = React.useState([]);
  const [productLocate, setProductLocate] = React.useState([]);

  //my List of products
  const [data, setData] = React.useState(categoryObject);

  //************************ */

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

        // let arrayOfProduct = [];
        // result.positionTab.forEach(({ id, label, x, y }) => {
        //   return arrayOfProduct.push({ id: id, label: label, x: x, y: y });
        // });
        // setResolvedProduct(arrayOfProduct);
      });
  };

  React.useEffect(() => {}, [searchedProduct]);

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <a className="btn btn-outline-success me-2" type="button" href="#">
              <div className="bd-highlight">
                <i className="fas fa-store-alt"></i>
              </div>
            </a>
            <a
              className="btn btn-outline-success me-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@getbootstrap"
            >
              <div className=" bd-highlight">
                <i className="far fa-user"></i>
              </div>
            </a>

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
        </div>
      </nav>
      {/* Login page */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center h-100">
                <div className="card">
                  <div className="card-header">
                    <h3>Sign In</h3>
                    <div className="d-flex justify-content-end social_icon">
                      <span>
                        <i className="fab fa-facebook-square"></i>
                      </span>
                      <span>
                        <i className="fab fa-google-plus-square"></i>
                      </span>
                      <span>
                        <i className="fab fa-twitter-square"></i>
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          Password
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                      Don't have an account?<a href="#">Sign Up</a>
                    </div>
                    <div className="d-flex justify-content-center">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fin login page */}

      <div className="image">
        <img
          src="https://m1.lmcdn.fr/media/18/5d0901067eb45f348d8a8c9f/1798045962/map-png-store-3.png"
          alt=""
        />
        {sections.map(({ name }) => {
          return data[name].products?.positionTab?.map((product, index) => {
            return (
              <>
                <div
                  key={index}
                  className={name}
                  style={dotStyle(product.x, product.y)}
                ></div>
                {/* <div className="maman">
                  <h6 key={index}>{product.label}</h6>
                </div> */}
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
            <h4>PRODUcTS</h4>
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
                  {testab.map((product, id) => {
                    return (
                      <div
                        className="card d-flex justify-content-evenly"
                        style={{ width: 500, height: 250 }}
                        key={id}
                      >
                        <div className="card-body">
                          <br />
                          <h4 className="card-title">{product.label}</h4>
                          <br />
                          <img
                            src={product.url}
                            className="card-img-top"
                            alt="my Image"
                            style={{ width: 120, height: 100 }}
                          />
                          <br />
                          <h5 className="card-title">
                            {product.price / 100} €
                          </h5>
                          <a href="#" className="btn btn-primary">
                            Link to Product
                          </a>
                          <br />
                        </div>
                        <br />
                      </div>
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

export const getServerSideProps: GetServerSideProps = async () => {
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

  return {
    props: {},
  };
};
