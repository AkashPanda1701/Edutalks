import { GET_ALL_USERS_LOADING,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_ERROR,
    DELETE_USER_LOADING,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,

} from "./actionTypes";


const initialState = {
        loading: false,
        error: false,
        data: [],
    };

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_USERS_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: payload,
            };
        case GET_ALL_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case DELETE_USER_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: state.data.filter((user) => user._id !== payload),
            };
        case DELETE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

