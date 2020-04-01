// DEPENDENCIES
import React                    from 'react'
import styled                   from 'styled-components'
import fetch                    from 'isomorphic-unfetch'
import {connect}                from 'react-redux'
import withRedux             from 'next-redux-wrapper';
// COMPONENTS
import Layout                   from '../components/Layout'
import Container                from '../components/Container'
import ImageGrid                from '../components/ImageGrid'
import ItemBox                  from '../components/ItemBox'
// CONTAINERS
import FilterList               from '../containers/FilterList'
// ACTIONS
import { addCategory }          from '../actions/categoriesActions'
import { addProduct }           from '../actions/productsActions'
import { addLike,removeLike }   from '../actions/likeActions'

const magicCategoryId = "31"


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
    const data = await res.json()


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

  }

  isLiked(productId){
    return this.props.likes.indexOf(productId) !== -1
  }

  handleLike(productId){
    if(this.isLiked(productId)){
      this.props.removeLike(productId);
    }else{
      this.props.addLike(productId);
    }
  }

  renderProducts(){
    let { products } = this.props
    if(this.props.filter.length === 0){
      products = this.props.categories[magicCategoryId].products.map( id => this.props.products[id])
    }else{
      let ids = []
      this.props.filter.forEach( category =>{
        let productIds = category.products
        if(category.id == "liked") productIds = this.props.likes
        ids = ids.concat(productIds)
      })
      ids = [... new Set(ids)]
      products = ids.map( id => products[id] )
    }

    return products.map(
     (product,i) => (
       <ItemBox
        liked={this.isLiked(product.id)}
        onLike={this.handleLike.bind(this,product.id)}
        key={product.id}
        product={product}
        />
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

const mapStateToProps = (state) => {
  return {
      filter : state.filter,
      categories : state.categories.data,
      products : state.products.data,
      likes : state.likes
  };
};

// NEXT JS
Index.getInitialProps = async ({ store, isServer }) => {
  // const res = await fetch(`http://localhost:${process.env.PORT}/shop_all.json`)
  // const data = await res.json()
  const data = require("../public/shop_all.json")

  data.forEach( category =>{
    if(category.id == magicCategoryId){
      category.products.forEach( product =>{
          if(!product.categories) product.categories = []
          product.categories.push(category.id)
          store.dispatch(addProduct(product))

      })
    }


    category.products = category.products.map( product => product.id )
    store.dispatch(addCategory(category))
  })


  return mapStateToProps(store.getState())
}



const mapDispatchToProps = (dispatch) => {
    return {
      addCategory: (category) => {
          dispatch(addCategory(category));
      },
      addProduct: (product) => {
          dispatch(addProduct(product));
      },
      addLike: (productId) => {
          dispatch(addLike(productId));
      },
      removeLike: (productId) => {
          dispatch(removeLike(productId));
      }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Index);
