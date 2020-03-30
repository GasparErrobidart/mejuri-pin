import styled                 from 'styled-components'
import React                  from 'react';
import Container              from './Container';


const FlexRow = styled.div`
  display:flex;
  justify-content: center;
`

const filterWords = ["Cat1","Cat2","Cat3","Cat4"]

const FilterBar = () =>{
  return(
    <Container>
      <FlexRow>
        {
          filterWords.map( word => (<label>{word}</label>) )
        }
      </FlexRow>
    </Container>
  )
}

export default FilterBar;
