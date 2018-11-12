import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Intro from "../components/Sidebar/Intro";
import Experience from "../components/Sidebar/Experience";
import SocialLinks from "../components/Sidebar/SocialLinks";
import Hashtags from "../components/Sidebar/Hashtags";

class About extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Jean Pierre Blanchette - About</title>
        </Head>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4">
            <Sidebar page="index">
              <Intro />
              <Experience />
              <SocialLinks />
              <Hashtags />
            </Sidebar>
          </div>
          <div className="d-none d-sm-none d-md-block col-md-8 cover-photo">&nbsp;</div>
        </div>
      </Layout>
    );
  }
}

export default About;
