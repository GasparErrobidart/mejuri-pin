import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

import grids from "./reducers/grids";
import devices from "./reducers/devices";

export default createStore(
    combineReducers({
        grids,
        devices
    }),
    {},
    applyMiddleware(logger, promise)
);
