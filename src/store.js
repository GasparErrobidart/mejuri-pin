import { createStore, combineReducers, applyMiddleware } from "redux";
import logger     from "redux-logger";
import promise    from "redux-promise-middleware";

import filter     from "./reducers/filter";
import categories from "./reducers/categories";
import products   from "./reducers/products";

export default createStore(
    combineReducers({
        filter,
        categories,
        products
    }),
    {},
    applyMiddleware(logger, promise)
);
