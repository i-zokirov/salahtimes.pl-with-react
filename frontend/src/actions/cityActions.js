import { 
    CITY_SEARCH_FAIL,   
    CITY_SEARCH_SUCCESS,

    } from "../constants/cityConstants";
import axios from "axios";


export const findCity = (searchTerm) =>{
    return async(dispatch) => {
        try {
            const { data } = await axios.get(`/api/cities?query=${searchTerm}`)
            dispatch({type: CITY_SEARCH_SUCCESS, payload: data})
        } catch (error) {
            dispatch({
                type: CITY_SEARCH_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message  : error.message
            })
        }
    }
}


