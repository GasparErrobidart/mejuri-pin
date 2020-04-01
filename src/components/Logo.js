import React    from 'react'
import styled   from 'styled-components'

const LogoWrapper = styled.div`
  height: 50px;
  padding: 5px 0;
  & > img{
    height: 100%;
    width: auto;
  }
`;

const Logo = ()=>{
  return(
    <LogoWrapper>
      <img src="/mejuri.svg" alt="Mejuri Logo"/>
    </LogoWrapper>
  )
}

export default Logo;
