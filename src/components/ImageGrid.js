import styled from 'styled-components'

const gap = "40px"

const ImageGrid = styled.div`
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(30vh,40vh) );
  justify-content:center;
  grid-gap: ${gap};
  margin: ${gap};
  align-items:flex-start;
  align-content: start;
  & > *{
    align-self: stretch;
  }
`;

export default ImageGrid;
