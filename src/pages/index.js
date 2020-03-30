import React     from 'react'
// import {connect}                  from 'react-redux'
//
import Layout    from '../components/Layout'
import Container from '../components/Container'
import ImageGrid      from '../components/ImageGrid'
import FilterBar      from '../components/FilterBar'
// import fetch                      from 'isomorphic-unfetch';
// import { setCachedGrids }         from '../actions/gridActions'

function randomRangeInt(min,max){
  return  parseInt((Math.random() * max - min)+min)
}

function getRandomImage(seed){
  return `https://picsum.photos/480/640?random=${seed}`
}

function Index(props){
  const randomImages = Array(10).fill(null).map( (el,i) => (<img src={getRandomImage(i)}/>) )
  console.log(randomImages)
  return (
    <Layout>
      <Container>
        <FilterBar/>
        <ImageGrid>
          { randomImages.map( (img,i) => (<div key={i}>{img}</div>)) }
        </ImageGrid>
      </Container>
    </Layout>
  )

}


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

export default Index

// const mapStateToProps = (state) => {
//   return {
//       gridsCached : state.grids.cached
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setCachedGrids: (cached) => {
//             dispatch(setCachedGrids(cached));
//         }
//     };
// };
//
// export default connect(mapStateToProps,mapDispatchToProps)(NewGridPage);
