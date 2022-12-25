import {
    GET_ALL_COURSES_LOADING,
    GET_ALL_COURSES_SUCCESS,
    GET_ALL_COURSES_ERROR,
    GET_COURSE_BY_SLUG_LOADING,
    GET_COURSE_BY_SLUG_SUCCESS,
    GET_COURSE_BY_SLUG_ERROR,
    ADD_COURSE_LOADING,
    ADD_COURSE_SUCCESS,
    ADD_COURSE_ERROR,
    UPDATE_COURSE_LOADING,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_ERROR,
    DELETE_COURSE_LOADING,
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_ERROR,
  } from "./actionType";
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


export const addCourse = (course) => async (dispatch) => {
    try {
        dispatch({ type: ADD_COURSE_LOADING });
        const res = await axios.post('/api/courses', course);
        dispatch({ type: ADD_COURSE_SUCCESS, payload: res.data.course });
    } catch (error) {
        dispatch({ type: ADD_COURSE_ERROR, payload: error.message });
    }
}

export const updateCourse = (course) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_COURSE_LOADING });
        const res = await axios.put(`/api/courses/${course._id}`, course);
        dispatch({ type: UPDATE_COURSE_SUCCESS, payload: res.data.course });
    } catch (error) {
        dispatch({ type: UPDATE_COURSE_ERROR, payload: error.message });
    }
}

export const deleteCourse = (courseId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_COURSE_LOADING });
        const res = await axios.delete(`/api/courses/${courseId}`);
        dispatch({ type: DELETE_COURSE_SUCCESS, payload: courseId});
    } catch (error) {
        dispatch({ type: DELETE_COURSE_ERROR, payload: error.message });
    }
}
