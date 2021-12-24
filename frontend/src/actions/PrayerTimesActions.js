import axios from "axios"

import {
    PRAYER_TIMES_BY_CITY_REQUEST,
    PRAYER_TIMES_BY_CITY_SUCCESS,
    PRAYER_TIMES_BY_CITY_FAIL,
} from "../constants/prayerTimesConstants"


export const getPrayerTimesByCity = (city = "warsaw", country="poland") => {
    return async (dispatch) => {
        try {
            dispatch({type: PRAYER_TIMES_BY_CITY_REQUEST})
            const { data } = await axios.get(`/api/prayertimes?city=${city}&country=${country}`)
            dispatch({type: PRAYER_TIMES_BY_CITY_SUCCESS, payload: data})
            console.log(data)
        } catch (error) {
            dispatch({
                type: PRAYER_TIMES_BY_CITY_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message  : error.message
            })
        }
    }
}