import React                                      from 'react'
import { ThemeProvider }                          from 'styled-components'

// COMPONENTS & CONTAINERS
import GlobalStyle                                from '../components/GlobalStyle/GlobalStyle'
import theme                                      from '../components/GlobalStyle/themes/mejuri-pin'



function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}


export default App;
