import styled              from 'styled-components'

const FlexRow = styled.div`
  display: flex;
  & > *:first-child{
    flex-grow:1;
  }
`

export default FlexRow
