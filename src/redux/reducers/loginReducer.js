import actionTypes from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    isError: false,
    err: {}
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return { ...state, isFetching: true, isError: false, err: {} };
        case actionTypes.LOGIN_REQUEST_FAILURE:
            return { ...state, isFetching: false, isError: true, err: action.err };
        case actionTypes.USER_LOGIN: // just to reset isFetching to false otherwise after login -> logout isFetching is true and the spinner is visible
            return { ...state, isFetching: false, isError: false, err: {} };
        default: return state;
    }
}