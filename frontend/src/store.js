import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { prayerTimesByCityReducer } from "./reducers/prayerTimesReducers";

const middleware = [thunk]

const reducers = combineReducers({
    prayerTimes: prayerTimesByCityReducer
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export default store