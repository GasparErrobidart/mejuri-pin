import styled              from 'styled-components'

const FilterListScroll = styled.div`
  overflow-y:scroll;
  max-height:50vh;
  border-top: 1px solid ${({theme})=> theme.colors.lightGray};
  @media (min-width:768px){
    max-height:auto;
    overflow-y:visible;
    border:none;
  }
`

export default FilterListScroll
