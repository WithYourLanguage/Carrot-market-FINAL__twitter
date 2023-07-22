import { useRouter } from "next/router";
import useMutation from "./useMutation";
import isPrivateInterface from "./isPrivateInterface";
import { useEffect } from "react";

export default function isPrivateFn(isPrivate: boolean) {
  const router = useRouter();
  const [isPrivateFn, { data }] =
    useMutation<isPrivateInterface>("/api/isPrivate");
  useEffect(() => {
    isPrivateFn({ isPrivate });
  }, []);
  useEffect(() => {
    if (isPrivate === true) {
      if (data?.ok === false) router.replace("/log-in");
    } else {
      if (data?.ok === false) router.replace("/");
    }
  }, [data, router]);
}
