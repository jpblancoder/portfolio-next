import "../styles/bootstrap/less/bootstrap.less";
import "../styles/app.less";

import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Jean Pierre Blanchette - Portfolio</title>
    </Head>
    <p>Hello Next.js</p>
    <h1 className="sidebar-title">Jean Pierre Blanchette</h1>
    <a className="btn btn-primary" href="#/">
      <i className="fa fa-lg fa-android" aria-hidden="true" /> <strong>About</strong>
    </a>
  </div>
);

export default Index;
