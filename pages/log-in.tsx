import Head from "next/head";
import Input from "../components/input";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import useMutation from "@lib/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface LoginForm {
  email: string;
  password: string;
  nickname: string;
}

interface MutationResult {
  ok: boolean;
  error?: string;
  message?: string;
}

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginForm>();
  const [enter, { loading, data }] =
    useMutation<MutationResult>("/api/users/log-in");
  const [join, { loading: joinLoading, data: joinData }] =
    useMutation<MutationResult>("/api/users/join"); // { loading: joinLoading, data: joinData }
  const onValid = (data: any) => {
    console.log(data);
    enter(data);
  };
  const joinOnValid = (data: any) => {
    join(data);
  };
  useEffect(() => {
    if (data?.ok) {
      router.push("/");
    }
  }, [data, router]);
  return (
    <div className="w-full h-screen flex justify-center px-72 flex-col">
      <Head>
        <title>Login</title>
      </Head>
      <h1 className="text-center text-3xl font-bold text-[#f9f9f9]">
        {data?.message ? "트위터 가입 " : "Enter Twitter"}
      </h1>
      <span className="text-center text-gray-400 mt-1 ml-3">
        지금 트위터에 가입해 다른 사람들의 트윗을 보고, 트윗을 작성하세요
      </span>
      <br />
      {data?.message ? (
        <>
          <form
            onSubmit={handleSubmit(joinOnValid)}
            className="flex flex-col mt-3"
          >
            <Input
              type="text"
              name="nickname"
              label="닉네임"
              register={register("nickname", { required: true })}
              required
            />
            <Button
              onClick={onValid}
              text={joinLoading ? "Loading" : "Enter to Twitter"}
            />
          </form>
        </>
      ) : (
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col mt-3">
          <Input
            type="text"
            name="email"
            label="Email"
            register={register("email", { required: true })}
            required
          />

          <Input
            type="password"
            name="password"
            label="Password"
            register={register("password", { required: true })}
            required
          />
          <Button
            onClick={onValid}
            text={loading ? "Loading" : "Enter to Twitter"}
          />
        </form>
      )}
      <span className="text-center text-gray-400 mt-3">
        트위터가 처음이라면?
        <Link href="/create-account"> 계정 생성하기 &rarr;</Link>
      </span>
    </div>
  );
}

/*
https://webgradients.com/
여기서 Input그라데이션 확인 가능

https://nomadcoders.co/community/thread/7804'
여기서 우수 졸업작품 확인 가능
*/
