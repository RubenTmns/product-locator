import { NextApiRequest, NextApiResponse } from "next";

type Products = {
  id?: any;
  label?: string;
  img?: string;
  x?: any;
  y?: any;
  category?: any;
  price?: number;
};

export default async function search(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const search = request.query.q;

    let queryIdProduct = [];
    let positionTab: Products[] = [];
    let productsList: Products[] = [];
    let productsPrice: Products[] = [];

    //PRODUCST-SEARCH
    await fetch(
      `https://api-gateway.leroymerlin.fr/api-product/v2/products/_search?q=${search}&expand=media`,
      {
        method: "GET",
        headers: {
          "X-Gateway-APIKey": `${process.env.TOKEN_API_PRODUCT}`,
        },
      }
    )
      .then((responseApi) => responseApi.json())
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
                img: `${mediaUrl.url === undefined ? "hello" : mediaUrl.url}`,
              });
            }
          });
        });
      });
    ////////// PRICE
    await fetch(
      `https://api-gateway.leroymerlin.fr/api-price/v1/prices?productIds=${queryIdProduct.join(
        ","
      )}&storeId=3`,
      {
        method: "GET",
        headers: {
          "X-Gateway-APIKey": `${process.env.TOKEN_API_PRICE}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        result.data.map((data) => {
          productsPrice.push({ id: data.productId, price: data.price });
        });
      });

    //////// GEOLOCALISATION
    await fetch(
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
          // console.log(data);
          data.positions.map((position) => {
            positionTab.push({
              id: data.id,
              x: position.x,
              y: position.y,
            });
          });
        });
      });
    positionTab.forEach((positionProduct) => {
      const productLabel = productsList.find((product) => {
        return parseInt(product.id) === parseInt(positionProduct.id);
      });
      const productPrice = productsPrice.find((product) => {
        return parseInt(product.id) === parseInt(positionProduct.id);
      });

      positionProduct.label = productLabel.label;
      positionProduct.img = productLabel.img;
      positionProduct.price = productPrice.price;
    });

    response.status(200).json({ positionTab });
  }
}
