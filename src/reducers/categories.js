const categoryReducer = (state = {data:{}}, action) => {
    switch (action.type) {
      case "ADD_OR_REPLACE_CATEGORY":
        state = {...state};
        const category = action.payload
        const {id} = category
        state.data[id] = category
        break;
      }
  return state;
}

export default categoryReducer;
