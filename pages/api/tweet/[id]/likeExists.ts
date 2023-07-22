import withHandler from "@lib/server/withHandler";
import { withApiSession } from "@lib/server/withSession";
import { NextApiResponse } from "next";
import client from "@lib/server/client";

async function handler(req: any, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;

  if (isNaN(id)) return res.json({ ok: false });

  const favExists = await client.fav.findFirst({
    where: {
      tweetId: Number(id),
      user,
    },
  });

  return res.json({
    ok: true,
    favExists,
  });
}
export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
    isPrivate: true,
  })
);
