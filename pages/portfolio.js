import "../styles/bootstrap/less/bootstrap.less";
import "../styles/app.less";

import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import SiteNav from "../components/Sites/Nav";
import SiteShots from "../components/Sites/Shots";
import SiteInfo from "../components/Sites/Info";

import projects from "../lib/projects.js";
import groupBy from "lodash/groupBy";
import find from "lodash/find";

const groups = groupBy(projects, "category");

class Portfolio extends React.Component {
  render() {
    const { router } = this.props;
    const { category, site } = router.query;
    const project = find(groups[category], { project: site });
    return (
      <Layout>
        <Head>
          <title>Jean Pierre Blanchette - Portfolio</title>
        </Head>
        <div className="row">
          <div className="col-md-4">
            <Sidebar page="sites">
              <SiteNav sites={groups} category={router.query.category} />
            </Sidebar>
          </div>
          <div className="col-md-5">
            <SiteShots site={project} />
          </div>
          <div className="col-md-3">
            <SiteInfo site={project} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Portfolio);
