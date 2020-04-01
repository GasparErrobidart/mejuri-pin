import styled                   from 'styled-components'

const SidebarLayoutVariant = styled.div`
  display: flex;
  align-items:stretch;
  flex-direction: column;
  @media (min-width: 768px){
    flex-direction: row;
    & > *:first-child{
      padding-top:30px;
      flex: 0 0 250px
    }
    & > *:last-child{
      flex-grow: 1
    }
  }
`

export default SidebarLayoutVariant
