import styled                   from 'styled-components'

const SidebarLayoutVariant = styled.div`
  display: flex;
  align-items:stretch;
  flex-direction: column;
  @media (min-width: 768px){
    flex-direction: row;
    & > *:first-child{
      flex: 0 0 200px
    }
    & > *:last-child{
      flex-grow: 1
    }
  }
`

export default SidebarLayoutVariant
