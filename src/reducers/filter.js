const filterReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_FILTER":{
        state               = [...state];
        let filter          = action.payload
        let { id }          = filter
        let existingFilter  = state.find( item => item.id === id)
        if(!existingFilter) state.push(filter)
        break;
      }
      case "REMOVE_FILTER":{
        state               = [...state]
        let filter          = action.payload
        let {id}            = filter
        let index           = state.findIndex( item => item.id === id)
        if(index !== -1) state.splice(index,1)
        break;
        }
      }
  return state;
}

export default filterReducer;
