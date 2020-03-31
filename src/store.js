import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import filter from "./reducers/filter";

export default createStore(
    combineReducers({
        filter
    }),
    {},
    applyMiddleware(logger, promise)
);
