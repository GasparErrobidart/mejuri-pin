const filterReducer = (state = [
  {id: 0,word : "Likes", checked : false},
  {id: 1,word : "Rings", checked : false},
  {id: 2,word : "Earrings", checked : false},
  {id: 3,word : "Necklace", checked : false},
  {id: 4,word : "Braceletes", checked : false}
], action) => {
    switch (action.type) {
      case "SET_FILTER":
        state = [...state];
        const {id,checked} = action.payload
        const index = state.findIndex( item => item.id === id)
        const item  = {...state[index]}
        item.checked = checked
        state[index] = item
        break;
      }
  return state;
}

export default filterReducer;
