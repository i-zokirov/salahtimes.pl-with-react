import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = [thunk]

const reducers = combineReducers({
    start: "dummy data"
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export default store