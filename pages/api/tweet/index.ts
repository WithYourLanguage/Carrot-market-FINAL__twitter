import withHandler from "@lib/server/withHandler";
import { withApiSession } from "@lib/server/withSession";
import { NextApiResponse } from "next";
import client from "@lib/server/client";

async function handler(req: any, res: NextApiResponse) {
  const tweets = await client.tweet.findMany({
    include: {
      user: true,
    },
  });
  
  return res.json({
    ok: true,
    tweets,
  });
}
export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
    isPrivate: true,
  })
);
