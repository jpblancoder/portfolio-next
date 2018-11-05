import "../styles/bootstrap/less/bootstrap.less";
import "../styles/app.less";
import Head from "next/head";
import Layout from "../components/Layout.js";
import Sidebar from "../components/Sidebar.js";
import Intro from "../components/Intro.js";
import Experience from "../components/Experience.js";
import SocialLinks from "../components/SocialLinks.js";
import Hashtags from "../components/Hashtags.js";

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
