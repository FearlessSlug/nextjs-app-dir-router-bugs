"use client";

import { Url } from "next/dist/shared/lib/router/router";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

export default function RouterTestComp() {
  const router = useRouter();
  const twLink =
    "bg-white bg-opacity-20 p-1 px-2 rounded-xl hover:bg-opacity-40 active:bg-opacity-60 transition";
  const Link = ({
    href,
    children,
    ...props
  }: {
    href: Url;
    children: string;
  }) => (
    <NextLink className={twLink} href={href} {...props}>
      {children}
    </NextLink>
  );

  return (
    <div>
      <div>
        <br />
        <h1 className="text-xl text-center font-bold">{"Link Component:"}</h1>
        <div className="max-w-xl m-auto flex justify-around">
          <Link href="/test1">/test1</Link>
          <Link href="/test2">/test2</Link>
          <Link href="/404-page">/404-page</Link>
        </div>
        <br />
        <h1 className="text-xl text-center font-bold">{"Server Component:"}</h1>
        <div className="max-w-xl m-auto flex justify-around">
          <Link href={{ pathname: "/test3", query: { notFound: true } }}>
            notFound()
          </Link>
          <Link href={{ pathname: "/test3", query: { redirect: true } }}>
            redirect('/404-page')
          </Link>
        </div>
        <br />
        <h1 className="text-xl text-center font-bold">{"useRouter()"}</h1>
        <div className="max-w-2xl m-auto flex justify-around">
          <button className={twLink} onClick={() => router.push("/test1")}>
            router.push("/test1")
          </button>
          <button className={twLink} onClick={() => router.push("/test2")}>
            router.push("/test2")
          </button>
          <button className={twLink} onClick={() => router.push("/404-page")}>
            router.push("/404-page")
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}
