import React            from 'react'
import fetch            from 'isomorphic-unfetch'
import {connect}        from 'react-redux'

import Layout           from '../components/Layout'
import Container        from '../components/Container'
import ImageGrid        from '../components/ImageGrid'
import FilterList       from '../components/FilterList'
import { setFilter }    from '../actions/filterActions'



class Index extends React.Component{

  constructor(props){
    super(props)
    this.state = {categories : []}
  }

  async componentDidMount(){
    const res = await fetch('http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/shop_all.json');
    const data = await res.json();
    console.log(data)

    this.setState({
      categories : data
    })
  }

  render(){
    return (
      <Layout>
        <Container>
          <FilterList/>
          <ImageGrid>
            { this.state.categories.map(
              (category,i) => (<div key={category.id}><img src={category.products[0].variant_images[0].attachment_url_medium}/></div>)
            ) }
          </ImageGrid>
        </Container>
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

export default connect(mapStateToProps,mapDispatchToProps)(Index);
