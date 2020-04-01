import styled from 'styled-components'

const FilterItemWrapper = styled.div`
  display: flex;
  padding-left: 30px;
  &:hover,&:active{
    border-color: ${({theme})=> theme.colors.middleGray}
  }

  & *{
    transition: all 200ms ease-in;
    color : ${({checked,theme}) => checked ? theme.colors.darkGray : theme.colors.darkMiddleGray}
  }

  & div:first-child{
    overflow: hidden;
    flex: 0 0 ${({checked}) => checked ? "25px" : 0};
    height: 15px;
  }
`

export default FilterItemWrapper
