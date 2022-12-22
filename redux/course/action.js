import { GET_ALL_COURSES_LOADING,GET_ALL_COURSES_SUCCESS,GET_ALL_COURSES_ERROR,GET_COURSE_BY_SLUG_LOADING,GET_COURSE_BY_SLUG_SUCCESS,GET_COURSE_BY_SLUG_ERROR } from "./actionType";
import axios from 'axios';

export const getAllCourses = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_COURSES_LOADING });
        const res = await axios.get('/api/courses');
        dispatch({ type: GET_ALL_COURSES_SUCCESS, payload: res.data.courses });
    } catch (error) {
        dispatch({ type: GET_ALL_COURSES_ERROR, payload: error.message });
    }
}

export const getCourseBySlug = (slug) => async (dispatch) => {
    try {
        dispatch({ type: GET_COURSE_BY_SLUG_LOADING });
        const res = await axios.get(`/api/courses/${slug}`);
        dispatch({ type: GET_COURSE_BY_SLUG_SUCCESS, payload: res.data.course });
    } catch (error) {
        dispatch({ type: GET_COURSE_BY_SLUG_ERROR, payload: error.message });
    }
}