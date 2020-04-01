import styled from 'styled-components'

const gap = "40px"

const ImageGrid = styled.div`
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(30vh,1fr) );
  grid-gap: ${gap};
  margin: ${gap};
  align-items:flex-start;
  @media (min-width:768px){
    grid-template-columns: repeat( auto-fit, minmax(30vh,50vh) );
  }
`;

export default ImageGrid;
