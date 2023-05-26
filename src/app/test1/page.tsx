"use client";

import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1 className="text-xl font-bold">Client component - test 1</h1>
      <Link className="underline" href={{ query: { test: "test123" } }}>
        Test 1
      </Link>
      <br />
      <Link
        className="underline"
        href={{ pathname: "/test3", query: { test: "test123" } }}
      >
        Test 2
      </Link>
    </div>
  );
}