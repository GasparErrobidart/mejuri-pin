import styled                 from 'styled-components'
import React                  from 'react';
import Container              from './Container';
import Logo                   from './Logo';


const FlexRow = styled.div`
  display:flex;
  justify-content: center;
`



const Header = () =>{
  return(
    <header className="main-header">
      <Container>
        <FlexRow>
          <div>
            <div>
              <Logo/>
            </div>
          </div>
        </FlexRow>
      </Container>
    </header>
  )
}

export default Header;
