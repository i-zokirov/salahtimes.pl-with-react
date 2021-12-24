import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { prayerTimesByCityReducer } from "./reducers/prayerTimesReducers";
import { searchCityReducer, updateCurrentCityReducer } from "./reducers/cityReducers";
const middleware = [thunk]

const reducers = combineReducers({
    prayerTimes: prayerTimesByCityReducer,
    citySearchResults: searchCityReducer,
    currentCity: updateCurrentCityReducer
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))

export default store