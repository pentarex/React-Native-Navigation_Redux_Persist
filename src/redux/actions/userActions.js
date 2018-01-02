import actionTypes from "./actionTypes";

export const logout = () => {
    return (dispatch) => {
        dispatch(logoutRequest()) 
    }
}

logoutRequest = () => {
    return {
        type: actionTypes.USER_LOGOUT
    }
}


