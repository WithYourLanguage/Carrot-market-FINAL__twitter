/* import useMutation from "@lib/client/useMutation";
import withHandler from "@lib/server/withHandler";
import { withApiSession } from "@lib/server/withSession";
import { NextApiResponse } from "next";
import { useEffect } from "react";

/* async function handler(req: any, res: NextApiResponse) {
  console.log("요청OK");

  const { data, fetchUrl } = req.body;
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://your-production-url.com"
      : "http://localhost:3000";
  await fetch(`${baseURL}${fetchUrl}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json({ ok: true });
} */
/* async function handler(req: any, res: NextApiResponse) {
  console.log("요청OK");

  const { data, fetchUrl } = req.body;
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://your-production-url.com"
      : "http://localhost:3000";

  try {
    const response = await fetch(`${baseURL}${fetchUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return res.status(response.status).json({
        ok: false,
        message: `An error occurred: ${response.statusText}`,
      });
    }

    const result = await response.json();
    res.status(200).json({ ok: true, result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ ok: false, message: "Internal server error" });
  }
}
  
export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: true,
  })
);
 */
