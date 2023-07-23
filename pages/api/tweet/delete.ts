import withHandler from "@lib/server/withHandler";
import { withApiSession } from "@lib/server/withSession";
import { NextApiResponse } from "next";
import client from "@lib/server/client";

async function handler(req: any, res: NextApiResponse) {
  const {
    body: { id, loginUserData },
    session: { user },
  } = req;

  if (loginUserData?.user?.id !== user.id)
    return res.status(401).json({ ok: false });
  await client.tweet.delete({
    where: {
      id: +id,
    },
  });
  return res.json({ ok: true });
}
export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: true,
  })
);
