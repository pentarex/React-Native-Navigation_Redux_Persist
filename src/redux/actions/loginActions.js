import actionTypes from "./actionTypes";

export const login = (username, password) => {
    return (dispatch) => {
        dispatch(loginRequest()) // spin that spinner
        // Here usually should come network request, but for the sake of the test we will setTimeout
        setTimeout(() => {
            const user = {
                name: 'TestUser',
                token: 'JWT Token' // not important to know whats JWT
            };

            dispatch(loginSuccess(user)); // populate the user -> this is being handled by userActions.js
        }, 2000) // Generate spinner for 2 seconds

    }
}

loginRequest = () => {
    return {
        type: actionTypes.LOGIN_REQUEST
    }
}

loginFailure = (err) => {
    return {
        type: actionTypes.LOGIN_REQUEST_FAILURE,
        err
    }
}

loginSuccess = (user) => {
    return {
        type: actionTypes.USER_LOGIN,
        user
    }
}


