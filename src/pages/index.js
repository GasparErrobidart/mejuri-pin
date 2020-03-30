import React                      from 'react'
// import {connect}                  from 'react-redux'
//
import Layout                     from '../components/Layout'
import Container                  from '../components/Container'
import fetch                      from 'isomorphic-unfetch';
// import { setCachedGrids }         from '../actions/gridActions'




function Index(props){

  return (
    <Layout>
      <Container>
        <h1>HOME</h1>
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
