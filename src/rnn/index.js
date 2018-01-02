import Navigation from 'react-native-navigation/src/Navigation';
import routes from './routes';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import ProfileView from '../views/ProfileView';

export default registerScreens = (store, Provider) => {
    Navigation.registerComponent(routes.LOGIN_ROUTE, () => LoginView, store, Provider);
    Navigation.registerComponent(routes.REGISTER_ROUTE, () => RegisterView, store, Provider);
    Navigation.registerComponent(routes.PROFILE_ROUTE, () => ProfileView, store, Provider);
}