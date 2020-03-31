const likeReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_LIKE":{
        state             = [...state];
        const productId   = action.payload
        if(state.indexOf(productId) === -1){
          state.push(productId)
        }
        break;
      }
      case "REMOVE_LIKE":{
        state             = [...state];
        const productId   = action.payload
        const index       = state.indexOf(productId)
        if(index !== -1){
          state.splice(index,1)
        }
        console.log("Removing like",productId,"index",index)
        break;
      }

    }
  return state;
}

export default likeReducer;
