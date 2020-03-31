import styled                 from 'styled-components'
import React                  from 'react';
import Container              from './Container';
import Logo                   from './Logo';
import { FiHeart }            from 'react-icons/fi';


const FlexRow = styled.div`
  display:flex;
  justify-content: center;
  & > *{
    align-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > *:nth-child(odd){
    flex: 0 0 55px;
  };
  & > *:nth-child(2){
    flex: 1 1 auto;
  };
`



const Header = () =>{
  return(
    <header className="main-header">
      <Container>
        <FlexRow>
          <div>
            <FiHeart/> 3
          </div>
          <div>
            <div>
              <Logo/>
            </div>
          </div>
          <div>

          </div>
        </FlexRow>
      </Container>
    </header>
  )
}

export default Header;
