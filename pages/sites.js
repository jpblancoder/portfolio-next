import "../styles/bootstrap/less/bootstrap.less";
import "../styles/app.less";

import Head from "next/head";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

import SiteNav from "../components/Sites/Nav";
import SiteShots from "../components/Sites/Shots";
import SiteInfo from "../components/Sites/Info";

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
          <SiteNav sites={groups} onCategorySelect="" onSiteSelect="" />
        </Sidebar>
      </div>
      <div className="col-md-5">
        <SiteShots site="" />
      </div>
      <div className="col-md-3">
        <SiteInfo site="" />
      </div>
    </div>
  </Layout>
);

export default About;
