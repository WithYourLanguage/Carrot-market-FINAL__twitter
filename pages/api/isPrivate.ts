import withHandler from "@lib/server/withHandler";
import { withApiSession } from "@lib/server/withSession";
import { NextApiResponse } from "next";

async function handler(req: any, res: NextApiResponse) {
  const { isPrivate } = req.body;
  if (isPrivate === true) {
    if (!req?.session?.user) {
      return res.json({ ok: false, error: "Not login" });
    } else {
      return res.json({ ok: true });
    }
  } else {
    if (req?.session?.user) {
      return res.json({ ok: false, error: "Login" });
    } else {
      return res.json({ ok: true });
    }
  }
}
export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
