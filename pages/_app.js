import React from "react";
import App, { Container } from "next/app";

import "../styles/bootstrap/less/bootstrap.less";
import "../styles/font-awesome/fa-svg-core-styles.less";
import "../styles/app.less";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
