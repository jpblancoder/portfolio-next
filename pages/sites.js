import "../styles/bootstrap/less/bootstrap.less";
import "../styles/app.less";

import Head from "next/head";
import Layout from "../components/Layout.js";
import Sidebar from "../components/Sidebar.js";

import SiteList from "../components/SiteList.js";
import SiteScreens from "../components/SiteScreens.js";
import SiteInfo from "../components/SiteInfo.js";

import projects from "../lib/projects.js";
import groupBy from "lodash/groupBy";

const groups = groupBy(projects, "category");

const About = () => (
  <Layout>
    <Head>
      <title>Jean Pierre Blanchette - Portfolio</title>
    </Head>
    <div className="row">
      <div className="col-md-4">
        <Sidebar page="sites">
          <SiteList sites={groups} onCategorySelect="" onSiteSelect="" />
        </Sidebar>
      </div>
      <div className="col-md-5">
        <SiteScreens site="" />
      </div>
      <div className="col-md-3">
        <SiteInfo site="" />
      </div>
    </div>
  </Layout>
);

export default About;
