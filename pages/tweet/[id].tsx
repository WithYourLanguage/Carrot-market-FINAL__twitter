import isPrivateFn from "@lib/client/isPrivateFn";
import { Tweet, User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import Link from "next/link";
import Line from "@components/line";
import useMutation from "@lib/client/useMutation";
import { cls } from "@lib/client/utils";

/* interface ExtendedTweet extends Tweet {
  user: User;
}

interface tweetResponse {
  ok: boolean;
  tweet: ExtendedTweet;
} */

export default function tweetDetail() {
  const router = useRouter();
  const { id } = router.query;

  isPrivateFn(true);
  const { data } = useSWR(`/api/tweet/${Number(id)}/tweetData`);
  const { data: likeExistsData } = useSWR(`/api/tweet/${id}/likeExists`);
  const [fav, { data: favData }] = useMutation(`/api/tweet/${id}/like`);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const onLikeClick = () => {
    if (!data) return;

    mutate(
      `/api/tweet/${id}/likeExists`,
      (prev: any) => prev && { ...prev, favExists: !prev.favExists },
      false
    );
    fav({ id });
  };

  useEffect(() => {
    console.log(favData, "FAV DATA");
  }, [favData]);
  useEffect(() => {
    console.log(likeExistsData, "likeExistsData");
  }, [likeExistsData]);
  /* return (
    <div className="h-screen w-full flex flex-col justify-center">
      <div className="flex w-[100vw] justify-center">
        <div className="transition-all cursor-pointer flex flex-col h-64 border border-gray-800 hover:border-blue-300 rounded-lg items-stretch overflow-hidden">
          <div className="mt-3 ml-3 flex items-start">
            <div className="rounded-full bg-gray-200 w-12 h-12" />
            <h3 className="text-xl font-medium ml-4 mt-2">
              {data?.tweet?.user?.name}
            </h3>
          </div>
          <p className="m-4">{data?.tweet?.tweet}</p>
        </div>
      </div>
    </div>
  ); */
  return (
    <div
      className="h-screen w-full flex flex-col justify-center "
      style={{ overflowX: "hidden" }}
    >
      <div>
        <h1 className="text-center text-3xl font-bold mt-12">Tweet</h1>
        <Line />
      </div>
      <div className="flex w-[100vw] justify-center">
        <div className="grid gap-4 w-[34rem]">
          <div className="relative transition-all cursor-pointer flex flex-col h-72 border border-gray-800 hover:border-blue-300 rounded-lg items-stretch overflow-hidden">
            <div className="mt-3 ml-3 flex items-start">
              <div className="rounded-full bg-gray-200 w-12 h-12 " />
              <h3 className="text-xl font-medium ml-4 mt-2">
                {data?.tweet?.user?.name}
              </h3>
            </div>
            <p className="m-4">{data?.tweet?.tweet}</p>
            <span className="text-white">
              {likeExistsData?.favExists ? (
                <svg
                  className={cls(
                    "w-6 h-6 absolute bottom-0 right-0 m-4 fill-red-500"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onLikeClick}
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  onClick={onLikeClick}
                  className={cls("w-6 h-6 absolute bottom-0 right-0 m-4")}
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
