import { NextApiRequest, NextApiResponse } from "next";

export default async function search(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const search = request.body.searchInput;

    console.log(search);
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
          return {
            id: product.id,
            label: product.label,
          };
        });

        response.status(200).json({ products });
      });
  }
}
