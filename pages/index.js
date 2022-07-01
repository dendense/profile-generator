import Link from "next/link";
import { NextSeo } from "next-seo";

export default function IndexPage() {
  return (
    <>
      <NextSeo
        title="Profile Generator"
        description="Create Your Free Profile Page"
      />
      <div>
        Welcome to Profile Generator. <Link href="/themes">Themes</Link>
      </div>
    </>
  );
}
