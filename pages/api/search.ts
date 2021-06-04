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

    console.log("QUERY", search);
    let queryIdProduct = [];
    let positionTab = [];
    let productsList: Products[] = [];
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
        const products = result.data.map((product) => {
          queryIdProduct.push(product.id);
          productsList.push({ id: product.id, label: product.label });
          return {
            id: product.id,
            label: product.label,
          };
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
    let mergedArray = productsList.map((product, i) =>
      Object.assign({}, product, positionTab[i])
    );
    console.log("POSTIONT", mergedArray);
    response.status(200).json({ mergedArray });
  }
}
