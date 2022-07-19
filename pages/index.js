import Layout from "../components/Layout";

export default function IndexPage() {
  return (
    <Layout
      title="🔖 Profile Generator"
      description="Create Your Free Profile Page"
    >
      <div className="card" style={{ width: "18rem" }}>
        Picture Profile
      </div>
      <div>Short Bio</div>
      <div>Social Links</div>
      <div>Showcase</div>
    </Layout>
  );
}
