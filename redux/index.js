import {
    createStore,
    applyMiddleware
} from "redux";
import createSagaMiddleware from "redux-saga";
import {
    createWrapper
} from 'next-redux-wrapper'

import reducers from "./reducers/index";
import {sagas} from "./sagas/index";

const bindMiddleware = middleware => {
    const arrMiddleware = [middleware];
    if (process.env.NODE_ENV !== "production") {
        const {
            composeWithDevTools
        } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...arrMiddleware));
    }
    return applyMiddleware(...arrMiddleware);
};

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, bindMiddleware(sagaMiddleware))
    store.sagaTask = sagaMiddleware.run(sagas);
    return store
}

export const wrapper = createWrapper(makeStore, {
    debug: true
})