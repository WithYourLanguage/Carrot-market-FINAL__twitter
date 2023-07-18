import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@lib/server/withHandler";
import client from "@lib/server/client";
import * as bcrypt from "bcryptjs";

interface IReceivedData {
  email: string;
  password: string;
  nickname: string;
}

async function handler(req: any, res: NextApiResponse<ResponseType>) {
  const { nickname } = req.body;
  console.log(`nickname value`, nickname);
  const receivedData = req.body as IReceivedData;
  if (!nickname || !receivedData)
    return res.json({ ok: false, error: "다시 시도해주세요" });

  const hashedPassword = await bcrypt.hash(receivedData.password, 7);
  const user = await client.user.create({
    data: {
      name: nickname,
      email: receivedData.email,
      password: hashedPassword,
    },
  });
  if (!user) return res.json({ ok: false, error: "다시 시도해주세요" });
  req.session.user = {
    id: user.id,
  };
  await req.session.save();

  return res.json({
    ok: true,
  });
}

export default withHandler({
  methods: ["POST"],
  handler,
  isPrivate: false,
});
