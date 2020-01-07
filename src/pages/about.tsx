import React, { useState, useEffect } from "react";
import Layout from "../components/MyLayout";

export default () => {
  const [state, setstate] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/app2/task").then((res: any) =>
      setstate(res.data)
    );
  }, []);
  return (
    <Layout>
      <div onClick={() => setstate("I am in about page")}>Click me</div>
      <div>{state}</div>
    </Layout>
  );
};
