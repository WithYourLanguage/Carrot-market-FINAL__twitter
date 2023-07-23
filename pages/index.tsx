import FloatingButton from "@components/FloatingButton";
import Line from "@components/line";
import isPrivateFn from "@lib/client/isPrivateFn";
import isPrivateInterface from "@lib/client/isPrivateInterface";
import useMutation from "@lib/client/useMutation";
import { Tweet, User } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";

interface ExtendedTweet extends Tweet {
  user: User;
}

interface tweetResponse {
  ok: boolean;
  tweets: ExtendedTweet[];
  user: User;
}

export default function Index() {
  /*
  이 코드는 넘어갔을 시 더보기를 표시하기 위해 작성한 chatgpt의 코드입니다(일부 수정) 
  const divRef = useRef(null);
  const pRef = useRef(null);

  const [newHtml, setNewHtml] = useState<any | null | undefined>("");
  const [isContentOverflow, setIsContentOverflow] = useState(false);
  useEffect(() => {
    const textElement = divRef?.current as any;
    const maxHeight = textElement?.clientHeight;
    const isContentOverflowing = textElement?.scrollHeight > maxHeight;
    setIsContentOverflow(isContentOverflowing);
    removeLastLine(pRef);
  }, []);
  const removeLastLine = (html: any) => {
    if (typeof html === "string") {
      const lines = html?.split("<br />"); // 줄을 <br> 태그에 따라 분리
      lines.pop(); // 배열의 마지막 요소를 제거
      const newHTMLConst = lines.join("<br />"); // 줄 배열을 원래 문자열로 다시 결합
      setNewHtml(newHTMLConst);
      if (pRef.current) {
        pRef.current.innerHTML = newHTML;
      }
    }
  }; */
  const router = useRouter();
  isPrivateFn(true);
  const { data } = useSWR<tweetResponse>("/api/tweet");
  useEffect(() => {}, [data]);

  return (
    <div
      className=" w-full flex flex-col justify-center "
      style={{ overflowX: "hidden" }}
    >
      <div>
        <h1 className="text-center text-3xl font-bold mt-12">Home</h1>
        <Line />
      </div>
      <div
        className="flex w-[100vw] justify-center"
        style={{ overflowX: "hidden" }}
      >
        <div className="grid gap-4 w-[34rem]">
          {data?.tweets?.map((tweet) => (
            <Link href={`/tweet/${tweet?.id}`}>
              <div className=" transition-all cursor-pointer flex flex-col h-64 border border-gray-800 hover:border-blue-300 rounded-lg items-stretch overflow-hidden">
                <div className="mt-3 ml-3 flex items-start">
                  <div className="rounded-full bg-gray-200 w-12 h-12 " />
                  <h3 className="text-xl font-medium ml-4 mt-2">
                    {tweet?.user?.name}
                  </h3>
                </div>
                <p className="m-4">{tweet.tweet}</p>
              </div>
            </Link>
          ))}
        </div>
        <FloatingButton href="/tweet/create">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </div>
  );
}
