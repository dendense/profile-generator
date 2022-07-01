import Layout from "../components/Layout";
import { NextSeo } from "next-seo";

export default function ThemesPage() {
  return (
    <Layout>
      <NextSeo title="Themes" description="Curated Themes Made by Fans" />
      <div>Curated Themes</div>
    </Layout>
  );
}
