
import { GET_ALL_COURSES_LOADING,GET_ALL_COURSES_SUCCESS,GET_ALL_COURSES_ERROR,GET_COURSE_BY_SLUG_LOADING,GET_COURSE_BY_SLUG_SUCCESS,GET_COURSE_BY_SLUG_ERROR } from "./actionType";

const initialState = {
    Allcourses: {
        loading: false,
        error: false,
        data: [],
    },
    Singlecourse: {
        loading: false,
        error: false,
        data: {},
    }
}

export const courseReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case GET_ALL_COURSES_LOADING:
            return {
                ...state,
                Allcourses: {
                    loading: true,
                    error: false,
                    data: [],
                }
            }
        case GET_ALL_COURSES_SUCCESS:
            return {
                ...state,
                Allcourses: {
                    loading: false,
                    error: false,
                    data: payload,
                }
            }
        case GET_ALL_COURSES_ERROR:
            return {
                ...state,
                Allcourses: {
                    loading: false,
                    error: true,
                    data: [],
                }
            }
        case GET_COURSE_BY_SLUG_LOADING:
            return {
                ...state,
                Singlecourse: {
                    loading: true,
                    error: false,
                    data: {},
                }
            }
        case GET_COURSE_BY_SLUG_SUCCESS:
            return {
                ...state,
                Singlecourse: {
                    loading: false,
                    error: false,
                    data: payload,
                }
            }
        case GET_COURSE_BY_SLUG_ERROR:
            return {
                ...state,
                Singlecourse: {
                    loading: false,
                    error: true,
                    data: {},
                }
            }
        default:
            return state;
    }
}
