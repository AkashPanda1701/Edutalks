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
  },
};

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COURSES_LOADING:
      return {
        ...state,
        Allcourses: {
          loading: true,
          error: false,
          data: state.Allcourses.data,
        },
      };
    case GET_ALL_COURSES_SUCCESS:
      return {
        ...state,
        Allcourses: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case GET_ALL_COURSES_ERROR:
      return {
        ...state,
        Allcourses: {
          loading: false,
          error: true,
          data: state.Allcourses.data,
        },
      };
    case GET_COURSE_BY_SLUG_LOADING:
      return {
        ...state,
        Singlecourse: {
          loading: true,
          error: false,
          data: state.Singlecourse.data,
        },
      };
    case GET_COURSE_BY_SLUG_SUCCESS:
      return {
        ...state,
        Singlecourse: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case GET_COURSE_BY_SLUG_ERROR:
      return {
        ...state,
        Singlecourse: {
          loading: false,
          error: true,
          data: state.Singlecourse.data,
        },
      };
    case ADD_COURSE_LOADING:
      return {
        ...state,
        Allcourses: {
          loading: true,
          error: false,
          data: state.Allcourses.data,
        },
      };
    case ADD_COURSE_SUCCESS:
      return {
        ...state,
        Allcourses: {
          loading: false,
          error: false,
          data: [...state.Allcourses.data, payload],
        },
      };
    case ADD_COURSE_ERROR:
      return {
        ...state,
        Allcourses: {
          loading: false,
          error: true,
          data: state.Allcourses.data,
        },
      };
    case UPDATE_COURSE_LOADING:
      return {
        ...state,
        Allcourses: {
          loading: true,
          error: false,
          data: state.Allcourses.data,
        },
      };
    case UPDATE_COURSE_SUCCESS:
      console.log(payload);
      return {
        ...state,
        Allcourses: {
          loading: false,
          error: false,
          data: state.Allcourses.data.map((course) =>
            course._id === payload._id ? payload : course
          ),
        },
      };
    case UPDATE_COURSE_ERROR:
      return {
        ...state,
        Allcourses: {
          loading: false,
          error: true,
          data: state.Allcourses.data,
        },
      };
    case DELETE_COURSE_LOADING:
      return {
        ...state,
        Allcourses: {
          loading: true,
          error: false,
          data: state.Allcourses.data,
        },
      };
    case DELETE_COURSE_SUCCESS:
      return {
        ...state,
        Allcourses: {
          loading: false,
          error: false,
          data: state.Allcourses.data.filter(
            (course) => course._id !== payload
          ),
        },
      };
    case DELETE_COURSE_ERROR:
      return {
        ...state,
        Allcourses: {
          loading: false,
          error: true,
          data: state.Allcourses.data,
        },
      };
    default:
      return state;
  }
};
