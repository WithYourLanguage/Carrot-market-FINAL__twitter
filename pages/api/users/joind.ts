import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@lib/server/withHandler";
import client from "@lib/server/client";
import * as bcrypt from "bcryptjs";

async function handler(req: any, res: NextApiResponse<ResponseType>) {
  const { password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 7);
  // const user = email ? { email } : { email };
  const user = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    // user이 존제합니다. USER가입 페이지로 이동시키세요
    console.log("USER EXISTS");
  } else {
    //  user이 존제하지 않습니다. 닉네임 설정 화면으로 이동시켜 user을 create하세요.
    const data = {
      password,
      email,
    };
    const baseURL =
      process.env.NODE_ENV === "production"
        ? "https://your-production-url.com"
        : "http://localhost:3000";

    const response = await fetch(`${baseURL}/api/users/join-nickname`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(response);
    return res.json({
      ok: true,
      message: "user not found",
    });
  }

  console.log(user);
  // if (!user) return res.status(400).json({ ok: false });
  return res.json({
    ok: true,
  });
}

export default withHandler({
  methods: ["POST"],
  handler,
  isPrivate: false,
});
