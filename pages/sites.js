import "../styles/bootstrap/less/bootstrap.less";
import "../styles/app.less";

import React from "react";

import Head from "next/head";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

import SiteNav from "../components/Sites/Nav";
// import SiteShots from "../components/Sites/Shots";
// import Info from "../components/Sites/Info";

import projects from "../lib/projects.js";
import groupBy from "lodash/groupBy";

const groups = groupBy(projects, "category");

class About extends React.Component {
  state = {
    category: "morneau",
    site: ""
  };
  handleCategorySelect = category => {
    this.setState({ category });
    console.log("handleCategorySelect", this.state);
  };
  handleSiteSelect = site => {
    this.setState({ site });
    console.log("handleSiteSelect", this.state);
  };
  render() {
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
                category={this.state.category}
                // site={this.state.site}
                // onCategorySelect={this.handleCategorySelect}
                // onSiteSelect={this.handleSiteSelect}
              />
            </Sidebar>
          </div>
          <div className="col-md-5">{/* <SiteShots site={this.state.site} /> */}</div>
          <div className="col-md-3">{/* <Info site={this.state.site} /> */}</div>
        </div>
      </Layout>
    );
  }
}

export default About;
