import React       from 'react';
import Container   from './Container';
import Header      from './Header';

const Layout = ({children}) =>{
  return(
    <React.Fragment>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <footer className="main-footer">
          <Container>
          </Container>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout;
