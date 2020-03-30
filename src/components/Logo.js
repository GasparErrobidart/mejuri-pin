import React from 'react';
import styled from 'styled-components';


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
      <img src={process.env.PUBLIC_URL + "/mejuri.svg"} alt="Spike Logo"/>
    </LogoWrapper>
  )
}

export default Logo;
