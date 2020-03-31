// DEPENDENCIES
import React            from 'react'
import styled           from 'styled-components'
import fetch            from 'isomorphic-unfetch'
import {connect}        from 'react-redux'
// COMPONENTS
import Layout           from '../components/Layout'
import Container        from '../components/Container'
import ImageGrid        from '../components/ImageGrid'
import ItemBox          from '../components/ItemBox'
// CONTAINERS
import FilterList       from '../containers/FilterList'
// ACTIONS
import { addCategory }  from '../actions/categoriesActions'
import { addProduct }   from '../actions/productsActions'


const SidebarLayoutVariant = styled.div`
  display: flex;
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


class Index extends React.Component{

  constructor(props){
    super(props)
    this.state = {categories : []}
  }

  async componentDidMount(){
    const res = await fetch('http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/shop_all.json');
    const data = await res.json();

    data.forEach( category =>{
      category.products.forEach( product =>{
        if(this.props.products[product.id]){
          product = {
            ...product,
            ...this.props.products[product.id]
          }
        }
        if(!product.categories) product.categories = []
        product.categories.push(category.id)
        this.props.addProduct(product)
      })
      category.products = category.products.map( product => product.id )
      this.props.addCategory(category)
    })


    this.setState({
      categories : data
    })
  }

  renderProducts(){
    let { products } = this.props
    if(this.props.filter.length == 0){
      products = Object.keys(products).slice(0,20).map( id => products[id])
    }else{
      let ids = []
      this.props.filter.forEach( category =>{
        ids = ids.concat(category.products)
      })
      ids = [... new Set(ids)]
      products = ids.map( id => products[id] )
    }

    return products.map(
     (product,i) => (
       <ItemBox key={product.id} product={product}/>
     )
   )
  }

  render(){
    return (
      <Layout>
        <SidebarLayoutVariant>
          <div>
            <FilterList/>
          </div>
          <ImageGrid>
            {this.renderProducts()}
          </ImageGrid>
        </SidebarLayoutVariant>
      </Layout>
    )
  }

}

// NEXT JS
// Index.getInitialProps = async function() {
//   const res = await fetch('http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/bracelets.json');
//   const data = await res.json();
//
//   console.log("Returning data", data[0].name)
//
//   return {
//     categories: data
//   };
// };

const mapStateToProps = (state) => {
  return {
      filter : state.filter,
      categories : state.categories.data,
      products : state.products.data
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      addCategory: (category) => {
          dispatch(addCategory(category));
      },
      addProduct: (product) => {
          dispatch(addProduct(product));
      }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Index);
