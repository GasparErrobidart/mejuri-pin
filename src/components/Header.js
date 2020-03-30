import styled                 from 'styled-components'
import React                  from 'react';
import Container              from './Container';
import Logo                   from './Logo';


const FlexRow = styled.div`
  display:flex;
  align-content: center;
  & > *{
    align-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
          <div></div>
        </FlexRow>
      </Container>
    </header>
  )
}

export default Header;
