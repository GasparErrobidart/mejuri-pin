import React                                      from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider }                          from 'styled-components'

// COMPONENTS & CONTAINERS
import GlobalStyle                                from './components/GlobalStyle/GlobalStyle'
import theme                                      from './components/GlobalStyle/themes/mejuri-pin'

// PAGES
import Index                                      from './pages/index'


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
            <Route path="/" component={ Index }   />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
