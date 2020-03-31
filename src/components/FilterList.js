import styled              from 'styled-components'
import React               from 'react'
import {connect}           from 'react-redux'
import { FiCheck }         from 'react-icons/fi';

import { setFilter }       from '../actions/filterActions'

const FlexColumn = styled.div`
  margin: 40px 0 0 0 ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap:wrap;
`

const FilterItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  border:1px solid ${({theme})=> theme.colors.lightGray};
  background: white;

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

const FilterItem = (props)=>{
  const {children,checked} = props
  let icon = checked ? <FiCheck/> : null
  return(
    <FilterItemWrapper {...props}>
      <div>
        {icon}
      </div>
      <div>
        {children}
      </div>
    </FilterItemWrapper>
  )
}


class FilterList extends React.Component{

  constructor(props){
    super(props)
  }

  changeFilter(filter){
    let filters = [...this.state.filters]
    filters.find()
  }

  handleClick(filter){
    console.log("Handling click",filter)
    this.props.setFilter(filter.id,!filter.checked)
  }

  render(){
    return(
      <FlexColumn>
        {
          this.props.filter.map(
              (item, i)=> (
                <FilterItem key={item.id} onClick={this.handleClick.bind(this,item)} checked={item.checked}>{item.word}</FilterItem>
            )
          )
        }
      </FlexColumn>
    )
  }

}


const mapStateToProps = (state) => {
  return {
      filter : state.filter
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (id,checked) => {
            dispatch(setFilter(id,checked));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(FilterList);
