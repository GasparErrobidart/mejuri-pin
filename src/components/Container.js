import styled from 'styled-components'

const Container = styled.div`
  padding: 0 ${({gap}) => gap || 20}px;
  box-sizing: border-box;
  width:100%;
`;

export default Container;
