import {
    PRAYER_TIMES_BY_CITY_REQUEST,
    PRAYER_TIMES_BY_CITY_SUCCESS,
    PRAYER_TIMES_BY_CITY_FAIL,
} from "../constants/prayerTimesConstants"

export const prayerTimesByCityReducer = (state = {}, action) => {
    switch(action.type){
        case PRAYER_TIMES_BY_CITY_REQUEST:
            return { loading: true }
        case PRAYER_TIMES_BY_CITY_SUCCESS:
            return {
                loading: false,
                timings: action.payload.data.timings,
                date: action.payload.data.date,
                meta: action.payload.data.meta,
                success: true
            }
        case PRAYER_TIMES_BY_CITY_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}