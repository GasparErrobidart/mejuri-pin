const productReducer = (state = {data:{}}, action) => {
    switch (action.type) {
      case "ADD_OR_REPLACE_PRODUCT":
        state = {...state};
        const product = action.payload
        const {id} = product
        state.data[id] = product
        break;
      }
  return state;
}

export default productReducer;
