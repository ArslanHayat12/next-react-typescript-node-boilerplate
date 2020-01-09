import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";

// export const config = { amp: "hybrid" };
const Index = props => (
  <Layout>
    <h1>{JSON.stringify(props.data, null, 3)}</h1>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:8080/app2/task");
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    data
  };
};

export default Index;
