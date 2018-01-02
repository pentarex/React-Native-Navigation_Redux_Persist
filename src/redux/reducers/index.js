import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

// Either like this or
const rootReducer = combineReducers({
    loginReducer,
    userReducer,
});

// Depends how you want to access your reducers in the views -> with state.userReducer or state.user
// const rootReducer = combineReducers({
//     login: loginReducer,
//     user: userReducer,
// });

export default rootReducer;