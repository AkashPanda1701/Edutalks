import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS,
    ADD_COURSE_LOADING,
    ADD_COURSE_SUCCESS,
    ADD_COURSE_ERROR,
    SIGNUP_ERROR, SET_SESSION } from "./actionTypes";
import axios from "axios";


export const login = (user) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_LOADING,
        });
        const { data } = await axios.post("/api/users/login", user);
        console.log('data: ', data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                message: data.message,
            }
        });
    } catch (error) {
        dispatch({
            type: LOGIN_ERROR,
            payload: error.response.data.message,
        });
    }
};

export const signup = (user) => async (dispatch) => {
    console.log('user: ', user);
    try {
        dispatch({
            type: SIGNUP_LOADING,
        });
        const { data } = await axios.post("/api/users/signup", user);
        console.log('data: ', data);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: {
                message: data.message,
            }
        });
    } catch (error) {
        dispatch({
            type: SIGNUP_ERROR,
            payload: error.response.data.message,
        });
    }
}

export const setSession = (user) => async (dispatch) => {
    try {
        const res = await axios.get("/api/auth/session");
        console.log('res: ', res);
        dispatch({
            type: SET_SESSION,
            payload: res.data.user,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_ERROR,
            payload: error.response.data.message,
        });
    }
}

export const addCourse = (course) => async (dispatch) => {
    dispatch({
        type: ADD_COURSE_LOADING,
    });
    try {
        const { data } = await axios.post("/api/users", course);
        console.log('data: ', data);
        dispatch({
            type: ADD_COURSE_SUCCESS,
            payload: {
                message: data.message,
                user : data.user
            }
        });
    }
    catch (error) {
        dispatch({
            type: ADD_COURSE_ERROR,
            payload: error.response.data.message,
        });
    }
}