// DEPENDENCIES
import React                    from 'react'
import fetch                    from 'isomorphic-unfetch'
import {connect}                from 'react-redux'
// COMPONENTS
import Layout                   from '../components/Layout'
import HiddenBlock              from '../components/HiddenBlock'
import ImageGrid                from '../components/ImageGrid'
import ItemBox                  from '../components/ItemBox'
import SidebarLayoutVariant     from '../components/SidebarLayoutVariant'
// CONTAINERS
import FilterList               from '../containers/FilterList'
import Spy                      from '../containers/Spy'
// ACTIONS
import { addCategory }          from '../actions/categoriesActions'
import { addProduct }           from '../actions/productsActions'
import { addLike,removeLike }   from '../actions/likeActions'
// HELPERS
import cleanProduct             from '../helpers/cleanProduct'

// I HAND PICKED THIS CATEGORY FOR BOOTSTRAPING
// SERVER SIDE RENDERING AS IT HAS 10 ITEMS WHICH ENOUGH FOR A CLIENT
// WITH CONNECTIVITY ISSUES
const magicCategoryId = "31"


/*
   - Index Page Component
*/

class Index extends React.Component{

  constructor(props){
    super(props)
    const { items = [] } = props
    this.state = { maxItems : 10 , remainingItems : 0 , dataReady : false}
  }

  async componentDidMount(){
    // I NEED A LIST OF ALL CATEGORIES
    // IF IT WEREN'T FOR THAT I COULD PICK ONLY PRODUCTS AND CATEGORIES RELEVANT
    const res = await fetch('//mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/shop_all.json');
    const data = await res.json()
    // MAP CATEGORIES AND PRODUCTS AS OBJECTS
    // KEEPING RELATIONSHIPS BETWEEN ENTITIES
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
        this.props.addProduct(cleanProduct(product))
      })
      category.products = category.products.map( product => product.id )
      this.props.addCategory(category)
    })

    this.setState({ dataReady : true })

  }

  componentDidUpdate(prevProps){
    if(prevProps.filter.length != this.props.filter.length){
      this.setState( prevState => ({ maxItems : 10}) )
    }
  }

  // SIMPLE BOOLEAN CHECK
  isLiked(productId){
    return this.props.likes.indexOf(productId) !== -1
  }

  // ADD OR REMOVE LIKES FROM THE STORE
  handleLike(productId){
    if(this.isLiked(productId)){
      this.props.removeLike(productId);
    }else{
      this.props.addLike(productId);
    }
  }


  getItemList(){
    let items = []
    let ids   = []
    let remainingItems;

    if(this.props.filter.length === 0){
      // IF NO FILTER IS ACTIVE SHOW ALL PRODUCTS FOR ONE CATEGORY
      ids = this.props.categories[magicCategoryId].products
              .sort()
              .concat(Object.keys(this.props.products))

    }else{
      // IF A FILTER IS ACTIVE GATHER ALL PRODUCT IDS MATCHING THE FILTERS
      this.props.filter.forEach( category =>{
        let productIds = category.products
        // "liked" IS A SPECIAL CASE
        if(category.id == "liked") productIds = this.props.likes
        ids = ids.concat(productIds)
      })
    }


    ids = [...new Set(ids)]

    let limit = ids.length
    if(limit > this.state.maxItems) limit = this.state.maxItems

    remainingItems = ids.length - limit

    items = ids.slice(0,limit).map( id => this.props.products[id] )

    return items

  }


  renderProducts(){
    // GET THE PRODUCTS FROM THE STORE
    let items = this.getItemList()

    return items.map(
     (product,i) => (
       <ItemBox
        liked={this.isLiked(product.id)}
        onLike={this.handleLike.bind(this,product.id)}
        key={`${product.id}${product.slug}`}
        product={product}
        />
     )
   )
  }


  loadMore(){
    this.setState( prevState => ({ maxItems : prevState.maxItems+10}) )
  }


  render(){
    return (
      <Layout>
        <SidebarLayoutVariant>
          <div>
            <FilterList dataReady={this.state.dataReady}/>
          </div>
          <div>
            <ImageGrid>
              {this.renderProducts()}
            </ImageGrid>
            <Spy
              onProximity={this.loadMore.bind(this)}
              proximityThreshold={100}>
              <HiddenBlock/>
            </Spy>
          </div>
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

// NEXT JS - SSR
// THIS METHOD IS USED FOR GETTING INITIAL STORE
// AND SENDING THE RESULT TO THE CLIENT
Index.getInitialProps = async ({ store, isServer }) => {
  const res = await fetch(`http://localhost:${process.env.PORT || 3000}/shop_all.json`)
  const data = await res.json()

  data.forEach( category =>{
    if(category.id == magicCategoryId){
      category.products.forEach( product =>{
          if(!product.categories) product.categories = []
          product.categories.push(category.id)
          store.dispatch(addProduct(cleanProduct(product)))
      })
    }


    category.products = category.products.map( product => product.id )
    store.dispatch(addCategory(category))
  })

  const state = store.getState()

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
