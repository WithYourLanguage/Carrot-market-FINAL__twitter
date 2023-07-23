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
  isPrivateFn(true);
  const router = useRouter();
  const { register, handleSubmit } = useForm<ITweet>();
  const [create, { data, loading }] = useMutation("/api/tweet/create");
  const onValid = (data: ITweet) => {
    create(data);
  };
  useEffect(() => {
    if (data?.ok === true) {
      router.push(`/tweet/${data?.tweetCreate?.id}`);
    }
  }, [data, router]);
  /* return (
    <Layout canGoBack title="Upload Product">
      <form onSubmit={handleSubmit(onValid)} className="space-y-4 p-4">
        <TextArea
          register={register("tweet", { required: true })}
          name="description"
          label="Description"
          required
        />
        <Button text={1 !== 1 ? "Loading" : "Upload item"} />
      </form>
    </Layout>
  ); */
  const backBtnOnClick = () => {
    router.back();
  };
  return (
    <div className="h-screen w-full " style={{ overflowX: "hidden" }}>
      <Head>
        <title>Create Tweet</title>
      </Head>
      <div>
        <h1 className="flex justify-center text-center text-3xl font-bold mt-12">
          Create Tweet
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
        <Button text={loading ? "Loading" : "Upload item"} />
      </form>
    </div>
  );
}
