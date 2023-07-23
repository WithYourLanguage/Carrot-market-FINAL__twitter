import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@lib/server/withHandler";
import client from "@lib/server/client";
import * as bcrypt from "bcryptjs";
import { withApiSession } from "@lib/server/withSession";

async function handler(req: any, res: NextApiResponse<ResponseType>) {
  const user = await req.session.user;
  return res.json({
    ok: true,
    user,
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: true,
  })
);
