import styled              from 'styled-components'

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap:wrap;
  position:fixed;
  z-index:1;
  top:60px;
  left:0;
  width:100%;
  transition: opacity 300ms ease-in;
  opacity: ${({disabled})=> disabled ? "0.2" : "1.0"};
  @media (min-width:768px){
    position:static;
    top:auto;
    left:auto;
    width:auto;
  }
`

export default FlexColumn
