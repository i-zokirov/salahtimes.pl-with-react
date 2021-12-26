import { CONTACT_REQUEST, CONTACT_REQUEST_SUCCESS, CONTACT_REQUEST_FAIL, CONTACT_RESET } from "../constants/contactConstants";
import axios from "axios";
import emailjs from 'emailjs-com';

export const sendContactRequest = (form) => {
    return async(dispatch) => {
        try {
            dispatch({type: CONTACT_REQUEST})

            const {data: {userId}} = await axios.get('/api/contact/emailjsId')
        
            await emailjs.sendForm("contact_form_service","contact_form", form, userId)
   
            dispatch({type: CONTACT_REQUEST_SUCCESS})
            setTimeout(() => {
                dispatch({type: CONTACT_RESET})
            }, 4000)
        } catch (error) {

            dispatch({
                type: CONTACT_REQUEST_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message  : error.message
            })
        }
    }
}