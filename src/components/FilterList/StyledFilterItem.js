import styled      from 'styled-components'

const StyledFilterItem = styled.div`
  background: white;
  padding: 15px 0;
  border-top:1px solid ${({theme})=> theme.colors.lightGray};
  cursor : ${({clickeableBlock}) => clickeableBlock ? "pointer" : "default"};
  @media (min-width:768px){
    background:none;
  }
`

export default StyledFilterItem
