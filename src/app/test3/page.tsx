import { notFound, redirect } from "next/navigation";
export default function Page({ searchParams }: any) {
  if (searchParams?.notFound) {
    notFound();
  } else if (searchParams.redirect) {
    redirect("/404-page");
  }

  return <div>Test 3</div>;
}
