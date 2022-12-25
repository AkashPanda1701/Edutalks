import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS,
    SIGNUP_ERROR, SET_SESSION, ADD_USER_COURSE_LOADING, ADD_USER_COURSE_SUCCESS, ADD_USER_COURSE_ERROR } from "./actionTypes";
import axios from "axios";


export const login = (user) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_LOADING,
        });
        const { data } = await axios.post("/api/users/login", user);
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
    try {
        dispatch({
            type: SIGNUP_LOADING,
        });
        const { data } = await axios.post("/api/users/signup", user);
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

export const addUserCourse = (course) => async (dispatch) => {
    dispatch({
        type: ADD_USER_COURSE_LOADING,
    });
    try {
        const { data } = await axios.post("/api/users", course);
        dispatch({
            type: ADD_USER_COURSE_SUCCESS,
            payload: {
                message: data.message,
                user : data.user
            }
        });
    }
    catch (error) {
        console.log('error: ', error);
    }
}