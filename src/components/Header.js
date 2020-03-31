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
    justify-content: start;
  };
  & > *:nth-child(2){
    flex: 1 1 auto;
  };
`

const HeartContainer = styled.div`
  font-family: ${({theme})=> theme.fonts.blockTextFamily};
  font-size: 30px;
  text-align: left;
  position: relative;
  & > span{
    position: absolute;
    font-size: 12px;
    display: inline-block;
    padding: 2px;
    font-weight: 400;
    margin-left: 22px;
    margin-top: 10px;
    text-align: center;
    border-radius: 2px;
    background: ${({theme})=> theme.colors.darkMiddleGray};
    color: white;
    left: 0;
    top:0;
  }
`



const Header = () =>{
  return(
    <header className="main-header">
      <Container>
        <FlexRow>
          <HeartContainer>
            <FiHeart/><span>3</span>
          </HeartContainer>
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
