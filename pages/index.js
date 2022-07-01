import Layout from "../components/Layout";
import { NextSeo } from "next-seo";

export default function IndexPage() {
  return (
    <Layout>
      <NextSeo
        title="Profile Generator"
        description="Create Your Free Profile Page"
      />
      <div>Welcome to Profile Generator.</div>
    </Layout>
  );
}
