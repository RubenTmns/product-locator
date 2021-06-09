import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    //response.end(JSON.stringify({ name: "John Doe" }));
    const pid = request.body.input;
    // response.end(`POST: ${pid}`);
    response.redirect(`/${pid}`);
  } else {
    response.statusCode = 405;
    response.end();
  }
}
