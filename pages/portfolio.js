import "../styles/bootstrap/less/bootstrap.less";
import "../styles/app.less";

import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import SiteNav from "../components/Sites/Nav";
// import SiteShots from "../components/Sites/Shots";
import SiteInfo from "../components/Sites/Info";

import projects from "../lib/projects.js";
import groupBy from "lodash/groupBy";
import find from "lodash/find";

const groups = groupBy(projects, "category");
// console.log("projects", projects);
// console.log("groups", groups);

class Portfolio extends React.Component {
  handleCategorySelect = category => {
    this.setState({ category });
    console.log("handleCategorySelect", this.state);
  };
  handleSiteSelect = site => {
    this.setState({ site });
    console.log("handleSiteSelect", this.state);
  };
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
              <SiteNav
                sites={groups}
                category={router.query.category}
                // site={router.query.site}
                // onCategorySelect={this.handleCategorySelect}
                // onSiteSelect={this.handleSiteSelect}
              />
            </Sidebar>
          </div>
          <div className="col-md-5">{/* <SiteShots site={router.query.site} /> */}</div>
          <div className="col-md-3">
            <SiteInfo site={project} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Portfolio);
