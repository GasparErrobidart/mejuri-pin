import styled     from 'styled-components';

const StyledButton = styled.div`
  transition: all 300ms ease-in-out;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 10px 30px;
  margin: 10px;
  color: ${({theme})=> theme.colors.darkGray};
  box-shadow: 0px 2px 4px #aaa;
  text-transform: uppercase;
  background: transparent;
  &:hover, &:active{
    box-shadow: 0px 0px 2px #aaa;
    color : ${({theme})=> theme.colors.darkMiddleGray};
    background : ${({theme})=> theme.colors.lightGray};
  }
`

export default StyledButton;
