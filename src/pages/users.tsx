import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout";
const Users = props => (
  <Layout>
    <h1>{JSON.stringify(props.data, null, 3)}</h1>
  </Layout>
);

Users.getInitialProps = async function(props) {
  const res = await fetch("http://localhost:8080/app1/user");
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    data
  };
};

export default Users;
