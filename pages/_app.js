import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import cookie from "js-cookie";
import theme from "../src/theme";
import Layout from "../src/components/layout";
import { UserProvider } from "../lib/userData";

const isUser = cookie.get("token");

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    // const user = cookie.get("token") ? true : false;
    // this.setState({ token: user });
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { pageProps, Component } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>The Wise Wolf</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* <UserProvider> */}
          {isUser ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
          {/* </UserProvider> */}
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
