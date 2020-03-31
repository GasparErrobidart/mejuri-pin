import styled     from 'styled-components';

const StyledButton = styled.div`
  transition: all 300ms ease-in-out;
  font-size: 1rem;
  font-weight: 300;
  padding: 5px 30px;
  margin: 10px;
  border: 1px solid ${({theme})=> theme.colors.middleGray };
  background: transparent;
  &:hover, &:active{
    color: ${({theme})=> theme.colors.darkGray };
    border: 1px solid ${({theme})=> theme.colors.darkGray };
    background: white;
  }
`

export default StyledButton;
