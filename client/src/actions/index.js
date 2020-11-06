import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";
import axios from '../api/streams';


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const streamCreate = (stream) => async (dispatch) => {
    const response = await axios.post('/streams', stream);

    dispatch({type: CREATE_STREAM, payload: response.data});
};