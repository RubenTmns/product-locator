import React from "react";

type Section = {
  top: number;
  left: number;
  width: number;
  height: number;
  name: string;
};

// type Sections = Section[];

// {
//   top: 185,
//   left: 80,
//   width: 770,
//   height: 420,
//   name: "Sol",
// },
// {
//   top: 185,
//   left: 850,
//   width: 485,
//   height: 420,
//   name: "Cuisine",
// },
// {
//   top: 185,
//   left: 1335,
//   width: 350,
//   height: 420,
//   name: "Rangement",
// },
// {
//   top: 185,
//   left: 1685,
//   width: 630,
//   height: 420,
//   name: "Menuiserie",
// },

type Product = {
  top: number;
  left: number;
  width: number;
  height: number;
  name: string;
};
type Products = Product[];
let Sol: Products = [];

const tabOfMerlimontProducts: Products = [
  {
    top: 502,
    left: 90,
    width: 20,
    height: 20,
    name: "carelage",
  },
  {
    top: 527,
    left: 90,
    width: 20,
    height: 20,
    name: "sol en pvc",
  },
  {
    top: 326,
    left: 1274,
    width: 20,
    height: 20,
    name: "poubelle",
  },
  {
    top: 198,
    left: 988,
    width: 20,
    height: 20,
    name: "hotte",
  },
  {
    top: 199,
    left: 1505,
    width: 20,
    height: 20,
    name: "boiteDeRangement",
  },
  {
    top: 199,
    left: 1480,
    width: 20,
    height: 20,
    name: "lotDe4Cintres",
  },
  {
    top: 410,
    left: 2012,
    width: 20,
    height: 20,
    name: "voletRoulant",
  },
];

const tabOfProducts = () => {
  return (
    <>
      <div className="image">
        <img
          src="https://m1.lmcdn.fr/media/18/5d0901067eb45f348d8a8c9f/1798045962/map-png-store-3.png"
          alt=""
        />
        <div className="section1">
          {tabOfMerlimontProducts.map((product) => {
            if (
              80 <= product.left &&
              product.left <= 850 &&
              185 <= product.top &&
              product.top <= 605
            ) {
              return Sol.push(product);
            }
          })}
          {console.log(Sol)}
        </div>
        <div className="section2"></div>
        <div className="section3"></div>
        <div className="section4"></div>
        <div className="section5"></div>
        <div className="section6"></div>
        <div className="section7"></div>
        <div className="section8"></div>
        <div className="section9"></div>
        <div className="section10"></div>
        <div className="section11"></div>
        <div className="section12"></div>
        <div className="section13"></div>
        <div className="section14"></div>
        <div className="section15"></div>
        <div className="section16"></div>
        <div className="section17"></div>
        <div className="section18"></div>
        {/* <div className="carelage"></div>
        <div className="pvc"></div>
        <div className="poubelle"></div>
        <div className="hotte"></div>
        <div className="boiteDeRangement"></div>
        <div className="lotDe4Cintres"></div>
        <div className="voletRoulant"></div> */}
      </div>
    </>
  );
};
export default tabOfProducts;
