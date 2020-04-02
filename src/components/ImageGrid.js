import styled from 'styled-components'


const ImageGrid = styled.div`
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(20vh,40vh) );
  justify-content:center;
  grid-gap: 20px;
  margin: 30px 10px;
  align-items:flex-start;
  align-content: start;
  & > *{
    align-self: stretch;
  }
  @media (min-width:768px){
    margin: 40px;
    grid-gap: 40px;
  }
`;

export default ImageGrid;
