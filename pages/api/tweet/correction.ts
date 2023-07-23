/* import withHandler from "@lib/server/withHandler";
import { withApiSession } from "@lib/server/withSession";
import { NextApiResponse } from "next";
import client from "@lib/server/client";

async function handler(req: any, res: NextApiResponse) {
  const { id, data } = req.body;
  console.log(
    `요청이 정상적으로 들어왔습니다 ID: ${id}, TWEET: `,
    data?.tweet + "",
    data
  );
  const updateTweet = await client.tweet.update({
    where: {
      id: +data?.id,
    },
    data: {
      tweet: data?.tweet,
    },
  });
  console.log("JSON응답으로 TRUE를 보냅니다");
  return res.json({
    ok: true,
    updateTweet,
  });
}
export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: true,
  })
);
 */ import withHandler from "@lib/server/withHandler";
import { withApiSession } from "@lib/server/withSession";
import { NextApiResponse } from "next";
import client from "@lib/server/client";

async function handler(req: any, res: NextApiResponse) {
  const {
    body: { data, id },
    session: { user },
  } = req;

  if (!id || !data?.tweet) {
    console.log("Missing or incorrect data: ", data);
    return res.status(400).json({ ok: false, message: "Invalid data" });
  }
  const tweetUser = await client.tweet.findUnique({
    where: {
      id: +id,
    },
  });

  if (tweetUser?.userId !== user?.id) {
    return res.status(401).json({ ok: false });
  }
  try {
    const updateTweet = await client.tweet.update({
      where: {
        id: +id,
      },
      data: {
        tweet: data?.tweet,
      },
    });

    res.status(200).json({ ok: true, updateTweet });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ ok: false, message: "Internal server error" });
  }
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
    isPrivate: true,
  })
);
