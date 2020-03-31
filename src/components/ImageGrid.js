import styled from 'styled-components'

const gap = "40px"

const ImageGrid = styled.div`
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(200px,1fr) );
  grid-gap: ${gap};
  margin-top: ${gap};
  margin-bottom: ${gap};
`;

export default ImageGrid;
