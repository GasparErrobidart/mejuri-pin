// DEPENDENCIES
import styled               from 'styled-components'
import React                from 'react'
import {connect}            from 'react-redux'
import {
  FiChevronDown,
  FiChevronUp,
  FiX
}/*---------------------->*/from 'react-icons/fi';

// COMPONENTS
import Container            from '../components/Container'
import FlexColumn           from '../components/FilterList/FlexColumn'
import FlexRow              from '../components/FilterList/FlexRow'
import RemoveFilterButton   from '../components/FilterList/RemoveFilterButton'
import FilterItem           from '../components/FilterList/FilterItem'
import StyledFilterItem     from '../components/FilterList/StyledFilterItem'
// ACTIONS
import {
  addFilter,
  removeFilter
}/*---------------------->*/from '../actions/filterActions'





class FilterList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      open : typeof window == "object" && window.innerWidth >= 768
    }
    this.toggleList = this.toggleList.bind(this)
    this.clearFilters  = this.clearFilters.bind(this)
  }

  changeFilter(filter){
    let filters = [...this.state.filters]
    filters.find()
  }

  handleClick(filter){
    console.log("Handling click")
    if(!this.isChecked(filter)){
      this.props.addFilter(filter)
    }else{
      this.props.removeFilter(filter)
    }
  }

  toggleList(){
    this.setState(
      (prevState)=>{
        return {...prevState,open : !prevState.open}
      }
    )
  }

  clearFilters(){
    this.props.filter.forEach(
      filter =>{
        this.props.removeFilter(filter)
      }
    )
  }

  isChecked(category){
    return this.props.filter.find( filter => filter.id === category.id)
  }

  renderList(){
    let categories = Object.keys(this.props.categories).map( id => this.props.categories[id] )
    categories.unshift({
      id   : "liked",
      name : "Liked"
    })
    return categories.map(
        (item, i)=> (
          <FilterItem key={item.id} onClick={this.handleClick.bind(this,item)} checked={this.isChecked(item)}>{item.name}</FilterItem>
      )
    )
  }

  render(){
    let filterCount = this.props.filter.length
    let filterDisplay = (
      <StyledFilterItem>
        <Container>
          <FlexRow>
            <div onClick={this.toggleList}>
                Filter {filterCount > 0 ? `(${filterCount})` : null} { this.state.open ? <FiChevronUp/> : <FiChevronDown/> }
            </div>
            { filterCount > 0 && (
              <RemoveFilterButton onClick={this.clearFilters}>
                  <FiX/> Clear filter
              </RemoveFilterButton>
            )}
          </FlexRow>
        </Container>
      </StyledFilterItem>
    )
    return(
      <FlexColumn>
      {filterDisplay}
        { this.state.open &&
          this.renderList()
        }
      </FlexColumn>
    )
  }

}

const mapStateToProps = (state) => {
  return {
      filter : state.filter,
      likes : state.likes,
      categories : state.categories.data,
      products : state.products.data
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      addFilter: (filter) => {
          dispatch(addFilter(filter));
      },
      removeFilter: (filter) => {
          dispatch(removeFilter(filter));
      }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(FilterList);
