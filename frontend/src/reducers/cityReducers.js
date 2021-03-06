import { 
    CITY_SEARCH_FAIL,  
    CITY_SEARCH_RESET,  
    CITY_SEARCH_SUCCESS, 
    UPDATE_CURRENT_CITY_RESET,  
    UPDATE_CURRENT_CITY, 
} from "../constants/cityConstants";


export const searchCityReducer = (state = {cities: []}, action) => {
    switch(action.type){
        case CITY_SEARCH_SUCCESS:
            return { cities: action.payload }
        case CITY_SEARCH_FAIL:
            return { error: action.payload}
        case CITY_SEARCH_RESET: 
            return {cities: []}
        default: 
            return state
    }
}

export const updateCurrentCityReducer = (state = {}, action) => {
    switch(action.type){
        case UPDATE_CURRENT_CITY:
            return { ...action.payload }
        case UPDATE_CURRENT_CITY_RESET: 
            return { }
        default: 
            return state
    }
}