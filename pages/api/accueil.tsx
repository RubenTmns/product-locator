import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");

    const pid = request.body.input;

    response.redirect(`/${pid}`);
  } else {
    response.statusCode = 405;
    response.end();
  }
}
