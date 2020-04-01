// DEPENDENCIES
import styled                 from 'styled-components'
import React                  from 'react'
// COMPONENTS
import Container              from './Container'
import Logo                   from './Logo'
//CONTAINERS
import HeartContainer         from '../containers/HeartContainer'


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
    justify-content: start;
  }
  & > *:nth-child(2){
    flex: 1 1 auto;
  }
`


const Header = ({likes}) =>{
  return(
    <header className="main-header">
      <Container>
        <FlexRow>
          <HeartContainer/>
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


export default Header
