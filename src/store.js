import { createStore, combineReducers, applyMiddleware } from "redux";
import logger     from "redux-logger";
import promise    from "redux-promise-middleware";

import filter     from "./reducers/filter";
import categories from "./reducers/categories";
import products   from "./reducers/products";
import likes      from "./reducers/likes";

export default initStore({});

export function initStore(initialStore = {}){
  return createStore(
      combineReducers({
          filter,
          categories,
          products,
          likes
      }),
      initialStore
      // ,applyMiddleware(logger, promise)
  )
}
