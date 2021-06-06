import { NextApiRequest, NextApiResponse } from "next";

type Products = {
  id?: any;
  label?: string;
  url?: string;
  x?: any;
  y?: any;
  category?: any;
};

export default async function search(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const search = request.query.q;

    //console.log("QUERY", search);
    let queryIdProduct = [];
    let positionTab: Products[] = [];
    let productsList: Products[] = [];

    //a verifierrrrrrrrrrrrrrrrrrrrrrrrr
    await fetch(
      `https://api-gateway.leroymerlin.fr/api-product/v2/products/_search?q=${search}`,
      {
        method: "GET",
        headers: {
          "X-Gateway-APIKey": `${process.env.TOKEN_API_PRODUCT}`,
        },
      }
    )
      .then((responseApi) => responseApi.json())
      .then((result) => {
        result.data.map((product) => {
          queryIdProduct.push(product.id);
          productsList.push({ id: product.id, label: product.label });
          return;
        });
      });
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
      positionProduct.label = productLabel.label;
    });

    //console.log(positionTab);

    // let mergedArray = productsList.map((product, i) =>
    //   Object.assign({}, product, positionTab[i])
    // );
    //console.log("POSTIONT", mergedArray);

    //fin verificationnnnnnnnnnnnnnnnnnn

    response.status(200).json({ positionTab });
  }
}
