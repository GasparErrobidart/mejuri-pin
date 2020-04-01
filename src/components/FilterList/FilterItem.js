import React                from 'react'
import StyledFilterItem     from './StyledFilterItem'
import FilterItemWrapper    from './FilterItemWrapper'
import { FiCheck }          from 'react-icons/fi';

const FilterItem = (props)=>{
  const {children,checked} = props
  let icon = checked ? <FiCheck/> : null
  return(
    <StyledFilterItem {...props}>
      <FilterItemWrapper {...props}>
          <div>
            {icon}
          </div>
          <div>
            {children}
          </div>
      </FilterItemWrapper>
    </StyledFilterItem>
  )
}

export default FilterItem
