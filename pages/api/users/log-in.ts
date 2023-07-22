import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@lib/server/withHandler";
import client from "@lib/server/client";
import * as bcrypt from "bcryptjs";
import { withApiSession } from "@lib/server/withSession";

async function handler(req: any, res: NextApiResponse<ResponseType>) {
  const { password, email } = req.body;
  // const hashedPassword = await bcrypt.hash(password, 7);

  // console.log(hashedPassword);
  const user = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    // user이 존제합니다. password 확인 작업을 진행하세요
    const validPassword = await bcrypt.compare(password, user?.password as any);
    /* if (user.password !== hashedPassword) {
      console.log("PASSWORD CHECK", hashedPassword, password);
      return res.json({
        ok: false,
        error: "비밀번호가 같지 않습니다",
      });
    } */
    if (!validPassword) {
      return res.json({
        ok: false,
        error: "Email을 또는 Password를 다시 한번 확인해주세요",
      });
    }
    req.session.user = {
      id: user.id,
    };
    await req.session.save();

    return res.json({
      ok: true,
    });
  } else {
    //  user이 존제하지 않습니다. 닉네임 설정 화면으로 이동시켜 user을 create하세요.

    /* const data = {
      password,
      email,
    };
    const baseURL =
      process.env.NODE_ENV === "production"
        ? "https://your-production-url.com"
        : "http://localhost:3000";

    const response = await fetch(`${baseURL}/api/users/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }); */

    return res.json({
      ok: false,
      error: "Email을 또는 Password를 다시 한번 확인해주세요",
    });
  }

  console.log(user);
  // if (!user) return res.status(400).json({ ok: false });
  return res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: false,
  })
);
