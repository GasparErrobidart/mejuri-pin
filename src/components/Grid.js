import styled from 'styled-components'

const gap = "7px"

const Grid = styled.div`
  display:grid;
  grid-gap: 40px ${gap};
  margin-top: ${gap};
  margin-bottom: ${gap};
  @media (min-width: 768px) {
    grid-gap: ${gap};
    & > *[grid-featured]{
      grid-area: featured;
    }
    grid-template-rows: auto 1fr 1fr ;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "featured featured  ."
      "featured featured  .";
  }
`;

export default Grid;
