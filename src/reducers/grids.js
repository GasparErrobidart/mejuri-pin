const gridReducer = (state = {
    list    : [],
    cached  : false
}, action) => {
    switch (action.type) {
      case "SET_GRIDS":
          state = {
              ...state,
              list : action.payload
          };
          break;
      case "SET_CACHED_GRIDS":
          state = {
              ...state,
              cached : action.payload
          };
          break;
    }
    return state;
};

export default gridReducer;
