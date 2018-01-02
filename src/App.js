import React, { Component } from "react";
import Navigation from 'react-native-navigation/src/Navigation';
import registerScreens from './rnn/index';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import persistStore from 'redux-persist/lib/persistStore';
import routes from "./rnn/routes";

const store =  configureStore();
registerScreens(store, Provider); // pass the store and the provider

export default class App extends Component {
    constructor(props) {
        super(props);
        store.subscribe(this.onStoreUpdate.bind(this));
        this.persistor = persistStore(store, null, () => {
            console.log('state restored');
        });
        
    }

    onStoreUpdate = () => {
        if(store.getState().userReducer.isAuthenticated) {
            this.showProfilePage();
        } else {
            this.showLoginPage();
        }
    }


    showLoginPage = () => {
        Navigation.startSingleScreenApp({
            passProps: {
                persistor: this.persistor // passing the persistor for logout purposes later
            },
            screen: {
                screen: routes.LOGIN_ROUTE, 
                navigatorStyle: {
                    navBarHidden: true,
                }, 
            },
        }); 
    }

    showProfilePage = () => {
        Navigation.startSingleScreenApp({
            passProps: {
                persistor: this.persistor // passing the persistor for logout purposes later
            },
            screen: {
                screen: routes.PROFILE_ROUTE, 
                title: 'Profile'
            },
        }); 
    }
    
}