import "../styles/bootstrap/less/bootstrap.less";
import "../styles/app.less";
import Head from "next/head";
import Layout from "../components/Layout.js";
import Sidebar from "../components/Sidebar.js";
import SiteList from "../components/SiteList.js";
import SiteScreens from "../components/SiteScreens.js";
import SiteInfo from "../components/SiteInfo.js";

const About = () => (
  <Layout>
    <Head>
      <title>Jean Pierre Blanchette - Portfolio</title>
    </Head>
    <div className="row">
      <div className="col-md-4">
        <Sidebar page="sites">
          <SiteList />
        </Sidebar>
      </div>
      <div className="col-md-5">
        <SiteScreens />
      </div>
      <div className="col-md-3">
        <SiteInfo />
      </div>
    </div>
  </Layout>
);

export default About;
