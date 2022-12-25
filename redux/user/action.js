import { GET_ALL_USERS_LOADING,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
    DELETE_USER_LOADING,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,

} from "./actionTypes";
import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_USERS_LOADING });
        const res = await axios.get("/api/users");
        console.log('res: ', res);
        dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data.users });
    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: GET_ALL_USERS_ERROR});
    }
    };

export const deleteUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_USER_LOADING });
        const res = await axios.delete(`/api/users/${userId}`);
        console.log('res: ', res);
        dispatch({ type: DELETE_USER_SUCCESS, payload: res.data.user });
    } catch (error) {
        console.log('error: ', error);
        dispatch({ type: DELETE_USER_ERROR});
    }
    }; 