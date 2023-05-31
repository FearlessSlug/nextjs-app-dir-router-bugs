"use client";

import { useRouter } from "next/navigation";
import ServerTestComp from "./ServerTestComp";

export default function RouterTestComp() {
  const router = useRouter();
  const twLink =
    "bg-white bg-opacity-20 p-1 px-2 rounded-xl hover:bg-opacity-40 active:bg-opacity-60 transition";

  return (
    <div>
      <div>
        <br />
        {/* @ts-expect-error Async Server Component */}
        <ServerTestComp />
        <br />
        <h1 className="text-xl text-center font-bold">{"useRouter()"}</h1>
        <div className="max-w-2xl m-auto flex justify-around">
          <button className={twLink} onClick={() => router.push("/test1")}>
            router.push(&quot;/test1&quot;)
          </button>
          <button className={twLink} onClick={() => router.push("/test2")}>
            router.push(&quot;/test2&quot;)
          </button>
          <button className={twLink} onClick={() => router.push("/404-page")}>
            router.push(&quot;/404-page&quot;)
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}
