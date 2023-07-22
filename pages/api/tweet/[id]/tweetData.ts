import withHandler from "@lib/server/withHandler";
import { withApiSession } from "@lib/server/withSession";
import { NextApiResponse } from "next";
import client from "@lib/server/client";

async function handler(req: any, res: NextApiResponse) {
  const { id } = req.query;
  
  if (isNaN(id)) return res.json({ ok: false });
  const tweet = await client.tweet.findUnique({
    where: {
      id: +id,
    },
    include: {
      user: true,
    },
  });

  return res.json({
    ok: true,
    tweet,
  });
}
export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
    isPrivate: true,
  })
);
