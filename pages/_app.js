import '../styles/globals.css';
import App from 'next/app';
import React from 'react';
import { wrapper } from '../redux/index';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
