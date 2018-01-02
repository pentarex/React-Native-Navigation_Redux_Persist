import { applyMiddleware, createStore, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducers from './reducers';

const config = {
    key: 'primary',
    storage,
    whitelist: ['userReducer']
};

export default (initialState) => {

    const reducer = persistReducer(config, reducers);
    const enhancer = compose(applyMiddleware(thunk));
    const store = createStore(reducer, initialState, enhancer);

    return store;
    
};