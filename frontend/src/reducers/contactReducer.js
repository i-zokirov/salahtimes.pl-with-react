import { CONTACT_REQUEST, CONTACT_REQUEST_SUCCESS, CONTACT_REQUEST_FAIL, CONTACT_RESET } from "../constants/contactConstants";

export const contactRequestReducer = (state = {}, action) => {
    switch (action.type){
        case CONTACT_REQUEST:
            return { loading: true }
        case CONTACT_REQUEST_SUCCESS:
            return { loading: false, success: true }
        case CONTACT_REQUEST_FAIL:
            return { loading: false, error:action.payload}
        case CONTACT_RESET: 
            return {}
        default:
            return state
    }
}