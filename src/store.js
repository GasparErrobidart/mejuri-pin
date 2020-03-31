import { createStore, combineReducers, applyMiddleware } from "redux";
import logger     from "redux-logger";
import promise    from "redux-promise-middleware";

import filter     from "./reducers/filter";
import categories from "./reducers/categories";
import products   from "./reducers/products";
import likes      from "./reducers/likes";

export default createStore(
    combineReducers({
        filter,
        categories,
        products,
        likes
    }),
    {}
    // ,applyMiddleware(logger, promise)
);
