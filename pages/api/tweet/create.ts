import withHandler from "@lib/server/withHandler";
import { withApiSession } from "@lib/server/withSession";
import { NextApiResponse } from "next";
import client from "@lib/server/client";

async function handler(req: any, res: NextApiResponse) {
  const {
    body: { tweet },
    session: { user },
  } = req;
  if (!tweet)
    return res.json({ ok: false, error: "Tweet data를 받아오지 못했습니다" });
  const tweetCreate = await client.tweet.create({
    data: {
      tweet,
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });

  return res.json({
    ok: true,
    tweetCreate,
  });
}
export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: true,
  })
);
