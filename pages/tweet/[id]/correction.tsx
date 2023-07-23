import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import Line from "@components/line";
import TextArea from "@components/Textarea";
import isPrivateFn from "@lib/client/isPrivateFn";
import useMutation from "@lib/client/useMutation";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface ITweet {
  tweet: string;
}

export default function createTweet() {
  const router = useRouter();
  const { id } = router.query;
  isPrivateFn(true);
  const { register, handleSubmit } = useForm<ITweet>();
  const [update, { data, loading }] = useMutation("/api/tweet/correction");
  const onValid = (data: ITweet) => {
    update({ data, id });
  };
  useEffect(() => {
    if (data?.ok === true) {
      console.log(data?.updateTweet?.id);
      router.push(`/tweet/${data?.updateTweet?.id}`); //
    }
  }, [data, router]);

  const backBtnOnClick = () => {
    router.back();
  };
  return (
    <div className="h-screen w-full " style={{ overflowX: "hidden" }}>
      <Head>
        <title>Update Tweet</title>
      </Head>
      <div>
        <h1 className="flex justify-center text-center text-3xl font-bold mt-12">
          Update Tweet
        </h1>
        <button
          onClick={backBtnOnClick}
          className="absolute top-14 left-[22.5rem] "
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <Line />
      </div>
      <form
        onSubmit={handleSubmit(onValid)}
        className=" flex justify-center px-72 flex-col"
      >
        <TextArea
          register={register("tweet", { required: true })}
          name="tweet"
          label="Tweet"
          required
        />
        <Button text={loading ? "Loading" : "Update item"} />
      </form>
    </div>
  );
}
