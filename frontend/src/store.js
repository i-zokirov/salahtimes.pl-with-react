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

const currentCityInLocalStorage = localStorage.getItem('currentCity') ? JSON.parse(localStorage.getItem('currentCity')) : {name: 'warsaw', display_name: 'Warsaw'}


const initialState = {
    currentCity: currentCityInLocalStorage
}


const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store