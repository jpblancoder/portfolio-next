import "../styles/bootstrap/less/bootstrap.less";
import "../styles/app.less";

import Head from "next/head";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

import Intro from "../components/Sidebar/Intro";
import Experience from "../components/Sidebar/Experience";
import SocialLinks from "../components/Sidebar/SocialLinks";
import Hashtags from "../components/Sidebar/Hashtags";

const About = () => (
  <Layout>
    <Head>
      <title>Jean Pierre Blanchette - About</title>
    </Head>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-4">
        <Sidebar page="index">
          <Intro />
          <Experience />
          <SocialLinks />
          <Hashtags />
        </Sidebar>
      </div>
      <div className="hidden-xs hidden-sm col-md-8 cover-photo">&nbsp;</div>
    </div>
  </Layout>
);

export default About;
