import React                 from 'react'
import { ThemeProvider }     from 'styled-components'
import { Provider }          from 'react-redux'
import App                   from 'next/app';
import withRedux             from 'next-redux-wrapper';

// COMPONENTS & CONTAINERS
import GlobalStyle           from '../components/GlobalStyle/GlobalStyle'
import theme                 from '../components/GlobalStyle/themes/mejuri-pin'

import {initStore}                 from '../store'



class CustomNextApp extends App {

  static async getInitialProps({Component, ctx}) {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

      //Anything returned here can be accessed by the client
      return {pageProps: pageProps};
  }

  render(){
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const {Component, pageProps, store} = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}


//makeStore function that returns a new store for every request
const makeStore = initStore;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(CustomNextApp);
