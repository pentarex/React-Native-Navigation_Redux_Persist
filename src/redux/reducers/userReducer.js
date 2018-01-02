import actionTypes from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    user: {},
    token: '',
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return { ...state, isAuthenticated: true, token: action.user.token, user: action.user };
        case actionTypes.USER_LOGOUT:
            return {initialState};
        default: return state;
    }
}