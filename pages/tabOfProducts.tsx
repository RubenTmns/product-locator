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
let Cuisine: Products = [];
let Rangement: Products = [];
let Menuiserie: Products = [];
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
      <div className="image">
        <img
          src="https://m1.lmcdn.fr/media/18/5d0901067eb45f348d8a8c9f/1798045962/map-png-store-3.png"
          alt=""
        />
        <div className="section1">
          {tabOfMerlimontProducts.map((product) => {
            //SOl
            if (
              80 <= product.left &&
              product.left <= 850 &&
              185 <= product.top &&
              product.top <= 605
            ) {
              Sol.push(product);
            }
            //Cuisine
            if (
              850 <= product.left &&
              product.left <= 1335 &&
              185 <= product.top &&
              product.top <= 605
            ) {
              Cuisine.push(product);
            }
            //Rangement
            if (
              1335 <= product.left &&
              product.left <= 1685 &&
              185 <= product.top &&
              product.top <= 605
            ) {
              Rangement.push(product);
            }
            // Menuiserie
            if (
              1685 <= product.left &&
              product.left <= 2315 &&
              185 <= product.top &&
              product.top <= 605
            ) {
              Menuiserie.push(product);
            }
          })}
          {console.log(Sol)}
          {console.log(Cuisine)}
          {console.log(Rangement)}
          {console.log(Menuiserie)}
        </div>
        {Sol.map((product) => {
          return (
            <div
              className="sol"
              style={dotStyle(product.left, product.top)}
              id="clignotant"
            ></div>
          );
        })}

        <div
          className="cuisine"
          style={dotStyle(Cuisine[0].left, Cuisine[0].top)}
          id="clignotant"
        ></div>
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
