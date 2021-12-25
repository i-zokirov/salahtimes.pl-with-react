import axios from "axios"

import {
    PRAYER_TIMES_BY_CITY_REQUEST,
    PRAYER_TIMES_BY_CITY_SUCCESS,
    PRAYER_TIMES_BY_CITY_FAIL,
} from "../constants/prayerTimesConstants"


export const getPrayerTimesByCity = (city, country="Poland") => {
    return async (dispatch) => {
        try {
            dispatch({type: PRAYER_TIMES_BY_CITY_REQUEST})
            const { data } = await axios.get(`/api/prayertimes?city=${city.name}&country=${country}`)
            dispatch({type: PRAYER_TIMES_BY_CITY_SUCCESS, payload: data})
        } catch (error) {
            dispatch({
                type: PRAYER_TIMES_BY_CITY_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message  : error.message
            })
        }
    }
}