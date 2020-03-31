import React                 from 'react'
import { ThemeProvider }     from 'styled-components'
import { Provider }          from 'react-redux'

// COMPONENTS & CONTAINERS
import GlobalStyle           from '../components/GlobalStyle/GlobalStyle'
import theme                 from '../components/GlobalStyle/themes/mejuri-pin'

import store                 from '../store'



function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}


export default App;
