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
  const [loginUser, { data: loginUserData }] = useMutation(
    "/api/users/loginUser"
  );
  const [deleteTweet, { data: deleteData, loading: deleteLoading }] =
    useMutation(`/api/tweet/delete`);

  useEffect(() => {
    if (!data?.tweet) router.replace("/");
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
    loginUser({ 1: 1 }); // 보내는 데이터 필요 없음
  }, []);
  const onDeleteClick = () => {
    // delete하는 api호출
    deleteTweet({ id, loginUserData });
  };

  useEffect(() => {
    if (!deleteData?.ok) return;
    router.replace("/");
  }, [deleteData]);
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

            <span className="text-white ">
              {data?.tweet?.user?.id === loginUserData?.user?.id ? (
                deleteLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={cls(
                      "w-6 h-6 absolute bottom-0 right-7 m-4 fill-red-500 transition-all"
                    )}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={cls("w-6 h-6 absolute bottom-0 right-7 m-4")}
                    onClick={onDeleteClick}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                )
              ) : null}
              {data?.tweet?.user?.id === loginUserData?.user?.id ? (
                <Link href={`/tweet/${id}/correction`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={cls("w-6 h-6 absolute bottom-0 right-0 m-4")}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </Link>
              ) : null}
              {likeExistsData?.favExists ? (
                <svg
                  className={cls(
                    data?.tweet?.user?.id === loginUserData?.user?.id
                      ? "w-6 h-6 absolute bottom-0 right-14 m-4 fill-red-500"
                      : "w-6 h-6 absolute bottom-0 right-0 m-4 fill-red-500"
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
                  className={cls(
                    data?.tweet?.user?.id === loginUserData?.user?.id
                      ? "w-6 h-6 absolute bottom-0 right-14 m-4"
                      : "w-6 h-6 absolute bottom-0 right-0 m-4"
                  )}
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
